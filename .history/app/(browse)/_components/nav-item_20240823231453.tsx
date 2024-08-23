import { LucideIcon } from "lucide-react";

interface NavItemProps {
  icon?: LucideIcon;
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon }) => {
  return <div>{Icon && <Icon />}</div>;
};
