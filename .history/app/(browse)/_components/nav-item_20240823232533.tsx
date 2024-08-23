"use client";

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
    <div className="flex w-full">
      <Icon />

      <p>{label}</p>
    </div>
  );
};
