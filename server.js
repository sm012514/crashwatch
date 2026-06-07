const express = require('express');
const xml2js = require('xml2js');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();

// ── HTTPS + www 강제 리다이렉트
app.use((req, res, next) => {
  const host = req.headers.host || '';
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

app.get('/api/market', async (req, res) => {
  const results = await Promise.allSettled(
    MARKET_SYMBOLS.map(s => fetchQuote(s.sym).then(q => ({ ...s, ...q, ok: true })).catch(() => ({ ...s, ok: false })))
  );
  res.json({ quotes: results.map(r => r.value) });
});

// ── 서버 캐시 (3분)
const cache = {};
function withCache(key, ttlMs, fn) {
  const now = Date.now();
  if (cache[key] && now - cache[key].ts < ttlMs) return Promise.resolve(cache[key].data);
  return fn().then(data => { cache[key] = { ts: now, data }; return data; });
}

app.get('/api/news', async (req, res) => {
  const data = await withCache('news', 3 * 60 * 1000, async () => {
    const results = await Promise.allSettled(SOURCES.map(s =>
      fetchFeed(s).then(items => ({ name: s.name, items, ok: true }))
                 .catch(() => ({ name: s.name, items: [], ok: false }))
    ));
    return { sources: results.map(r => r.value || { name: '?', items: [], ok: false }) };
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

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
