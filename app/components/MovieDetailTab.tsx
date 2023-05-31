"use client";
import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
function MovieDetailTab() {
    const params = useParams();
    const path = usePathname();

    return (
        <div
            className={`tabs tabs-boxed w-full py-4 rounded-none bg-opacity-80 bg-base-100 px-4 sticky top-16 border-b-[1px] border-b-base-content border-solid mb-4 transition duration-300 z-30`}
        >
            <Link
                scroll={false}
                href={`/movie/${params.movieId}`}
                className={`tab ${
                    path === `/movie/${params.movieId}` && "tab-active"
                }`}
            >
                Overview
            </Link>
            <Link
                scroll={false}
                href={`/movie/${params.movieId}/cast`}
                className={`tab ${
                    path === `/movie/${params.movieId}/cast` && "tab-active"
                }`}
            >
                Cast
            </Link>
            <Link
                scroll={false}
                href={`/movie/${params.movieId}/photos`}
                className={`tab ${
                    path === `/movie/${params.movieId}/photos` && "tab-active"
                }`}
            >
                Photos
            </Link>
            <a className="tab">Video</a>
            <Link
                scroll={false}
                href={`/movie/${params.movieId}/recommendations`}
                className={`tab ${
                    path === `/movie/${params.movieId}/recommendations` &&
                    "tab-active"
                }`}
            >
                Recommendations
            </Link>
        </div>
    );
}

export default MovieDetailTab;
