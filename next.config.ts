/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",             // images come over https
        hostname: "images.pexels.com", // allow this domain
      },
    ],
  },
};

module.exports = nextConfig;