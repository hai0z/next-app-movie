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
            <div className="h-screen rounded-tl-[20px]">
                <Slider movie={trendingList} />
            </div>

            <div className="pl-6 flex flex-col">
                <span className="text-4xl font-semibold mt-12 text-base-content">
                    Popular Movies
                </span>
                <Link
                    href={"/trending/today"}
                    className="btn btn-secondary w-fit btn-sm rounded-full my-3"
                >
                    View more
                </Link>

                <div className="flex justify-center">
                    <ListMovie movie={popularList} />
                </div>

                <span className="text-4xl font-semibold mt-12 text-base-content">
                    Top Rate
                </span>
                <Link
                    href={"/"}
                    className="btn btn-secondary w-fit btn-sm rounded-full my-3"
                >
                    View more
                </Link>
                <div className="mb-20 flex justify-center">
                    <ListMovie movie={topRateList} />
                </div>
            </div>
        </div>
    );
}
