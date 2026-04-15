import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages via @cloudflare/next-on-pages
  // All routes that need server-side logic must use edge runtime explicitly
};

export default nextConfig;
