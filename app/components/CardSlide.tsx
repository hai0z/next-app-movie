"use client";

import React from "react";
import { Movie, TrendingPeople } from "@/service/TMDB.type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import MovieCard from "./MovieCard";
import "swiper/css";
import "swiper/css/navigation";
import useWindowDimensions from "@/hooks/useWindowDemensions";
import PeopleCard from "./PeopleCard";

interface ICardPropsMovie {
    type: "movie";
    data: { results: Movie[] };
    sildePerView?: number | undefined;
}

interface ICardPropsPeople {
    type: "people";
    data: { results: TrendingPeople[] };
    sildePerView?: number | undefined;
}

type CardProps = ICardPropsMovie | ICardPropsPeople;

function CardSlide({ data, type, sildePerView }: CardProps) {
    const { width } = useWindowDimensions();
    const isMovie = type === "movie";
    const isPeople = type === "people";
    return (
        <Swiper
            modules={[Navigation]}
            grabCursor
            freeMode={true}
            slidesPerGroup={1}
            slidesPerGroupAuto
            navigation={true}
            slidesPerView={width > 1700 ? 1700 / 275 : width / 275}
        >
            {data.results.slice(0, 10).map((m) => (
                <SwiperSlide
                    key={m.id}
                    className="px-2 py-3 md:py-8 w-full"
                    style={{ display: "flex" }}
                >
                    {isMovie && <MovieCard m={m as Movie} />}
                    {isPeople && <PeopleCard people={m as TrendingPeople} />}
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default CardSlide;
