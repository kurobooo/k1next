// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ['images.microcms-assets.io'],
//   },
// }



const withTM = require("next-transpile-modules")(["@fullcalendar"]);
module.exports = withTM({
  webpack5: false,
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
})



// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({
//   webpack5: false,
//   reactStrictMode: true,
//   images: {
//     domains: ['images.microcms-assets.io'],
//   },
// })