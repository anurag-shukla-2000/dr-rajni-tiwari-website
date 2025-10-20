/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable build traces to fix the stack size error
  experimental: {
    webpackBuildWorker: false,
  },
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable source maps to reduce memory usage
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig