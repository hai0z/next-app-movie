import { create } from "zustand";

interface Store {
    videoId: string;
    setVideoId: (id: string) => void;
}
const useStore = create<Store>((set) => ({
    videoId: "",
    setVideoId: (param) => set((state) => ({ videoId: param })),
}));
export default useStore;
