import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: '',
        pathname: '/api/character/avatar/**', 
      },
    ],
  },
  sassOptions: {
    implementation: 'sass',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
