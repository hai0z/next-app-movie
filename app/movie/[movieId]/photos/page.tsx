"use client";
import tmdb from "@/service/TMDB";
import { ListPhotos } from "@/service/TMDB.type";
import React from "react";
import Image from "next/image";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useSwr from "swr";
async function Page({ params }: { params: { movieId: number } }) {
    const { data: listPhoto } = useSwr<ListPhotos>(
        `/photos/${params.movieId}`,
        () => tmdb.getPhotos("movie", params.movieId),
        {
            revalidateOnMount: true,
        }
    );
    return (
        <PhotoProvider
            speed={() => 800}
            easing={(type) =>
                type === 2
                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
            }
        >
            <div className="flex justify-center flex-col max-w-7xl items-center mx-auto">
                <h2 className="font-bold text-lg pb-2">Backdrops</h2>
                <div className="pb-20 flex gap-4 flex-wrap justify-center">
                    {listPhoto?.backdrops.slice(0, 8).map((backdrop, index) => (
                        <PhotoView
                            key={index}
                            src={tmdb.getImage(backdrop.file_path)}
                        >
                            <Image
                                width={240}
                                height={240}
                                src={tmdb.getImage(backdrop.file_path)}
                                loading="lazy"
                                alt="img"
                                className="object-cover w-64 cursor-pointer"
                            />
                        </PhotoView>
                    ))}
                </div>
                <h2 className="font-bold text-lg pb-2">Logos</h2>
                <div className="pb-20 flex gap-4 flex-wrap justify-center">
                    {listPhoto?.logos.slice(0, 4).map((backdrop, index) => (
                        <PhotoView
                            key={index}
                            src={tmdb.getImage(backdrop.file_path)}
                        >
                            <Image
                                width={240}
                                height={240}
                                src={tmdb.getImage(backdrop.file_path)}
                                loading="lazy"
                                alt="img"
                                className="object-cover w-64 cursor-pointer"
                            />
                        </PhotoView>
                    ))}
                </div>
                <h2 className="font-bold text-lg pb-2">Posters</h2>
                <div className="pb-20 flex gap-4 flex-wrap items-center justify-center">
                    {listPhoto?.posters.slice(0, 4).map((backdrop, index) => (
                        <PhotoView
                            key={index}
                            src={tmdb.getImage(backdrop.file_path)}
                        >
                            <Image
                                width={240}
                                height={240}
                                src={tmdb.getImage(backdrop.file_path)}
                                loading="lazy"
                                alt="img"
                                className="object-cover w-64 cursor-pointer"
                            />
                        </PhotoView>
                    ))}
                </div>
            </div>
        </PhotoProvider>
    );
}

export default Page;
