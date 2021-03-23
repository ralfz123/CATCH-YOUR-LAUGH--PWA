const CORE_CACHE_NAME = 'site-static';
const CORE_ASSETS = [
  // '/favourites',
  '/offline',
  '/css/main.css',
  // 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap',
  // 'https://fonts.gstatic.com/s/quicksand/v22/6xKtdSZaM9iE8KbpRA_hJFQNYuDyP7bh.woff2',
];
// const CORE_WHITELIST = ['/favourites'];

self.addEventListener('install', (event) => {
  console.log('install');

  // Pre caching assets - Does not finish install event until this promise below is resolved
  event.waitUntil(
    caches
      .open(CORE_CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  // console.log('activate');
  // if er is --> update, dan eruit
  // check (if) naam overeen komt met en met id
  // online - fav no cache
  // offline - haal uit cache - update! // config --  er is nieuwe versie
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // console.log('fetch', event.request);

  // Saves visited pages/content and send offline page when internet is broken --> has to send offline when on home?
  if (
    event.request.mode === 'navigate' ||
    (event.request.method === 'GET' &&
      event.request.headers.get('accept').includes('text/html'))
  ) {
    const req = event.request;
    console.log('Fetching:' + req.url);

    // show cached request from cache
    event.respondWith(
      caches.match(req).then((cachedRes) => {
        if (cachedRes) {
          return cachedRes;
        }
        return fetch(req)
          .then((fetchRes) => fetchRes)
          .catch((err) => {
            return caches
              .open(CORE_CACHE_NAME)
              .then((cache) => cache.match('/offline'));
          });
      })
    );

    // save req to cache
    event.respondWith(
      caches.open(CORE_CACHE_NAME).then((cache) => {
        return cache
          .match(event.request)
          .then((response) => {
            if (response) {
              return response;
            }
            return fetch(event.request).then((response) => {
              cache.put(event.request, response.clone());
              return response;
            });
          })
          .catch((err) => {
            return caches
              .open(CORE_CACHE_NAME)
              .then((cache) => cache.match('/offline'));
          });
      })
    );
  }
});

// Fetch - source: https://deanhume.com/create-a-really-really-simple-offline-page-using-service-workers/
