const CACHE_NAME = 'compass-life-v1-OFFLINE';
const JS_FILES = [
  './',
  './index.html',
  './404.html',
  './manifest.json',
  './core/locales.js',
  './core/registry.js',
  './core/engine.js',
  './core/theme.js',
  './core/progressEngine.js',
  './core/tracker.js',
  './core/app.js',
  './css/styles.css',
  './css/modules/purpose.css',
  './css/modules/happiness.css',
  './css/modules/habits.css',
  './css/modules/money.css',
  './css/modules/responsibility.css',
  './css/modules/health.css',
  './css/modules/relationships.css',
  './css/modules/creativity.css',
  './css/modules/learning.css'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(JS_FILES.map(url =>
        fetch(url).then(r => cache.put(url, r.clone())).catch(() => {})
      ));
    })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(network => {
        if(network && network.ok) {
          const clone = network.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return network;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
