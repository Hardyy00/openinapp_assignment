"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="w-[10rem] border border-white p-1">
      <div className="flex w-full items-center justify-between">
        <Button className={cn("p-4")}>
          <Moon className="h-5 w-5" />
        </Button>

        <Button>
          <Sun className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
