/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  crossOrigin: 'anonymous',
  async rewrites() {
    return [
      {
        source: "/api/proxy",
        destination: "https://9642-2409-40c1-21-5281-f43c-5b51-be10-1e62.ngrok-free.app/api/HomeAll?lang=eng",
      },
    ];
  },
  // output: "export",
};

module.exports = nextConfig;
