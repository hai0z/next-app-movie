import Link from "next/link";
import Slider from "./components/Slider";
import tmdb from "@/service/TMDB";
import CardSlide from "./components/CardSlide";

export default async function Home() {
    const [trendingList, popularList, topRateList, popularPeople] =
        await Promise.all([
            tmdb.getTrending("movie", "day"),
            tmdb.getPopular("movie"),
            tmdb.getTopRate("movie"),
            tmdb.getTrending("person", "day"),
        ]);

    return (
        <div className="flex flex-col h-screen rounded-tl-[20px]">
            <div className="h-screen rounded-tl-[20px]">
                <Slider movie={trendingList} />
            </div>

            <div className="pl-6 flex flex-col">
                <div>
                    <p className="text-4xl font-semibold mt-12 text-base-content">
                        Popular Movies
                    </p>
                    <Link
                        href={"/trending/today"}
                        className="btn btn-secondary w-fit btn-sm rounded-full my-3"
                    >
                        View more
                    </Link>

                    <div className="flex justify-center">
                        <CardSlide data={popularList} type="movie" />
                    </div>
                </div>

                <div>
                    <p className="text-4xl font-semibold mt-12 text-base-content">
                        Top Rate
                    </p>
                    <Link
                        href={"/"}
                        className="btn btn-secondary w-fit btn-sm rounded-full my-3"
                    >
                        View more
                    </Link>
                    <div className="flex justify-center">
                        <CardSlide data={topRateList} type="movie" />
                    </div>
                </div>
                <div>
                    <p className="text-4xl font-semibold mt-12 text-base-content">
                        Popular People
                    </p>
                    <Link
                        href={"/people"}
                        className="btn btn-secondary w-fit btn-sm rounded-full my-3"
                    >
                        View more
                    </Link>
                    <div className="mb-20 flex justify-center">
                        <CardSlide data={popularPeople} type="people" />
                    </div>
                </div>
            </div>
        </div>
    );
}
