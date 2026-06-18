import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ppkfgsakvcijmmhjwbcz.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  // Silence the lockfile warning
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
