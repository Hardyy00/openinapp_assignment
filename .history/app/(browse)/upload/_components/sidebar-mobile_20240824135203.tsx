import { cn } from "@/lib/utils";
import { CircleSlash2, X } from "lucide-react";

export const SidebarMobile: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-background z-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <CircleSlash2 className="w-10 h-10 fill-blue-600 " />

          <h1 className={cn("text-primary text-2xl font-semibold")}>Base</h1>
        </div>

        <div>
          <X />
        </div>
      </div>
    </div>
  );
};
