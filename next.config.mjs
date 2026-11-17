import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  allowedDevOrigins: ['172.20.10.2', '192.168.29.29', 'localhost', '127.0.0.1'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
