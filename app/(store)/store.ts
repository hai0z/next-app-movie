import { create } from "zustand";
import { Movie } from "@/service/TMDB.type";
interface Store {
    videoId: string;
    setVideoId: (id: string) => void;
    theme: string;
    setTheme: (theme: string) => void;
    currentSlideIndex: number;
    setCurrentSlideIndex: (index: number) => void;
    language: string;
}
const useStore = create<Store>((set) => ({
    videoId: "",
    theme: "",
    currentSlideIndex: 0,
    language: "vi-VN",

    setVideoId: (param) => set({ videoId: param }),
    setTheme: (param) => set({ theme: param }),
    setCurrentSlideIndex: (param) => set({ currentSlideIndex: param }),
}));
export default useStore;
