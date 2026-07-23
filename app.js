
// ─── i18n ─────────────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  ko: {
    updating: '업데이트 중...', refresh: '새로고침', unified_search: '통합검색',
    tab_events: '대형 이벤트', tab_news: '뉴스 분석', tab_realestate: '부동산', tab_coin: '코인',
    stat_news_label: '수집된 뉴스', stat_news_sub: '전체 기사',
    stat_high_label: '고위험 기사', stat_high_sub: '시장 충격 가능성 높음',
    stat_keyword_label: '핵심 시장 요인', stat_sources_label: '뉴스 소스', stat_sources_sub: '활성 피드',
    analyzing: '분석 중...', loading: '로딩 중...', pinned_label: '핵심 뉴스',
    filter_label: '필터:', event_filter_label: '분류:',
    filter_all: '전체', filter_kr: '국내', filter_en: '해외',
    filter_high: '고위험', filter_medium: '중위험', filter_macro: '거시경제',
    filter_trade: '무역/관세', filter_geo: '지정학', filter_fed: '중앙은행', filter_ai: 'AI', filter_space: '항공우주',
    event_ipo: 'IPO/상장', event_policy: '정책', event_tech: '테크',
    sidebar_causes: '🎯 추정 급락 원인 TOP 5', sidebar_keywords: '🔑 주요 키워드',
    sidebar_sources: '📡 뉴스 소스 상태',
    search_placeholder: '키워드로 뉴스 검색... (예: 금리, 관세, 전쟁, Fed)',
    coin_search_placeholder: '키워드로 검색... (예: 비트코인, 이더리움, ETF, 반감기)',
    re_search_placeholder: '키워드로 검색... (예: 아파트, 강남, 청약, 금리)',
    loading_news: '뚜가 뉴스를 수집하고 있어요',
    loading_coin: '뚜가 코인 뉴스를 수집하고 있어요',
    loading_re: '뚜가 부동산 뉴스를 수집하고 있어요',
    // events sidebar
    ev_shock_index: '⚡ 시장 충격 지수', ev_profit_pattern: '💡 수익실현 패턴', ev_affected_assets: '🌏 영향 자산군',
    sidebar_trend_top5: '📊 주요 동향 TOP 5', sidebar_links: '🔗 빠른 링크',
    // realestate filters
    re_price: '가격동향', re_policy: '정책/규제', re_apt: '아파트',
    re_jeonse: '전세/월세', re_cheongak: '청약/분양', re_rebuild: '재건축/재개발', re_seoul: '서울/수도권',
    // coin filters
    coin_btc: '비트코인', coin_eth: '이더리움', coin_alt: '알트코인',
    coin_reg: '규제/정책', coin_etf: 'ETF/기관', coin_defi: 'DeFi/NFT',
    coin_bigevents: '🚀 코인 빅이벤트', coin_feargreed: '😨 공포·탐욕 지수',
    // katarina
    kata_desc: '뉴스·코인·부동산·이벤트 통합 검색',
    kata_placeholder: '검색어를 입력하세요 (예: 금리인상, 강남 아파트, 엔비디아...)',
    kata_empty: '검색어를 입력하면 모든 탭에서 결과를 찾아드립니다.',
    // source status
    source_ok: '연결됨', source_fail: '실패',
    // news tab quick links
    sidebar_quicklinks_finance: '📈 Yahoo Finance Markets',
    // news card tags
    tag_high: '🔴 주요', tag_med: '🟠 주목',
    // footer
    footer_about: '서비스 소개', footer_privacy: '개인정보처리방침', footer_ad: '광고·제휴 문의',
  },
  en: {
    updating: 'Updating...', refresh: 'Refresh', unified_search: 'Search All',
    tab_events: 'Major Events', tab_news: 'News Analysis', tab_realestate: 'Real Estate', tab_coin: 'Crypto',
    stat_news_label: 'Articles', stat_news_sub: 'Total collected',
    stat_high_label: 'High Risk', stat_high_sub: 'Potential market shock',
    stat_keyword_label: 'Key Market Factor', stat_sources_label: 'News Sources', stat_sources_sub: 'Active feeds',
    analyzing: 'Analyzing...', loading: 'Loading...', pinned_label: 'Key News',
    filter_label: 'Filter:', event_filter_label: 'Category:',
    filter_all: 'All', filter_kr: 'Korean', filter_en: 'Global',
    filter_high: 'High Risk', filter_medium: 'Medium Risk', filter_macro: 'Macro',
    filter_trade: 'Trade/Tariff', filter_geo: 'Geopolitics', filter_fed: 'Central Bank', filter_ai: 'AI', filter_space: 'Space',
    event_ipo: 'IPO/Listing', event_policy: 'Policy', event_tech: 'Tech',
    sidebar_causes: '🎯 Est. Market Drop Causes', sidebar_keywords: '🔑 Key Keywords',
    sidebar_sources: '📡 News Source Status',
    search_placeholder: 'Search news... (e.g. rate, tariff, war, Fed)',
    coin_search_placeholder: 'Search... (e.g. Bitcoin, Ethereum, ETF, halving)',
    re_search_placeholder: 'Search... (e.g. apartment, Gangnam, subscription, rate)',
    loading_news: 'Collecting news articles...',
    loading_coin: 'Collecting crypto news...',
    loading_re: 'Collecting real estate news...',
    // events sidebar
    ev_shock_index: '⚡ Market Shock Index', ev_profit_pattern: '💡 Profit-Taking Patterns', ev_affected_assets: '🌏 Affected Assets',
    sidebar_trend_top5: '📊 Top 5 Trends', sidebar_links: '🔗 Quick Links',
    // realestate filters
    re_price: 'Price Trends', re_policy: 'Policy/Regulation', re_apt: 'Apartments',
    re_jeonse: 'Jeonse/Monthly', re_cheongak: 'Pre-sale', re_rebuild: 'Redevelopment', re_seoul: 'Seoul/Capital',
    // coin filters
    coin_btc: 'Bitcoin', coin_eth: 'Ethereum', coin_alt: 'Altcoins',
    coin_reg: 'Regulation', coin_etf: 'ETF/Institutional', coin_defi: 'DeFi/NFT',
    coin_bigevents: '🚀 Crypto Big Events', coin_feargreed: '😨 Fear & Greed Index',
    // katarina
    kata_desc: 'Unified search: News · Crypto · Real Estate · Events',
    kata_placeholder: 'Search anything (e.g. rate hike, Bitcoin, IPO...)',
    kata_empty: 'Enter a keyword to search across all tabs.',
    // source status
    source_ok: 'Connected', source_fail: 'Failed',
    // news card tags
    tag_high: '🔴 High', tag_med: '🟠 Notable',
    // footer
    footer_about: 'About', footer_privacy: 'Privacy Policy', footer_ad: 'Advertising inquiry',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';
const KR_SOURCES = ['한국경제', '매일경제', '연합뉴스 경제', '조선비즈'];

function t(key) { return (TRANSLATIONS[currentLang] || TRANSLATIONS.ko)[key] || key; }

function applyLang() {
  const isEn = currentLang === 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.getElementById('langBtn').textContent = isEn ? 'KOR' : 'ENG';
  document.documentElement.lang = isEn ? 'en' : 'ko';

  // Legend box
  const lb = document.getElementById('eventsLegendBox');
  if (lb) lb.innerHTML = isEn
    ? '<strong>What are Major Events?</strong> — These are mega-events that trigger <strong>capital flows</strong>, not just bad news. Massive IPOs, M&As, and policy shifts cause investors worldwide to liquidate existing positions and reallocate funds, dragging down unrelated assets. We analyze the <strong>market shock mechanism</strong> of each event.'
    : '<strong>대형 이벤트란?</strong> — 단순 악재가 아니라 <strong>자금 이동</strong>을 유발하는 초대형 사건들입니다. 초대형 IPO·M&A·정책 전환 등은 전 세계 투자자가 기존 포지션을 청산하거나 자금을 재배치하면서 무관한 자산까지 동반 하락시킬 수 있습니다. 각 이벤트의 <strong>시장 충격 메커니즘</strong>을 분석합니다.';

  // Profit-taking patterns
  const pp = document.getElementById('evProfitPatternBody');
  if (pp) pp.innerHTML = isEn ? `
    <p style="margin-bottom:8px">Common patterns around mega events:</p>
    <div style="display:flex;flex-direction:column;gap:6px">
      <div style="background:var(--surface2);border-radius:6px;padding:8px 10px">
        <div style="color:var(--text);font-weight:600;font-size:0.75rem;margin-bottom:2px">📅 IPO D-2 ~ D-1 week</div>
        <div>Institutions liquidate existing positions to fund IPO subscriptions</div>
      </div>
      <div style="background:var(--surface2);border-radius:6px;padding:8px 10px">
        <div style="color:var(--text);font-weight:600;font-size:0.75rem;margin-bottom:2px">📅 Listing Day</div>
        <div>Liquidity concentration → amplified volatility across Nasdaq & KOSPI</div>
      </div>
      <div style="background:var(--surface2);border-radius:6px;padding:8px 10px">
        <div style="color:var(--text);font-weight:600;font-size:0.75rem;margin-bottom:2px">📅 Lock-up Expiry</div>
        <div>Insider lock-up ends → large-scale selling pressure</div>
      </div>
    </div>` : `
    <p style="margin-bottom:8px">초대형 이벤트 전후로 자주 나타나는 패턴:</p>
    <div style="display:flex;flex-direction:column;gap:6px">
      <div style="background:var(--surface2);border-radius:6px;padding:8px 10px">
        <div style="color:var(--text);font-weight:600;font-size:0.75rem;margin-bottom:2px">📅 IPO D-2~D-1주</div>
        <div>기관투자자 청약 자금 확보를 위해 기존 포지션 대량 청산</div>
      </div>
      <div style="background:var(--surface2);border-radius:6px;padding:8px 10px">
        <div style="color:var(--text);font-weight:600;font-size:0.75rem;margin-bottom:2px">📅 상장 당일</div>
        <div>유동성 쏠림 → 나스닥·코스피 동반 변동성 확대</div>
      </div>
      <div style="background:var(--surface2);border-radius:6px;padding:8px 10px">
        <div style="color:var(--text);font-weight:600;font-size:0.75rem;margin-bottom:2px">📅 락업 해제일</div>
        <div>내부자 보호예수 종료 → 대규모 매도 압력</div>
      </div>
    </div>`;

  // KATARINA empty state
  const ke = document.querySelector('.katarina-empty');
  if (ke) ke.textContent = t('kata_empty');

  // Footer
  const fd = document.getElementById('footerDisclaimer');
  if (fd) fd.innerHTML = isEn
    ? `⚠️ <strong style="color:var(--text)">Investment Disclaimer</strong><br>
       This site is a <strong style="color:var(--text)">news aggregation and reference service only</strong> — it does <u>not</u> provide investment advice, stock recommendations, or trading signals.<br>
       AI-generated analysis (risk scores, market factor summaries) is for informational purposes only and may not be accurate.<br>
       All investment decisions and any resulting gains or losses are the sole responsibility of the investor. Principal loss may occur.<br>
       <span style="color:#475569">This service is not registered as a financial investment advisory business.</span>`
    : `⚠️ <strong style="color:var(--text)">투자 유의사항</strong><br>
       본 사이트는 <strong style="color:var(--text)">뉴스 수집·참고 정보 제공 서비스</strong>로, 투자 권유·종목 추천·매매 신호를 제공하지 않습니다.<br>
       AI 분석(위험도 점수, 시장 요인 요약 등)은 참고용이며 정확성을 보장하지 않습니다.<br>
       투자의 최종 판단과 손익에 대한 책임은 전적으로 투자자 본인에게 있습니다. 금융투자상품은 원금 손실이 발생할 수 있습니다.<br>
       <span style="color:#475569">본 서비스는 자본시장법상 투자자문업·투자일임업 등록 사업자가 아닙니다.</span>`;

  const fl = document.getElementById('footerLinks');
  if (fl) fl.innerHTML = `© 2025 DDU Market News &nbsp;·&nbsp;
    <a href="/about.html" style="color:#4a5568;text-decoration:none">${t('footer_about')}</a>
    &nbsp;·&nbsp;
    <a href="/privacy.html" style="color:#4a5568;text-decoration:none">${t('footer_privacy')}</a>
    &nbsp;·&nbsp;
    ${t('footer_ad')}: <a href="mailto:sm012514@gmail.com" style="color:#4a5568;text-decoration:none">sm012514@gmail.com</a>`;
}

function toggleLang() {
  currentLang = currentLang === 'ko' ? 'en' : 'ko';
  localStorage.setItem('lang', currentLang);

  // 1단계: UI 텍스트 즉시 반영 (빠름)
  applyLang();

  // 2단계: 카드/사이드바 재렌더는 브라우저 다음 프레임에 처리 (딜레이 제거)
  requestAnimationFrame(() => {
    renderEvents();
    renderCoinEvents();

    // EN → 해외 기사만 / KO → 전체
    const targetFilter = currentLang === 'en' ? 'en' : 'all';
    currentFilter = targetFilter;
    document.querySelectorAll('[data-filter]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-filter') === targetFilter);
    });

    filterAndRender();

    // 사이드바는 한 프레임 더 뒤에 (뉴스 카드 먼저 보이게)
    requestAnimationFrame(() => {
      updateCauses();
      updateKeywords();
      updateKeyFactor('news');
    });
  });
}

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const API_URL = '/api/news';

// ─── KEYWORD SCORING ──────────────────────────────────────────────────────────
const HIGH_IMPACT_KW = [
  'crash','collapse','plunge','plunges','tumble','rout','selloff','sell-off',
  'recession','depression','default','bankruptcy','crisis','meltdown',
  'tariff','tariffs','sanction','war','conflict','invasion',
  'rate hike','rate hikes','tightening','hawkish','inflation spike',
  'bank failure','bank run','liquidity crisis','credit crunch',
  '급락','폭락','붕괴','금융위기','경제위기','외환위기','침체','전쟁','제재','관세','금리인상','파산','디폴트',
  'fed raises','powell','rate decision','fomc',
];

const MEDIUM_IMPACT_KW = [
  'warning','caution','concern','slowdown','contraction','correction','bear',
  'uncertainty','volatile','volatility','downgrade','miss','disappoints',
  'deficit','debt','yield','spread','inversion',
  'trade war','geopolitical','tension','dispute','protest',
  '경고','하락','불확실','변동성','긴축','부채','수익률',
];

const CATEGORIES = {
  macro: ['gdp','inflation','cpi','pce','employment','jobs','unemployment','growth','recession','경제성장','물가','고용','실업'],
  trade: ['tariff','trade war','export','import','wto','관세','무역','수출','수입','보복'],
  geo: ['war','conflict','ukraine','russia','china sanctions','north korea','middle east','iran','전쟁','분쟁','지정학','북한','중국 제재','중국 관세','미중'],
  fed: ['fed','fomc','powell','rate hike','rate cut','ecb','boj','금리','연준','한은','중앙은행','기준금리'],
  ai: ['openai','chatgpt','gemini','claude','anthropic','nvidia','엔비디아','artificial intelligence','machine learning','llm','gpt','ai chip','반도체 ai','생성형 ai','딥시크','deepseek','ai 투자','ai 규제'],
  space: ['spacex','nasa','boeing','lockheed','raytheon','northrop','방산','defense','항공우주','우주','rocket','satellite','위성','발사','ipo spacex','스페이스x'],
};

// ─── STATE ────────────────────────────────────────────────────────────────────
let allArticles = [];
let currentFilter = 'all';
let activeKeyword = null;
const sourceStatus = {};

// ─── SCORING ──────────────────────────────────────────────────────────────────
function scoreArticle(item) {
  const text = ((item.title || '') + ' ' + (item.description || '') + ' ' + (item.content || '')).toLowerCase();
  let score = 0;
  let matchedHigh = [];
  let matchedMed = [];

  for (const kw of HIGH_IMPACT_KW) {
    if (text.includes(kw.toLowerCase())) { score += 3; matchedHigh.push(kw); }
  }
  for (const kw of MEDIUM_IMPACT_KW) {
    if (text.includes(kw.toLowerCase())) { score += 1; matchedMed.push(kw); }
  }

  const cats = [];
  for (const [cat, kws] of Object.entries(CATEGORIES)) {
    if (kws.some(k => text.includes(k))) cats.push(cat);
  }

  const impact = score >= 5 ? 'high' : score >= 2 ? 'medium' : 'low';
  return { ...item, score, impact, cats, matchedHigh: [...new Set(matchedHigh)], matchedMed: [...new Set(matchedMed)] };
}

function catLabel(cat) {
  const isEn = currentLang === 'en';
  const map = isEn
    ? { macro:'Macro', trade:'Trade/Tariff', geo:'Geopolitics', fed:'Central Bank', ai:'AI', space:'Space' }
    : { macro:'거시경제', trade:'무역/관세', geo:'지정학', fed:'중앙은행', ai:'AI', space:'항공우주' };
  return map[cat] || cat;
}

const ENTITIES = {
  company: [
    '삼성전자','삼성','SK하이닉스','하이닉스','LG전자','현대차','현대자동차','카카오','네이버','셀트리온',
    'nvidia','엔비디아','apple','애플','microsoft','마이크로소프트','google','구글','alphabet',
    'amazon','아마존','meta','메타','tesla','테슬라','openai','spacex','tsmc','intel','인텔',
    'amd','qualcomm','퀄컴','arm','boeing','보잉','jpmorgan','jp모건','goldman sachs','골드만삭스',
    'blackrock','블랙록','berkshire','버크셔',
  ],
  gov: [
    'fed','fomc','연준','federal reserve','한국은행','한은','ecb','유럽중앙은행','boj','일본은행',
    '기획재정부','재정부','금융위원회','금융위','금융감독원','금감원',
    '백악관','white house','재무부','treasury','ustr','wto','imf','world bank','세계은행',
    '국세청','공정위','공정거래위원회',
  ],
  person: [
    '파월','powell','트럼프','trump','바이든','biden','옐런','yellen','머스크','musk',
    '이창용','최상목','윤석열','시진핑','xi jinping','기시다','우에다',
  ],
};

function getPointTag(article) {
  const mh = (article.matchedHigh || []).map(k => k.toLowerCase());
  const mm = (article.matchedMed || []).map(k => k.toLowerCase());
  const text = ((article.title || '') + ' ' + (article.description || '')).toLowerCase();
  const en = currentLang === 'en';

  if (mh.some(k => ['금리인상','rate hike','rate hikes','fed raises','hawkish','tightening'].includes(k))) return en ? 'Rate Hike Risk' : '금리인상 우려';
  if (mh.some(k => ['전쟁','war','invasion'].includes(k))) return en ? 'Geopolitical Tension' : '지정학 긴장';
  if (mh.some(k => ['conflict'].includes(k))) return en ? 'Conflict Risk' : '분쟁 리스크';
  if (mh.some(k => ['관세','tariff','tariffs'].includes(k))) return en ? 'Tariff Conflict' : '관세 갈등';
  if (mh.some(k => ['trade war'].includes(k))) return en ? 'Trade War' : '무역전쟁';
  if (mh.some(k => ['폭락','crash','collapse'].includes(k))) return en ? 'Market Crash' : '시장 폭락';
  if (mh.some(k => ['급락','plunge','plunges','selloff','sell-off','rout'].includes(k))) return en ? 'Sharp Drop' : '급락 충격';
  if (mh.some(k => ['침체','recession','depression'].includes(k))) return en ? 'Recession Fear' : '경기침체 우려';
  if (mh.some(k => ['파산','bankruptcy'].includes(k))) return en ? 'Bankruptcy Risk' : '파산 위험';
  if (mh.some(k => ['디폴트','default'].includes(k))) return en ? 'Default Risk' : '디폴트 우려';
  if (mh.some(k => ['위기','crisis','meltdown'].includes(k))) return en ? 'Financial Crisis' : '금융위기 우려';
  if (mh.some(k => ['liquidity crisis','credit crunch'].includes(k))) return en ? 'Liquidity Crisis' : '유동성 위기';
  if (mh.some(k => ['제재','sanction'].includes(k))) return en ? 'Sanctions' : '경제 제재';
  if (mh.some(k => ['inflation spike'].includes(k))) return en ? 'Inflation Surge' : '인플레 급등';
  if (text.includes('인플레') || text.includes('inflation') || text.includes('cpi')) return en ? 'Inflation Risk' : '인플레 우려';
  if (mm.some(k => ['downgrade'].includes(k))) return en ? 'Credit Downgrade' : '신용 강등';
  if (mm.some(k => ['volatile','volatility','변동성'].includes(k))) return en ? 'High Volatility' : '변동성 확대';
  if (mm.some(k => ['경고','warning'].includes(k))) return en ? 'Market Warning' : '시장 경고';
  if (mm.some(k => ['부채','debt'].includes(k))) return en ? 'Debt Concern' : '부채 우려';
  if (mm.some(k => ['yield','inversion'].includes(k))) return en ? 'Yield Inversion' : '금리 역전';
  if (mm.some(k => ['bear','correction'].includes(k))) return en ? 'Correction' : '조정 국면';
  return null;
}

function getEntityTags(article) {
  const text = ((article.title || '') + ' ' + (article.description || '')).toLowerCase();
  const found = { company: new Set(), gov: new Set(), person: new Set() };

  for (const name of ENTITIES.company) {
    if (text.includes(name.toLowerCase())) found.company.add(name);
  }
  for (const name of ENTITIES.gov) {
    if (text.includes(name.toLowerCase())) found.gov.add(name);
  }
  for (const name of ENTITIES.person) {
    if (text.includes(name.toLowerCase())) found.person.add(name);
  }

  const tags = [];
  // 회사는 최대 2개, 기관·인물은 최대 2개씩
  [...found.company].slice(0, 2).forEach(n => tags.push(`<span class="tag entity-company">🏢 ${n}</span>`));
  [...found.gov].slice(0, 2).forEach(n => tags.push(`<span class="tag entity-gov">🏛️ ${n.toUpperCase()}</span>`));
  [...found.person].slice(0, 2).forEach(n => tags.push(`<span class="tag entity-person">👤 ${n}</span>`));
  return tags;
}

function getImpactSummary(article) {
  if (article.impact === 'low') return null;
  const mh = (article.matchedHigh || []).map(k => k.toLowerCase());
  const cats = article.cats || [];
  const isEn = currentLang === 'en';

  if (mh.some(k => ['금리인상','rate hike','rate hikes','fed raises','hawkish','tightening','fomc'].includes(k)))
    return { icon: '📈', text: isEn ? 'Rate hike fears → bond yields↑, pressure on growth stocks' : '금리 인상 우려 → 채권 수익률↑, 성장주·주가 하락 압력' };
  if (mh.some(k => ['전쟁','war','conflict','invasion'].includes(k)))
    return { icon: '⚔️', text: isEn ? 'Geopolitical crisis → safe-haven (gold/USD) strength, risk asset selloff' : '지정학 위기 → 안전자산(금·달러) 강세, 위험자산 전반 매도' };
  if (mh.some(k => ['관세','tariff','tariffs','trade war'].includes(k)))
    return { icon: '🌐', text: isEn ? 'Trade conflict → direct hit on exporters & KOSPI, inflation risk' : '관세·무역 갈등 → 수출주·코스피 직접 타격, 물가 상승 우려' };
  if (mh.some(k => ['폭락','급락','crash','plunge','plunges','collapse','selloff','sell-off','rout'].includes(k)))
    return { icon: '🔻', text: isEn ? 'Crash signal → investor sentiment weakens, watch for volatility' : '급락 신호 → 투자심리 위축, 변동성 확대 주의' };
  if (mh.some(k => ['침체','recession','depression'].includes(k)))
    return { icon: '📉', text: isEn ? 'Recession fears → cyclicals down, defensives & treasuries outperform' : '경기침체 우려 → 경기민감주 하락, 방어주·국채 상대적 강세' };
  if (mh.some(k => ['파산','디폴트','default','bankruptcy'].includes(k)))
    return { icon: '⚠️', text: isEn ? 'Default/bankruptcy risk → credit market tightening, broad asset decline' : '부도·파산 위험 → 신용시장 경색, 광범위 자산 하락 가능' };
  if (mh.some(k => ['위기','crisis','meltdown','liquidity crisis','credit crunch'].includes(k)))
    return { icon: '🚨', text: isEn ? 'Financial crisis signal → full risk-off, USD & gold may spike' : '금융위기 신호 → 전 자산 리스크 오프, 달러·금 급등 가능' };
  if (mh.some(k => ['제재','sanction'].includes(k)))
    return { icon: '🚫', text: isEn ? 'Economic sanctions → supply chain disruption, direct hit on related sectors' : '경제 제재 → 공급망 차질, 관련 산업주 직접 타격' };

  if (cats.includes('fed'))   return { icon: '🏦', text: isEn ? 'Central bank policy → rate & liquidity shifts affect all assets' : '중앙은행 정책 → 금리·유동성 변화로 전 자산에 영향' };
  if (cats.includes('trade')) return { icon: '🌐', text: isEn ? 'Trade/tariff issue → impact on export earnings & KOSPI' : '무역·관세 이슈 → 수출 기업 실적 및 코스피 영향' };
  if (cats.includes('geo'))   return { icon: '🌍', text: isEn ? 'Geopolitical issue → energy prices & safe-haven demand shift' : '지정학 이슈 → 에너지 가격·안전자산 선호도 변화' };
  if (cats.includes('macro')) return { icon: '📊', text: isEn ? 'Macro indicator → broad market impact based on economic direction' : '거시경제 지표 → 경기 방향성에 따른 시장 전반 영향' };
  return null;
}

// ─── FETCH ────────────────────────────────────────────────────────────────────
const NEWS_CACHE_KEY = 'ddu_news_cache';
const NEWS_CACHE_TTL = 3 * 60 * 1000; // 3분

function processRawNews(raw) {
  // 제목에 이 중 하나라도 있어야 통과 (주식/코인/부동산/거시경제 직접 관련)
  const NEWS_TITLE_KW = [
    '금리','관세','환율','증시','코스피','코스닥','나스닥','주가','주식','채권','달러','원화',
    '연준','fomc','fed','한은','ecb','boj','기준금리','긴축','통화정책',
    '물가','인플레','cpi','pce','침체','recession','gdp','실업률','고용지표',
    '무역','관세전쟁','tariff','trade war','sanction',
    '전쟁','war','지정학','conflict','invasion',
    '주가급락','주가폭락','주가급등','증시하락','증시상승','금융위기','경제위기','파산','디폴트',
    '반도체','엔비디아','삼성전자','하이닉스','애플','테슬라','openai','spacex',
    'ipo','기업공개','상장','실적발표','earnings','s&p500','nasdaq','dow jones',
    'stock','market crash','rate hike','rate cut','inflation','recession',
  ];
  const BLACKLIST_KW = [
    '결혼','이혼','열애','연애','임신','출산','육아','연예인','배우','가수','아이돌','드라마','예능',
    '순간포착','동치미','아내의맛','살림남','편스토랑','미운우리새끼',
    '맛집','레시피','요리','패션','뷰티','다이어트','운동','여행','숙소','호텔',
    '롤','게임','스포츠','야구','축구','농구','골프','올림픽',
    '영화','공연','콘서트','뮤지컬','전시','웹툰','소설',
    '사망','부고','장례','추모','결별','열정페이','sns',
    // 금융과 무관한 산업/생활 뉴스
    '서점','책방','도서','출판','음식점','카페','편의점','마트','백화점',
    '학교','입시','수능','대학','교육','학원',
    '병원','의료','건강','다이어트','헬스','보험료','성형','피부과','치과','한의원','미용',
    '아이돌','팬덤','콘텐츠','웹소설','유튜브','틱톡',
  ];
  const seen = new Set();
  const unique = [];
  for (const item of raw) {
    const key = (item.title || '').substring(0, 60).toLowerCase().replace(/\s+/g,' ').trim();
    if (!seen.has(key) && key.length > 10) { seen.add(key); unique.push(item); }
  }
  return unique
    .map(scoreArticle)
    .filter(a => {
      if (a.aiOff) return false; // 서버 AI가 금융 무관으로 분류한 기사
      const title = (a.title || '').toLowerCase();
      const fullText = (title + ' ' + (a.description || '')).toLowerCase();
      if (BLACKLIST_KW.some(k => fullText.includes(k))) return false;
      // 제목에 금융 키워드 있거나, 점수 5 이상 (키워드 2개 이상 - 오탐 방지)
      const titleMatch = NEWS_TITLE_KW.some(k => title.includes(k));
      if (!titleMatch && a.score < 5) return false;
      return true;
    })
    .sort((a, b) => b.score - a.score || new Date(b.pubDate) - new Date(a.pubDate));
}

function makePinnedCards(articles) {
  return articles.map(a => {
    const safeLink = /^https?:\/\//.test(a.link) ? a.link : '#';
    const time = a.pubDate ? timeAgo(new Date(a.pubDate)) : '';
    const tags = [];
    if (a.impact === 'high') tags.push(`<span class="tag impact-high">${t('filter_high')}</span>`);
    else if (a.impact === 'medium') tags.push(`<span class="tag impact-med">${t('filter_medium')}</span>`);
    const pt = getPointTag(a);
    if (pt) tags.push(`<span class="tag point">💡 ${pt}</span>`);
    const ps = getImpactSummary(a);
    return `<div class="news-card pinned-card" onclick="window.open('${safeLink}','_blank')">
      <div class="card-header">
        <span class="card-source">${a.sourceName}</span>
        <span class="card-time">${time}</span>
      </div>
      <a class="card-title" href="${safeLink}" target="_blank" onclick="event.stopPropagation()">${a.title || ''}</a>
      <div class="card-tags">${tags.join('')}</div>
      ${ps ? `<div class="impact-summary"><span class="impact-icon">${ps.icon}</span>${ps.text}</div>` : ''}
    </div>`;
  }).join('');
}

function renderPinned() {
  const section = document.getElementById('pinnedSection');
  const list = document.getElementById('pinnedList');
  if (!section || !list || !allArticles.length) { if(section) section.style.display='none'; return; }

  const isEn = currentLang === 'en';
  const sorted = [...allArticles].sort((a, b) => b.score - a.score);
  const krArticles = sorted.filter(a => KR_SOURCES.includes(a.sourceName));
  const enArticles = sorted.filter(a => !KR_SOURCES.includes(a.sourceName));

  let html = '';

  // 전체/한국/글로벌 외 필터는 핀고정 숨김
  if (!['all','kr','en'].includes(currentFilter)) { section.style.display = 'none'; return; }

  if (currentFilter === 'kr') {
    // 국내 필터: 한국 TOP 5만
    const top = krArticles.slice(0, 5);
    if (!top.length) { section.style.display = 'none'; return; }
    html = makePinnedCards(top);
  } else if (currentFilter === 'en') {
    // 글로벌 필터: 해외 TOP 5만
    const top = enArticles.slice(0, 5);
    if (!top.length) { section.style.display = 'none'; return; }
    html = makePinnedCards(top);
  } else {
    // 전체: 글로벌 5 + 국내 5
    const topEn = enArticles.slice(0, 5);
    const topKr = krArticles.slice(0, 5);
    if (!topEn.length && !topKr.length) { section.style.display = 'none'; return; }
    html = '';
    if (topEn.length) html += `
      <div style="font-size:0.75rem;color:#60a5fa;font-weight:600;margin-bottom:6px">🌐 ${isEn ? 'Global' : '글로벌'}</div>
      ${makePinnedCards(topEn)}`;
    if (topKr.length) html += `
      <div style="font-size:0.75rem;color:#34d399;font-weight:600;margin:12px 0 6px">🇰🇷 ${isEn ? 'Korean' : '국내'}</div>
      ${makePinnedCards(topKr)}`;
  }

  section.style.display = 'block';
  list.innerHTML = html;
}

let _lastUpdatedAt = null;
function renderLastUpdated() {
  if (!_lastUpdatedAt) return;
  const el = document.getElementById('lastUpdated');
  if (!el) return;
  const mins = Math.floor((Date.now() - _lastUpdatedAt) / 60000);
  const isEn = currentLang === 'en';
  el.textContent = mins < 1
    ? (isEn ? '✓ Updated just now' : '✓ 방금 업데이트')
    : (isEn ? `✓ Updated ${mins}m ago` : `✓ ${mins}분 전 업데이트`);
}
setInterval(renderLastUpdated, 60000);

function applyNewsData(articles) {
  allArticles = articles;
  _lastUpdatedAt = Date.now();
  renderLastUpdated();
  updateStats();
  renderPinned();
  filterAndRender();
  updateCauses();
  updateKeywords();
}

async function loadAllNews() {
  const btn = document.getElementById('refreshBtn');
  btn.disabled = true;
  btn.classList.add('spinning');

  // 캐시된 뉴스 즉시 표시
  try {
    const cached = JSON.parse(localStorage.getItem(NEWS_CACHE_KEY) || 'null');
    if (cached && Date.now() - cached.ts < NEWS_CACHE_TTL && cached.articles.length) {
      applyNewsData(cached.articles);
      renderSourceStatus();
      btn.disabled = false;
      btn.classList.remove('spinning');
      return; // 캐시 유효 → 끝
    }
  } catch(e) {}

  // 캐시 없거나 만료 → 로딩 표시 후 fetch
  document.getElementById('newsList').innerHTML = `<div class="ddu-state loading"><img src="/logo.png" alt="뚜"/><div class="ddu-msg">${t('loading_news')}</div><div class="ddu-dots"><span></span><span></span><span></span></div></div>`;

  let raw = [];
  try {
    const res = await fetch(API_URL, { signal: AbortSignal.timeout(20000) });
    const data = await res.json();
    for (const src of data.sources) {
      sourceStatus[src.name] = src.ok ? 'ok' : 'fail';
      raw = raw.concat(src.items);
    }
  } catch (e) {
    document.getElementById('newsList').innerHTML = `<div class="ddu-state"><img src="/logo.png" alt="뚜" style="filter:grayscale(0.5)"/><div class="ddu-msg">뚜가 연결에 실패했어요 😿</div><div class="ddu-sub">잠시 후 새로고침을 눌러주세요</div></div>`;
    btn.disabled = false; btn.classList.remove('spinning');
    renderSourceStatus();
    return;
  }
  renderSourceStatus();

  const articles = processRawNews(raw);
  // 로컬 캐시 저장
  try { localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify({ ts: Date.now(), articles })); } catch(e) {}

  applyNewsData(articles);
  btn.disabled = false;
  btn.classList.remove('spinning');
}

// ─── RENDER ───────────────────────────────────────────────────────────────────
function setFilter(btn, filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterAndRender();
}

function filterAndRender() {
  renderPinned(); // 필터 바뀔 때 핀 섹션도 업데이트
  const q = document.getElementById('searchInput').value.toLowerCase().trim();
  let articles = allArticles;

  if (currentFilter === 'kr') articles = articles.filter(a => KR_SOURCES.includes(a.sourceName));
  else if (currentFilter === 'en') articles = articles.filter(a => !KR_SOURCES.includes(a.sourceName));
  else if (currentFilter === 'high') articles = articles.filter(a => a.impact === 'high');
  else if (currentFilter === 'medium') articles = articles.filter(a => a.impact === 'medium');
  else if (['macro','trade','geo','fed','ai','space'].includes(currentFilter)) articles = articles.filter(a => a.cats.includes(currentFilter));

  if (q) articles = articles.filter(a => ((a.title||'')+(a.description||'')).toLowerCase().includes(q));
  if (activeKeyword) articles = articles.filter(a =>
    ((a.title||'')+(a.description||'')).toLowerCase().includes(activeKeyword.toLowerCase())
  );

  renderNews(articles);
}

function renderNews(articles) {
  const el = document.getElementById('newsList');
  if (!articles.length) {
    el.innerHTML = `<div class="ddu-state"><img src="/logo.png" alt="뚜"/><div class="ddu-msg">뚜가 조용히 모니터링 중...</div><div class="ddu-sub">해당 조건의 뉴스가 없습니다</div></div>`;
    return;
  }

  const cards = articles.slice(0, 50).map(a => {
    const cls = a.impact === 'high' ? 'high-impact' : a.impact === 'medium' ? 'medium-impact' : '';
    const tags = [];
    if (a.impact === 'high') tags.push(`<span class="tag impact-high">${t('filter_high')}</span>`);
    else if (a.impact === 'medium') tags.push(`<span class="tag impact-med">${t('filter_medium')}</span>`);
    const pt = getPointTag(a);
    if (pt) tags.push(`<span class="tag point">💡 ${pt}</span>`);
    a.cats.forEach(c => tags.push(`<span class="tag category">${catLabel(c)}</span>`));
    tags.push(...getEntityTags(a));
    const time = a.pubDate ? timeAgo(new Date(a.pubDate)) : '';
    const desc = (a.description || '').substring(0, 150);
    // 링크에 javascript: 등 위험한 scheme 차단
    const safeLink = /^https?:\/\//.test(a.link) ? a.link : '#';
    return `<div class="news-card ${cls}" onclick="window.open('${safeLink}','_blank')">
      <div class="card-header">
        <span class="card-source">${a.sourceName}</span>
        <span class="card-time">${time}</span>
      </div>
      <a class="card-title" href="${safeLink}" target="_blank" onclick="event.stopPropagation()">${a.title || '제목 없음'}</a>
      ${desc ? `<div class="card-summary">${desc}...</div>` : ''}
      <div class="card-tags">${tags.join('')}</div>
      ${(() => { const s = getImpactSummary(a); return s ? `<div class="impact-summary"><span class="impact-icon">${s.icon}</span>${s.text}</div>` : ''; })()}
    </div>`;
  });

  // 10번째 카드마다 AdSense 슬롯 삽입
  el.innerHTML = cards.join('');
}

async function runEventUpdate(eventId, name, desc) {
  const resultEl = document.getElementById('fc-ev-' + eventId);
  const btn = event.target;
  if (!resultEl) return;
  resultEl.style.display = 'block';
  const isEn = currentLang === 'en';
  resultEl.innerHTML = `<span style="color:var(--muted);font-size:0.78rem">🌐 ${isEn ? 'Searching latest info...' : '구글에서 최신 정보 검색 중...'}</span>`;
  btn.disabled = true;
  try {
    const res = await fetch('/api/event-update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, desc }),
      signal: AbortSignal.timeout(25000),
    });
    const d = await res.json();
    if (d.error) throw new Error(d.error);
    const statusColors = { imminent: '#ef4444', ongoing: '#f97316', scheduled: '#3b82f6', completed: '#22c55e' };
    const statusLabels = isEn
      ? { imminent: '🔴 Imminent', ongoing: '🟠 Ongoing', scheduled: '🔵 Scheduled', completed: '🟢 Completed' }
      : { imminent: '🔴 임박', ongoing: '🟠 진행 중', scheduled: '🔵 예정', completed: '🟢 완료' };
    resultEl.innerHTML = `<div style="background:#0f172a;border:1px solid #334155;border-radius:8px;padding:12px;margin-top:8px;font-size:0.82rem">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <span style="color:#60a5fa;font-weight:700">🌐 ${isEn ? 'Live Update' : '실시간 업데이트'}</span>
        ${d.status ? `<span style="color:${statusColors[d.status]||'#94a3b8'}">${statusLabels[d.status]||d.status}</span>` : ''}
        ${d.date ? `<span style="color:#fbbf24">📅 ${d.date}</span>` : ''}
      </div>
      ${d.summary ? `<p style="color:#cbd5e1;margin:0 0 6px">${d.summary}</p>` : ''}
      ${d.source ? `<span style="color:#475569;font-size:0.75rem">출처: ${d.source}</span>` : ''}
    </div>`;
  } catch(e) {
    resultEl.innerHTML = `<span style="color:var(--muted);font-size:0.78rem">${isEn ? 'Update failed' : '업데이트 실패'}: ${e.message}</span>`;
  }
  btn.disabled = false;
}

async function runFactCheck(cardId, title, description) {
  const resultEl = document.getElementById('fc-' + cardId);
  const btn = document.querySelector('#' + cardId + ' .fc-btn');
  if (!resultEl) return;
  resultEl.style.display = 'block';
  resultEl.innerHTML = `<span style="color:var(--muted);font-size:0.78rem">🔍 ${currentLang==='en'?'Analyzing...':'분석 중...'}</span>`;
  if (btn) btn.disabled = true;
  try {
    const res = await fetch('/api/factcheck', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
      signal: AbortSignal.timeout(15000),
    });
    const d = await res.json();
    const verdictColor = d.verdict === '신뢰' || d.verdict === 'Reliable' ? '#4ade80'
      : d.verdict === '주의' || d.verdict === 'Caution' ? '#fb923c' : '#94a3b8';
    const scoreBar = `<div style="background:#1e293b;border-radius:4px;height:4px;margin:4px 0;overflow:hidden"><div style="background:${verdictColor};height:100%;width:${d.score||50}%;transition:width 0.5s"></div></div>`;
    resultEl.innerHTML = `<div class="fc-box">
      <span class="fc-verdict" style="color:${verdictColor}">● ${d.verdict||'?'}</span>
      <span class="fc-score">${d.score||'?'}/100</span>
      <span class="fc-reason">${d.reason||''}</span>
      ${scoreBar}
    </div>`;
  } catch(e) {
    resultEl.innerHTML = `<span style="color:var(--muted);font-size:0.78rem">${currentLang==='en'?'Analysis failed':'분석 실패'}</span>`;
  }
  if (btn) btn.disabled = false;
}

function timeAgo(date) {
  if (isNaN(date)) return '';
  const diff = (Date.now() - date) / 1000;
  const isEn = currentLang === 'en';
  if (diff < 60)    return isEn ? 'just now'                             : '방금';
  if (diff < 3600)  return isEn ? Math.floor(diff/60) + 'm ago'         : Math.floor(diff/60) + '분 전';
  if (diff < 86400) return isEn ? Math.floor(diff/3600) + 'h ago'       : Math.floor(diff/3600) + '시간 전';
  return isEn ? Math.floor(diff/86400) + 'd ago' : Math.floor(diff/86400) + '일 전';
}

// ─── STATS ────────────────────────────────────────────────────────────────────
function updateStats() {
  document.getElementById('statTotal').textContent = allArticles.length;
  document.getElementById('statHigh').textContent = allArticles.filter(a => a.impact === 'high').length;
  const okSources = Object.values(sourceStatus).filter(s => s === 'ok').length;
  document.getElementById('statSources').textContent = okSources + '/' + Object.keys(sourceStatus).length;

  updateKeyFactor('news');
}

function updateCauses() {
  const causeScore = {};
  const causeCounts = {};

  const isEn = currentLang === 'en';
  const causeMap = {
    [isEn ? 'Rate/Monetary Policy' : '금리/통화정책']: ['rate hike','rate hikes','fed raises','fomc','hawkish','tightening','금리인상','기준금리','연준'],
    [isEn ? 'Trade War/Tariffs'    : '무역전쟁/관세']: ['tariff','tariffs','trade war','관세','무역전쟁','보복'],
    [isEn ? 'Geopolitical Crisis'  : '지정학적 위기']: ['war','conflict','invasion','전쟁','분쟁','지정학'],
    [isEn ? 'Recession Fears'      : '경기침체 우려']: ['recession','slowdown','contraction','침체','경기침체'],
    [isEn ? 'Inflation'            : '인플레이션']:    ['inflation','cpi','pce','물가','인플레이션'],
    [isEn ? 'Credit/Liquidity Risk': '신용/유동성 위기']: ['default','bankruptcy','liquidity','credit crunch','파산','디폴트'],
    [isEn ? 'Earnings Miss'        : '기업 실적 부진']: ['miss','disappoints','earnings','profit warning','실적'],
    [isEn ? 'Debt/Fiscal Crisis'   : '부채/재정 위기']: ['debt','deficit','fiscal','부채','재정'],
  };

  for (const a of allArticles) {
    const text = ((a.title||'')+(a.description||'')).toLowerCase();
    for (const [cause, kws] of Object.entries(causeMap)) {
      for (const kw of kws) {
        if (text.includes(kw)) {
          causeScore[cause] = (causeScore[cause] || 0) + a.score;
          causeCounts[cause] = (causeCounts[cause] || 0) + 1;
          break;
        }
      }
    }
  }

  const sorted = Object.entries(causeScore).sort((a,b) => b[1]-a[1]).slice(0,5);
  const ranks = ['🔴','🟠','🟡','⚪','⚪'];

  document.getElementById('causeList').innerHTML = sorted.length
    ? sorted.map(([cause, score], i) => `
        <div class="cause-item">
          <div class="cause-rank ${i===0?'':(i===1?'orange':'gray')}">${i+1}</div>
          <div>
            <div class="cause-text">${cause}</div>
            <div class="cause-count">${causeCounts[cause]}${isEn?' mentions · Risk ':' 건 언급 · 위험지수 '}${score}</div>
          </div>
        </div>`).join('')
    : '<div style="color:var(--muted);font-size:0.8rem">데이터 부족</div>';
}

function updateKeywords() {
  const kwCount = {};
  const isKorean = s => /[가-힣]/.test(s);
  const articles = currentLang === 'en'
    ? allArticles.filter(a => !KR_SOURCES.includes(a.sourceName))
    : allArticles;
  for (const a of articles) {
    for (const kw of [...a.matchedHigh, ...a.matchedMed]) {
      if (currentLang === 'en' && isKorean(kw)) continue; // EN모드: 한국어 키워드 제외
      kwCount[kw] = (kwCount[kw] || 0) + 1;
    }
  }
  const sorted = Object.entries(kwCount).sort((a,b)=>b[1]-a[1]).slice(0,20);
  document.getElementById('keywordCloud').innerHTML = sorted.length
    ? sorted.map(([kw, cnt]) =>
        `<span class="keyword-chip ${activeKeyword===kw?'active':''}" onclick="toggleKeyword('${kw}')">${kw}<span class="kw-count">${cnt}</span></span>`
      ).join('')
    : '<div style="color:var(--muted);font-size:0.8rem">데이터 없음</div>';
}

function toggleKeyword(kw) {
  activeKeyword = activeKeyword === kw ? null : kw;
  updateKeywords();
  filterAndRender();
}

function renderSourceStatus() {
  const entries = Object.entries(sourceStatus);
  if (!entries.length) {
    document.getElementById('sourceList').innerHTML = '<div style="color:var(--muted);font-size:0.8rem">로딩 중...</div>';
    return;
  }
  document.getElementById('sourceList').innerHTML = entries.map(([name, st]) => {
    const badge = st === 'ok' ? t('source_ok') : st === 'fail' ? t('source_fail') : t('loading');
    return `<div class="source-item">
      <span class="source-name">${name}</span>
      <span class="source-badge ${st}">${badge}</span>
    </div>`;
  }).join('');
}

// ─── TAB ──────────────────────────────────────────────────────────────────────
function updateKeyFactor(tab) {
  const valEl = document.getElementById('statKeyword');
  const subEl = document.getElementById('statKeywordSub');
  if (!valEl || !subEl) return;

  if (tab === 'news') {
    const _isEn = currentLang === 'en';
    const causeMap = {
      [_isEn?'Rate/Monetary Policy':'금리/통화정책']: ['rate hike','rate hikes','fed raises','fomc','hawkish','tightening','금리인상','기준금리','연준'],
      [_isEn?'Trade War/Tariffs'   :'무역전쟁/관세']: ['tariff','tariffs','trade war','관세','무역전쟁','보복'],
      [_isEn?'Geopolitical Crisis' :'지정학적 위기']: ['war','conflict','invasion','전쟁','분쟁','지정학'],
      [_isEn?'Recession Fears'     :'경기침체 우려']: ['recession','slowdown','contraction','침체','경기침체'],
      [_isEn?'Inflation'           :'인플레이션']:    ['inflation','cpi','pce','물가','인플레이션'],
      [_isEn?'Credit/Liquidity'    :'신용/유동성']:   ['default','bankruptcy','liquidity','파산','디폴트'],
    };
    const scores = {};
    const articles = _isEn ? allArticles.filter(a => !KR_SOURCES.includes(a.sourceName)) : allArticles;
    for (const a of articles) {
      const text = ((a.title||'')+(a.description||'')).toLowerCase();
      for (const [cause, kws] of Object.entries(causeMap)) {
        if (kws.some(k => text.includes(k))) scores[cause] = (scores[cause]||0) + a.score + 1;
      }
    }
    const top = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
    valEl.textContent = top ? top[0] : '—';
    const mentionCount = top ? articles.filter(a => ((a.title||'')+(a.description||'')).toLowerCase().includes(Object.entries(causeMap).find(([k])=>k===top[0])?.[1]?.[0]||'')).length : 0;
    subEl.textContent = top ? `${_isEn?'News':'뉴스'} ${mentionCount}${_isEn?' mentions':' 건 언급'}` : (_isEn?'No data':'데이터 없음');

  } else if (tab === 'realestate') {
    // 부동산: reCauseMap TOP 1
    const causeMap = {
      '아파트값 상승': ['급등','폭등','신고가','최고가','상승'],
      '아파트값 하락': ['급락','폭락','신저가','하락'],
      '전세 불안': ['역전세','전세사기','깡통'],
      '규제 변화': ['규제','완화','강화','LTV','DSR'],
      '청약/공급': ['청약','분양','미분양','공급'],
      '재건축/재개발': ['재건축','재개발'],
      '금리 영향': ['금리','대출','이자'],
    };
    const scores = {};
    for (const a of reAllArticles) {
      const text = ((a.title||'')+(a.description||'')).toLowerCase();
      for (const [cause, kws] of Object.entries(causeMap)) {
        if (kws.some(k => text.includes(k))) scores[cause] = (scores[cause]||0) + a.score + 1;
      }
    }
    const top = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
    valEl.textContent = top ? top[0] : '—';
    subEl.textContent = top ? '부동산 주요 동향' : '데이터 없음';

  } else if (tab === 'coin') {
    const causeMap = {
      '비트코인 급등': ['bitcoin surges','btc soars','비트코인 상승','btc rallies'],
      '비트코인 급락': ['bitcoin falls','btc drops','비트코인 하락','crypto crash'],
      '규제 리스크': ['regulation','ban','sec','규제','금지','단속'],
      'ETF/기관': ['etf','institutional','blackrock','fidelity','기관'],
      '반감기 효과': ['halving','반감기'],
      '알트코인 시즌': ['altcoin','ethereum','solana','altseason'],
    };
    const scores = {};
    for (const a of coinAllArticles) {
      const text = ((a.title||'')+(a.description||'')).toLowerCase();
      for (const [cause, kws] of Object.entries(causeMap)) {
        if (kws.some(k => text.includes(k))) scores[cause] = (scores[cause]||0) + a.score + 1;
      }
    }
    const top = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0];
    valEl.textContent = top ? top[0] : 'BTC 동향';
    subEl.textContent = top ? '코인 주요 이슈' : '데이터 없음';

  } else if (tab === 'events') {
    // 이벤트: 충격지수 1위
    const top = [...MAJOR_EVENTS, ...COIN_EVENTS].sort((a,b) => b.magnitude - a.magnitude)[0];
    valEl.textContent = top ? top.name.replace(' (상장)','').replace(' IPO','') : '—';
    subEl.textContent = top ? `글로벌 ${top.magnitude} · 한국 ${top.magnitude_kr ?? top.magnitude}` : '';
  }
}

let reLoaded = false;
let coinLoaded = false;
function switchTab(name, btn) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  btn.classList.add('active');
  if (name === 'realestate' && !reLoaded) { reLoaded = true; loadReNews(); }
  if (name === 'coin' && !coinLoaded) { coinLoaded = true; loadCoinNews(); }
  updateKeyFactor(name);
}

// ─── EVENTS DATA ──────────────────────────────────────────────────────────────
// 서버 /api/events가 우선, 아래 배열은 로드 실패 시 폴백
let MAJOR_EVENTS = [
  {
    id: 'fed-meeting',
    name: 'FOMC 금리 결정',
    name_en: 'FOMC Rate Decision',
    category: 'policy',
    date: '2026년 7월 28~29일',
    date_en: 'Jul 28–29, 2026',
    targetDate: '2026-07-29',
    dateConfirmed: true,
    status: 'upcoming',
    statusLabel: '🟠 D-6',
    statusLabel_en: '🟠 D-6',
    scale: 'mega',
    scaleLabel: '초대형',
    scaleLabel_en: 'Mega',
    magnitude: 79,
    magnitude_kr: 70,
    desc: '현재 기준금리 3.50~3.75%. 워시 의장 "물가가 너무 높다" 발언 후 매파 기조 강화 — 인상 확률 2주새 18%→36% 급등(CME). 7월 29일 결정 발표, 점도표 없음.',
    desc_en: 'Current rate: 3.50–3.75%. After Warsh\'s "prices are too high" remark, hike odds jumped 18%→36% in two weeks (CME). Decision July 29, no dot plot.',
    mechanisms: [
      '금리 동결 장기화 → 성장주 밸류에이션 재조정 → 나스닥 하락',
      '예상보다 매파적 발언(hawkish) → 달러 강세 → 신흥국·코스피 자금 유출',
      '점도표(Dot plot) 상향 → 채권 수익률 급등 → 전 자산군 하락',
      '금리인하 가능성 소멸 → 부동산·리츠(REIT) 동반 하락',
    ],
    mechanisms_en: [
      'Extended hold → growth stock valuation reset → Nasdaq drops',
      'Hawkish surprise → USD strengthens → capital outflows from EM & KOSPI',
      'Dot plot revised higher → bond yields surge → all assets reprice',
      'Rate-cut hopes fade → real estate & REITs fall together',
    ],
    impacts: [
      { label: '나스닥', label_en: 'Nasdaq', type: 'neg' },
      { label: '신흥국', label_en: 'Emerging markets', type: 'neg' },
      { label: '달러', label_en: 'USD', type: 'pos' },
      { label: '채권수익률', label_en: 'Bond yields', type: 'neg' },
      { label: '금', label_en: 'Gold', type: 'neu' },
    ],
    relatedSearch: 'FOMC 금리 Powell',
  },
  {
    id: 'japan-rate',
    name: '일본은행(BOJ) 금리 결정',
    name_en: 'Bank of Japan (BOJ) Rate Decision',
    category: 'policy',
    date: '2026년 7월 30~31일',
    date_en: 'Jul 30–31, 2026',
    targetDate: '2026-07-31',
    dateConfirmed: true,
    status: 'upcoming',
    statusLabel: '🟠 D-8',
    statusLabel_en: '🟠 D-8',
    scale: 'high',
    scaleLabel: '대형',
    scaleLabel_en: 'Large',
    magnitude: 81,
    magnitude_kr: 76,
    desc: '6월 1.0% 인상(31년래 최고) 후 7/30~31은 동결 유력. 단, BOJ가 엔화 약세發 물가 리스크로 "더 빠른 인상 가능" 시사(7/22 보도) — 10월 인상 확률 60%+. 엔 캐리 청산 리스크 상존.',
    desc_en: 'Hold expected Jul 30–31 after June hike to 1.0% (31-yr high). But BOJ signals openness to faster hikes on weak-yen inflation risk (Jul 22) — >60% odds of an October hike. Yen carry unwind risk persists.',
    mechanisms: [
      '엔화 강세 → 엔 캐리 트레이드 청산 → 전 세계 위험자산 동시 매도',
      '일본 국채 수익률 상승 → 글로벌 채권 수익률 동반 상승',
      '엔화 강세 → 한국·신흥국 통화 약세 → 외국인 자금 유출',
      '일본 기관투자자 해외 투자 자금 회수 → 미국채·주식 매도',
    ],
    mechanisms_en: [
      'JPY strengthens → yen carry trades unwind → global risk asset selloff',
      'JGB yields rise → global bond yields rise in tandem',
      'Stronger JPY → KRW & EM currencies weaken → foreign capital outflows',
      'Japanese institutions repatriate overseas assets → sell US bonds & stocks',
    ],
    impacts: [
      { label: '코스피', label_en: 'KOSPI', type: 'neg' },
      { label: '나스닥', label_en: 'Nasdaq', type: 'neg' },
      { label: '엔화', label_en: 'JPY', type: 'pos' },
      { label: '달러/엔', label_en: 'USD/JPY', type: 'neg' },
      { label: '일본주식', label_en: 'Japan stocks', type: 'neg' },
    ],
    relatedSearch: 'BOJ 일본 금리 엔 캐리',
  },
  {
    id: 'nvidia-earnings',
    name: '엔비디아 실적 발표 (Q2 FY2027)',
    name_en: 'Nvidia Earnings (Q2 FY2027)',
    category: 'tech',
    date: '2026년 8월 26일',
    date_en: 'Aug 26, 2026',
    targetDate: '2026-08-26',
    status: 'upcoming',
    statusLabel: '🟠 예정',
    statusLabel_en: '🟠 Scheduled',
    scale: 'high',
    scaleLabel: '대형',
    scaleLabel_en: 'Large',
    magnitude: 54,
    magnitude_kr: 64,
    desc: '8월 26일 장 마감 후 발표 확정. 직전 분기 매출 $820억(+85%)·데이터센터 $750억(+92%)으로 고성장 지속 여부가 관건. SK하이닉스·삼성전자 HBM 연관으로 코스피 직접 영향.',
    desc_en: 'Confirmed for Aug 26 after close. Last quarter: revenue $82B (+85%), data center $75B (+92%) — sustaining hypergrowth is the key question. Direct KOSPI impact via SK Hynix & Samsung HBM.',
    mechanisms: [
      '예상치 하회 시 AI 버블 우려 → 테크 섹터 전반 동반 급락',
      'HBM 공급업체 SK하이닉스·삼성전자 코스피 급등락',
      '데이터센터 투자 감소 전망 시 관련주(전력·냉각·인프라) 연쇄 조정',
      '옵션 만기와 겹칠 경우 변동성 지수(VIX) 급등',
    ],
    mechanisms_en: [
      'Miss vs. expectations → AI bubble fears → broad tech selloff',
      'HBM suppliers SK Hynix & Samsung surge or plunge on KOSPI',
      'Weak data center outlook → cascade in power/cooling/infra stocks',
      'Coincides with options expiry → VIX spike',
    ],
    impacts: [
      { label: 'AI주', label_en: 'AI stocks', type: 'neg' },
      { label: '반도체', label_en: 'Semiconductors', type: 'neg' },
      { label: 'SK하이닉스', label_en: 'SK Hynix', type: 'neg' },
      { label: '삼성전자', label_en: 'Samsung', type: 'neg' },
      { label: 'HBM 공급사', label_en: 'HBM suppliers', type: 'pos' },
    ],
    relatedSearch: '엔비디아 실적 earnings',
  },
  {
    id: 'nps-rebalancing',
    name: '국민연금 포트폴리오 리밸런싱',
    name_en: 'NPS Portfolio Rebalancing',
    category: 'macro',
    date: '2026년 7월~ 진행 중',
    date_en: 'Jul 2026~ Ongoing',
    targetDate: null,
    status: 'ongoing',
    statusLabel: '🔴 진행 중',
    statusLabel_en: '🔴 Ongoing',
    scale: 'high',
    scaleLabel: '대형',
    scaleLabel_en: 'Large',
    magnitude: 29,
    magnitude_kr: 57,
    desc: '7/1 재개 첫날 코스피 -2.04%(8,303). 국내주식 비중 약 30%로 목표(20.8%)를 9%p 초과 — 매도 규모 14조~51조원 추정. 수개월 분할 매도로 충격 완화 중이나 수급 부담 지속.',
    desc_en: 'KOSPI fell 2.04% (8,303) on Jul 1 resumption. Domestic equity ~30% vs 20.8% target (+9pp) — estimated ₩14–51T to sell. Split selling over months limits shock, but overhang persists.',
    mechanisms: [
      '국내주식 비중 축소 → 코스피 대형주(삼성전자·SK하이닉스 등) 대량 매도 압력',
      '해외주식·채권 비중 확대 → 환전 수요 증가 → 원/달러 환율 상승',
      '외국인 투자자, 국민연금 매도 신호를 리스크로 해석 → 동반 이탈',
      '수급 공백 → 코스피 지수 하방 압력 장기화',
    ],
    mechanisms_en: [
      'Reduced domestic equity allocation → selling pressure on KOSPI large-caps (Samsung, SK Hynix)',
      'Increased overseas allocation → USD demand rises → KRW weakens',
      'Foreign investors interpret NPS selling as risk signal → follow-on outflows',
      'Supply-demand gap → sustained KOSPI downside pressure',
    ],
    impacts: [
      { label: '코스피', label_en: 'KOSPI', type: 'neg' },
      { label: '삼성전자', label_en: 'Samsung', type: 'neg' },
      { label: 'SK하이닉스', label_en: 'SK Hynix', type: 'neg' },
      { label: '원/달러', label_en: 'KRW/USD', type: 'neg' },
      { label: '해외주식', label_en: 'Global stocks', type: 'pos' },
    ],
    relatedSearch: '국민연금 리밸런싱 코스피',
  },
  {
    id: 'trump-tariff',
    name: '미국 관세 정책 (트럼프 2기)',
    name_en: 'US Tariff Policy (Trump 2nd Term)',
    category: 'policy',
    date: '2026년 진행 중',
    date_en: 'Ongoing 2026',
    targetDate: null,
    status: 'ongoing',
    statusLabel: '🔴 진행 중',
    statusLabel_en: '🔴 Ongoing',
    scale: 'mega',
    scaleLabel: '초대형',
    scaleLabel_en: 'Mega',
    magnitude: 87,
    magnitude_kr: 83,
    desc: '7/24 글로벌 10% 임시관세 만료 → USTR "곧 추가 조치" 예고. 브라질 25%(7/22 발효)·캐나다 차량/주류/유제품 50% 발동. 60개국 301조 최대 12.5% 관세 제안(교역 99% 커버), 독일 제약도 조사 개시.',
    desc_en: 'Global 10% temporary tariff expires Jul 24 — USTR flags "action soon". Brazil 25% (eff. Jul 22), Canada 50% on autos/alcohol/dairy. Proposed Sec-301 tariffs up to 12.5% on 60 economies (~99% of trade); Germany pharma probe opened.',
    mechanisms: [
      '수출 의존도 높은 한국·대만·일본 주식시장에 직접 타격',
      '인플레이션 재점화 → Fed 금리인하 기대 소멸 → 채권 수익률 상승',
      '글로벌 교역량 감소 예상 → 경기침체 우려로 안전자산 이동',
      '보복 관세 발동 시 미국 기업 실적 악화 우려 → 나스닥 하락',
      '불확실성 증가 → 리스크 오프(risk-off) 심화',
    ],
    mechanisms_en: [
      'Direct hit to export-heavy markets: Korea, Taiwan, Japan',
      'Inflation rebound → Fed rate-cut expectations fade → bond yields rise',
      'Global trade volume decline → recession fears → flight to safe assets',
      'Retaliatory tariffs hurt US corporate earnings → Nasdaq falls',
      'Rising uncertainty → intensified risk-off sentiment',
    ],
    impacts: [
      { label: '코스피', label_en: 'KOSPI', type: 'neg' },
      { label: '코스닥', label_en: 'KOSDAQ', type: 'neg' },
      { label: '수출주', label_en: 'Exporters', type: 'neg' },
      { label: '달러', label_en: 'USD', type: 'pos' },
      { label: '금', label_en: 'Gold', type: 'pos' },
      { label: '국채', label_en: 'Treasuries', type: 'pos' },
    ],
    relatedSearch: '관세 무역전쟁',
  },
  {
    id: 'us-debt-ceiling',
    name: '미국 국가부채 한도 협상',
    name_en: 'US Debt Ceiling Negotiation',
    category: 'macro',
    date: '2026년 진행 중',
    date_en: 'Ongoing 2026',
    targetDate: null,
    status: 'ongoing',
    statusLabel: '🔴 진행 중',
    statusLabel_en: '🔴 Ongoing',
    scale: 'high',
    scaleLabel: '대형',
    scaleLabel_en: 'Large',
    magnitude: 78,
    magnitude_kr: 63,
    desc: '2025년 7월 "One Big Beautiful Bill"로 한도를 $41.1T로 상향 완료. 현재 즉각적 위기는 없으나 X-date는 2027년 초~중반 예상. 대규모 감세·지출 확대로 재정 악화 속도가 빨라져 다음 협상 충돌이 더 격화될 가능성.',
    desc_en: 'Ceiling raised to $41.1T via "One Big Beautiful Bill" (Jul 2025). No immediate crisis — X-date expected early-to-mid 2027. Massive tax cuts and spending expansion are accelerating deficit growth, setting up a more severe next confrontation.',
    mechanisms: [
      '협상 결렬 우려 → 미국 국채 수익률 급등 → 전 자산 리프라이싱',
      '안전자산 역설 붕괴 → 달러·미국채 동시 매도',
      '신용등급 강등 시 연기금·중앙은행 강제 매도 트리거',
      '정부 지출 중단(셧다운) 시 경기 지표 악화 → 침체 우려 증폭',
    ],
    mechanisms_en: [
      'Deal failure fears → US Treasury yields spike → all assets reprice',
      'Safe-haven paradox breaks → simultaneous selling of USD & Treasuries',
      'Credit downgrade forces pension/central bank mandatory selling',
      'Government shutdown → worsening economic data → recession fears grow',
    ],
    impacts: [
      { label: '미국채', label_en: 'US Treasuries', type: 'neg' },
      { label: '달러', label_en: 'USD', type: 'neg' },
      { label: '글로벌주식', label_en: 'Global equities', type: 'neg' },
      { label: '금', label_en: 'Gold', type: 'pos' },
      { label: '비트코인', label_en: 'Bitcoin', type: 'neu' },
    ],
    relatedSearch: '미국 부채한도 debt ceiling',
  },
  {
    id: 'china-taiwan',
    name: '중국-대만 긴장 고조',
    name_en: 'China-Taiwan Tensions',
    category: 'geo',
    date: '상시 모니터링',
    date_en: 'Ongoing watch',
    targetDate: null,
    status: 'watch',
    statusLabel: '📡 모니터링',
    statusLabel_en: '📡 Monitoring',
    scale: 'mega',
    scaleLabel: '초대형',
    scaleLabel_en: 'Mega',
    magnitude: 94,
    magnitude_kr: 85,
    desc: '7월 초 SLBM 시험으로 핵 2차 타격 능력 과시. 군함 5~6척 대만 주변 상시 배치, 해안경비대 상선 검문·봉쇄 루트 정찰 보도(7/21). 미 상원 "해상 안전 명분 경제 봉쇄" 경고. 4차 대만해협 위기 진행 중.',
    desc_en: 'Early-July SLBM test showcased second-strike capability. 5–6 PLA warships permanently around Taiwan; coast guard inspecting merchant ships, reportedly scouting blockade routes (Jul 21). US senator warns of economic blockade under "maritime safety" guise.',
    mechanisms: [
      'TSMC 생산 차질 우려 → 애플·엔비디아·AMD 등 전 테크주 급락',
      '삼성전자·SK하이닉스 반사이익 기대 vs. 지정학 공포 심리 충돌',
      '해운·항공 루트 차단 → 글로벌 물류비 폭등 → 인플레이션 재점화',
      '미국 군사 개입 시 리스크 오프 최고조 → 안전자산(금·달러·엔화) 급등',
    ],
    mechanisms_en: [
      'TSMC production fears → Apple, Nvidia, AMD and all tech stocks plunge',
      'Samsung/SK Hynix potential beneficiaries vs. geopolitical panic',
      'Shipping/air routes blocked → global logistics costs explode → inflation',
      'US military intervention → peak risk-off → gold/USD/JPY surge',
    ],
    impacts: [
      { label: '테크주', label_en: 'Tech stocks', type: 'neg' },
      { label: '반도체', label_en: 'Semiconductors', type: 'neg' },
      { label: '코스피', label_en: 'KOSPI', type: 'neg' },
      { label: '금', label_en: 'Gold', type: 'pos' },
      { label: '엔화', label_en: 'JPY', type: 'pos' },
      { label: '방산주', label_en: 'Defense stocks', type: 'pos' },
    ],
    relatedSearch: '대만 중국 긴장',
  },
  {
    id: 'openai-ipo',
    name: 'OpenAI IPO / 대형 AI 상장',
    name_en: 'OpenAI IPO / Major AI Listing',
    category: 'ipo',
    date: 'OpenAI 2027 · Anthropic 2026년 10월 목표',
    date_en: 'OpenAI 2027 · Anthropic targets Oct 2026',
    targetDate: null,
    status: 'watch',
    statusLabel: '📡 모니터링',
    statusLabel_en: '📡 Monitoring',
    scale: 'high',
    scaleLabel: '대형',
    scaleLabel_en: 'Large',
    magnitude: 48,
    magnitude_kr: 35,
    desc: 'OpenAI는 알트만이 $1조 밸류에이션 고수하며 2027년 상장으로 기울어(6/26 보도). Anthropic은 $9,650억 밸류로 올해 10월 데뷔 목표 — 첫 대형 AI 상장 유력. OpenAI 2026년 적자 $140억 예상.',
    desc_en: 'OpenAI leaning toward 2027 as Altman holds out for a $1T valuation (Jun 26). Anthropic ($965B) targets an October 2026 debut — likely first major AI listing. OpenAI expects a $14B loss in 2026.',
    mechanisms: [
      'AI 섹터 밸류에이션 재조정 → 기존 AI주(MS·Google·Meta) 상대적 약세',
      'IPO 청약 자금 이동 → 성장주 전반 단기 유동성 감소',
      '상장 후 실망 매물 시 "AI 버블" 내러티브 강화 → 섹터 전반 하락',
    ],
    mechanisms_en: [
      'AI valuation reset → existing AI stocks (MS, Google, Meta) underperform',
      'IPO subscription capital flows → short-term liquidity drain from growth stocks',
      'Post-listing disappointment → "AI bubble" narrative strengthens → sector-wide decline',
    ],
    impacts: [
      { label: 'AI주', label_en: 'AI stocks', type: 'neg' },
      { label: 'MS·Google', label_en: 'MS·Google', type: 'neg' },
      { label: 'OpenAI', label_en: 'OpenAI', type: 'pos' },
      { label: 'AI 인프라', label_en: 'AI infrastructure', type: 'neu' },
    ],
    relatedSearch: 'OpenAI IPO',
  },
  {
    id: 'spacex-ipo',
    name: 'SpaceX ($SPCX) 나스닥 상장 완료',
    name_en: 'SpaceX ($SPCX) Listed on Nasdaq',
    category: 'ipo',
    date: '2026년 6월 12일 상장 완료 · 공모가 $135',
    date_en: 'Listed June 12, 2026 · IPO Price $135',
    targetDate: '2026-06-12',
    status: 'completed',
    statusLabel: '🟢 상장 완료',
    statusLabel_en: '🟢 Listed',
    scale: 'mega',
    scaleLabel: '초대형',
    scaleLabel_en: 'Mega',
    magnitude: 52,
    magnitude_kr: 24,
    desc: 'SpaceX가 2026년 6월 12일 나스닥에 $SPCX 티커로 상장 완료. 공모가 $135, 기업가치 약 $350B(470조원)로 역대 최대 규모 IPO. 현재 락업(Lockup) 해제일 및 S&P500 편입 일정이 주요 관전 포인트.',
    desc_en: 'SpaceX listed on Nasdaq as $SPCX on June 12, 2026. IPO price $135, valuation ~$350B — largest IPO in history. Key watch points: lockup expiry date and potential S&P500 inclusion.',
    mechanisms: [
      'IPO 청약 자금 마련을 위해 기존 보유 주식(특히 테크주·성장주) 대량 매도',
      '기관 포트폴리오 비중 조정 → 시가총액 상위 종목(애플·MS·엔비디아 등) 동반 하락 압력',
      'S&P500 편입 시 인덱스 펀드의 강제 편입 매수 → 편입 전 시장 변동성 극대화',
      '한국 투자자들의 미국 주식 환전 수요 급증 → 원/달러 환율 상승 압력',
      '락업(Lockup) 해제 후 내부자 대규모 매도 → 2차 조정',
    ],
    mechanisms_en: [
      'Investors sell existing holdings (tech/growth stocks) to fund IPO subscriptions',
      'Institutional rebalancing → downward pressure on top-cap stocks (Apple, MS, NVDA)',
      'S&P500 inclusion forces index fund buys → heightened volatility before inclusion',
      'Korean investor USD demand surges → KRW/USD pressure',
      'Post-lockup insider selling → secondary correction',
    ],
    impacts: [
      { label: '나스닥', label_en: 'Nasdaq', type: 'neg' },
      { label: '테크주', label_en: 'Tech stocks', type: 'neg' },
      { label: '성장주', label_en: 'Growth stocks', type: 'neg' },
      { label: '원/달러', label_en: 'KRW/USD', type: 'neg' },
      { label: 'SpaceX', label_en: 'SpaceX', type: 'pos' },
      { label: '우주·방산주', label_en: 'Space/Defense', type: 'pos' },
    ],
    relatedSearch: 'SpaceX IPO 상장',
  },
];

let activeEventFilter = 'all';

// 이벤트 데이터를 서버에서 로드 (events.json 한 곳만 고치면 사이트·앱 동시 반영)
async function loadEvents() {
  try {
    const res = await fetch('/api/events', { signal: AbortSignal.timeout(8000) });
    const data = await res.json();
    if (Array.isArray(data.events) && data.events.length) {
      MAJOR_EVENTS = data.events;
      renderEvents();
    }
  } catch (_) {}
}

function filterEvents(cat, btn) {
  activeEventFilter = cat;
  document.querySelectorAll('.event-filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderEvents();
}

function calcDday(targetDate) {
  if (!targetDate) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  const target = new Date(targetDate); target.setHours(0,0,0,0);
  return Math.round((target - today) / 86400000);
}

function renderEvents() {
  const isEn = currentLang === 'en';
  let events = activeEventFilter === 'all'
    ? MAJOR_EVENTS
    : MAJOR_EVENTS.filter(e => e.category === activeEventFilter);

  // 최신순: 진행 중 → 예정(날짜 임박순) → 모니터링 → 완료 (그룹 내 충격지수순)
  const STATUS_ORDER = { ongoing: 0, upcoming: 1, watch: 2, completed: 3 };
  events = [...events].sort((a, b) => {
    const so = (STATUS_ORDER[a.status] ?? 2) - (STATUS_ORDER[b.status] ?? 2);
    if (so !== 0) return so;
    if (a.status === 'upcoming' && a.targetDate && b.targetDate) {
      return new Date(a.targetDate) - new Date(b.targetDate);
    }
    return b.magnitude - a.magnitude;
  });

  document.getElementById('eventList').innerHTML = events.map(e => {
    const mechs = isEn ? (e.mechanisms_en || e.mechanisms) : e.mechanisms;
    const mechanismItems = mechs.map(m => `<li>${m}</li>`).join('');
    const impactChips = e.impacts.map(i =>
      `<span class="impact-chip ${i.type}">${isEn ? (i.label_en || i.label) : i.label}</span>`
    ).join('');
    const name = isEn ? (e.name_en || e.name) : e.name;
    const date = isEn ? (e.date_en || e.date) : e.date;
    const scaleLabel = isEn ? (e.scaleLabel_en || e.scaleLabel) : e.scaleLabel;
    let statusLabel = isEn ? (e.statusLabel_en || e.statusLabel) : e.statusLabel;
    // D-day는 매일 자동 계산 (하드코딩 라벨 대체)
    if (e.status === 'upcoming' && e.dateConfirmed && e.targetDate) {
      const dd = calcDday(e.targetDate);
      if (dd !== null && dd >= 0) statusLabel = dd === 0 ? '🔴 D-Day' : `🟠 D-${dd}`;
    }
    const desc = isEn ? (e.desc_en || e.desc) : e.desc;
    const mechTitle = isEn ? '⚡ Market Shock Mechanism' : '⚡ 시장 충격 메커니즘';
    const searchLabel = isEn ? '🔍 Related news →' : '🔍 관련 뉴스 검색 →';
    const shockLabel = isEn ? 'Shock Index' : '충격 지수';
    const dd = e.targetDate ? calcDday(e.targetDate) : null;
    let ddBadge = '';
    if (dd !== null && e.status !== 'completed' && e.dateConfirmed) {
      if (dd === 0) ddBadge = `<span class="dday-badge today">D-Day</span>`;
      else if (dd > 0) ddBadge = `<span class="dday-badge upcoming">D-${dd}</span>`;
    }
    return `
    <div class="event-card ${e.scale}">
      <div class="event-header">
        <div class="event-title-row">
          <div class="event-name">${name}</div>
          <div class="event-meta">
            <span class="event-date">📅 ${date}</span>${ddBadge}
            <span class="event-scale ${e.scale}">${scaleLabel}</span>
          </div>
        </div>
        <span class="event-status ${e.status}">${statusLabel}</span>
      </div>
      <p class="event-desc">${desc}</p>
      <div class="mechanism-box">
        <div class="mechanism-title">${mechTitle}</div>
        <ul class="mechanism-list">${mechanismItems}</ul>
      </div>
      <div class="impact-row">${impactChips}</div>
      <div style="font-size:0.68rem;color:var(--muted);margin-top:12px;margin-bottom:4px">${isEn ? '⚡ Shock Index' : '⚡ 충격지수'}</div>
      <div class="magnitude-grid">
        <span class="magnitude-label">${isEn ? '🌐 Global' : '🌐 글로벌'}</span>
        <div class="magnitude-bar"><div class="magnitude-fill" style="width:${e.magnitude}%"></div></div>
        <span class="magnitude-val">${e.magnitude}</span>
        <span class="magnitude-label">${isEn ? '🇰🇷 Korea' : '🇰🇷 한국'}</span>
        <div class="magnitude-bar"><div class="magnitude-fill kr" style="width:${e.magnitude_kr ?? e.magnitude}%"></div></div>
        <span class="magnitude-val kr">${e.magnitude_kr ?? e.magnitude}</span>
      </div>
      <div style="margin-top:10px;display:flex;align-items:center;gap:12px">
        <a href="https://www.google.com/search?q=${encodeURIComponent(e.relatedSearch)}&tbm=nws" target="_blank"
           style="font-size:0.75rem;color:var(--muted);text-decoration:none">
          ${searchLabel}
        </a>
        <button class="fc-btn" onclick="runEventUpdate('${e.id}',${JSON.stringify(name)},${JSON.stringify(desc.substring(0,300))})" style="font-size:0.75rem;padding:3px 8px">
          🌐 ${isEn ? 'Live Update' : '실시간 업데이트'}
        </button>
      </div>
      <div class="fc-result" id="fc-ev-${e.id}" style="display:none"></div>
    </div>`;
  }).join('');

  // Sidebar: impact ranking
  const sorted = [...MAJOR_EVENTS].sort((a,b) => b.magnitude - a.magnitude);
  document.getElementById('eventImpactSidebar').innerHTML = sorted.slice(0,5).map((e,i) => {
    const name = isEn ? (e.name_en || e.name) : e.name;
    let statusLabel = isEn ? (e.statusLabel_en || e.statusLabel) : e.statusLabel;
    if (e.status === 'upcoming' && e.dateConfirmed && e.targetDate) {
      const dd = calcDday(e.targetDate);
      if (dd !== null && dd >= 0) statusLabel = dd === 0 ? '🔴 D-Day' : `🟠 D-${dd}`;
    }
    const shockLabel = isEn ? 'Shock' : '충격지수';
    return `
    <div class="cause-item">
      <div class="cause-rank ${i===0?'':(i===1?'orange':'gray')}">${i+1}</div>
      <div>
        <div class="cause-text" style="font-size:0.78rem">${name}</div>
        <div class="cause-count">${isEn?'G':'글'} ${e.magnitude} · ${isEn?'KR':'한'} ${e.magnitude_kr ?? e.magnitude} · ${statusLabel}</div>
      </div>
    </div>`;
  }).join('');

  // Sidebar: affected assets aggregation
  const assetCount = {};
  for (const e of MAJOR_EVENTS) {
    for (const imp of e.impacts) {
      if (imp.type === 'neg') {
        const lbl = isEn ? (imp.label_en || imp.label) : imp.label;
        assetCount[lbl] = (assetCount[lbl]||0) + 1;
      }
    }
  }
  const topAssets = Object.entries(assetCount).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const assetsDesc = isEn ? 'Assets at risk across multiple events' : '복수 이벤트에서 동시 하락 위험이 있는 자산';
  document.getElementById('affectedAssets').innerHTML = `
    <div style="font-size:0.75rem;color:var(--muted);margin-bottom:8px">${assetsDesc}</div>
    <div class="keyword-cloud">
      ${topAssets.map(([asset, cnt]) =>
        `<span class="keyword-chip" style="cursor:default">${asset}<span class="kw-count">${cnt}</span></span>`
      ).join('')}
    </div>`;
}

// ─── MARKET TICKER ────────────────────────────────────────────────────────────
const TICKER_IDS = {
  kospi:  't-kospi',
  kosdaq: 't-kosdaq',
  sp500:  't-sp500',
  nasdaq: 't-nasdaq',
  dow:    't-dow',
  usdkrw: 't-usd',
  btc:    't-btc',
  gold:   't-gold',
  silver: 't-silver',
};
const TICKER_CHG_IDS = {
  kospi:  't-kospi-chg',
  kosdaq: 't-kosdaq-chg',
  sp500:  't-sp500-chg',
  nasdaq: 't-nasdaq-chg',
  dow:    't-dow-chg',
  usdkrw: 't-usd-chg',
  btc:    't-btc-chg',
  gold:   't-gold-chg',
  silver: 't-silver-chg',
};

function fmtPrice(id, price) {
  if (id === 'usdkrw') return price.toFixed(1);
  if (id === 'btc') return '$' + price.toLocaleString('en-US', { maximumFractionDigits: 0 });
  if (id === 'gold') return '$' + price.toFixed(1);
  if (id === 'silver') return '$' + price.toFixed(2);
  if (price >= 1000) return price.toLocaleString('en-US', { maximumFractionDigits: 2 });
  return price.toFixed(2);
}

const _marketCache = {};

function applyMarketQuotes(quotes) {
  for (const q of quotes) {
    if (!q.ok || !q.price) continue;
    _marketCache[q.id] = q; // 마지막 성공값 저장
  }
  // 항상 캐시 기준으로 렌더 (실패한 티커도 이전 값 유지)
  for (const q of Object.values(_marketCache)) {
    const valEl = document.getElementById(TICKER_IDS[q.id]);
    const chgEl = document.getElementById(TICKER_CHG_IDS[q.id]);
    if (valEl) valEl.textContent = fmtPrice(q.id, q.price);
    if (chgEl) {
      const sign = q.chg >= 0 ? '+' : '';
      chgEl.textContent = `${sign}${q.chg.toFixed(2)}%`;
      chgEl.className = 'ticker-chg ' + (q.chg >= 0 ? 'up' : 'down');
    }
    const val2 = document.getElementById(TICKER_IDS[q.id] + '2');
    if (val2) val2.textContent = fmtPrice(q.id, q.price);
  }
}

async function loadMarketData() {
  const attempt = async () => {
    const res = await fetch('/api/market', { signal: AbortSignal.timeout(8000) });
    const { quotes, rates } = await res.json();
    applyMarketQuotes(quotes);
    // 기준금리: 서버 한 곳에서 관리
    if (rates) {
      for (const [id, val] of [['t-fed', rates.fed], ['t-bok', rates.bok], ['t-fed2', rates.fed], ['t-bok2', rates.bok]]) {
        const el = document.getElementById(id);
        if (el && val) el.textContent = val;
      }
    }
  };
  try {
    await attempt();
  } catch(e) {
    // 1회 실패 시 3초 후 재시도
    setTimeout(async () => {
      try { await attempt(); } catch(_) {}
    }, 3000);
  }
}

function renderBrokers() {
}

// ─── REAL ESTATE ──────────────────────────────────────────────────────────────
const RE_HIGH_KW = [
  '급등','급락','폭등','폭락','최고가','최저가','역대','신고가','신저가',
  '버블','붕괴','폭발','폭삭','대폭','급변',
];
const RE_MED_KW = [
  '아파트','전세','월세','청약','분양','재건축','재개발','주택','매매','임대','보증금',
  '오피스텔','빌라','집값','부동산','미분양','역전세','갭투자','분양가','주택담보',
  '상승','하락','강세','약세','회복','둔화','위축','과열',
  '규제','완화','강화','대출','LTV','DSR','금리','이자',
  '공급','수요','입주','착공','허가','이주','조합','리모델링',
];
const RE_CATS = {
  price:    ['집값','아파트값','매매가','시세','가격','급등','급락','상승','하락','신고가'],
  policy:   ['규제','완화','대출','LTV','DSR','금리','정책','법','세금','취득세','양도세','재산세','임대차'],
  apt:      ['아파트','단지','평형','㎡','재건축','재개발','리모델링'],
  jeonse:   ['전세','월세','보증금','역전세','전세사기','깡통전세','임대'],
  cheongak: ['청약','분양','공급','미분양','입주','착공','허가','당첨'],
  rebuild:  ['재건축','재개발','정비','조합','이주','철거'],
  seoul:    ['서울','강남','강북','수도권','경기','인천','강동','송파','마포','용산','성동','노원'],
};
const RE_REGION_KW = ['서울','강남','강북','강동','강서','송파','마포','용산','성동','노원','분당','판교','수원','인천','경기','부산','대구','대전','광주','세종'];

let reAllArticles = [];
let reCurrentFilter = 'all';
let reActiveKeyword = null;
const reSourceStatus = {};

function scoreReArticle(item) {
  const text = ((item.title || '') + ' ' + (item.description || '')).toLowerCase();
  let score = 0;
  const matchedHigh = [], matchedMed = [];

  for (const kw of RE_HIGH_KW) { if (text.includes(kw)) { score += 3; matchedHigh.push(kw); } }
  for (const kw of RE_MED_KW)  { if (text.includes(kw)) { score += 1; matchedMed.push(kw); } }

  const cats = [];
  for (const [cat, kws] of Object.entries(RE_CATS)) {
    if (kws.some(k => text.includes(k))) cats.push(cat);
  }

  const regions = RE_REGION_KW.filter(r => text.includes(r));
  const impact = score >= 5 ? 'high' : score >= 2 ? 'medium' : 'low';
  return { ...item, score, impact, cats, matchedHigh: [...new Set(matchedHigh)], matchedMed: [...new Set(matchedMed)], regions: [...new Set(regions)] };
}

function getReCatLabel(cat) {
  return { price:'가격동향', policy:'정책/규제', apt:'아파트', jeonse:'전세/월세', cheongak:'청약/분양', rebuild:'재건축', seoul:'서울/수도권' }[cat] || cat;
}

function getRePointTag(a) {
  const mh = a.matchedHigh || [];
  const mm = a.matchedMed || [];
  const text = ((a.title||'')+(a.description||'')).toLowerCase();
  if (mh.some(k => ['급등','폭등','최고가','신고가'].includes(k))) return '가격 급등';
  if (mh.some(k => ['급락','폭락','최저가','신저가','붕괴'].includes(k))) return '가격 급락';
  if (mm.some(k => ['규제','강화','금지'].includes(k))) return '규제 강화';
  if (mm.some(k => ['완화','허용'].includes(k))) return '규제 완화';
  if (text.includes('금리') && (text.includes('대출') || text.includes('이자'))) return '금리 부담';
  if (text.includes('역전세') || text.includes('전세사기') || text.includes('깡통')) return '전세 위험';
  if (text.includes('미분양')) return '미분양 증가';
  if (text.includes('청약') || text.includes('분양')) return '청약/분양';
  if (text.includes('재건축') || text.includes('재개발')) return '재건축/재개발';
  if (mm.some(k => ['상승','강세','회복'].includes(k))) return '시장 상승세';
  if (mm.some(k => ['하락','약세','위축','둔화'].includes(k))) return '시장 둔화';
  return null;
}

async function loadReNews() {
  try {
    const res = await fetch('/api/realestate', { signal: AbortSignal.timeout(20000) });
    const data = await res.json();
    let raw = [];
    for (const src of data.sources) {
      reSourceStatus[src.name] = src.ok ? 'ok' : 'fail';
      raw = raw.concat(src.items);
    }
    const seen = new Set();
    const unique = [];
    for (const item of raw) {
      const key = (item.title || '').substring(0, 60).toLowerCase().trim();
      if (!seen.has(key) && key.length > 10) { seen.add(key); unique.push(item); }
    }
    const RE_CORE = ['아파트','집값','부동산','전세','월세','청약','분양','재건축','재개발','주택','매매가','임대차','보증금','오피스텔','빌라','다세대','갭투자','역전세','미분양','분양가','주택담보'];
    reAllArticles = unique
      .map(scoreReArticle)
      .filter(a => {
        const text = ((a.title||'') + ' ' + (a.description||'')).toLowerCase();
        return RE_CORE.some(k => text.includes(k)) && a.score >= 1;
      })
      .sort((a, b) => b.score - a.score || new Date(b.pubDate) - new Date(a.pubDate));
  } catch(e) {
    document.getElementById('reNewsList').innerHTML = `<div class="ddu-state"><img src="/logo.png" alt="뚜" style="filter:grayscale(0.5)"/><div class="ddu-msg">뚜가 연결에 실패했어요 😿</div></div>`;
    return;
  }
  reRenderSourceStatus();
  reUpdateSidebar();
  reFilterAndRender();
  updateKeyFactor('realestate');
}

function reSetFilter(btn, filter) {
  reCurrentFilter = filter;
  document.querySelectorAll('[data-refilter]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  reFilterAndRender();
}

function reFilterAndRender() {
  const q = document.getElementById('reSearchInput').value.toLowerCase().trim();
  let articles = reAllArticles;
  if (reCurrentFilter !== 'all') articles = articles.filter(a => a.cats.includes(reCurrentFilter));
  if (q) articles = articles.filter(a => ((a.title||'')+(a.description||'')).toLowerCase().includes(q));
  if (reActiveKeyword) articles = articles.filter(a => ((a.title||'')+(a.description||'')).toLowerCase().includes(reActiveKeyword));
  renderReNews(articles);
}

function renderReNews(articles) {
  const el = document.getElementById('reNewsList');
  if (!articles.length) {
    el.innerHTML = `<div class="ddu-state"><img src="/logo.png" alt="뚜"/><div class="ddu-msg">해당 조건의 기사가 없습니다</div></div>`;
    return;
  }
  el.innerHTML = articles.slice(0, 50).map(a => {
    const cls = a.impact === 'high' ? 'high-impact' : a.impact === 'medium' ? 'medium-impact' : '';
    const tags = [];
    if (a.impact === 'high') tags.push(`<span class="tag impact-high">${currentLang==='en'?'🔴 Surge/Drop':t('filter_high')}</span>`);
    else if (a.impact === 'medium') tags.push(`<span class="tag impact-med">${t('filter_medium')}</span>`);
    const pt = getRePointTag(a);
    if (pt) tags.push(`<span class="tag point">💡 ${pt}</span>`);
    a.cats.forEach(c => tags.push(`<span class="tag category">${getReCatLabel(c)}</span>`));
    a.regions.slice(0,3).forEach(r => tags.push(`<span class="tag entity-gov">📍 ${r}</span>`));
    const time = a.pubDate ? timeAgo(new Date(a.pubDate)) : '';
    const safeLink = /^https?:\/\//.test(a.link) ? a.link : '#';
    const desc = (a.description || '').substring(0, 150);
    return `<div class="news-card ${cls}" onclick="window.open('${safeLink}','_blank')">
      <div class="card-header">
        <span class="card-source">${a.sourceName}</span>
        <span class="card-time">${time}</span>
      </div>
      <a class="card-title" href="${safeLink}" target="_blank" onclick="event.stopPropagation()">${a.title || '제목 없음'}</a>
      ${desc ? `<div class="card-summary">${desc}...</div>` : ''}
      <div class="card-tags">${tags.join('')}</div>
    </div>`;
  }).join('');
}

function reUpdateSidebar() {
  // 동향 TOP 5
  const causeScore = {}, causeCounts = {};
  const _isEn = currentLang === 'en';
  const causeMap = {
    [_isEn?'Apt Price Rising'  :'아파트값 상승']: ['급등','폭등','신고가','최고가','상승'],
    [_isEn?'Apt Price Falling' :'아파트값 하락']: ['급락','폭락','신저가','하락','붕괴'],
    [_isEn?'Lease Instability' :'전세 불안']:     ['역전세','전세사기','깡통','전세난'],
    [_isEn?'Policy Change'     :'규제 변화']:     ['규제','완화','강화','LTV','DSR'],
    [_isEn?'Pre-sale/Supply'   :'청약/공급']:     ['청약','분양','미분양','공급'],
    [_isEn?'Redevelopment'     :'재건축/재개발']: ['재건축','재개발','정비'],
    [_isEn?'Rate Impact'       :'금리 영향']:     ['금리','대출','이자'],
  };
  for (const a of reAllArticles) {
    const text = ((a.title||'')+(a.description||'')).toLowerCase();
    for (const [cause, kws] of Object.entries(causeMap)) {
      if (kws.some(k => text.includes(k))) {
        causeScore[cause] = (causeScore[cause]||0) + a.score + 1;
        causeCounts[cause] = (causeCounts[cause]||0) + 1;
      }
    }
  }
  const sorted = Object.entries(causeScore).sort((a,b)=>b[1]-a[1]).slice(0,5);
  document.getElementById('reCauseList').innerHTML = sorted.length
    ? sorted.map(([cause,],i) => `
        <div class="cause-item">
          <div class="cause-rank ${i===0?'':(i===1?'orange':'gray')}">${i+1}</div>
          <div>
            <div class="cause-text">${cause}</div>
            <div class="cause-count">${causeCounts[cause]}${_isEn?' mentions':' 건 언급'}</div>
          </div>
        </div>`).join('')
    : `<div style="color:var(--muted);font-size:0.8rem">${_isEn?'Insufficient data':'데이터 부족'}</div>`;

  // 키워드 클라우드
  const kwCount = {};
  for (const a of reAllArticles) {
    for (const kw of [...a.matchedHigh, ...a.matchedMed, ...a.regions]) {
      kwCount[kw] = (kwCount[kw]||0) + 1;
    }
  }
  const sortedKw = Object.entries(kwCount).sort((a,b)=>b[1]-a[1]).slice(0,20);
  document.getElementById('reKeywordCloud').innerHTML = sortedKw.length
    ? sortedKw.map(([kw,cnt]) =>
        `<span class="keyword-chip ${reActiveKeyword===kw?'active':''}" onclick="reToggleKeyword('${kw}')">${kw}<span class="kw-count">${cnt}</span></span>`
      ).join('')
    : '<div style="color:var(--muted);font-size:0.8rem">데이터 없음</div>';
}

function reToggleKeyword(kw) {
  reActiveKeyword = reActiveKeyword === kw ? null : kw;
  reUpdateSidebar();
  reFilterAndRender();
}

function reRenderSourceStatus() {
  document.getElementById('reSourceList').innerHTML = Object.entries(reSourceStatus).map(([name, st]) =>
    `<div class="source-item">
      <span class="source-name">${name}</span>
      <span class="source-badge ${st}">${st==='ok'?'연결됨':'실패'}</span>
    </div>`
  ).join('');
}

// ─── COIN TAB ─────────────────────────────────────────────────────────────────
const COIN_HIGH_KW = [
  'bitcoin','btc','비트코인','이더리움','ethereum','eth','halving','반감기',
  'etf','sec','regulation','규제','crypto crash','급락','급등','ban','금지',
  'blackrock','fidelity','strategic reserve','전략적 준비금','자산',
];
const COIN_MED_KW = [
  'solana','sol','ripple','xrp','dogecoin','doge','cardano','ada','polygon','matic',
  'altcoin','defi','nft','stablecoin','usdt','usdc','staking','mining','채굴',
  '가상자산','암호화폐','crypto','blockchain','블록체인','wallet','거래소','exchange',
  'coinbase','binance','upbit','bithumb','빗썸','업비트','가상화폐','디지털자산',
  'layer2','web3','dao','airdrop','토큰','코인','pump','dump','bull','bear',
];
const COIN_CATS = {
  btc:        ['bitcoin','btc','비트코인','satoshi','사토시'],
  eth:        ['ethereum','eth','이더리움','vitalik','vitalik buterin'],
  altcoin:    ['solana','ripple','xrp','dogecoin','cardano','polygon','altcoin','알트코인'],
  regulation: ['regulation','sec','규제','ban','금지','법안','제도','irs','cftc','fsb'],
  etf:        ['etf','blackrock','fidelity','vaneck','ark invest','기관'],
  defi:       ['defi','staking','yield','liquidity','스테이킹','유동성','탈중앙'],
};

const COIN_EVENTS = [
  { name: '비트코인 4차 반감기', name_en: 'Bitcoin 4th Halving', date: '2024-04-20', magnitude: 92,
    statusLabel: '완료', statusLabel_en: 'Done', type: 'past',
    desc: '비트코인 블록 보상 6.25→3.125 BTC 감소. 역사적으로 반감기 후 12~18개월 강세장.',
    desc_en: 'Block reward cut from 6.25→3.125 BTC. Historically, bull markets follow within 12–18 months.',
    mechanisms: ['공급 감소','채굴자 수익','장기 가격 상승 압력'],
    mechanisms_en: ['Supply reduction','Miner revenue impact','Long-term price pressure'] },
  { name: '미국 비트코인 현물 ETF 승인', name_en: 'US Bitcoin Spot ETF Approved', date: '2024-01-10', magnitude: 95,
    statusLabel: '완료', statusLabel_en: 'Done', type: 'past',
    desc: 'SEC가 블랙록·피델리티 등 11개 비트코인 현물 ETF 동시 승인. 기관 자금 유입 가속화.',
    desc_en: 'SEC simultaneously approved 11 Bitcoin spot ETFs incl. BlackRock & Fidelity. Institutional inflows accelerated.',
    mechanisms: ['기관 수요 급증','유동성 확대','가격 상승 촉매'],
    mechanisms_en: ['Institutional demand surge','Liquidity expansion','Price catalyst'] },
  { name: '미국 이더리움 현물 ETF 승인', name_en: 'US Ethereum Spot ETF Approved', date: '2024-05-23', magnitude: 80,
    statusLabel: '완료', statusLabel_en: 'Done', type: 'past',
    desc: 'SEC가 이더리움 현물 ETF 승인. ETH 가격과 DeFi 생태계 성장 기대.',
    desc_en: 'SEC approved Ethereum spot ETF. Expected to boost ETH price and DeFi ecosystem growth.',
    mechanisms: ['ETH 수요 증가','기관 진입','DeFi 성장'],
    mechanisms_en: ['ETH demand growth','Institutional entry','DeFi expansion'] },
  { name: '미국 BTC 전략적 준비금 검토', name_en: 'US BTC Strategic Reserve', date: '2025-03-06', magnitude: 85,
    statusLabel: '진행중', statusLabel_en: 'Ongoing', type: 'ongoing',
    desc: '트럼프 행정부가 국가 전략 비트코인 준비금 설립 행정명령 서명. 각국 영향 주목.',
    desc_en: 'Trump administration signed executive order to establish a national Bitcoin strategic reserve. Global impact watched closely.',
    mechanisms: ['국가 보유 수요','글로벌 경쟁','가격 하방 지지'],
    mechanisms_en: ['Sovereign demand','Global competition','Price floor support'] },
  { name: '이더리움 Pectra 업그레이드', name_en: 'Ethereum Pectra Upgrade', date: '2025-05-07', magnitude: 70,
    statusLabel: '완료', statusLabel_en: 'Done', type: 'past',
    desc: '이더리움 Pectra 하드포크. 계정 추상화·스테이킹 한도 확대·L2 확장성 개선.',
    desc_en: 'Ethereum Pectra hard fork. Account abstraction, expanded staking limits, improved L2 scalability.',
    mechanisms: ['확장성 향상','가스비 감소','UX 개선'],
    mechanisms_en: ['Scalability boost','Lower gas fees','UX improvement'] },
  { name: '글로벌 크립토 규제 통합', name_en: 'Global Crypto Regulation Framework', date: '2025-12-31', magnitude: 75,
    statusLabel: '예정', statusLabel_en: 'Upcoming', type: 'upcoming',
    desc: 'EU MiCA 전면 시행, 미국 FIT21 법안 등 주요국 규제 틀 완성. 제도화 가속.',
    desc_en: 'EU MiCA full enforcement, US FIT21 bill and other major-country frameworks finalize. Institutionalization accelerates.',
    mechanisms: ['규제 명확성','기관 진입 허들 낮춤','스테이블코인 규제'],
    mechanisms_en: ['Regulatory clarity','Lower institutional barriers','Stablecoin rules'] },
  { name: '비트코인 5차 반감기 (예상)', name_en: 'Bitcoin 5th Halving (Expected)', date: '2028-03-01', magnitude: 88,
    statusLabel: '예정', statusLabel_en: 'Upcoming', type: 'upcoming',
    desc: '비트코인 5차 반감기 예상. 블록 보상 3.125→1.5625 BTC로 감소.',
    desc_en: 'Expected 5th Bitcoin halving. Block reward drops from 3.125→1.5625 BTC.',
    mechanisms: ['공급 추가 감소','채굴 난이도','장기 희소성'],
    mechanisms_en: ['Further supply cut','Mining difficulty','Long-term scarcity'] },
];

let coinAllArticles = [];
let coinCurrentFilter = 'all';
let coinActiveKeyword = null;
const coinSourceStatus = {};

function scoreCoinArticle(item) {
  const text = ((item.title || '') + ' ' + (item.description || '')).toLowerCase();
  let score = 0;
  const matchedHigh = [], matchedMed = [];
  for (const kw of COIN_HIGH_KW) { if (text.includes(kw)) { score += 3; matchedHigh.push(kw); } }
  for (const kw of COIN_MED_KW)  { if (text.includes(kw)) { score += 1; matchedMed.push(kw); } }
  const cats = [];
  for (const [cat, kws] of Object.entries(COIN_CATS)) {
    if (kws.some(k => text.includes(k))) cats.push(cat);
  }
  const impact = score >= 6 ? 'high' : score >= 2 ? 'medium' : 'low';
  return { ...item, score, impact, cats, matchedHigh: [...new Set(matchedHigh)], matchedMed: [...new Set(matchedMed)] };
}

function getCoinCatLabel(cat) {
  return { btc:'비트코인', eth:'이더리움', altcoin:'알트코인', regulation:'규제', etf:'ETF/기관', defi:'DeFi' }[cat] || cat;
}

function getCoinPointTag(a) {
  const text = ((a.title||'')+(a.description||'')).toLowerCase();
  if (a.matchedHigh.some(k => ['halving','반감기'].includes(k))) return '반감기';
  if (a.matchedHigh.some(k => ['etf'].includes(k))) return 'ETF 이슈';
  if (a.matchedHigh.some(k => ['ban','금지','regulation','규제'].includes(k))) return '규제 리스크';
  if (a.matchedHigh.some(k => ['sec'].includes(k))) return 'SEC 동향';
  if (a.matchedHigh.some(k => ['strategic reserve','전략적 준비금'].includes(k))) return '국가 준비금';
  if (text.includes('급등') || text.includes('surges') || text.includes('soars')) return '급등';
  if (text.includes('급락') || text.includes('crash') || text.includes('drops')) return '급락';
  if (a.matchedMed.some(k => ['defi','staking','스테이킹'].includes(k))) return 'DeFi/스테이킹';
  if (a.matchedMed.some(k => ['nft'].includes(k))) return 'NFT';
  return null;
}

async function loadCoinNews() {
  try {
    const res = await fetch('/api/coin', { signal: AbortSignal.timeout(20000) });
    const data = await res.json();
    let raw = [];
    for (const src of data.sources) {
      coinSourceStatus[src.name] = src.ok ? 'ok' : 'fail';
      raw = raw.concat(src.items);
    }
    const seen = new Set();
    const unique = [];
    for (const item of raw) {
      const key = (item.title || '').substring(0, 60).toLowerCase().trim();
      if (!seen.has(key) && key.length > 5) { seen.add(key); unique.push(item); }
    }
    coinAllArticles = unique
      .map(scoreCoinArticle)
      .filter(a => a.score >= 1)
      .sort((a, b) => b.score - a.score || new Date(b.pubDate) - new Date(a.pubDate));
  } catch(e) {
    document.getElementById('coinNewsList').innerHTML = `<div class="ddu-state"><img src="/logo.png" alt="뚜" style="filter:grayscale(0.5)"/><div class="ddu-msg">뚜가 연결에 실패했어요 😿</div></div>`;
    return;
  }
  coinRenderSourceStatus();
  coinUpdateSidebar();
  coinFilterAndRender();
  updateKeyFactor('coin');
  renderCoinEvents();
}

function coinSetFilter(btn, filter) {
  coinCurrentFilter = filter;
  document.querySelectorAll('[data-coinfilter]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  coinFilterAndRender();
}

function coinFilterAndRender() {
  const q = document.getElementById('coinSearchInput').value.toLowerCase().trim();
  let articles = coinAllArticles;
  if (coinCurrentFilter !== 'all') articles = articles.filter(a => a.cats.includes(coinCurrentFilter));
  if (q) articles = articles.filter(a => ((a.title||'')+(a.description||'')).toLowerCase().includes(q));
  if (coinActiveKeyword) articles = articles.filter(a => ((a.title||'')+(a.description||'')).toLowerCase().includes(coinActiveKeyword));
  renderCoinNews(articles);
}

function renderCoinNews(articles) {
  const el = document.getElementById('coinNewsList');
  if (!articles.length) {
    el.innerHTML = `<div class="ddu-state"><img src="/logo.png" alt="뚜"/><div class="ddu-msg">해당 조건의 기사가 없습니다</div></div>`;
    return;
  }
  el.innerHTML = articles.slice(0, 60).map(a => {
    const cls = a.impact === 'high' ? 'high-impact' : a.impact === 'medium' ? 'medium-impact' : '';
    const tags = [];
    if (a.impact === 'high') tags.push(`<span class="tag impact-high">${t('filter_high')}</span>`);
    else if (a.impact === 'medium') tags.push(`<span class="tag impact-med">${t('filter_medium')}</span>`);
    const pt = getCoinPointTag(a);
    if (pt) tags.push(`<span class="tag point">💡 ${pt}</span>`);
    a.cats.forEach(c => tags.push(`<span class="tag category">${getCoinCatLabel(c)}</span>`));
    const time = a.pubDate ? timeAgo(new Date(a.pubDate)) : '';
    const safeLink = /^https?:\/\//.test(a.link) ? a.link : '#';
    const desc = (a.description || '').substring(0, 150);
    return `<div class="news-card ${cls}" onclick="window.open('${safeLink}','_blank')">
      <div class="card-header">
        <span class="card-source">${a.sourceName}</span>
        <span class="card-time">${time}</span>
      </div>
      <a class="card-title" href="${safeLink}" target="_blank" onclick="event.stopPropagation()">${a.title || '제목 없음'}</a>
      ${desc ? `<div class="card-summary">${desc}...</div>` : ''}
      <div class="card-tags">${tags.join('')}</div>
    </div>`;
  }).join('');
}

function coinUpdateSidebar() {
  const causeScore = {}, causeCounts = {};
  const _isEn = currentLang === 'en';
  const causeMap = {
    [_isEn?'BTC Bullish' :'BTC 강세']:    ['bitcoin surges','btc soars','비트코인 상승','bull'],
    [_isEn?'BTC Bearish' :'BTC 약세']:    ['bitcoin falls','btc drops','비트코인 하락','crash','dump'],
    [_isEn?'Regulation'  :'규제 이슈']:   ['regulation','sec','ban','규제','금지'],
    [_isEn?'ETF/Inst.'   :'ETF/기관']:    ['etf','blackrock','fidelity','institutional','기관'],
    [_isEn?'Halving'     :'반감기 관련']: ['halving','반감기'],
    [_isEn?'Altcoins'    :'알트코인']:    ['altcoin','solana','ethereum','알트','이더리움'],
    'DeFi/NFT':                           ['defi','nft','staking','스테이킹'],
  };
  for (const a of coinAllArticles) {
    const text = ((a.title||'')+(a.description||'')).toLowerCase();
    for (const [cause, kws] of Object.entries(causeMap)) {
      if (kws.some(k => text.includes(k))) {
        causeScore[cause] = (causeScore[cause]||0) + a.score + 1;
        causeCounts[cause] = (causeCounts[cause]||0) + 1;
      }
    }
  }
  const sorted = Object.entries(causeScore).sort((a,b)=>b[1]-a[1]).slice(0,5);
  document.getElementById('coinCauseList').innerHTML = sorted.length
    ? sorted.map(([cause,],i) => `
        <div class="cause-item">
          <div class="cause-rank ${i===0?'':(i===1?'orange':'gray')}">${i+1}</div>
          <div>
            <div class="cause-text">${cause}</div>
            <div class="cause-count">${causeCounts[cause]}${_isEn?' mentions':' 건 언급'}</div>
          </div>
        </div>`).join('')
    : `<div style="color:var(--muted);font-size:0.8rem">${_isEn?'Insufficient data':'데이터 부족'}</div>`;

  const kwCount = {};
  for (const a of coinAllArticles) {
    for (const kw of [...a.matchedHigh, ...a.matchedMed]) {
      kwCount[kw] = (kwCount[kw]||0) + 1;
    }
  }
  const sortedKw = Object.entries(kwCount).sort((a,b)=>b[1]-a[1]).slice(0,20);
  document.getElementById('coinKeywordCloud').innerHTML = sortedKw.length
    ? sortedKw.map(([kw,cnt]) =>
        `<span class="keyword-chip ${coinActiveKeyword===kw?'active':''}" onclick="coinToggleKeyword('${kw}')">${kw}<span class="kw-count">${cnt}</span></span>`
      ).join('')
    : '<div style="color:var(--muted);font-size:0.8rem">데이터 없음</div>';
}

function coinToggleKeyword(kw) {
  coinActiveKeyword = coinActiveKeyword === kw ? null : kw;
  coinUpdateSidebar();
  coinFilterAndRender();
}

function coinRenderSourceStatus() {
  document.getElementById('coinSourceList').innerHTML = Object.entries(coinSourceStatus).map(([name, st]) =>
    `<div class="source-item">
      <span class="source-name">${name}</span>
      <span class="source-badge ${st}">${st==='ok'?t('source_ok'):t('source_fail')}</span>
    </div>`
  ).join('');
}

function renderCoinEvents() {
  const el = document.getElementById('coinEventList');
  if (!el) return;
  const isEn = currentLang === 'en';
  const sorted = [...COIN_EVENTS].sort((a,b) => b.magnitude - a.magnitude);
  el.innerHTML = sorted.map(ev => {
    const typeColor = ev.type === 'past' ? 'gray' : ev.type === 'ongoing' ? '' : 'orange';
    const statusLabel = isEn ? (ev.statusLabel_en || ev.statusLabel) : ev.statusLabel;
    const name = isEn ? (ev.name_en || ev.name) : ev.name;
    const desc = isEn ? (ev.desc_en || ev.desc) : ev.desc;
    const mechs = isEn ? (ev.mechanisms_en || ev.mechanisms) : ev.mechanisms;
    const shockLabel = isEn ? `G ${ev.magnitude} · KR ${ev.magnitude_kr ?? ev.magnitude}` : `글로벌 ${ev.magnitude} · 한국 ${ev.magnitude_kr ?? ev.magnitude}`;
    return `<div class="event-mini-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-weight:600;font-size:0.82rem">${name}</span>
        <span class="cause-rank ${typeColor}" style="font-size:0.7rem;min-width:40px;text-align:center">${statusLabel}</span>
      </div>
      <div style="color:var(--muted);font-size:0.75rem;margin-bottom:4px">${desc.substring(0,90)}...</div>
      <div style="display:flex;gap:4px;flex-wrap:wrap">
        ${mechs.map(m=>`<span class="tag category" style="font-size:0.68rem">${m}</span>`).join('')}
        <span class="tag" style="font-size:0.68rem;color:var(--accent)">${shockLabel}</span>
      </div>
    </div>`;
  }).join('');
}

// ─── KATARINA ─────────────────────────────────────────────────────────────────
function kataOpen() {
  document.getElementById('kataOverlay').classList.add('open');
  setTimeout(() => document.getElementById('kataInput').focus(), 100);
  if (!reLoaded) { reLoaded = true; loadReNews(); }
  if (!coinLoaded) { coinLoaded = true; loadCoinNews(); }
}
function kataClose() {
  document.getElementById('kataOverlay').classList.remove('open');
}
function kataOverlayClick(e) {
  if (e.target === document.getElementById('kataOverlay')) kataClose();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') kataClose(); });

function kataFill(text) {
  document.getElementById('kataInput').value = text;
  document.getElementById('kataHint').style.display = 'none';
  kataSearch();
}

function kataSearch() {
  const q = document.getElementById('kataInput').value.toLowerCase().trim();
  document.getElementById('kataHint').style.display = q ? 'none' : 'flex';
  const el = document.getElementById('kataResults');

  if (!q) {
    el.innerHTML = '<div class="katarina-empty">검색어를 입력하면 모든 탭에서 결과를 찾아드립니다.</div>';
    return;
  }

  // 1. 주식 뉴스
  const newsHits = allArticles.filter(a =>
    ((a.title||'')+(a.description||'')).toLowerCase().includes(q)
  ).slice(0, 8);

  // 2. 코인
  const coinHits = coinAllArticles.filter(a =>
    ((a.title||'')+(a.description||'')).toLowerCase().includes(q)
  ).slice(0, 8);

  // 3. 부동산
  const reHits = reAllArticles.filter(a =>
    ((a.title||'')+(a.description||'')).toLowerCase().includes(q)
  ).slice(0, 8);

  // 4. 대형 이벤트
  const eventHits = [...MAJOR_EVENTS, ...COIN_EVENTS].filter(e =>
    (e.name + e.desc + e.mechanisms.join(' ')).toLowerCase().includes(q)
  ).slice(0, 4);

  const total = newsHits.length + coinHits.length + reHits.length + eventHits.length;
  if (total === 0) {
    el.innerHTML = `<div class="katarina-empty">「${q}」에 대한 결과가 없습니다.<br><span style="font-size:0.75rem">다른 키워드로 검색해보세요.</span></div>`;
    return;
  }

  let html = '';

  if (newsHits.length) {
    html += `<div class="katarina-section-title">📰 뉴스 분석 <span class="katarina-count">${newsHits.length}</span></div>`;
    html += newsHits.map(a => {
      const safeLink = /^https?:\/\//.test(a.link) ? a.link : '#';
      const time = a.pubDate ? timeAgo(new Date(a.pubDate)) : '';
      return `<a class="katarina-item" href="${safeLink}" target="_blank">
        <div class="katarina-item-title">${highlight(a.title||'', q)}</div>
        <div class="katarina-item-meta"><span>${a.sourceName}</span><span>${time}</span></div>
      </a>`;
    }).join('');
  }

  if (coinHits.length) {
    html += `<div class="katarina-section-title">₿ 코인 <span class="katarina-count">${coinHits.length}</span></div>`;
    html += coinHits.map(a => {
      const safeLink = /^https?:\/\//.test(a.link) ? a.link : '#';
      const time = a.pubDate ? timeAgo(new Date(a.pubDate)) : '';
      return `<a class="katarina-item" href="${safeLink}" target="_blank">
        <div class="katarina-item-title">${highlight(a.title||'', q)}</div>
        <div class="katarina-item-meta"><span>${a.sourceName}</span><span>${time}</span></div>
      </a>`;
    }).join('');
  }

  if (reHits.length) {
    html += `<div class="katarina-section-title">🏠 부동산 <span class="katarina-count">${reHits.length}</span></div>`;
    html += reHits.map(a => {
      const safeLink = /^https?:\/\//.test(a.link) ? a.link : '#';
      const time = a.pubDate ? timeAgo(new Date(a.pubDate)) : '';
      return `<a class="katarina-item" href="${safeLink}" target="_blank">
        <div class="katarina-item-title">${highlight(a.title||'', q)}</div>
        <div class="katarina-item-meta"><span>${a.sourceName}</span><span>${time}</span></div>
      </a>`;
    }).join('');
  }

  if (eventHits.length) {
    html += `<div class="katarina-section-title">🚀 대형 이벤트 <span class="katarina-count">${eventHits.length}</span></div>`;
    html += eventHits.map(e =>
      `<div class="katarina-item" onclick="document.querySelector('[onclick*=\\'events\\']').click();kataClose()">
        <div class="katarina-item-title">${highlight(e.name, q)}</div>
        <div class="katarina-item-meta"><span>${e.statusLabel}</span><span>글로벌 ${e.magnitude} · 한국 ${e.magnitude_kr ?? e.magnitude}</span></div>
      </div>`
    ).join('');
  }

  el.innerHTML = html;
}

function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(99,102,241,0.3);color:#c7d2fe;border-radius:2px;padding:0 2px">$1</mark>');
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
applyLang();
renderSourceStatus();
renderEvents();
loadEvents();

// 모바일: 사이드바 카드 접기/펴기
if (window.innerWidth <= 900) {
  document.querySelectorAll('.sidebar-card').forEach(c => c.classList.add('collapsed'));
}
document.addEventListener('click', e => {
  const title = e.target.closest('.sidebar-title');
  if (title && window.innerWidth <= 900) title.parentElement.classList.toggle('collapsed');
});
renderBrokers();
loadAllNews();
loadMarketData();
setInterval(loadAllNews, 5 * 60 * 1000);
setInterval(loadMarketData, 60 * 1000);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}


// ── SpaceX IPO 카운트다운 (예상: 2026년 말 기준)
const SPACEX_IPO_DATE = new Date('2026-06-12T09:30:00-04:00'); // 뉴욕 시간 09:30 (한국 22:30)
function updateCountdown() {
  const daysEl = document.getElementById('cdDays');
  if (!daysEl) return; // DOM 없으면 스킵
  const now = new Date();
  const diff = SPACEX_IPO_DATE - now;
  const isEn = currentLang === 'en';

  const MARKET_CLOSE = new Date('2026-06-13T04:00:00+09:00'); // 미장 마감 한국시간 오전 5시 (서머타임 4시)
  if (diff <= 0) {
    if (now < MARKET_CLOSE) {
      // 거래 중
      const section = document.getElementById('spacexCountdown');
      if (section) section.style.background = 'linear-gradient(135deg,rgba(15,23,17,0.95),rgba(20,40,25,0.95))';
      daysEl.textContent = '📈';
      document.getElementById('cdHours').textContent = isEn ? 'LIVE' : '거래';
      document.getElementById('cdMins').textContent = isEn ? 'NOW' : '중';
      document.getElementById('cdSecs').textContent = '!';
      document.getElementById('cdSub').textContent = isEn ? 'SpaceX is trading now · NASDAQ' : '지금 NASDAQ에서 거래 중';
      document.getElementById('cdBadge').style.background = 'rgba(52,211,153,0.2)';
      document.getElementById('cdBadge').style.color = '#34d399';
      document.getElementById('cdBadge').style.borderColor = 'rgba(52,211,153,0.4)';
      document.getElementById('cdBadge').textContent = isEn ? 'LIVE' : '거래중';
    } else {
      // 마감 후 위젯 숨김
      const section = document.getElementById('spacexCountdown');
      if (section) section.style.display = 'none';
    }
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  daysEl.textContent = d;
  document.getElementById('cdHours').textContent = String(h).padStart(2,'0');
  document.getElementById('cdMins').textContent = String(m).padStart(2,'0');
  document.getElementById('cdSecs').textContent = String(s).padStart(2,'0');
  document.getElementById('cdSub').textContent = isEn ? '2026.06.12 (Fri) · KST 22:30  ·  IPO Price $135' : '2026.06.12 (금) · 한국시간 오후 10:30';
  document.getElementById('cdBadge').textContent = isEn ? 'Confirmed' : '확정';
  document.querySelectorAll('[data-i18n="cd_days"]').forEach(e => e.textContent = isEn ? 'Days' : '일');
  document.querySelectorAll('[data-i18n="cd_hours"]').forEach(e => e.textContent = isEn ? 'Hrs' : '시간');
  document.querySelectorAll('[data-i18n="cd_mins"]').forEach(e => e.textContent = isEn ? 'Min' : '분');
  document.querySelectorAll('[data-i18n="cd_secs"]').forEach(e => e.textContent = isEn ? 'Sec' : '초');
}
// 페이지 로드 즉시 + 1초마다 갱신
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateCountdown);
} else {
  updateCountdown();
}
setInterval(updateCountdown, 1000);

// ── Pull-to-refresh
(function() {
  let startY = 0, pulling = false, indicator = null;

  function getIndicator() {
    if (!indicator) {
      indicator = document.createElement('div');
      indicator.id = 'ptr-indicator';
      indicator.style.cssText = `
        position:fixed;top:0;left:0;right:0;z-index:9999;
        display:flex;align-items:center;justify-content:center;
        height:0;overflow:hidden;background:var(--accent);
        transition:height 0.15s;font-size:1.2rem;color:white;
        font-weight:700;letter-spacing:0.05em;
      `;
      document.body.appendChild(indicator);
    }
    return indicator;
  }

  document.addEventListener('touchstart', e => {
    if (window.scrollY === 0) {
      startY = e.touches[0].clientY;
      pulling = true;
    }
  }, { passive: true });

  document.addEventListener('touchmove', e => {
    if (!pulling) return;
    const dist = e.touches[0].clientY - startY;
    if (dist < 0) { pulling = false; return; }
    const el = getIndicator();
    const h = Math.min(dist * 0.4, 56);
    el.style.height = h + 'px';
    el.textContent = dist > 80 ? '↓ 놓으면 새로고침' : '↓ 당겨서 새로고침';
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (!pulling) return;
    pulling = false;
    const dist = e.changedTouches[0].clientY - startY;
    const el = getIndicator();
    if (dist > 80) {
      el.style.height = '44px';
      el.textContent = '🔄 새로고침 중...';
      loadAllNews();
      loadMarketData();
      setTimeout(() => { el.style.height = '0'; }, 1200);
    } else {
      el.style.height = '0';
    }
  }, { passive: true });
})();

// ── 로고 클릭 → 홈(뉴스 탭, 전체 필터, 맨 위)
function goHome() {
  const newsTabBtn = document.querySelector('.tab-btn[onclick*="news"]');
  if (newsTabBtn) newsTabBtn.click();
  const allFilterBtn = document.querySelector('[data-filter="all"]');
  if (allFilterBtn) allFilterBtn.click();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── PWA 설치 버튼
let _installPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _installPrompt = e;
  const btn = document.getElementById('installBtn');
  if (btn) btn.style.display = '';
});
window.addEventListener('appinstalled', () => {
  const btn = document.getElementById('installBtn');
  if (btn) btn.style.display = 'none';
  _installPrompt = null;
});
function triggerInstall() {
  if (!_installPrompt) return;
  _installPrompt.prompt();
  _installPrompt.userChoice.then(() => { _installPrompt = null; });
}
