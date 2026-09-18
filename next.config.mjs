/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'theempire.vn',
      },
      {
        protocol: 'https',
        hostname: 'kennyluxury.vn',
      },
    ],
  },
};

export default nextConfig;
