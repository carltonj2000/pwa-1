importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

console.log("hello from service worker");

workbox.precaching.precacheAndRoute([
  {
    "url": "app.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "app.js",
    "revision": "2d4f61cde2f377ae8c08c1eb54a7e332"
  },
  {
    "url": "index.html",
    "revision": "b56ea7e7c9be4859302bfda90dc21bd9"
  },
  {
    "url": "sw-src.js",
    "revision": "acfe4dfd68443d69caa76bc37d812bde"
  },
  {
    "url": "workbox-config.js",
    "revision": "d28c4fffc59c6a35861f87ef6510db2e"
  }
]);

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com/,
  workbox.strategies.networkFirst()
);
/*
  runtimeCaching: [
    {
      urlPattern: /,
      handler: "networkFirst"
    }
  ]
  */
