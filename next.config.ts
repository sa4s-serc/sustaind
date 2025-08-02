import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? '/sustaind/out' : '',
  assetPrefix: isProd ? '/sustaind/out' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
