import Link from "next/link";
import Slider from "./components/Slider";
import ListMovie from "./components/ListMovie";
import tmdb from "@/service/TMDB";

export default async function Home() {
    const [trendingList, popularList, topRateList] = await Promise.all([
        tmdb.getTrending("movie", "day"),
        tmdb.getPopular("movie"),
        tmdb.getTopRate("movie"),
    ]);

    return (
        <div className="flex flex-col h-screen rounded-tl-[20px]">
            <div className="h-screen w-full rounded-tl-[20px] relative">
                <Slider movie={trendingList} />
            </div>

            <div className="pl-6 flex flex-col">
                <span className="text-[1.5rem] font-semibold mt-12 text-base-content">
                    Popular Movies
                </span>
                <Link
                    href={"/trending/today"}
                    className="btn btn-primary btn-outline w-fit btn-sm rounded-full my-2"
                >
                    View more
                </Link>

                <div className="flex items-center">
                    <ListMovie movie={popularList} />
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
                <div className="mb-20">
                    <ListMovie movie={topRateList} />
                </div>
            </div>
        </div>
    );
}
