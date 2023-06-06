import React from "react";
import tmdb from "@/service/TMDB";
import { Movie } from "@/service/TMDB.type";
import Pagination from "@/app/components/Pagination";
import MediaList from "@/app/components/MediaList/MediaList";
import ChangeMediaListBtn from "@/app/components/MediaList/ChangeMediaListBtn";
async function page({ searchParams }: { searchParams: { page: number } }) {
    const movie: { results: Movie[] } = await tmdb.getTrending(
        "movie",
        "week",
        searchParams.page ?? 1
    );
    return (
        <div className="pb-16">
            <div className="ml-auto md:sticky top-16 z-50 w-fit">
                <ChangeMediaListBtn />
            </div>
            <div className="py-6">
                <p className="text-3xl font-bold capitalize">
                    Xu hướng tuần này
                </p>
            </div>
            <div className="flex flex-row items-center justify-center pb-10">
                <Pagination totalPages={500} href="/trending/today?" />
            </div>
            <div className="flex flex-row flex-wrap items-center justify-evenly gap-8 pb-6 md:gap-4 md:pb-8 overflow-hidden md:mt-6">
                <MediaList movie={movie} />
            </div>
        </div>
    );
}

export default page;
