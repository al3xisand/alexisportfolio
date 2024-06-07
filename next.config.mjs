/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    env: {
      RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
  };
  
  export default nextConfig;
  