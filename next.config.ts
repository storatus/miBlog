import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["next-mdx-remote"],
  images: {
    domains: [
      "picsum.photos",
      "wreshi56pfhb97on.public.blob.vercel-storage.com",
    ],
  },
};

export default nextConfig;
