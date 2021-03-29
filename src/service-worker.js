const CORE_CACHE_VERSION = 'v4';
const urlsToCache = [
  '/offline',
  'css/main.css',
  'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap%27',
  'icons/offline_logo.svg',
];

self.addEventListener('install', (event) => {
  console.log('installing service worker');

  event.waitUntil(
    caches.open(CORE_CACHE_VERSION).then(function (cache) {
      return cache.addAll(urlsToCache).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('active');
  event.waitUntil(clients.claim());
});

// when worker fetches
self.addEventListener('fetch', (event) => {
  if (
    event.request.method === 'GET' &&
    event.request.destination === 'document'
  ) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches
          .open(CORE_CACHE_VERSION)
          .then((cache) => cache.match('/offline'));
      })
    );
  } else if (
    event.request.method === 'GET' &&
    event.request.destination === 'style'
  ) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches
          .open(CORE_CACHE_VERSION)
          .then((cache) => cache.match('css/main.css'));
      })
    );
  } else if (
    event.request.method === 'GET' &&
    event.request.destination === 'font'
  ) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches
          .open(CORE_CACHE_VERSION)
          .then((cache) =>
            cache.match(
              'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap%27'
            )
          );
      })
    );
  } else if (
    event.request.method === 'GET' &&
    event.request.destination === 'image'
  ) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches
          .open(CORE_CACHE_VERSION)
          .then((cache) => cache.match('icons/offline_logo.svg'));
      })
    );
  }
});
