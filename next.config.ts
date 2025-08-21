import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // or your CDN / bucket domain
      },
    ],
  },
};

export default nextConfig;