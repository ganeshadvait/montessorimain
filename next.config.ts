import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admissions.montessorigroups.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/calendar",
        destination: "/about/calendar",
        permanent: false,
      },
      {
        source: "/career",
        destination: "/careers",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
