import type { NextConfig } from "next";


const repo = "portfolio";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Required for GitHub Pages
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
