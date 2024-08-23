import { Toggle } from "./toggle";

export const Sidebar: React.FC = () => {
  return (
    <div className="h-full bg-black p-4 transition-all">
      <Toggle />
    </div>
  );
};
