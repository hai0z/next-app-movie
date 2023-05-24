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
            <div className="h-screen w-full rounded-tl-[20px] relative ">
                <Slider movie={popularList} />
                <div className="h-44 w-full bottom-0 z-10 absolute lg:flex justify-center items-center gap-4 img-shadow2 hidden">
                    <MiniSlider movie={popularList} />
                </div>
            </div>

            <div className="pl-6 flex flex-col">
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
                <div className="mb-20">
                    <ListMovie movie={topRateList} />
                </div>
                {/* <div>
                    <div className="flex flex-row gap-16">
                        <div className="relative w-80 h-64  mb-20">
                            <div className="absolute w-full bg-white rounded-3xl h-1/2 flex justify-between items-end">
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-4 bottom-2"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute right-4 bottom-2"></div>
                            </div>
                            <div className="font-bold absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <p className="text-[12rem] text-red-500">12</p>
                            </div>
                            <div className="relative w-full top-[calc(50%-4px)] z-10 h-2 bg-slate-700">
                                <div className="absolute w-6 h-6 bg-slate-700 rounded-full -left-4 -top-2"></div>
                                <div className="absolute w-6 h-6 bg-slate-700 rounded-full -right-4 -top-2"></div>
                            </div>
                            <div className="absolute w-full bg-white rounded-3xl h-1/2 bottom-0">
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-4 top-2"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute right-4 top-2"></div>
                            </div>
                        </div>
                        <div className="relative w-80 h-64  mb-20">
                            <div className="absolute w-full bg-white rounded-3xl h-1/2 flex justify-between items-end">
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-4 bottom-2"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute right-4 bottom-2"></div>
                            </div>
                            <div className="font-bold absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <p className="text-[12rem] text-red-500">12</p>
                            </div>
                            <div className="relative w-full top-[calc(50%-4px)] z-10 h-2 bg-slate-700">
                                <div className="absolute w-6 h-6 bg-slate-700 rounded-full -left-4 -top-2"></div>
                                <div className="absolute w-6 h-6 bg-slate-700 rounded-full -right-4 -top-2"></div>
                            </div>
                            <div className="absolute w-full bg-white rounded-3xl h-1/2 bottom-0">
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-4 top-2"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute right-4 top-2"></div>
                            </div>
                        </div>
                        <div className="relative w-80 h-64  mb-20">
                            <div className="absolute w-full bg-white rounded-3xl h-1/2 flex justify-between items-end">
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-4 bottom-2"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute right-4 bottom-2"></div>
                            </div>
                            <div className="font-bold absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <p className="text-[12rem] text-red-500">12</p>
                            </div>
                            <div className="relative w-full top-[calc(50%-4px)] z-10 h-2 bg-slate-700">
                                <div className="absolute w-6 h-6 bg-slate-700 rounded-full -left-4 -top-2"></div>
                                <div className="absolute w-6 h-6 bg-slate-700 rounded-full -right-4 -top-2"></div>
                            </div>
                            <div className="absolute w-full bg-white rounded-3xl h-1/2 bottom-0">
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-4 top-2"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute right-4 top-2"></div>
                            </div>
                        </div>
                        <div className="relative w-80 h-64  mb-20">
                            <div className="absolute w-full bg-white rounded-3xl h-1/2 flex justify-between items-end">
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-4 bottom-2"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute right-4 bottom-2"></div>
                            </div>
                            <div className="font-bold absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <p className="text-[12rem] text-red-500">12</p>
                            </div>
                            <div className="relative w-full top-[calc(50%-4px)] z-10 h-2 bg-slate-700">
                                <div className="absolute w-6 h-6 bg-slate-700 rounded-full -left-4 -top-2"></div>
                                <div className="absolute w-6 h-6 bg-slate-700 rounded-full -right-4 -top-2"></div>
                            </div>
                            <div className="absolute w-full bg-white rounded-3xl h-1/2 bottom-0">
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute left-4 top-2"></div>
                                <div className="w-2 h-2 rounded-full bg-slate-700 absolute right-4 top-2"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
