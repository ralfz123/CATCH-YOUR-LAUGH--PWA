const staticCache = 'site-static';
const assets = [
  // '/',
  '/scripts/main.js',
  '/styles/main.css',
  './favicon.svg',
  'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap',
  'https://fonts.gstatic.com/s/quicksand/v22/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2',
];

self.addEventListener('install', (event) => {
  // console.log('install');

  // Pre caching assets
  // Does not finish install event until this promise below is resolved
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log('caching assets');
      cache.addAll(assets);
    })
  );

  // skipWaiting()
  // const cacheLoc = ['/offline.html'];
  // event.waitUntil(
  //   caches.open('my-cache').then(function (cache) {
  //     return cache.addAll(cacheLoc).then(() => self.skipWaiting());
  //   })
  // );
});

self.addEventListener('activate', (event) => {
  // console.log('activate');
});

self.addEventListener('fetch', (event) => {
  console.log('fetch', event.request);
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request);
    })
  );

  // Remove this code, because it has to be at the 'install' phase
  // event.respondWith(
  //   fetch(event.request).catch((error) => {
  //     return new Response('You are offline');
  //   })
  // );
});
