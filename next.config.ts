import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/sustaind",
  assetPrefix: "/sustaind",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
