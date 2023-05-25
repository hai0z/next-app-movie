import React from "react";
import Image from "next/image";
function Loading() {
    return (
        <div className="h-screen w-full bg-base-300 flex justify-center items-center flex-col">
            <Image
                src={
                    "//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                }
                alt="logo"
                width={64}
                height={64}
                className="w-16 h-16 md:w-24 md:h-24"
            />
            <progress className="progress w-56 progress-primary"></progress>
        </div>
    );
}

export default Loading;
