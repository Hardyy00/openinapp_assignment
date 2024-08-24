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
      href={path}
      className={cn(
        "flex w-full items-center lg:gap-x-2  gap-x-4 text-muted-foreground p-4 transition-all max-lg:px-8",
        same && "bg-gradient-to-r from-purple-600/10 to-background"
      )}
    >
      <Icon
        className={cn("max-lg:w-8 max-lg:h-8", same && "stroke-violet-600")}
      />

      {!collapse && (
        <p
          className={cn(
            "transition-all duration-300 max-lg:text-xl",
            same && "text-violet-600 "
          )}
        >
          {label}
        </p>
      )}
    </Link>
  );
};
