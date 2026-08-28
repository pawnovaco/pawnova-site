/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/cat-finds",
        destination: "/",
        permanent: true
      },
      {
        source: "/pet-essentials",
        destination: "/everyday-essentials",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
