/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: ["mixed-decls", "legacy-js-api"],
  },
  output: 'standalone', // Enable standalone output for Docker
};

export default nextConfig;
