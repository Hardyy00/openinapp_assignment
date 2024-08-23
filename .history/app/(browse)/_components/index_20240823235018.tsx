import { NavList } from "./nav-list";
import { Toggle } from "./toggle";

export const Sidebar: React.FC = () => {
  return (
    <div className="h-full bg-black transition-all duration-300 flex flex-col gap-y-8">
      <Toggle />

      <div className="flex-1 flex justify-center">
        <NavList />
      </div>

      <div className="flex-[0.3]">hii</div>
    </div>
  );
};
