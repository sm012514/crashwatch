const express = require('express');
const xml2js = require('xml2js');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

// ── 기준금리 (변경 시 여기 한 곳만 수정 — 사이트·앱 공통 반영)
const BASE_RATES = { fed: '3.75%', bok: '2.75%' };

const app = express();

// ── HTTPS + www 강제 리다이렉트 (로컬 개발은 제외)
app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (host.startsWith('localhost') || host.startsWith('127.0.0.1')) return next();
  const proto = req.headers['x-forwarded-proto'];
  const needWww = host && !host.startsWith('www.');
  const needHttps = proto && proto !== 'https';
  if (needWww || needHttps) {
    const target = 'https://www.' + host.replace(/^www\./, '') + req.url;
    return res.redirect(301, target);
  }
  next();
});

// ── 보안 헤더
app.use(helmet({ contentSecurityPolicy: false }));

// ── Rate Limiting: API는 1분에 30회
const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { error: 'Too many requests, please try again later.' },
});
app.use('/api/', apiLimiter);

app.use(cors());
app.use(express.static(path.join(__dirname)));

const SOURCES = [
  { name: 'Yahoo Finance', url: 'https://finance.yahoo.com/news/rssindex' },
  { name: 'MarketWatch', url: 'https://feeds.marketwatch.com/marketwatch/topstories/' },
  { name: 'CNBC Markets', url: 'https://www.cnbc.com/id/100003114/device/rss/rss.html' },
  { name: 'Investing.com', url: 'https://www.investing.com/rss/news_25.rss' },
  { name: '한국경제', url: 'https://www.hankyung.com/feed/all-news' },
  { name: '매일경제', url: 'https://www.mk.co.kr/rss/30000001/' },
  { name: '연합뉴스 경제', url: 'https://www.yna.co.kr/rss/economy.xml' },
  { name: '조선비즈', url: 'https://biz.chosun.com/arc/outboundfeeds/rss/?outputType=xml' },
];

async function fetchFeed(source) {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), 5000);
  const res = await fetch(source.url, {
    signal: ac.signal,
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NewsBot/1.0)' }
  });
  clearTimeout(timer);
  const xml = await res.text();
  const parsed = await xml2js.parseStringPromise(xml, { trim: true, explicitArray: false });
  const channel = parsed?.rss?.channel || parsed?.feed;
  const items = channel?.item || channel?.entry || [];
  const arr = Array.isArray(items) ? items : [items];
  const stripHtml = s => String(s || '').replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, ' ').trim();
  return arr.slice(0, 25).map(item => ({
    title: stripHtml(item.title?._ || item.title),
    link: (item.link?.href || item.link || item.guid?._ || item.guid || '').trim(),
    description: stripHtml(item.description || item.summary || item['content:encoded']).slice(0, 300),
    pubDate: item.pubDate || item.updated || item.published || '',
    sourceName: source.name,
  }));
}

const MARKET_SYMBOLS = [
  { id: 'kospi',  sym: '^KS11',  name: 'KOSPI' },
  { id: 'kosdaq', sym: '^KQ11',  name: 'KOSDAQ' },
  { id: 'sp500',  sym: '^GSPC',  name: 'S&P500' },
  { id: 'nasdaq', sym: '^IXIC',  name: 'NASDAQ' },
  { id: 'dow',    sym: '^DJI',   name: 'DOW' },
  { id: 'usdkrw', sym: 'KRW=X',  name: 'USD/KRW' },
  { id: 'btc',    sym: 'BTC-USD', name: 'BTC' },
  { id: 'gold',   sym: 'GC=F',   name: 'Gold' },
  { id: 'silver', sym: 'SI=F',   name: 'Silver' },
];

async function fetchQuote(sym) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?interval=1d&range=2d`;
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), 8000);
  const res = await fetch(url, {
    signal: ac.signal,
    headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }
  });
  clearTimeout(timer);
  const data = await res.json();
  const meta = data?.chart?.result?.[0]?.meta;
  if (!meta) throw new Error('no meta');
  const price = meta.regularMarketPrice;
  const prev  = meta.chartPreviousClose || meta.previousClose;
  const chg   = prev ? ((price - prev) / prev * 100) : 0;
  return { price, chg, prev };
}

let _marketLastGood = null;

app.get('/api/market', async (req, res) => {
  const results = await Promise.allSettled(
    MARKET_SYMBOLS.map(s => fetchQuote(s.sym).then(q => ({ ...s, ...q, ok: true })).catch(() => ({ ...s, ok: false })))
  );
  const quotes = results.map(r => r.value);

  // 성공한 티커로 마지막 성공값 업데이트
  if (!_marketLastGood) _marketLastGood = {};
  for (const q of quotes) {
    if (q.ok && q.price) _marketLastGood[q.id] = q;
  }

  // 실패한 티커는 마지막 성공값으로 대체
  const merged = quotes.map(q => (!q.ok && _marketLastGood[q.id]) ? _marketLastGood[q.id] : q);
  res.json({ quotes: merged, rates: BASE_RATES });
});

// ── 대형 이벤트 (events.json 한 곳에서 관리 — 사이트·앱 공통)
app.get('/api/events', (req, res) => {
  try {
    const events = JSON.parse(fs.readFileSync(path.join(__dirname, 'events.json'), 'utf8'));
    res.json({ events, rates: BASE_RATES });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── 서버 캐시 (3분)
const cache = {};
function withCache(key, ttlMs, fn) {
  const now = Date.now();
  if (cache[key] && now - cache[key].ts < ttlMs) return Promise.resolve(cache[key].data);
  return fn().then(data => { cache[key] = { ts: now, data }; return data; });
}

// ── AI 배치 분류: 금융·시장과 무관한 기사 제목 걸러내기 (Gemini 1회 호출, 실패 시 그냥 통과)
async function aiFilterIrrelevant(sources) {
  const apiKey = process.env.GEMINI;
  if (!apiKey) return sources;
  const all = [];
  for (const src of sources) for (const item of src.items) all.push(item);
  if (!all.length) return sources;
  try {
    const titles = all.map((a, i) => `${i}. ${a.title}`).join('\n');
    const prompt = `다음은 뉴스 제목 목록이다. 이 중 금융·경제·주식·시장과 명백히 무관한 항목(스포츠, 연예, 생활, 사건사고 등)의 번호만 JSON 배열로 답해라. 애매하면 포함하지 마라. 예: [3,7]\n\n${titles}`;
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        signal: AbortSignal.timeout(15000) }
    );
    const data = await r.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const json = text.match(/\[[\d,\s]*\]/)?.[0];
    if (!json) return sources;
    const off = new Set(JSON.parse(json));
    all.forEach((a, i) => { if (off.has(i)) a.aiOff = true; });
  } catch {}
  return sources;
}

app.get('/api/news', async (req, res) => {
  const data = await withCache('news', 3 * 60 * 1000, async () => {
    const results = await Promise.allSettled(SOURCES.map(s =>
      fetchFeed(s).then(items => ({ name: s.name, items, ok: true }))
                 .catch(() => ({ name: s.name, items: [], ok: false }))
    ));
    const sources = results.map(r => r.value || { name: '?', items: [], ok: false });
    await aiFilterIrrelevant(sources);
    return { sources };
  });
  res.json(data);
});

const COIN_SOURCES = [
  { name: 'CoinDesk',        url: 'https://www.coindesk.com/arc/outboundfeeds/rss/' },
  { name: 'CoinTelegraph',   url: 'https://cointelegraph.com/rss' },
  { name: 'Decrypt',         url: 'https://decrypt.co/feed' },
  { name: '코인데스크코리아', url: 'https://www.coindeskkorea.com/feed/' },
  { name: '블록미디어',       url: 'https://www.blockmedia.co.kr/feed/' },
];

app.get('/api/coin', async (req, res) => {
  const data = await withCache('coin', 3 * 60 * 1000, async () => {
    const results = await Promise.allSettled(COIN_SOURCES.map(s =>
      fetchFeedMore(s).then(items => ({ name: s.name, items, ok: true }))
                     .catch(() => ({ name: s.name, items: [], ok: false }))
    ));
    return { sources: results.map(r => r.value || { name: '?', items: [], ok: false }) };
  });
  res.json(data);
});

const RE_SOURCES = [
  { name: '한국경제',     url: 'https://www.hankyung.com/feed/all-news' },
  { name: '매일경제',     url: 'https://www.mk.co.kr/rss/30000001/' },
  { name: '연합뉴스 경제', url: 'https://www.yna.co.kr/rss/economy.xml' },
  { name: '조선비즈',     url: 'https://biz.chosun.com/arc/outboundfeeds/rss/?outputType=xml' },
  { name: '아시아경제',   url: 'https://www.asiae.co.kr/rss/all.htm' },
];

async function fetchFeedMore(source) {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), 5000);
  const res = await fetch(source.url, {
    signal: ac.signal,
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NewsBot/1.0)' }
  });
  clearTimeout(timer);
  const xml = await res.text();
  const parsed = await xml2js.parseStringPromise(xml, { trim: true, explicitArray: false });
  const channel = parsed?.rss?.channel || parsed?.feed;
  const items = channel?.item || channel?.entry || [];
  const arr = Array.isArray(items) ? items : [items];
  const stripHtml = s => String(s || '').replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, ' ').trim();
  return arr.slice(0, 50).map(item => ({
    title: stripHtml(item.title?._ || item.title),
    link: (item.link?.href || item.link || item.guid?._ || item.guid || '').trim(),
    description: stripHtml(item.description || item.summary || item['content:encoded']).slice(0, 300),
    pubDate: item.pubDate || item.updated || item.published || '',
    sourceName: source.name,
  }));
}

app.get('/api/realestate', async (req, res) => {
  const data = await withCache('realestate', 3 * 60 * 1000, async () => {
    const results = await Promise.allSettled(RE_SOURCES.map(s =>
      fetchFeedMore(s).then(items => ({ name: s.name, items, ok: true }))
                     .catch(() => ({ name: s.name, items: [], ok: false }))
    ));
    return { sources: results.map(r => r.value || { name: '?', items: [], ok: false }) };
  });
  res.json(data);
});

// ── 디버그: Gemini 모델 목록
app.get('/api/debug-models', async (req, res) => {
  const apiKey = process.env.GEMINI;
  if (!apiKey) return res.json({ error: 'key not set' });
  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`, { signal: AbortSignal.timeout(10000) });
    const data = await r.json();
    const names = (data.models || []).map(m => m.name);
    res.json({ names });
  } catch(e) { res.json({ error: e.message }); }
});

// ── 디버그: Gemini 직접 테스트
app.get('/api/debug-gemini', async (req, res) => {
  const apiKey = process.env.GEMINI;
  if (!apiKey) return res.json({ error: 'key not set' });
  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: 'Say hello in JSON: {"msg":"hello"}' }] }] }),
        signal: AbortSignal.timeout(10000) }
    );
    const data = await r.json();
    res.json({ status: r.status, data });
  } catch(e) {
    res.json({ error: e.message });
  }
});

// ── GEMINI 대형이벤트 실시간 업데이트 (Google Search Grounding)
app.post('/api/event-update', async (req, res) => {
  const { name, desc } = req.body || {};
  if (!name) return res.status(400).json({ error: 'name required' });

  const apiKey = process.env.GEMINI;
  if (!apiKey) return res.status(503).json({ error: 'Gemini API key not set' });

  try {
    const prompt = `다음 금융 이벤트에 대해 구글 검색으로 최신 정보를 찾아서 JSON으로만 답해줘.

이벤트: ${name}
현재 설명: ${desc || ''}

응답 형식 (JSON만, 마크다운 없이):
{
  "date": "최신 예정일 또는 진행 상황 (예: 2026년 6월 예정, 2025년 3월 완료)",
  "status": "imminent" | "scheduled" | "ongoing" | "completed",
  "summary": "최신 상황 2~3문장 요약",
  "source": "참고한 주요 출처 (언론사명)"
}`;

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          tools: [{ google_search: {} }],  // 실시간 구글 검색 활성화
        }),
        signal: AbortSignal.timeout(20000),
      }
    );
    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const json = text.match(/\{[\s\S]*\}/)?.[0];
    res.json(json ? JSON.parse(json) : { error: '파싱 실패', raw: text.substring(0, 200) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ── GEMINI 팩트체크 API
app.use(express.json());
app.post('/api/factcheck', async (req, res) => {
  const { title, description } = req.body || {};
  if (!title) return res.status(400).json({ error: 'title required' });

  const apiKey = process.env.GEMINI;
  if (!apiKey) return res.status(503).json({ error: 'Gemini API key not set' });

  try {
    const prompt = `다음 뉴스 기사의 신뢰도를 분석해줘. 응답은 반드시 JSON으로만 해줘.

제목: ${title}
내용: ${description || ''}

응답 형식:
{
  "score": 0~100 (신뢰도 점수),
  "verdict": "신뢰" | "주의" | "미확인",
  "reason": "한 줄 이유 (50자 이내)"
}`;

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        signal: AbortSignal.timeout(10000),
      }
    );
    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const json = text.match(/\{[\s\S]*\}/)?.[0];
    res.json(json ? JSON.parse(json) : { score: 50, verdict: '미확인', reason: '분석 실패' });
  } catch (e) {
    res.status(500).json({ score: 50, verdict: '미확인', reason: '서버 오류' });
  }
});

// ── 데일리 브리핑 (SEO용 자체 콘텐츠: /brief, /brief/YYYY-MM-DD)
const BRIEF_DIR = path.join(__dirname, 'briefs');
if (!fs.existsSync(BRIEF_DIR)) fs.mkdirSync(BRIEF_DIR);

const BRIEF_KW = ['금리','관세','환율','코스피','나스닥','반도체','엔비디아','삼성전자','하이닉스','비트코인','전쟁','침체','인플레','fomc','fed','tariff','rate','inflation','recession','war','nvidia','bitcoin'];

function kstDate() {
  return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
}

async function buildBrief(date) {
  // /api/news와 동일 캐시 사용
  const data = await withCache('news', 3 * 60 * 1000, async () => {
    const results = await Promise.allSettled(SOURCES.map(s =>
      fetchFeed(s).then(items => ({ name: s.name, items, ok: true }))
                 .catch(() => ({ name: s.name, items: [], ok: false }))
    ));
    const sources = results.map(r => r.value || { name: '?', items: [], ok: false });
    await aiFilterIrrelevant(sources);
    return { sources };
  });
  const all = [];
  const seen = new Set();
  for (const src of data.sources) for (const item of src.items) {
    const key = (item.title || '').slice(0, 60).toLowerCase().trim();
    if (item.aiOff || seen.has(key) || key.length < 10) continue;
    seen.add(key);
    const text = ((item.title || '') + ' ' + (item.description || '')).toLowerCase();
    const score = BRIEF_KW.filter(k => text.includes(k)).length;
    if (score > 0) all.push({ ...item, score });
  }
  all.sort((a, b) => b.score - a.score);
  const top = all.slice(0, 12).map(a => ({ title: a.title, link: a.link, source: a.sourceName, description: (a.description || '').slice(0, 150) }));

  let summary = '';
  const apiKey = process.env.GEMINI;
  if (apiKey && top.length) {
    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text:
            `다음 오늘의 주요 금융 뉴스 제목들을 보고 시장 상황을 3~4문장으로 요약해줘. 투자 권유 없이 사실 위주로. 제목들:\n${top.map(t => '- ' + t.title).join('\n')}` }] }] }),
          signal: AbortSignal.timeout(15000) }
      );
      const d = await r.json();
      summary = d?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    } catch {}
  }
  const brief = { date, generatedAt: new Date().toISOString(), summary, top };
  fs.writeFileSync(path.join(BRIEF_DIR, `${date}.json`), JSON.stringify(brief, null, 2));
  return brief;
}

function renderBriefHtml(b) {
  const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const items = b.top.map(t =>
    `<li><a href="${esc(t.link)}" target="_blank" rel="noopener">${esc(t.title)}</a><span class="src">${esc(t.source)}</span>${t.description ? `<p>${esc(t.description)}</p>` : ''}</li>`
  ).join('\n');
  return `<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${b.date} 시장 브리핑 — DDU Market News</title>
<meta name="description" content="${esc((b.summary || '오늘의 주요 금융 뉴스 요약').slice(0, 150))}">
<link rel="canonical" href="https://www.ddumarketnews.co.kr/brief/${b.date}">
<link rel="icon" type="image/png" href="/logo.png">
<style>
body{font-family:'Segoe UI',system-ui,sans-serif;background:#0f1117;color:#e2e8f0;max-width:760px;margin:0 auto;padding:24px 16px;line-height:1.6}
a{color:#a5b4fc;text-decoration:none}a:hover{text-decoration:underline}
h1{font-size:1.4rem}h1 span{color:#ef4444}
.summary{background:#1a1d27;border:1px solid #2e3350;border-left:3px solid #ef4444;border-radius:10px;padding:14px 16px;margin:16px 0;font-size:.95rem}
ul{list-style:none;padding:0}li{background:#1a1d27;border:1px solid #2e3350;border-radius:10px;padding:12px 14px;margin-bottom:10px}
li a{color:#e2e8f0;font-weight:600}.src{display:inline-block;margin-left:8px;color:#ef4444;font-size:.75rem;font-weight:700}
li p{color:#94a3b8;font-size:.85rem;margin:6px 0 0}
.home{display:inline-block;margin-top:20px;color:#94a3b8;font-size:.85rem}
</style></head><body>
<h1>📰 <span>${b.date}</span> 시장 브리핑</h1>
${b.summary ? `<div class="summary">${esc(b.summary)}</div>` : ''}
<ul>${items}</ul>
<a class="home" href="/">← DDU Market News 홈으로</a>
</body></html>`;
}

app.get(['/brief', '/brief/:date'], async (req, res) => {
  try {
    const today = kstDate();
    const date = req.params.date || today;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return res.status(400).send('bad date');
    const file = path.join(BRIEF_DIR, `${date}.json`);
    let brief;
    if (fs.existsSync(file)) brief = JSON.parse(fs.readFileSync(file, 'utf8'));
    else if (date === today) brief = await buildBrief(date);
    else return res.status(404).send('브리핑이 없습니다');
    res.send(renderBriefHtml(brief));
  } catch (e) { res.status(500).send('error: ' + e.message); }
});

// 브리핑 포함 동적 sitemap
app.get('/sitemap.xml', (req, res) => {
  const base = 'https://www.ddumarketnews.co.kr';
  const dates = fs.existsSync(BRIEF_DIR)
    ? fs.readdirSync(BRIEF_DIR).filter(f => f.endsWith('.json')).map(f => f.replace('.json', ''))
    : [];
  const urls = [`${base}/`, `${base}/about.html`, `${base}/privacy.html`, ...dates.map(d => `${base}/brief/${d}`)];
  res.type('application/xml').send(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url><loc>${u}</loc></url>`).join('\n') + '\n</urlset>'
  );
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
