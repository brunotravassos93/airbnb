/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com", "a0.muscache.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
