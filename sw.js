const CACHE_NAME = "ncc-builder-v33";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest?v=33",
  "./favicon.ico",
  "./favicon.png",
  "./apple-touch-icon.png",
  "./apple-touch-icon-precomposed.png",
  "./android-chrome-192x192.png",
  "./android-chrome-512x512.png",
  "./css/style.css?v=33",
  "./data/edition.js?v=33",
  "./data/glossary.js?v=33",
  "./data/phase1-site-preparation.js?v=33",
  "./data/phase2-footings-slabs.js?v=33",
  "./data/phase3-walls.js?v=33",
  "./data/phase4-roof.js?v=33",
  "./data/phase5-glazing.js?v=33",
  "./data/phase6-fire.js?v=33",
  "./data/phase7-amenity.js?v=33",
  "./data/phase8-stairs.js?v=33",
  "./data/phase9-energy.js?v=33",
  "./data/phase10-ancillary.js?v=33",
  "./data/phase11-livable.js?v=33",
  "./data/phases.js?v=33",
  "./js/glossary.js?v=33",
  "./js/questions.js?v=33",
  "./js/app.js?v=33",
  "./js/pwa.js?v=33",
  "./assets/app/icon-48.png?v=33",
  "./assets/app/icon-72.png?v=33",
  "./assets/app/icon-96.png?v=33",
  "./assets/app/icon-128.png?v=33",
  "./assets/app/icon-144.png?v=33",
  "./assets/app/icon-152.png?v=33",
  "./assets/app/icon-180.png?v=33",
  "./assets/app/icon-192.png?v=33",
  "./assets/app/icon-384.png?v=33",
  "./assets/app/icon-512.png?v=33",
  "./assets/app/maskable-192.png?v=33",
  "./assets/app/maskable-512.png?v=33"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function (cacheName) {
            return cacheName.startsWith("ncc-builder-") && cacheName !== CACHE_NAME;
          })
          .map(function (cacheName) {
            return caches.delete(cacheName);
          })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function (cachedResponse) {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).then(function (networkResponse) {
        if (!networkResponse || networkResponse.status !== 200) return networkResponse;

        const responseCopy = networkResponse.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseCopy);
        });
        return networkResponse;
      });
    })
  );
});
