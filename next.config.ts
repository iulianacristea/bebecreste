import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "https://bebecreste.ro",
        permanent: true,
      },
      {
        source: "/:path*",
        destination: "https://bebecreste.ro/:path*",
        permanent: true,
        has: [
          {
            type: "host",
            value: "www.bebecreste.ro",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
