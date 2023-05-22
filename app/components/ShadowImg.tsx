import React from "react";

function ShadowImg() {
    return (
        <div className="absolute top-0 left-0 bottom-0 right-0">
            <div className="h-full bg-gradient-to-b from-transparent to-[hsl(var(--b1))]"></div>
        </div>
    );
}

export default ShadowImg;
