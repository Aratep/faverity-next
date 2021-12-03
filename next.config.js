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
  exportPathMap: () => {
    return {
      "/": { page: "/" },
      "/auth/login": { page: "/auth/login" },
      "/auth/register": { page: "/auth/register" },
      "/auth/register/email": { page: "/auth/register/email" },
      "/auth/register/facebook": { page: "/auth/register/facebook" },
      "/auth/reset-password": { page: "/auth/reset-password" },
      "/feed/single-feed": { page: "/feed/single-feed" },
      // "/auth/login": { page: "/auth/login" },
      // "/auth/login": { page: "/auth/login" },
    };
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
