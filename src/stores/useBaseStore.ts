import create from "zustand";

type State = {
  isVisibleNav: boolean;
  openNav: () => void;
  closeNav: () => void;
};

const useBaseStore = create<State>()((set) => ({
  isVisibleNav: false,
  openNav: () => set((state) => ({ ...state, isVisibleNav: true })),
  closeNav: () => set((state) => ({ ...state, isVisibleNav: false })),
}));

export default useBaseStore;
