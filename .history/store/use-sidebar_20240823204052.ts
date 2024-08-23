import { create } from "zustand";

interface Sidebar {
  isCollapsed: boolean;

  onExpand: () => void;
  onCollapse: () => void;
}

export const useSideBar = create<Sidebar>((set) => ({
  isCollapsed: false,
  onExpand: (set) => {
    set({ isCollapsed: false });
  },
  onCollapse: (set) => set({ isCollapsed: true }),
}));
