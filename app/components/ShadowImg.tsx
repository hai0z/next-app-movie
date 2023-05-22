import React from "react";

function ShadowImg() {
    return (
        <div className="absolute top-0 left-0 bottom-0 right-0">
            <div className="h-full bg-gradient-to-b from-transparent to-[hsl(var(--b1))]"></div>
        </div>
    );
}

export default ShadowImg;
// "use client";
// import React from "react";
// import { useColor } from "color-thief-react";
// function ShadowImg({ imgSrc }: { imgSrc: string }) {
//     const { data } = useColor(
//         `https://corsproxy.io/?${encodeURIComponent(
//             "https://gamek.mediacdn.vn/133514250583805952/2023/4/29/base64-168248213986223902709-1682739310913-1682739310994845185640-1682769136989-168276913770467484367.png" ||
//                 ""
//         )}`,
//         "hex",
//         {
//             crossOrigin: "anonymous",
//         }
//     );
//     console.log(data);
//     return (
//         <div className="absolute top-0 left-0 bottom-0 right-0">
//             <div
//                 className="h-full"
//                 style={{
//                     backgroundImage: `linear-gradient(to bottom, transparent,${data} `,
//                 }}
//             ></div>
//         </div>
//     );
// }

// export default ShadowImg;
