/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
