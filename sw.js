const CACHE_NAME = 'compass-life-v2.0';

// Все файлы, которые должны кэшироваться
const FILES_TO_CACHE = [
  './',
  './index.html',
  './404.html',
  './manifest.json',
  './sw.js',
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
  './css/modules/learning.css',
  // HTML-файлы модулей
  './modules/purpose/index.html',
  './modules/happiness/index.html',
  './modules/habits/index.html',
  './modules/money/index.html',
  './modules/responsibility/index.html',
  './modules/health/index.html',
  './modules/relationships/index.html',
  './modules/creativity/index.html',
  './modules/learning/index.html',
  // Данные модулей (RU)
  './modules/purpose/data/passion.js',
  './modules/purpose/data/skills.js',
  './modules/happiness/data/blockers.js',
  './modules/happiness/data/energy_audit.js',
  './modules/habits/data/identity.js',
  './modules/habits/data/environment.js',
  './modules/money/data/os.js',
  './modules/money/data/audit.js',
  './modules/responsibility/data/commitments.js',
  './modules/responsibility/data/planning.js',
  './modules/health/data/sleep.js',
  './modules/health/data/nutrition.js',
  './modules/relationships/data/family.js',
  './modules/relationships/data/conflicts.js',
  './modules/creativity/data/channel.js',
  './modules/creativity/data/fear.js',
  './modules/learning/data/reading.js',
  './modules/learning/data/techniques.js',
  // Данные модулей (EN)
  './modules/purpose/data/en/passion-en.js',
  './modules/purpose/data/en/skills-en.js',
  './modules/happiness/data/en/blockers-en.js',
  './modules/happiness/data/en/energy_audit-en.js',
  './modules/habits/data/en/identity-en.js',
  './modules/habits/data/en/environment-en.js',
  './modules/money/data/en/os-en.js',
  './modules/money/data/en/audit-en.js',
  './modules/responsibility/data/en/commitments-en.js',
  './modules/responsibility/data/en/planning-en.js',
  './modules/health/data/en/sleep-en.js',
  './modules/health/data/en/nutrition-en.js',
  './modules/relationships/data/en/family-en.js',
  './modules/relationships/data/en/conflicts-en.js',
  './modules/creativity/data/en/channel-en.js',
  './modules/creativity/data/en/fear-en.js',
  './modules/learning/data/en/reading-en.js',
  './modules/learning/data/en/techniques-en.js'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(FILES_TO_CACHE.map(url =>
        fetch(url).then(r => {
          if (r.ok) cache.put(url, r.clone());
        }).catch(() => {})
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
