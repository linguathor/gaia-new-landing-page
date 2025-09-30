/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now default in Next.js 14, no need for experimental
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
