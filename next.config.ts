import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* existing config options here */

  eslint: {
    // Ignore ESLint errors/warnings during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
