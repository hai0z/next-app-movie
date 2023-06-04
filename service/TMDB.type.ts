export interface MovieList {
    results: {
        id: number;
        title: string;
        overview: string;
        backdrop_path: string;
        poster_path: string;
        adult: boolean;
        genre_ids: number[];
        name?: string;
        media_type: string;
        vote_average: number;
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
    genres: Genres[];
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
    vote_average: number;
}
export interface TVShow {}
export interface Genres {
    id: number;
    name: string;
}
export interface Photo {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}
export interface ListPhotos {
    backdrops: Photo[];
    logos: Photo[];
    posters: Photo[];
}

export enum videoTypes {
    Clip = "Clip",
    Featurette = "Featurette",
    BehindTheScenes = "Behind the Scenes",
    Teaser = "Teaser",
    Trailer = "Trailer",
}
export interface Videos {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: videoTypes;
    official: true;
    published_at: Date;
    id: string;
}
