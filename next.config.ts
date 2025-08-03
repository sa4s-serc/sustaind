import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  distDir: 'docs',
  assetPrefix: isProd ? '/sustaind' : '',
  basePath: isProd ? '/sustaind' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;