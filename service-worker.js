const CACHE = 'ddu-v7';
const SHELL = ['/', '/index.html', '/about.html', '/privacy.html', '/logo.png', '/icon-192.png', '/icon-512.png', '/manifest.json'];

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

  // API????긽 ?ㅽ듃?뚰겕 ?곗꽑 (?ㅼ떆媛??댁뒪)
  if (url.pathname.startsWith('/api/')) {
    e.respondWith(fetch(e.request).catch(() => new Response('[]')));
    return;
  }

  // ???뚯씪? 罹먯떆 ?곗꽑, ?ㅽ뙣 ???ㅽ듃?뚰겕
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
