import React from "react";

function Loading() {
    return (
        <div className="h-screen w-full bg-black/50 flex justify-center items-center">
            <progress className="progress w-56 progress-info"></progress>
        </div>
    );
}

export default Loading;
