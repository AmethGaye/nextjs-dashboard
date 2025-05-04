import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: false, // Désactive Turbopack
  },
};

export default nextConfig;
