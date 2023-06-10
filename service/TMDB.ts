import { MovieCredits, People, Photo } from "./TMDB.type";

class TMDB {
    private readonly IMG_PATH: string = "https://image.tmdb.org/t/p/" as const;
    private readonly BASE_URL: string = "https://api.themoviedb.org/3" as const;

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
        type: "movie" | "tv" | "person",
        timeWindow: "day" | "week",
        page?: number
    ) {
        const respone = await fetch(
            `${this.BASE_URL}/trending/${type}/${timeWindow}?api_key=${
                process.env.TMDB
            }&page=${page ?? 1}&language=vi-VN`,
            { cache: "no-store" }
        );
        const data = await respone.json();
        return data;
    }

    async getTopRate(type: "movie" | "tv" | "person") {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/top_rated?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    }
    async getPopular(type: "movie" | "tv" | "person", page?: number) {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/popular?api_key=${
                process.env.TMDB
            }&language=vi-VN&page=${page ?? 1}`
        );
        const data = await respone.json();
        return data;
    }
    async getCast(id: number, type: "movie" | "tv") {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/${id}/credits?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    }
    async getRecomendations(id: number, type: "movie" | "tv") {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/${id}/recommendations?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();

        return data;
    }
    async search(
        query: string,
        type: "movie" | "tv" | "person",
        page?: number
    ) {
        const respone = await fetch(
            `${this.BASE_URL}/search/${type}?api_key=${
                process.env.TMDB
            }&query=${query}&language=vi-VN&page=${page ?? 1}`
        );
        const data = await respone.json();

        return data;
    }
    async getListGenres(type: "movie" | "tv") {
        const respone = await fetch(
            `${this.BASE_URL}/genre/${type}/list?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    }
    async discover(type: "movie" | "tv", genres?: number, page?: number) {
        let url = `${this.BASE_URL}/discover/${type}?api_key=${process.env.TMDB}&language=vi-VN`;
        if (genres) {
            url += `&with_genres=${genres}`;
        }
        if (page) {
            url += `&page=${page}`;
        }
        const respone = await fetch(url);
        const data = await respone.json();
        return data;
    }
    async getPhotos(type: "movie" | "tv", id: number) {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/${id}/images?api_key=${process.env.TMDB}`
        );
        const data = await respone.json();
        return data;
    }
    async getVideos(type: "movie" | "tv", id: number) {
        const respone = await fetch(
            `${this.BASE_URL}/${type}/${id}/videos?api_key=${process.env.TMDB}`
        );
        const data = await respone.json();
        return data;
    }
    async getPeople(id: number): Promise<People> {
        const respone = await fetch(
            `${this.BASE_URL}/person/${id}?api_key=${process.env.TMDB}`
        );
        const data = await respone.json();
        return data;
    }
    async getMovieCredits(id: number): Promise<{ cast: MovieCredits[] }> {
        const respone = await fetch(
            `${this.BASE_URL}/person/${id}/movie_credits?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    }
    async getPeoplePhotos(id: number): Promise<{ profiles: Photo[] }> {
        const respone = await fetch(
            `${this.BASE_URL}/person/${id}/images?api_key=${process.env.TMDB}`
        );
        const data = await respone.json();
        return data;
    }
    async getListMovie(
        type: "popular" | "upcoming" | "top_rated" | "now_playing",
        page?: number
    ) {
        const respone = await fetch(
            `${this.BASE_URL}/movie/${type}?api_key=${
                process.env.TMDB
            }&language=vi-VN&page=${page ?? 1}`
        );
        const data = await respone.json();
        return data;
    }
}
const tmdb = new TMDB();
export default tmdb;
