"use client";
import React from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
function MovieDetailTab() {
    const params = useParams();
    const path = usePathname();
    console.log(path);
    return (
        <div className="tabs tabs-boxed  px-24 mt-16 py-4">
            <Link
                href={`/movie/${params.movieId}`}
                className={`tab ${
                    path === `/movie/${params.movieId}` && "tab-active"
                }`}
            >
                Overview
            </Link>
            <Link
                href={`/movie/${params.movieId}/cast`}
                className={`tab ${
                    path === `/movie/${params.movieId}/cast` && "tab-active"
                }`}
            >
                Cast
            </Link>
            <a className="tab">Photos</a>
            <a className="tab">Video</a>
        </div>
    );
}

export default MovieDetailTab;
