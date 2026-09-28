/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'askdroid.com',
        pathname: '/wp-content/**',
      },
    ],
  },
};

module.exports = nextConfig;
