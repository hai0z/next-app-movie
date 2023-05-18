"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
function MovieDetailTab() {
    const params = useParams();
    const path = usePathname();
    console.log(path);
    const [isScroll, setIsScroll] = useState(false);
    useEffect(() => {
        const onScrollTop = () => {
            if (window.scrollY > window.innerHeight) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener("scroll", onScrollTop);
        return () => window.removeEventListener("scroll", onScrollTop);
    }, []);
    return (
        <div
            className={`tabs tabs-boxed px-24 mt-16 py-4 rounded-none bg-opacity-95 backdrop-blur-sm bg-base-100 ${
                isScroll &&
                "fixed z-30 top-4 w-full transition-all duration-200"
            }`}
        >
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
            <Link
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
