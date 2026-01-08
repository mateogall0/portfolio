import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  reactCompiler: true,

  // Required for GitHub Pages
  output: "export",


  images: {
    unoptimized: true,
  },
};

export default nextConfig;
