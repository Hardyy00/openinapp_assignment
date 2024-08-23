import { LucideIcon } from "lucide-react";

interface NavItemProps {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({ icon, label, path }) => {
  return <div className="w-full"></div>;
};
