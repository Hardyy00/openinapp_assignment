import { NavList } from "./nav-list";
import { Toggle } from "./toggle";

export const Sidebar: React.FC = () => {
  return (
    <div className="h-full bg-black p-4 transition-all space-y-4">
      <Toggle />

      <NavList />
    </div>
  );
};
