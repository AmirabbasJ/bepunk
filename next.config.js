/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.punkapi.com',
        pathname: '/v2/192.png',
      },
    ],
  },
};

module.exports = nextConfig;
