/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'www.vectorlogo.zone', 'cdn.worldvectorlogo.com'],
  },
};

module.exports = nextConfig;
