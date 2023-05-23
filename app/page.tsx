import Link from "next/link";
import Slider from "./components/Slider";
import ListMovie from "./components/ListMovie";
import MiniSlider from "./components/MiniSlider";
import { MovieList } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";

export default async function Home() {
    const trendingList: MovieList = await tmdb.getTrending("movie", "day");
    const popularList: MovieList = await tmdb.getPopular("movie");
    const topRateList: MovieList = await tmdb.getTopRate("movie");
    return (
        <div className="flex flex-col h-screen rounded-tl-[20px]">
            <div className="h-screen w-full rounded-tl-[20px] relative">
                <Slider movie={popularList} />
                <div className="h-44 w-full bottom-0 z-10 absolute lg:flex justify-center items-center gap-4 img-shadow2 hidden">
                    <MiniSlider movie={popularList} />
                </div>
            </div>

            <div className="pl-6 flex flex-col bg-base-100">
                <span className="text-[1.5rem] font-semibold mt-12 text-base-content">
                    Trending Movies
                </span>
                <Link
                    href={"/trending/today"}
                    className="btn btn-primary btn-outline w-fit btn-sm rounded-full my-2"
                >
                    View more
                </Link>

                <div>
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
