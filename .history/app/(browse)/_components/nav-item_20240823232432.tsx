"use client";

import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon }) => {
  const currPath = usePathname();
  const same = path === currPath;
  return (
    <div>
      <Icon />
    </div>
  );
};
