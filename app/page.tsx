import Link from "next/link";
import MovieCard from "./components/ListMovie";
import Slider from "./components/Slider";
import Modal from "./components/Modal";
import ListMovie from "./components/ListMovie";
import MiniSlider from "./components/MiniSlider";
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
}
export interface Movie {
    id?: number;
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

export default async function Home() {
    const getTrending = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        console.log(data.result);
        return data;
    };
    const getPopular = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    };
    const getTopRate = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB}&language=vi-VN`
        );
        const data = await respone.json();
        return data;
    };
    const trendingList: MovieList = await getTrending();
    const popularList: MovieList = await getPopular();
    const topRateList: MovieList = await getTopRate();
    return (
        <div className="flex flex-col h-screen rounded-tl-[20px]">
            <div className="h-screen w-full rounded-tl-[20px] relative">
                <Slider movie={popularList} />
                <div className="h-44 w-full bottom-0 z-10 absolute flex justify-center items-center gap-4 pl-4 img-shadow2">
                    <MiniSlider movie={popularList} />
                </div>
            </div>

            <div className="bg-opacity-95 pl-6 flex flex-col ">
                <span className="text-[1.5rem] font-semibold mt-12 text-base-content">
                    Trending Movies
                </span>
                <Link
                    href={"/"}
                    className="btn btn-primary btn-outline w-fit btn-sm rounded-full my-2"
                >
                    <span className="text-base-content">View more</span>
                </Link>

                <div className="py-2">
                    <ListMovie movie={trendingList} />
                </div>

                <span className="text-[1.5rem] font-semibold mt-12 text-base-content">
                    Top Rate
                </span>
                <Link
                    href={"/"}
                    className="btn btn-primary btn-outline w-fit btn-sm rounded-full my-2 bg-base-100"
                >
                    <span className="text-base-content">View more</span>
                </Link>
                <div className="">
                    <ListMovie movie={topRateList} />
                </div>
            </div>
        </div>
    );
}
