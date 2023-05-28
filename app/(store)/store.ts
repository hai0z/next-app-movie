import { create } from "zustand";
import { Movie } from "@/service/TMDB.type";
interface Store {
    videoId: string;
    setVideoId: (id: string) => void;
    theme: string;
    setTheme: (theme: string) => void;
    currentSlideIndex: number;
    setCurrentSlideIndex: (index: number) => void;
    movie: Movie;
    setMovie: (movie: Movie) => void;
}
const useStore = create<Store>((set) => ({
    videoId: "",
    theme: "",
    currentSlideIndex: 0,
    movie: {} as Movie,

    setMovie: (param) => set(() => ({ movie: param })),
    setVideoId: (param) => set(() => ({ videoId: param })),
    setTheme: (param) => set(() => ({ theme: param })),
    setCurrentSlideIndex: (param) => set(() => ({ currentSlideIndex: param })),
}));
export default useStore;
