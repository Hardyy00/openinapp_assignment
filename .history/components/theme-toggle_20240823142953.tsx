"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div className="w-[10rem] border border-white p-4">
      <div className="flex w-full items-center justify-between">
        <Button>
          <Moon className="h-5 w-5" />
        </Button>

        <Sun className="h-5 w-5" />
      </div>
    </div>
  );
};
