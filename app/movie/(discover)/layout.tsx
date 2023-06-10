import StickyTab from "@/app/components/StickyTab";
import React from "react";

interface IPageProps {
    children: React.ReactNode;
}
function layout({ children }: IPageProps) {
    const tabs = [
        {
            tabName: "Popular Movies",
            href: "/movie/popular",
        },
        {
            tabName: "Upcoming Movies",
            href: "/movie/upcoming",
        },
        {
            tabName: "Now Playing Movies",
            href: "/movie/now_playing",
        },
        {
            tabName: "Top Rated Movies",
            href: "/movie/top_rated",
        },
    ];
    return (
        <div className="pt-16">
            <StickyTab tabs={tabs} />
            <div className="mx-4">{children}</div>
        </div>
    );
}

export default layout;
