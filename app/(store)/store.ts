import { create } from "zustand";

interface Store {
    openModal: boolean;
}
const useStore = create<Store>((set) => ({
    openModal: false,
    setOpenModal: () => set((state) => ({ openModal: !state.openModal })),
}));
export default useStore;
