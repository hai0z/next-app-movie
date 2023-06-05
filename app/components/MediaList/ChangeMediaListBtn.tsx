"use client";
import useStore from "@/app/(store)/store";
import React from "react";

function ChangeMediaListBtn() {
    const mediaType = useStore((state) => state.mediaType);
    const setMediaType = useStore((state) => state.setMediaType);
    return (
        <div className="md:flex gap-2 hidden">
            <button
                onClick={() => setMediaType("list")}
                className={`btn ${
                    mediaType == "list" ? "btn-primary" : "btn-ghost"
                }`}
            >
                <i
                    className={`fa-solid fa-list text-3xl ${
                        mediaType === "list" && "text-primary-content"
                    }`}
                ></i>
            </button>
            <button
                onClick={() => setMediaType("compact")}
                className={`btn ${
                    mediaType == "compact" ? "btn-primary" : "btn-ghost"
                }`}
            >
                <i
                    className={`fa-solid fa-table-cells-large text-3xl ${
                        mediaType === "compact" && "text-primary-content"
                    }`}
                ></i>
            </button>
            <button
                onClick={() => setMediaType("grid")}
                className={`btn ${
                    mediaType == "grid" ? "btn-primary" : "btn-ghost"
                }`}
            >
                <i
                    className={`fa-solid fa-table-cells text-3xl ${
                        mediaType === "grid" && "text-primary-content"
                    }`}
                ></i>
            </button>
        </div>
    );
}

export default ChangeMediaListBtn;
