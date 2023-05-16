import Link from "next/link";
import MovieCard from "./components/MovieCard";
import Slider from "./components/Slider";
import Modal from "./components/Modal";
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
}

export default async function Home() {
    const getTrending = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB}`
        );
        const data = await respone.json();
        console.log(data.result);
        return data;
    };
    const getPopular = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB}`
        );
        const data = await respone.json();
        console.log(data.result);
        return data;
    };
    const getTopRate = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB}`
        );
        const data = await respone.json();
        console.log(data.result);
        return data;
    };
    const trendingList: MovieList = await getTrending();
    const popularList: MovieList = await getPopular();
    const topRateList: MovieList = await getTopRate();
    return (
        <div className="w-full flex flex-col min-h-screen ">
            <div className="h-full">
                <Slider movie={popularList} />
            </div>

            <div className="w-full bg-[#0f0f0f] bg-opacity-95 pl-6 flex flex-col">
                <span className="text-[1.5rem] font-semibold mt-12">
                    Trending Movies
                </span>
                <Link
                    href={"/"}
                    className="w-40 rounded-full border-solid border-white border-[3px] hover:bg-white hover:text-red-600 transition-all duration-200 flex justify-center"
                >
                    <span className="text-[20px]">View more</span>
                </Link>
                <div className="">
                    <MovieCard movie={trendingList} />
                </div>
                <span className="text-[1.5rem] font-semibold mt-12">
                    Top Rate
                </span>
                <Link
                    href={"/"}
                    className="w-40 rounded-full border-solid border-white border-[3px] hover:bg-white hover:text-red-600 transition-all duration-200 flex justify-center"
                >
                    <span className="text-[20px]">View more</span>
                </Link>
                <div className="">
                    <MovieCard movie={topRateList} />
                </div>
            </div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <Modal />
        </div>
    );
}
