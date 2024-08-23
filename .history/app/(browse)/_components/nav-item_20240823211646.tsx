"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, path }) => {
  const pathName = usePathname();
  const isSame = pathName === path;

  return <div className={cn("w-full")}></div>;
};
