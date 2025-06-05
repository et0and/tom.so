/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.are.na",
        port: "",
      },
      {
        protocol: "https",
        hostname: "d2w9rnfcy7mm78.cloudfront.net",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/cars/:file*\\.(jpg|jpeg|png|gif|svg|webp|ico|pdf)",
        destination: "https://cars.tom.so/:file*",
      },
      {
        source: "/cars/:path*",
        destination: "https://cars.tom.so/:path*",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

const ContentSecurityPolicy = `
  default-src 'self' *.tom.so;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.tom.so;
  style-src 'self' 'unsafe-inline' *.googleapis.com *.gstatic.com *.tom.so;
  img-src 'self' data: https:;
  font-src 'self' *.gstatic.com *.googleapis.com *.tom.so;
  object-src 'none';
  base-uri 'self';
  form-action 'self' *.tom.so;
  frame-ancestors 'none';
  connect-src 'self' *.github.com *.keystatic.com *.gstatic.com *.googleapis.com *.githubusercontent.com *.tom.so;
  block-all-mixed-content;
  upgrade-insecure-requests;
`;

export default nextConfig;
