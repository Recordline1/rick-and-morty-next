import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: '',
        pathname: '/api/character/avatar/**', // точный путь к аватаркам
      },
    ],
  },
  sassOptions: {
    implementation: 'sass',
  },
};

export default nextConfig;
