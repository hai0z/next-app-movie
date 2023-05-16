"use client";
import React from "react";
import useStore from "../(store)/store";

function WatchTrailerButton({ videoId }: { videoId: string }) {
    const setVideoId = useStore((state) => state.setVideoId);
    return (
        <label
            htmlFor="my-modal"
            onClick={() => setVideoId(videoId)}
            className="px-16 py-4 rounded-full border-solid border-white border-[3px] hover:bg-white hover:text-red-600 transition-all duration-200"
        >
            <span className="text-[20px]">Watch trailer</span>
        </label>
    );
}

export default WatchTrailerButton;
