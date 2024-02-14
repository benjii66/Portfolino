/** @type {import('next').NextConfig} */
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
}

module.exports = nextConfig

//utiliser la clé et l'exporter