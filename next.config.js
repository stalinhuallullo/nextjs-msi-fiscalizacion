


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  // experimental: {
  //   // Required: for next 13
  //   appDir: true
  // }
}

module.exports = nextConfig



// const withNextIntl = require('next-intl/plugin')();
 
// module.exports = withNextIntl({
//   // Other Next.js configuration ...
// });