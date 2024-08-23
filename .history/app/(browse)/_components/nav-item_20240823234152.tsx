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
  icon: Icon,
  label,
  path,
}) => {
  const { collapse } = useSideBar();
  const currPath = usePathname();
  const same = path === currPath;
  return (
    <div
      className={cn(
        "flex w-full items-center gap-x-2 text-muted-foreground p-4",
        same && "bg-gradient-to-r from-slate-800/70 to-slate-900/10"
      )}
    >
      <Icon className={cn("", same && "stroke-purple-400")} />

      {!collapse && (
        <p className={cn("", same && "text-blue-20000")}>{label}</p>
      )}
    </div>
  );
};
