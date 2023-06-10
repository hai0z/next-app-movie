"use client";
import React from "react";
import useStore from "../(store)/store";

function WatchTrailerButton({ videoId }: { videoId: string }) {
    const setVideoId = useStore((state) => state.setVideoId);
    return (
        <label
            htmlFor="my-modal"
            onClick={() => setVideoId(videoId)}
            className="btn btn-primary w-fit"
        >
            <span className="capitalize">Xem Trailer</span>
        </label>
    );
}

export default WatchTrailerButton;
