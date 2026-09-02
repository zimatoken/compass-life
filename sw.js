// ============================================================
// SERVICE WORKER — КОМПАС ПО ЖИЗНИ v3.0
// ============================================================
// Стратегия: Cache First с сетевым обновлением (Stale-While-Revalidate)
// Кэшируются: HTML, CSS, JS, иконки, шрифты
// ============================================================

const CACHE_NAME = 'compass-life-v3.0.0';
const OFFLINE_CACHE = 'compass-life-offline-v3.0.0';

// ===== ФАЙЛЫ ДЛЯ КЭШИРОВАНИЯ =====
const STATIC_FILES = [
  // Главные файлы
  './',
  './index.html',
  './404.html',
  './manifest.json',
  './sw.js',
  
  // Core
  './core/locales.js',
  './core/registry.js',
  './core/engine.js',
  './core/theme.js',
  './core/progressEngine.js',
  './core/tracker.js',
  './core/app.js',
  
  // Стили
  './css/styles.css',
  
  // Стили модулей
  './css/modules/purpose.css',
  './css/modules/happiness.css',
  './css/modules/habits.css',
  './css/modules/money.css',
  './css/modules/responsibility.css',
  './css/modules/health.css',
  './css/modules/relationships.css',
  './css/modules/creativity.css',
  './css/modules/learning.css',
  
  // Иконки
  './assets/icons/icon-72.png',
  './assets/icons/icon-96.png',
  './assets/icons/icon-128.png',
  './assets/icons/icon-144.png',
  './assets/icons/icon-152.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-384.png',
  './assets/icons/icon-512.png',
  './assets/icons/icon-1024.png',
  './assets/icons/apple-touch-icon.png',
  
  // Изображения
  './assets/images/qr-code-compass.png'
];

// ===== ДИНАМИЧЕСКИЕ ФАЙЛЫ (добавляются по мере использования) =====
const DYNAMIC_PATTERNS = [
  /^.*\/modules\/.*\/index\.html$/,
  /^.*\/modules\/.*\/data\/.*\.js$/,
  /^.*\/modules\/.*\/data\/en\/.*\.js$/,
  /^.*\/modules\/.*\/css\/.*\.css$/,
  /^.*\/assets\/.*\.(png|jpg|jpeg|svg|webp|ico)$/,
  /^.*\/assets\/.*\.(woff|woff2|ttf|eot)$/
];

// ===== УСТАНОВКА =====
self.addEventListener('install', event => {
  console.log('[SW] 📦 Установка v3.0');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] 📥 Кэширование статики...');
        return cache.addAll(STATIC_FILES)
          .then(() => {
            console.log('[SW] ✅ Статика закэширована');
          })
          .catch(error => {
            console.error('[SW] ❌ Ошибка кэширования:', error);
          });
      })
      .then(() => {
        // Сразу активируем SW
        return self.skipWaiting();
      })
  );
});

// ===== АКТИВАЦИЯ =====
self.addEventListener('activate', event => {
  console.log('[SW] ⚡ Активация v3.0');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => {
              // Удаляем старые кэши (не начинающиеся с compass-life)
              const isOld = !name.startsWith('compass-life-');
              if (isOld) {
                console.log('[SW] 🗑️ Удаление старого кэша:', name);
              }
              return isOld;
            })
            .map(name => caches.delete(name))
        );
      })
      .then(() => {
        console.log('[SW] ✅ Кэши очищены');
        // Захватываем все клиенты
        return self.clients.claim();
      })
  );
});

// ===== ПЕРЕХВАТ ЗАПРОСОВ =====
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Пропускаем запросы к API и внешним ресурсам
  if (url.origin !== location.origin) {
    // Но кэшируем внешние иконки и шрифты (если нужно)
    if (url.hostname.includes('googleapis.com') || url.hostname.includes('gstatic.com')) {
      event.respondWith(handleExternalRequest(request));
      return;
    }
    return;
  }
  
  // Пропускаем запросы к аналитике и веб-сокетам
  if (url.pathname.includes('/analytics/') || url.pathname.includes('/socket.io/')) {
    return;
  }
  
  // Пропускаем запросы к расширениям браузера
  if (url.pathname.includes('chrome-extension://')) {
    return;
  }
  
  // Отвечаем на запросы
  event.respondWith(handleRequest(request));
});

// ===== ОБРАБОТЧИК ЗАПРОСОВ =====
async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Проверяем, является ли запрос навигационным (HTML)
  const isNavigation = request.mode === 'navigate';
  
  // Проверяем, является ли запрос статическим файлом
  const isStatic = STATIC_FILES.some(file => {
    const fileUrl = new URL(file, location.origin);
    return url.pathname === fileUrl.pathname;
  });
  
  // Проверяем, является ли запрос динамическим (модули, данные)
  const isDynamic = DYNAMIC_PATTERNS.some(pattern => pattern.test(url.pathname));
  
  try {
    // === Стратегия: Stale-While-Revalidate ===
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    
    // Если есть в кэше — возвращаем и обновляем в фоне
    if (cachedResponse) {
      // Для навигационных запросов проверяем обновления
      if (isNavigation) {
        // Обновляем в фоне
        updateCache(request, cache);
      }
      return cachedResponse;
    }
    
    // === Нет в кэше — загружаем из сети ===
    try {
      const networkResponse = await fetch(request);
      
      // Кэшируем успешные ответы (кроме навигационных, если не HTML)
      if (networkResponse && networkResponse.ok) {
        // Кэшируем только если это статика или динамический файл
        if (isStatic || isDynamic || isNavigation) {
          const clone = networkResponse.clone();
          cache.put(request, clone)
            .catch(() => {});
        }
      }
      
      return networkResponse;
    } catch (networkError) {
      // === Офлайн ===
      console.warn('[SW] ⚠️ Офлайн-режим для:', url.pathname);
      
      // Для навигационных запросов показываем офлайн-страницу
      if (isNavigation) {
        const offlinePage = await cache.match('./offline.html');
        if (offlinePage) {
          return offlinePage;
        }
        // Fallback — главная страница
        return cache.match('./index.html') || new Response('🚧 Офлайн-режим. Пожалуйста, проверьте соединение.', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }
      
      // Для статики — возвращаем заглушку
      if (isStatic) {
        return new Response('', { status: 404 });
      }
      
      // Для всего остального — выбрасываем ошибку
      throw networkError;
    }
  } catch (error) {
    console.error('[SW] ❌ Ошибка обработки запроса:', error);
    return new Response('Ошибка загрузки', { status: 500 });
  }
}

// ===== ОБНОВЛЕНИЕ КЭША В ФОНЕ =====
async function updateCache(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      const clone = networkResponse.clone();
      cache.put(request, clone)
        .catch(() => {});
    }
  } catch (error) {
    // Игнорируем ошибки фонового обновления
  }
}

// ===== ОБРАБОТКА ВНЕШНИХ ЗАПРОСОВ =====
async function handleExternalRequest(request) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);
    if (cached) return cached;
    
    const network = await fetch(request);
    if (network && network.ok) {
      const clone = network.clone();
      cache.put(request, clone).catch(() => {});
    }
    return network;
  } catch {
    return new Response('', { status: 404 });
  }
}

// ===== СООБЩЕНИЯ ОТ КЛИЕНТА =====
self.addEventListener('message', event => {
  const data = event.data;
  
  if (data && data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (data && data.type === 'CLEAR_CACHE') {
    caches.keys()
      .then(keys => {
        return Promise.all(
          keys
            .filter(name => name.includes('compass-life-'))
            .map(name => caches.delete(name))
        );
      })
      .then(() => {
        event.ports[0].postMessage({ success: true });
      });
  }
});

// ===== ОБНОВЛЕНИЕ ПРИ ОНЛАЙН =====
self.addEventListener('online', () => {
  console.log('[SW] 📡 Соединение восстановлено');
  // Можно обновить кэш
});

console.log('[SW] ✅ Service Worker v3.0 загружен');
