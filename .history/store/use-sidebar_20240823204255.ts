import { create } from "zustand";

interface Sidebar {
  collapse: boolean;

  onExpand: () => void;
  onCollapse: () => void;
}

export const useSideBar = create<Sidebar>((set) => ({
  collapse: false,
  onExpand: () => {
    set((state) => ({ collapse: false }));
  },
  onCollapse: () => {
    set((state) => ({ collapse: false }));
  },
}));
