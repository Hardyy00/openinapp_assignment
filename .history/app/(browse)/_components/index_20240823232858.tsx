import { NavList } from "./nav-list";
import { Toggle } from "./toggle";

export const Sidebar: React.FC = () => {
  return (
    <div className="h-full bg-black p-4 transition-all flex flex-col gap-y-8">
      <Toggle />

      <div className="flex-1 border border-white flex justify-center">
        <NavList />
      </div>

      <div></div>
    </div>
  );
};
