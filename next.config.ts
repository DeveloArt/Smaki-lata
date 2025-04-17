/** @type {import('next').NextConfig} */
const nextPWA = require("next-pwa");
const isDev = process.env.NODE_ENV === "development";

const withPWA = nextPWA({
  dest: "public",
  disable: isDev,
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  webpack: (
      // @ts-ignore
    config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = withPWA(nextConfig);