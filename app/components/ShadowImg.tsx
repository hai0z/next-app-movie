import React from "react";

function ShadowImg() {
    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 z-0">
            <div className="h-full bg-gradient-to-b from-transparent to-[oklch(var(--b1))]"></div>
        </div>
    );
}

export default ShadowImg;
// "use client";
// import React from "react";
// import Color, { Palette } from "color-thief-react";
// function ShadowImg() {
//     const imgSrc = `https://corsproxy.io/?${encodeURIComponent(
//         "https://image.tmdb.org/t/p/original/nLBRD7UPR6GjmWQp6ASAfCTaWKX.jpg"
//     )}`;

//     return (
//         <div>
//             <img src={imgSrc} alt="" className="h-20 w-20" />

//             <Color src={imgSrc} crossOrigin="anonymous" format="hex">
//                 {({ data, loading }) => {
//                     return (
//                         <div>
//                             Predominant color: <strong>{data}</strong>
//                         </div>
//                     );
//                 }}
//             </Color>
//             <Palette
//                 src={imgSrc}
//                 crossOrigin="anonymous"
//                 format="hex"
//                 colorCount={4}
//             >
//                 {({ data, loading }) => {
//                     return (
//                         <div>
//                             Palette:
//                             <ul>
//                                 {data?.map((color, index) => (
//                                     <li key={index} style={{ color: color }}>
//                                         <strong>{color}</strong>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     );
//                 }}
//             </Palette>
//         </div>
//     );
// }

// export default ShadowImg;
