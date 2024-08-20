/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "cdn.sanity.io",
            },
          ],
    },
    experimental: {
        taint: true,
    },
    env: {
      MAPBOX_API_TOKEN: "pk.eyJ1IjoiYWRhbWhpdHpnZXIiLCJhIjoiY2x3eWxzZDI3MHo3cDJrc2pyYTYxMXU3MyJ9.GOVh8rM9crWOoQ1vaRo4Qw"
    }
};

export default nextConfig;
