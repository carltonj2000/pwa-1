const path = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const workboxWebpackPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new copyWebpackPlugin([
      {
        from: "./src/index.html",
        to: "index.html"
      },
      {
        from: "./src/manifest.json",
        to: "manifest.json"
      },
      {
        from: "./src/cj-utils2.png",
        to: "cj-utils2.png"
      },
      {
        from: "./src/cj-utils2-144.png",
        to: "cj-utils2-144.png"
      }
    ]),
    new workboxWebpackPlugin.InjectManifest({
      swSrc: "./src/sw-src.js",
      swDest: "sw.js"
    })
  ]
};
