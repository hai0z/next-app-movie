import React from "react";
import StickyTab from "../components/StickyTab";

interface PageProps {
    children: React.ReactNode;
}
function Page({ children }: PageProps) {
    const tabs = [
        {
            tabName: "Xu hướng hôm nay",
            href: "/trending/today",
        },
        {
            tabName: "Xu hướng tuần này",
            href: "/trending/week",
        },
    ];
    return (
        <div className="pt-16">
            <StickyTab tabs={tabs} />
            <div className="pt-24 px-4 w-full">{children}</div>
        </div>
    );
}

export default Page;
