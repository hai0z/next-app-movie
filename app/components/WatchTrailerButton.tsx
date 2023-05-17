"use client";
import React from "react";
import useStore from "../(store)/store";

function WatchTrailerButton({ videoId }: { videoId: string }) {
    const setVideoId = useStore((state) => state.setVideoId);
    return (
        <label
            htmlFor="my-modal"
            onClick={() => setVideoId(videoId)}
            className="btn btn-sm btn-outline btn-secondary md:btn-md lg:btn-lg"
        >
            <span className="text-[20px]">Watch trailer</span>
        </label>
    );
}

export default WatchTrailerButton;
