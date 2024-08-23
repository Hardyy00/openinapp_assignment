"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import { CircleSlash2, SidebarOpen } from "lucide-react";

export const Toggle = () => {
  const { collapse, onCollapse, onExpand } = useSideBar();

  const handleClick = () => {
    if (collapse) {
      onExpand();
    } else {
      onCollapse();
    }
  };
  return (
    <div
      className={cn(
        "w-[210px] flex items-center justify-between transition-all p-4",
        collapse && "w-28"
      )}
    >
      <div className="flex items-center space-x-4">
        <CircleSlash2 className="w-10 h-10 fill-blue-600 " />

        <h1 className={cn("text-primary text-2xl", collapse && "hidden")}>
          Base
        </h1>
      </div>

      <div>
        <button onClick={handleClick}>
          <SidebarOpen className="stroke-slate-700/40 hover:stroke-slate-700 transition-all" />
        </button>
      </div>
    </div>
  );
};
