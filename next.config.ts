import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // experimental: { turbo: false }, // REMOVE this line
};

export default nextConfig;
