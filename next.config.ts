import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  
  
  // Handle dynamic routes for static export
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;