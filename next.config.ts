import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const isDev = process.env.NODE_ENV === "development";

const config: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

const pwaConfig = withPWA({
  dest: "public",
  disable: isDev,
  register: true,
  skipWaiting: true,
})(config);

export default pwaConfig;