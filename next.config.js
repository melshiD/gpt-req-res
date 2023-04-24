/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com',
              'https://lh3.googleusercontent.com*']
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
