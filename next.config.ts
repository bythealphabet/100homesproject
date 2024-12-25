import type { NextConfig } from 'next';

// const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // basePath: isProduction ? '/100homesproject' : undefined,
  // basePath: '/100homesproject',
  images: {
    domains: ['www.balitecture.com'],
  },
  // output: 'export',
  /* config options here */
};

export default nextConfig;
