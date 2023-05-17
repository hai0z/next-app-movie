import React from "react";
import Image from "next/image";
function Loading() {
    return (
        <div className="h-screen w-full bg-black/50 flex justify-center items-center">
            <Image
                src={
                    "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                }
                alt="logo"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16"
            />
            <progress className="progress w-56 progress-info"></progress>
        </div>
    );
}

export default Loading;
