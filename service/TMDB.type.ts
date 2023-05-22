export interface MovieList {
    results: {
        id?: number;
        title: string;
        overview: string;
        backdrop_path: string;
        poster_path: string;
        adult: boolean;
        genres: number[];
        name?: string;
    }[];
    total_pages: number;
}
export interface Movie {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    adult: boolean;
    genres: { id: string | number; name: string }[];
    name?: string;
    tagline: string;
    release_date: string;
    status: string;
    production_countries: {
        name: string;
    }[];
    production_companies: {
        name: string;
    }[];
    original_title: string;
    budget: number;
    revenue: number;
    runtime: number;
    spoken_languages: {
        name: string;
    }[];
}
