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
    console.log("clicked");
    if (type === "sun") {
      setOn("sun");
      setTheme("light");
    } else {
      setOn("moon");
      setTheme("dark");
    }
  };

  return (
    <div className="w-[10rem] border border-white p-1 rounded-full">
      <div className="flex w-full items-center justify-between">
        <Button
          variant={"ghost"}
          className={cn(
            "p-4 rounded-[4rem]",
            on === "moon" && "bg-white text-black"
          )}
          onClick={() => handleClick("moon")}
        >
          <Moon className="h-5 w-5" />
        </Button>

        <Button
          variant={"ghost"}
          className={cn("p-4", on === "sun" && "bg-black text-white")}
          onClick={() => handleClick("sun")}
        >
          <Sun className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
