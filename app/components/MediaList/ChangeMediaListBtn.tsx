"use client";
import useStore from "@/app/(store)/store";
import React from "react";

function ChangeMediaListBtn() {
    const mediaType = useStore((state) => state.mediaType);
    const setMediaType = useStore((state) => state.setMediaType);
    return (
        <div className="flex btn-group">
            <button
                onClick={() => setMediaType("list")}
                className={`btn btn-sm ${
                    mediaType == "list" ? "btn-primary" : "btn-ghost"
                }`}
            >
                <i
                    className={`fa-solid fa-list text-xl ${
                        mediaType === "list" && "text-primary-content"
                    }`}
                ></i>
            </button>
            <button
                onClick={() => setMediaType("compact")}
                className={`btn btn-sm ${
                    mediaType == "compact" ? "btn-primary" : "btn-ghost"
                }`}
            >
                <i
                    className={`fa-solid fa-table-cells-large text-xl ${
                        mediaType === "compact" && "text-primary-content"
                    }`}
                ></i>
            </button>
            <button
                onClick={() => setMediaType("grid")}
                className={`btn btn-sm ${
                    mediaType == "grid" ? "btn-primary" : "btn-ghost"
                }`}
            >
                <i
                    className={`fa-solid fa-table-cells text-xl ${
                        mediaType === "grid" && "text-primary-content"
                    }`}
                ></i>
            </button>
        </div>
    );
}

export default ChangeMediaListBtn;
