"use client";

import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  return (
    <div className="w-[10rem] border border-white p-4">
      <div className="flex w-full items-center justify-between">
        <Moon className="h-5 w-5" />

        <Sun className="h-5 w-5" />
      </div>
    </div>
  );
};
