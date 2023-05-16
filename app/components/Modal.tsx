"use client";
import React, { useEffect, useState } from "react";
import useStore from "../(store)/store";

function Modal() {
    const videoId = useStore((state) => state.videoId);
    const [video, setVideo] = useState<any>();
    const getTrailer = async () => {
        const respone = await fetch(
            `https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=${process.env.TMDB}&language=en-US`
        );
        const data = await respone.json();
        setVideo(data);
    };
    useEffect(() => {
        getTrailer();
    }, []);
    console.log(videoId);
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <iframe
                        src={`https://www.youtube.com/embed/${video?.results?.[0].key}`}
                    ></iframe>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                            Yay!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
