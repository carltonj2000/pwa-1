self.addEventListener("install", event => {
  console.log("sw installed");
  event.waitUntil(
    caches.open("precache-v1").then(cache => {
      cache.addAll(["/", "app.js"]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response || fetch(event.request))
  );
});
