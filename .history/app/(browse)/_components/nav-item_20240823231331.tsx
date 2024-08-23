import { IconNode } from "lucide-react";

interface NavItemProps {
  icon?: IconNode;
}

export const NavItem: React.FC<NavItemProps> = ({ icon: Icon }) => {
  return <div>{icon && <Icon />}</div>;
};
