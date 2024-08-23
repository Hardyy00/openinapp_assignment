"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  path,
}) => {
  const currPath = usePathname();
  const same = path === currPath;
  return (
    <div
      className={cn(
        "flex w-full items-center gap-x-2 text-muted-foreground p-4",
        same && "bg-gradient-to-r from-black-600 to-slate-900"
      )}
    >
      <Icon className={cn("", same && "stroke-purple-600")} />

      <p className={cn("", same && "text-purple-600")}>{label}</p>
    </div>
  );
};
