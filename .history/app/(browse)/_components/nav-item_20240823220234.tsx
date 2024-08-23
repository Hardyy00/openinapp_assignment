"use client";

import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({
  // icon: Icon,
  label,
  path,
}) => {
  // const { collapse } = useSideBar();
  // const pathName = usePathname();
  // const isSame = pathName === path;

  return (
    // <div className={cn("w-full")}>
    //   {/* <Icon /> */}

    //   {/* <p className={cn("", isSame && "", collapse && "hidden")}>{label}</p> */}
    // </div>
    <div>
      {label} {path}
    </div>
  );
};
