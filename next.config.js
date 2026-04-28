/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: (config) => {
    // Work around readlink/snapshot issues on some Windows filesystems.
    config.resolve.symlinks = false;
    config.cache = false;
    config.snapshot = {
      managedPaths: [],
      immutablePaths: [],
    };
    return config;
  },
};

export default nextConfig;
