const CACHE_NAME = 'weather-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/index.css',
  '/index.js',
  '/images/weather-favicon.png',
  '/images',
  '/images/icon-192x192.png',
  '/images/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});