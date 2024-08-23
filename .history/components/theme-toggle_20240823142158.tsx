import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  return (
    <div className="w-[10rem]">
      <div className="flex w-full">
        <Moon className="h-4 w-4" />

        <Sun className="h-4 w-4" />
      </div>
    </div>
  );
};
