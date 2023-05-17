/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fakestoreapi.com", "image.tmdb.org", "themoviedb.org"],
    },
    env: {
        TMDB: "1425c50ed9fac25f4106f9ebe277b64c",
    },
    experimental: {
        serverActions: true,
        scrollRestoration: false,
    },
};

module.exports = nextConfig;
