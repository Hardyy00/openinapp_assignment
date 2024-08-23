"use client";

import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavLink {
  // icon: LucideIcon;
  label: string;
  path: string;
}

export const NavItem: React.FC<NavLink> = ({ label, path }) => {
  const { collapse } = useSideBar();
  const currentPath = usePathname();
  const onPath = currentPath === path;

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
