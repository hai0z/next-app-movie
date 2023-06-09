import StickyTab from "@/app/components/StickyTab";
import tmdb from "@/service/TMDB";
import React from "react";
import Image from "next/image";
interface IPageProps {
    params: {
        peopleId: number;
    };
    children: React.ReactNode;
}
async function layout({ params, children }: IPageProps) {
    const tabs = [
        {
            tabName: "Overview",
            href: `/people/${params.peopleId}`,
        },
        {
            tabName: "Credit",
            href: `/people/${params.peopleId}/credits`,
        },
        {
            tabName: "Media",
            href: `/people/${params.peopleId}/media`,
        },
    ];
    const people = await tmdb.getPeople(params.peopleId);
    return (
        <div className="pt-16">
            <StickyTab tabs={tabs} />
            <div className="w-full flex flex-col lg:flex-row mt-12">
                <div className="lg:w-4/12 w-full  flex flex-col ">
                    <Image
                        width={500}
                        height={500}
                        src={tmdb.getImage(people.profile_path)}
                        alt="people avatar"
                        className="object-cover self-center w-[350px] rounded-2xl"
                        priority
                    />
                    <p className="text-2xl font-bold mt-4 text-center">
                        {people.name}
                    </p>
                    <div className="space-y-4 ml-16 mt-8">
                        <p className="text-xl font-bold">Personal Info</p>
                        <div className="flex md:flex-col gap-4">
                            <p className="font-bold">Know for</p>
                            <p>{people.known_for_department}</p>
                        </div>
                        <div className="flex md:flex-col gap-4">
                            <p className="font-bold">Gender</p>
                            <p>{people.gender === 1 ? "Female" : "Male"}</p>
                        </div>
                        <div className="flex md:flex-col gap-4">
                            <p className="font-bold">Birthday</p>
                            <p>{people.birthday}</p>
                        </div>
                        <div className="flex md:flex-col gap-4">
                            <p className="font-bold">Place of Birth</p>
                            <p>{people.place_of_birth}</p>
                        </div>
                        <div className="flex md:flex-col gap-4 flex-wrap">
                            <p className="font-bold">Also know as</p>
                            <div>
                                {people.also_known_as.map((x) => (
                                    <p key={x}>{x}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-8/12 w-full px-6">{children}</div>
            </div>
        </div>
    );
}

export default layout;
