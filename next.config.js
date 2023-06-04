/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "fakestoreapi.com",
            "image.tmdb.org",
            "themoviedb.org",
            "www.youtube.com",
        ],
    },
    env: {
        TMDB: "1425c50ed9fac25f4106f9ebe277b64c",
    },
};

module.exports = nextConfig;
