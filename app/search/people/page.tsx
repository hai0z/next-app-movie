import React from "react";
import tmdb from "@/service/TMDB";
import { TrendingPeople } from "@/service/TMDB.type";
import Pagination from "@/app/components/Pagination";
import Search from "@/app/components/search/Search";
import ChangeMediaListBtn from "@/app/components/MediaList/ChangeMediaListBtn";
import PeopleCard from "@/app/components/PeopleCard";
interface IPageProps {
    searchParams: {
        page: number;
        q: string;
    };
}
async function page({ searchParams }: IPageProps) {
    const people: { results: TrendingPeople[] } = await tmdb.getTrending(
        "person",
        "day",
        searchParams.page ?? 1
    );
    const peopleSearch: { results: TrendingPeople[]; total_pages: number } =
        await tmdb.search(searchParams.q, "person", searchParams.page);
    return (
        <div>
            <Search />

            <div className="flex flex-row items-center justify-center pb-10 mt-6">
                <Pagination
                    totalPages={
                        searchParams.q === undefined
                            ? 500
                            : peopleSearch.total_pages
                    }
                    href={
                        searchParams.q === undefined
                            ? "/search/people?"
                            : `/search/people?q=${searchParams.q}&`
                    }
                />
            </div>
            <div className="ml-auto md:sticky top-[70px] z-50 w-fit">
                <ChangeMediaListBtn />
            </div>
            {searchParams.q === undefined ? (
                <div>
                    <p className="md:text-2xl font-bold py-8">
                        Xu hướng hôm nay
                    </p>
                    <div className="flex flex-row justify-between items-center flex-wrap gap-4 md:pb-8 pb-6 overflow-hidden mt-6">
                        {people.results.map((p) => (
                            <PeopleCard people={p} key={p.id} />
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <p className="md:text-2xl font-bold py-8">
                        Kết quả tìm kiếm cho {`"${searchParams.q}"`}
                    </p>
                    <div className="flex flex-row justify-between items-center flex-wrap gap-4 md:pb-8 pb-6 overflow-hidden">
                        {peopleSearch.results.map((p) => (
                            <PeopleCard people={p} key={p.id} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default page;
