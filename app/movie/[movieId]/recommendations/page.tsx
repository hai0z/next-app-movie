import React from "react";
import { Movie } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
import MediaList from "@/app/components/MediaList/MediaList";
import ChangeMediaListBtn from "@/app/components/MediaList/ChangeMediaListBtn";
async function page({ params }: { params: any }) {
    const listRecommendations: { results: Movie[] } =
        await tmdb.getRecomendations(params.movieId, "movie");
    return (
        <div>
            <div className="flex items-center justify-end mb-6 sticky top-[72px] transition-all duration-300 z-50">
                <ChangeMediaListBtn />
            </div>
            <div className="min-h-screen w-full md:px-24 flex flex-wrap justify-center gap-8 px-2 overflow-hidden">
                <MediaList movie={listRecommendations} />
            </div>
        </div>
    );
}

export default page;
