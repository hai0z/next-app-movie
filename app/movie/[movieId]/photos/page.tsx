import tmdb from "@/service/TMDB";
import { ListPhotos } from "@/service/TMDB.type";
import React from "react";
import Image from "next/image";
async function page({ params }: { params: { movieId: number } }) {
    const listPhoto: ListPhotos = await tmdb.getPhotos("movie", params.movieId);

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center">
            {listPhoto.backdrops.slice(0, 10).map((backdrop, index) => (
                <Image
                    key={index}
                    width={500}
                    height={500}
                    src={tmdb.getImage(backdrop.file_path)}
                    priority
                    alt="img"
                    className="object-cover"
                />
            ))}
        </div>
    );
}

export default page;
