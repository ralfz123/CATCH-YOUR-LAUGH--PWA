self.addEventListener('install', (event) => {
  // console.log('install');
  const cacheLoc = ['/offline.html'];

  event.waitUntil(
    caches.open('my-cache').then(function (cache) {
      return cache.addAll(cacheLoc).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', (event) => {
  // console.log('activate');
});

self.addEventListener('fetch', (event) => {
  // console.log('fetch', event.request);

  // Remove this code, because it has to be at the 'install' phase
  event.respondWith(
    fetch(event.request).catch((error) => {
      return new Response('You are offline');
    })
  );
});
