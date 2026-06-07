const CACHE = 'ddu-v6';
const SHELL = ['/', '/index.html', '/about.html', '/privacy.html', '/logo.png', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // API는 항상 네트워크 우선 (실시간 뉴스)
  if (url.pathname.startsWith('/api/')) {
    e.respondWith(fetch(e.request).catch(() => new Response('[]')));
    return;
  }

  // 셸 파일은 캐시 우선, 실패 시 네트워크
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
