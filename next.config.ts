import type { NextConfig } from 'next';

// Log environment variables (for debugging)
console.log('Environment Variables:', process.env);

const nextConfig: NextConfig = {
  output: 'standalone',
};

export default nextConfig;
