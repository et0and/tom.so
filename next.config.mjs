/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    mdxRs: true,
  },
  env: {
    GA4_PROPERTY_ID: process.env.GA4_PROPERTY_ID,
    GA4_SERVICE_ACCOUNT_KEY: process.env.GA4_SERVICE_ACCOUNT_KEY,
  },
};

export default nextConfig;
