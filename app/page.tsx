import Link from "next/link";
import Slider from "./components/Slider";
import tmdb from "@/service/TMDB";
import CardSlide from "./components/CardSlide";
import { Movie, TrendingPeople } from "@/service/TMDB.type";

export default async function Home() {
    const [trendingList, popularList, topRateList, popularPeople] =
        await Promise.all([
            tmdb.getTrending("movie", "day"),
            tmdb.getPopular("movie"),
            tmdb.getTopRate("movie"),
            tmdb.getPopular("person"),
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
                        href={"/movie/popular"}
                        className="btn btn-secondary w-fit btn-sm rounded-full my-3"
                    >
                        View more
                    </Link>

                    <div className="flex justify-center">
                        <CardSlide
                            data={popularList.results as Movie[]}
                            type="movie"
                        />
                    </div>
                </div>

                <div>
                    <p className="text-4xl font-semibold mt-12 text-base-content">
                        Top Rate
                    </p>
                    <Link
                        href={"/movie/top_rated"}
                        className="btn btn-secondary w-fit btn-sm rounded-full my-3"
                    >
                        View more
                    </Link>
                    <div className="flex justify-center">
                        <CardSlide
                            data={topRateList.results as Movie[]}
                            type="movie"
                        />
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
                        <CardSlide
                            data={popularPeople.results as TrendingPeople[]}
                            type="people"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
