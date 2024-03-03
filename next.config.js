/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nftstorage.link']
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    }

    return config
  }
}

module.exports = nextConfig
