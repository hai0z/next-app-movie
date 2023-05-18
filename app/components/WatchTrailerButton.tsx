"use client";
import React from "react";
import useStore from "../(store)/store";

function WatchTrailerButton({ videoId }: { videoId: string }) {
    const setVideoId = useStore((state) => state.setVideoId);
    return (
        <label
            htmlFor="my-modal"
            onClick={() => setVideoId(videoId)}
            className="btn btn-sm btn-primary md:btn-md lg:btn-md w-fit"
        >
            <span className="text-[20px]">Xem Trailer</span>
        </label>
    );
}

export default WatchTrailerButton;
