/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ajoutez des configurations personnalisées ici 
    return config;
  },
};

export default nextConfig;
