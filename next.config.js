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
  swcMinify: true,
  webpack(config, { isServer }) {
    return config;
  },
};
 
module.exports = nextConfig;

// // next.config.js
// const nextConfig = {
//     env: {
//       GITHUB_AUTH_TOKEN: process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN,
//     },
//     publicRuntimeConfig: {
//       github_AUTH_TOKEN: process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN,
//     },
//     serverRuntimeConfig: { 
//       GITHUB_AUTH_TOKEN: process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN,
//     },
//     compiler:{
//       swcMinify:true,
//     },
//     // Pas besoin d'ajouter des options expérimentales pour swcLoader et swcMinify
//     webpack(config, { isServer }) {
//       return config;
//     },
//   };
  
//   module.exports = nextConfig;
  