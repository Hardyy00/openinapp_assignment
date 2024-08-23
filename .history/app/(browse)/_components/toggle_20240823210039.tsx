"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import { CircleSlash2, SidebarOpen } from "lucide-react";

export const Toggle = () => {
  const { collapse, onCollapse, onExpand } = useSideBar();
  return (
    <div className={cn("w-[170px]", collapse && "w-20")}>
      <div className="flex items-center  space-x-2 ">
        <CircleSlash2 className="w-10 h-10 fill-blue-600 " />

        <h1 className="text-white text-2xl">Base</h1>
      </div>

      <div>
        <Button variant={"ghost"}>
          <SidebarOpen className="stroke-white" />
        </Button>
      </div>
    </div>
  );
};
