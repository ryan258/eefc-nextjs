import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pug$/,
      use: ["pug-plain-loader"],
    });
    return config;
  },
  output: "export", // Enables static export
  basePath: "/your-repo-name", // Replace 'your-repo-name' with your GitHub repository name
  images: {
    unoptimized: true, // Disables Image Optimization for static export
  },
};

export default nextConfig;
