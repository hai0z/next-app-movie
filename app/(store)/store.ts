import { create } from "zustand";

interface Store {
    videoId: string;
    setVideoId: (id: string) => void;
    theme: string | undefined | null;
    setTheme: (theme: string) => void;
    currentSlideIndex: number;
    setCurrentSlideIndex: (index: number) => void;
    mediaType: "grid" | "compact" | "list";
    setMediaType: (type: "grid" | "compact" | "list") => void;
    expandedSideBar: boolean;
    setExpandedSideBar: (open: boolean) => void;
}

const useStore = create<Store>((set) => ({
    videoId: "",
    theme: "",
    currentSlideIndex: 0,
    mediaType: "grid",
    expandedSideBar: true,
    setVideoId: (param) => set({ videoId: param }),
    setTheme: (param) => set({ theme: param }),
    setCurrentSlideIndex: (param) => set({ currentSlideIndex: param }),
    setMediaType: (type: "grid" | "compact" | "list") =>
        set({ mediaType: type }),
    setExpandedSideBar: (open: boolean) =>
        set(() => ({ expandedSideBar: !open })),
}));
export default useStore;
