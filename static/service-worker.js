const staticCache = 'site-static';
const assets = [
  // '/favourites',
  // './favicon.svg',
  // '/scripts/main.js',
  // '/styles/main.css',
  // 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap',
  // 'https://fonts.gstatic.com/s/quicksand/v22/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2',
  // '../static',
  './offline.html',
];

self.addEventListener('install', (event) => {
  // console.log('install');

  // Pre caching assets
  // Does not finish install event until this promise below is resolved
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log('caching assets');
      cache.addAll(assets)
      .then(() => self.skipWaiting());
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
  // console.log('fetch', event.request);
  // event.respondWith(
  //   caches.match(event.request).then((cacheRes) => {
  //     return cacheRes || fetch(event.request);
  //   })
  // );

  // Source: https://deanhume.com/create-a-really-really-simple-offline-page-using-service-workers/

  if (
    event.request.mode === 'navigate' ||
    (event.request.method === 'GET' &&
      event.request.headers.get('accept').includes('text/html'))
  ) {
    event.respondWith(
      fetch(event.request.url).catch((error) => {
        // Return the offline page
        return caches.match(assets);
      })
    );
  } else {
    // Respond with everything else if we can
    event.respondWith(
      caches.match(event.request).then(function (cacheRes) {
        return cacheRes || fetch(event.request);
      })
    );
  }
});
