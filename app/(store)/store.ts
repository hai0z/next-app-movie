import { create } from "zustand";

interface Store {
    videoId: string;
    setVideoId: (id: string) => void;
    theme: string;
    setTheme: (theme: string) => void;
    currentSlideIndex: number;
    setCurrentSlideIndex: (index: number) => void;
    mediaType: "grid" | "compact" | "list";
    setMediaType: (type: "grid" | "compact" | "list") => void;
}
const useStore = create<Store>((set) => ({
    videoId: "",
    theme: "",
    currentSlideIndex: 0,
    mediaType: "compact",

    setVideoId: (param) => set({ videoId: param }),
    setTheme: (param) => set({ theme: param }),
    setCurrentSlideIndex: (param) => set({ currentSlideIndex: param }),
    setMediaType: (type: "grid" | "compact" | "list") =>
        set({ mediaType: type }),
}));
export default useStore;
