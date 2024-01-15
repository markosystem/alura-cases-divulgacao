/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    trailingSlash: true,
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true,
        },
        {
          source: '/index',
          destination: '/',
          permanent: true,
        },
        {
          source: '/perguntas',
          destination: '/faq',
          permanent: true,
        },
        {
          source: '/questions',
          destination: '/faq',
          permanent: true,
        }
      ]
    },


    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
   
  module.exports = nextConfig