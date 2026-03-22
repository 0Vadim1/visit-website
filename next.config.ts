import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/visit-website" : "",
  assetPrefix: isProd ? "/visit-website/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;