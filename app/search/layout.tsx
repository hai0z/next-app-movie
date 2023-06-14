import React from "react";
import StickyTab from "../components/StickyTab";

function Page({ children }: { children: React.ReactNode }) {
    const tabs = [
        {
            tabName: "Tìm kiếm phim lẻ",
            href: "/search/movie",
        },
        {
            tabName: "Tìm kiếm phim bộ",
            href: "/search/tv",
        },
        {
            tabName: "Tìm kiếm người nổi tiếng",
            href: "/search/people",
        },
    ];
    return (
        <div className="pt-16">
            <StickyTab tabs={tabs} />
            <div className="pt-24 px-4">{children}</div>
        </div>
    );
}

export default Page;
