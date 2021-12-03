const withPWA = require("next-pwa");
// const sassResourcesLoader = require("craco-sass-resources-loader");
const path = require("path");

console.log(__dirname);

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    buildExcludes: [/middleware-manifest.json$/],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
    prependData: `@import "_mixins.scss";`,
  },
  // plugins: [
  //   {
  //     plugin: sassResourcesLoader,
  //     options: {
  //       resources: ["scss/_mixins.scss", "scss/_utilities.scss"],
  //     },
  //   },
  // ],
});
