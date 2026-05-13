import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
