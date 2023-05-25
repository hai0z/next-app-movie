import React from "react";
import Image from "next/image";
import { MovieList } from "@/service/TMDB.type";
import Link from "next/link";
import tmdb from "@/service/TMDB";
async function page({ params }: { params: any }) {
    const { results: listRecommendations }: MovieList =
        await tmdb.getRecomendations(params.tvId, "movie");

    return (
        <div className="min-h-screen w-full md:px-24 grid grid-cols-2 md:grid-cols-4 gap-8 px-16">
            {listRecommendations.map((l) => (
                <div
                    key={l.id}
                    className="cursor-pointer md:w-64 bg-base-100 rounded-lg hover:ring-2 ring-primary"
                >
                    <div className="overflow-hidden rounded-lg flex-1">
                        <Link href={"/movie/" + l.id + "#top"}>
                            <Image
                                src={tmdb.getImage(l.poster_path, "w500")}
                                width={500}
                                height={500}
                                alt="cast"
                                className="object-cover md:w-64 rounded-md hover:scale-110 hover:rounded-lg transition-all duration-150 group "
                            />
                        </Link>
                    </div>
                    <div className="font-semibold text-base-content py-4 flex-1 px-2">
                        {l.title}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default page;
