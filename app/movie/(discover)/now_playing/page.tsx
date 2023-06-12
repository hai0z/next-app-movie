import ChangeMediaListBtn from "@/app/components/MediaList/ChangeMediaListBtn";
import MediaList from "@/app/components/MediaList/MediaList";
import Pagination from "@/app/components/Pagination";
import tmdb from "@/service/TMDB";
import React from "react";

interface IPageProps {
    searchParams: {
        page: number;
    };
}
async function page({ searchParams }: IPageProps) {
    const popularMovie = await tmdb.getListMovie(
        "now_playing",
        searchParams.page ?? 1
    );
    return (
        <div className="pt-10">
            <h2 className="text-4xl font-bold">Now Playing Movie</h2>
            <div className="ml-auto flex justify-end md:sticky top-16 z-50">
                <ChangeMediaListBtn />
            </div>
            <div className="flex justify-center items-center py-8">
                <Pagination
                    totalPages={popularMovie.total_pages}
                    href="/movie/now_playing?"
                />
            </div>
            <div className="">
                <MediaList movie={popularMovie} />
            </div>
        </div>
    );
}

export default page;
