import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["next-mdx-remote"],
  images: {
    domains: ["picsum.photos"],
  },
};

export default nextConfig;
