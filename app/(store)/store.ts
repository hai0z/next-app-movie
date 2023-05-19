import { create } from "zustand";

interface Store {
    videoId: string;
    setVideoId: (id: string) => void;
    theme: string;
    setTheme: (theme: string) => void;
    currentSlideIndex: number;
    setCurrentSlideIndex: (index: number) => void;
}
const useStore = create<Store>((set) => ({
    videoId: "",
    theme: "night",
    currentSlideIndex: 0,

    setVideoId: (param) => set(() => ({ videoId: param })),
    setTheme: (param) => set(() => ({ theme: param })),
    setCurrentSlideIndex: (param) => set(() => ({ currentSlideIndex: param })),
}));
export default useStore;
