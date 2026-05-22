import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // i18n configuration
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    localeDetection: false,
  },
  
  // Static export for Vercel deployment
  output: "export",
  
  // Handle dynamic routes for static export
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;