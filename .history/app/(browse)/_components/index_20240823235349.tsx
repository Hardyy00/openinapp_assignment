import { ThemeToggle } from "@/components/theme-toggle";
import { NavList } from "./nav-list";
import { Toggle } from "./toggle";

export const Sidebar: React.FC = () => {
  return (
    <div className="h-full bg-black transition-all  flex flex-col gap-y-8">
      <Toggle />

      <div className="flex-1 flex justify-center">
        <NavList />
      </div>

      <div className="flex-[0.3] border border-white">
        <ThemeToggle />
      </div>
    </div>
  );
};
