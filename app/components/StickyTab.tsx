"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Tab = {
    tabName: string;
    href: string;
};
interface ITabProps {
    tabs: Tab[];
}
function StickyTab({ tabs }: ITabProps) {
    const pathName = usePathname();

    return (
        <div className="z-20 w-full px-4 bg-base-100 backdrop-blur-lg bg-opacity-80 flex justify-between  border-b border-secondary/10 sticky top-16">
            <div className="flex py-4 gap-8 flex-wrap w-full">
                {tabs.map((tab, index) => (
                    <Link
                        key={index}
                        scroll={false}
                        href={tab.href}
                        className="text-sm md:text-lg font-semibold relative flex flex-col items-center"
                    >
                        {tab.tabName}
                        {pathName == tab.href && (
                            <motion.div
                                layoutId="underline"
                                transition={{ type: "keyframes" }}
                                className="absolute h-1 bg-primary w-1/2 rounded-full top-8 md:top-10"
                            ></motion.div>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default StickyTab;
