/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeholder.com'],
  },
  experimental: {
    turbo: {},
  },
};

export default nextConfig;
