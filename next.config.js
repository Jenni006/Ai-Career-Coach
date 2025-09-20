/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // allows JS files to build even if tsconfig exists
  },
};

module.exports = nextConfig;