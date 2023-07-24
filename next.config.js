/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s-i.huffpost.com",
      },
    ],
  },
};

module.exports = nextConfig;
