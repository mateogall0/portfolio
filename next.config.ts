import type { NextConfig } from "next";

const repo = "portfolio";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Required for GitHub Pages
  output: "export",
  trailingSlash: true,


  images: {
    unoptimized: true,
  },
};

export default nextConfig;
