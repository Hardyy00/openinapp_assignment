import { cn } from "@/lib/utils";
import { CircleSlash2, X } from "lucide-react";
import { NavList } from "../../_components/nav-list";
import { ThemeToggle } from "@/components/theme-toggle";

interface SidebarMobileProps {
  onclose: (value: boolean) => void;
}

export const SidebarMobile: React.FC<SidebarMobileProps> = ({ onclose }) => {
  const handleClose = () => {
    onclose(false);
  };
  return (
    <div className="absolute">
      <div className="absolute inset-0 bg-background z-50 py-4 transition-all duration-300 flex flex-col gap-y-14 rounded-tr-lg rounded-br-lg">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <CircleSlash2 className="w-10 h-10 fill-blue-600 " />

            <h1 className={cn("text-primary text-2xl font-semibold")}>Base</h1>
          </div>

          <div>
            <X className="h-8 w-8" onClick={handleClose} />
          </div>
        </div>

        <NavList />

        <div className="px-4 self-center ">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
