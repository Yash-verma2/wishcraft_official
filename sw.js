const CACHE_NAME = 'wishcraft-cache-v1';
const ASSETS_TO_CACHE = [
  'index.html',
  'manifest.json',
  'assets/branding/favicon.ico',
  'assets/branding/favicon-16.png',
  'assets/branding/favicon-32.png',
  'assets/branding/icon-192.png',
  'assets/branding/icon-512.png',
  'assets/branding/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
