import { Moon, Sun } from "lucide-react";
import { Toggle } from "./ui/toggle";

export const ThemeToggle = () => {
  return (
    <div className="w-[10rem] border border-white p-4">
      <div className="flex w-full items-center justify-between">
        <Toggle>
          <Moon className="h-5 w-5" />
        </Toggle>

        <Toggle>
          <Sun className="h-5 w-5" />
        </Toggle>
      </div>
    </div>
  );
};
