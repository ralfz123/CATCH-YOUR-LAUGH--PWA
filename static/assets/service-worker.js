const CORE_CACHE_NAME = 'site-static';
const CORE_ASSETS = [
  // '/favourites', // Only when there is data accessible
  '/offline',
  '/styles/main.css',
  '/assets/app-icons/offline_logo.svg',
  'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap',
  'https://fonts.gstatic.com/s/quicksand/v22/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2',
];
// const CORE_WHITELIST = ['/favourites'];

self.addEventListener('install', (event) => {
  console.log('install');

  // Pre caching assets - Does not finish install event until this promise below is resolved
  event.waitUntil(
    caches
      .open(CORE_CACHE_NAME)
      // console.log('caching assets');
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  // console.log('activate');
});

self.addEventListener('fetch', (event) => {
  // console.log('fetch', event.request);

  // Saves visited pages/content and send offline page when internet is broken --> has to send offline when on home?
  if (
    event.request.mode === 'navigate' ||
    (event.request.method === 'GET' &&
      event.request.headers.get('accept').includes('text/html'))
  ) {
    event.respondWith(
      caches.open(CORE_CACHE_NAME).then((cache) => {
        return (
          cache
            .match(event.request)
            .then((response) => {
              if (response) {
                return response;
              }

              // When offline, then take last visit '/favourites'
              // function that saves '/' && '/favourites' at the last moment the user has visited the page - update '/favourites'
              // Delete '/favourites/ from assets and add again (update pattern)

              // if (event.request.url.indexOf('/favourites')) {
              //   caches
              //     .open(CORE_CACHE_NAME)
              //     .then((cache) => cache.match('/favourites').delete);
              //   console.log(caches.open);
              // }


              // Adds page to cache assets
              return fetch(event.request).then((response) => {
                cache.put(event.request, response.clone());
                console.log('added to cache');
                return response;
              });
            })
            // When internet connection is broken and the page is not a cached asset, respond with /offline
            .catch((err) => {
              return caches
                .open(CORE_CACHE_NAME)
                .then((cache) => cache.match('/offline'));
            })
        );
      })
    );
  }
});

// Fetch
// Source: https://deanhume.com/create-a-really-really-simple-offline-page-using-service-workers/
// if (
//   event.request.mode === 'navigate' ||
//   (event.request.method === 'GET' &&
//     event.request.headers.get('accept').includes('text/html'))
// ) {
//   event.respondWith(
//     fetch(event.request.url).catch((error) => {
//       // Return the offline page
//       return caches.match(assets);
//     })
//   );
// } else {
//   // Respond with everything else if we can
//   event.respondWith(
//     caches.match(event.request).then(function (cacheRes) {
//       return cacheRes || fetch(event.request);
//     })
//   );
// }
