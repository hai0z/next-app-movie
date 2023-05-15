import Link from "next/link";
import MovieCard from "./components/MovieCard";
import Slider from "./components/Slider";
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
    genres: number[];
    name?: string;
}

export default async function Home() {
    const getData = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB}`
        );
        const data = await respone.json();
        console.log(data.result);
        return data;
    };
    const ImagePath = "https://image.tmdb.org/t/p/";
    const trendingList: MovieList = await getData();
    return (
        <div className="w-full flex flex-col min-h-screen ">
            <div className="h-full">
                <Slider movie={trendingList} />
            </div>

            <div className="h-[1500px] w-full bg-black bg-opacity-95 pl-6 flex flex-col">
                <span className="text-[1.5rem] font-semibold mt-16">
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
            </div>
        </div>
    );
}
