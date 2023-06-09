import React from "react";
import StickyTab from "../components/StickyTab";
function layout({ children }: { children: React.ReactNode }) {
    const tabs = [
        {
            tabName: "Thể loại phim lẻ",
            href: "/genres/movie",
        },
        {
            tabName: "Thể loại phim bộ",
            href: "/genres/tv-show",
        },
    ];
    return (
        <div className="mt-16">
            <StickyTab tabs={tabs} />
            <div className="h-[1500px] pt-24 px-4">{children}</div>
        </div>
    );
}

export default layout;
