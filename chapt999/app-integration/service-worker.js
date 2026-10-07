const CACHE_NAME = "perfume-pwa-v23";
const APP_SHELL = [
  "./",
  "./index.html",
  "./discover.html",
  "./perfume.html",
  "./style.css",
  "./app.js",
  "./collection.js",
  "./collection-notes.js",
  "./discover.js",
  "./arokor-catalog.js",
  "./arokor-catalog.js?v=23",
  "./discover.js?v=23",
  "./discovery-details.js",
  "./perfume.js",
  "./manage.html",
  "./manage.js",
  "./manage.js?v=21",
  "./manifest.json",
  "./icon.svg",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./style.css?v=21",
  "./app.js?v=21",
  "./collection.js?v=21",
  "./collection-notes.js?v=21",
  "./discover.js?v=21",
  "./discovery-details.js?v=21",
  "./perfume.js?v=21"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
