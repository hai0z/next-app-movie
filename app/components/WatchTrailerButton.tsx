"use client";
import React from "react";

function WatchTrailerButton({ videoId }: { videoId: string }) {
    return (
        <label
            htmlFor="my-modal"
            className="btn btn-sm btn-secondary md:btn-md lg:btn-md w-fit"
        >
            <span className="text-[20px]">Xem Trailer</span>
        </label>
    );
}

export default WatchTrailerButton;
