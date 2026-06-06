const express = require('express');
const xml2js = require('xml2js');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();

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
  const timer = setTimeout(() => ac.abort(), 10000);
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

app.get('/api/news', async (req, res) => {
  const results = await Promise.allSettled(SOURCES.map(s =>
    fetchFeed(s).then(items => ({ name: s.name, items, ok: true }))
               .catch(() => ({ name: s.name, items: [], ok: false }))
  ));
  const sources = results.map(r => r.value || { name: '?', items: [], ok: false });
  res.json({ sources });
});

const COIN_SOURCES = [
  { name: 'CoinDesk',        url: 'https://www.coindesk.com/arc/outboundfeeds/rss/' },
  { name: 'CoinTelegraph',   url: 'https://cointelegraph.com/rss' },
  { name: 'Decrypt',         url: 'https://decrypt.co/feed' },
  { name: '코인데스크코리아', url: 'https://www.coindeskkorea.com/feed/' },
  { name: '블록미디어',       url: 'https://www.blockmedia.co.kr/feed/' },
];

app.get('/api/coin', async (req, res) => {
  const results = await Promise.allSettled(COIN_SOURCES.map(s =>
    fetchFeedMore(s).then(items => ({ name: s.name, items, ok: true }))
                   .catch(() => ({ name: s.name, items: [], ok: false }))
  ));
  const sources = results.map(r => r.value || { name: '?', items: [], ok: false });
  res.json({ sources });
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
  const timer = setTimeout(() => ac.abort(), 10000);
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
  const results = await Promise.allSettled(RE_SOURCES.map(s =>
    fetchFeedMore(s).then(items => ({ name: s.name, items, ok: true }))
                   .catch(() => ({ name: s.name, items: [], ok: false }))
  ));
  const sources = results.map(r => r.value || { name: '?', items: [], ok: false });
  res.json({ sources });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
