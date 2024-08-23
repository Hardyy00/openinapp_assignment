"use client";

import { cn } from "@/lib/utils";
import { useSideBar } from "@/store/use-sidebar";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
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
    <Link
      className={cn(
        "flex w-full items-center gap-x-2 text-muted-foreground p-4 transition-all",
        same && "bg-gradient-to-r from-slate-800/70 to-slate-900/10"
      )}
    >
      <Icon className={cn("", same && "stroke-violet-600")} />

      {!collapse && (
        <p className={cn("transition-all", same && "text-violet-600 ")}>
          {label}
        </p>
      )}
    </Link>
  );
};
