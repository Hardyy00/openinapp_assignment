"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ThemeToggle = () => {
  const { setTheme } = useTheme();
  const [on, setOn] = useState<String>("sun");

  const handleClick = (type: string) => {
    if (type === "sun") {
      setOn("sun");
      setTheme("light");
    } else {
      setOn("moon");
      setTheme("dark");
    }
  };

  return (
    <div className="w-[10rem] p-1 rounded-full bg-">
      <div className="flex w-full items-center justify-between">
        <Button
          variant={"ghost"}
          className={cn(
            "p-4 rounded-[4rem]",
            on === "moon" && "bg-black text-white"
          )}
          onClick={() => handleClick("moon")}
        >
          <Moon className="h-5 w-5" />
        </Button>

        <Button
          variant={"ghost"}
          className={cn(
            "p-4 rounded-[4rem] hover:bg-white hover:text-black",
            on === "sun" && "bg-white text-black"
          )}
          onClick={() => handleClick("sun")}
        >
          <Sun className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
