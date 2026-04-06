import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-showcase",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
