import { cn } from "@/lib/utils";
import { CircleSlash2, X } from "lucide-react";
import { NavList } from "../../_components/nav-list";

interface SidebarMobileProps {
  onclose: (value: boolean) => void;
}

export const SidebarMobile: React.FC<SidebarMobileProps> = ({ onclose }) => {
  const handleClose = () => {
    onclose(false);
  };
  return (
    <div className="absolute inset-0 bg-background z-50 p-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <CircleSlash2 className="w-10 h-10 fill-blue-600 " />

          <h1 className={cn("text-primary text-2xl font-semibold")}>Base</h1>
        </div>

        <div>
          <X className="h-8 w-8" onClick={handleClose} />
        </div>
      </div>

      <NavList />
    </div>
  );
};
