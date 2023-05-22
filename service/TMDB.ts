class TMDB {
    IMG_PATH = "https://image.tmdb.org/t/p/";
    BASE_URL: string = "https://api.themoviedb.org/3";

    getImage(path: string, size?: "w300" | "w500") {
        if (size) {
            return `${this.IMG_PATH}/${size}/${path}`;
        } else {
            return `${this.IMG_PATH}/original/${path}`;
        }
    }
    async getMovieOrTV(id: number, type: "movie" | "tv") {
        const respone = await fetch(
            `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();

        return data;
    }
    async getTrending(
        type: "movie" | "tv",
        timeWindow: "day" | "week",
        page?: number
    ) {
        if (page) {
            const respone = await fetch(
                `${this.BASE_URL}/trending/${type}/${timeWindow}?api_key=${process.env.TMDB}&page=${page}&language=vi-VN`
            );
            const data = await respone.json();
            return data;
        } else {
            const respone = await fetch(
                `${this.BASE_URL}/trending/${type}/${timeWindow}?api_key=${process.env.TMDB}&language=vi-VN`
            );
            const data = await respone.json();
            return data;
        }
    }

    async getTopRate(type: "movie" | "tv" | "person") {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/top_rated?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    }
    async getPopular(type: "movie" | "tv" | "person") {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/popular?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    }
    async getCast(id: number, type: "movie" | " tv") {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/${id}/credits?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    }
    async getRecomendations(id: number, type: "movie" | " tv") {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/${id}/recommendations?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();

        return data;
    }
    async search(query: string, type: "movie" | "tv") {
        const respone = await fetch(
            `${this.BASE_URL}/search/${type}?api_key=${process.env.TMDB}&query=${query}&language=vi-VN`
        );
        const data = await respone.json();

        return data;
    }
    async getPhotos() {}
    async getVideos() {}
}
const tmdb = new TMDB();
export default tmdb;
