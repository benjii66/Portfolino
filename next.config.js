// next.config.js
const nextConfig = {
    env: {
      GITHUB_AUTH_TOKEN: process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN,
    },
    publicRuntimeConfig: {
      github_AUTH_TOKEN: process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN,
    },
    serverRuntimeConfig: { 
      GITHUB_AUTH_TOKEN: process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN,
    },
    // Pas besoin d'ajouter des options expérimentales pour swcLoader et swcMinify
    webpack(config, { isServer }) {
      // Votre configuration webpack personnalisée ici
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  