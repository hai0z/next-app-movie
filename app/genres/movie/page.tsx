import tmdb from "@/service/TMDB";
import { Genre } from "@/service/TMDB.type";
import Link from "next/link";
import React from "react";

async function page() {
    const listGenres: { genres: Genre[] } = await tmdb.getListGenres("movie");

    return (
        <div>
            <h2 className="text-3xl py-4">Thể loại phim lẻ</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {listGenres.genres.map((genres) => (
                    <Link
                        className="btn btn-primary w-full"
                        href={"/discover/movies?with_genres=" + genres.id}
                        key={genres.id}
                    >
                        {genres.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default page;
