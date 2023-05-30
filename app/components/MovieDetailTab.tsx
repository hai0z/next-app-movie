"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
function MovieDetailTab() {
    const params = useParams();
    const path = usePathname();
    const tabbarRef = useRef<HTMLDivElement>(null);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const onScrollTop = (top: number) => {
            if (window.scrollY >= top) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        const tabbarRect = tabbarRef?.current?.getBoundingClientRect();
        const tabbarTop = tabbarRect?.top as number;
        const tabbarHeight = tabbarRef?.current?.clientHeight as number;
        window.addEventListener("scroll", () =>
            onScrollTop(tabbarTop - tabbarHeight)
        );
        return () =>
            window.removeEventListener("scroll", () => onScrollTop(tabbarTop));
    }, []);
    return (
        <div
            className={`tabs tabs-boxed w-full py-4 rounded-none bg-opacity-80 bg-base-100 px-4 ${
                isScroll &&
                "fixed z-30 top-0 w-full translate-y-16 transition duration-300 backdrop-blur-lg "
            }  border-b-[1px] border-b-base-content border-solid mb-4 transition duration-300`}
            ref={tabbarRef}
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
