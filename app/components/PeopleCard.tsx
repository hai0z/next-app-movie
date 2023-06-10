import { TrendingPeople } from "@/service/TMDB.type";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import tmdb from "@/service/TMDB";
interface IPeopleCardProps {
    people: TrendingPeople;
}
function PeopleCard({ people }: IPeopleCardProps) {
    return (
        <div className="transition-all duration-300 rounded-lg shadow-md cursor-pointer w-60 lg:w-64 bg-base-200 hover:ring-1 hover:ring-primary hover:scale-[1.01] hover:shadow-primary group card my-1 hover:bg-primary/10">
            <figure className="overflow-hidden rounded-t-lg">
                <Link href={"/people/" + people.id + "#top"}>
                    <Image
                        src={tmdb.getImage(people.profile_path, "w500")}
                        width={500}
                        height={500}
                        alt="cast"
                        loading="lazy"
                        className="object-cover transition-all duration-300 w-60  group-hover:scale-110 lg:w-64 "
                    />
                </Link>
            </figure>
            <div className="card-body">
                <Link href={"/people/" + people.id}>
                    <p className="line-clamp-2 font-semibold">
                        {" "}
                        {people.name ?? people.original_name}
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default PeopleCard;
