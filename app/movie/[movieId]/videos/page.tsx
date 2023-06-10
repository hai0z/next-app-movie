"use client";
import React, { useState } from "react";
import useSwr from "swr";
import { ListPhotos, Videos, videoTypes } from "@/service/TMDB.type";
import tmdb from "@/service/TMDB";
import Image from "next/image";
interface IPageProps {
    params: {
        movieId: number;
    };
}
const menu = [
    {
        name: videoTypes.Clip,
    },
    {
        name: videoTypes.Trailer,
    },
    {
        name: videoTypes.Teaser,
    },
    {
        name: videoTypes.Featurette,
    },
    {
        name: videoTypes.BehindTheScenes,
    },
];
function Page({ params }: IPageProps) {
    const [type, setType] = useState<videoTypes>(videoTypes.Clip);
    const { data: listVideos } = useSwr<{ results: Videos[] }>(
        `/videos/${params.movieId}`,
        () => tmdb.getVideos("movie", params.movieId)
    );
    const { data: listPhoto } = useSwr<ListPhotos>(
        `/photos/${params.movieId}`,
        () => tmdb.getPhotos("movie", params.movieId),
        {
            revalidateOnMount: true,
        }
    );
    return (
        <div className="flex justify-between md:px-10 flex-col md:flex-row px-2">
            <div className="mb-4">
                <ul className="menu bg-base-200 md:w-56 md:menu-vertical menu-horizontal w-full">
                    {menu.map((m) => (
                        <li key={m.name}>
                            <a
                                className={`${type == m.name && "active"}`}
                                onClick={() => setType(m.name)}
                            >
                                {m.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-wrap justify-center w-full gap-4">
                {listVideos?.results
                    .filter((v) => v.type == type)
                    .map((v, index) => (
                        <div
                            key={v.id}
                            className="card card-compact w-96 bg-base-100 shadow-xl"
                        >
                            <figure>
                                <Image
                                    width={240}
                                    height={240}
                                    src={tmdb.getImage(
                                        listPhoto?.backdrops?.[index]
                                            ?.file_path as string
                                    )}
                                    priority
                                    alt="img"
                                    className="object-cover cursor-pointer w-96"
                                />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">{v.name}</h2>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Page;
