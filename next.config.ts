const isDev = process.env.NODE_ENV === "development";

const withPWA = require("next-pwa")({
  dest: "public",
  disable: isDev, // Вимикає PWA у dev
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  // інші опції
};

module.exports = withPWA(nextConfig);
