importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

console.log("hello from service worker");

workbox.precaching.precacheAndRoute([]);

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
