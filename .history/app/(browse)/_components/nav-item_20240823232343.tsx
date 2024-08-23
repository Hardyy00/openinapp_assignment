"use client";

import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItemProps {
  icon: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon }) => {
  return (
    <div>
      <Icon />
    </div>
  );
};
