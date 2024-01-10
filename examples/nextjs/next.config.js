/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@boeschj/widget', '@boeschj/wallet-management'],
};

module.exports = nextConfig;
