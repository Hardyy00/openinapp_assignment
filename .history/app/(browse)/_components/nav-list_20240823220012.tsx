import {
  Bell,
  CalendarCheck2,
  LayoutDashboard,
  Settings,
  SquareKanban,
  Upload,
} from "lucide-react";
import { NavItem } from "./nav-item";

export const NavList: React.FC = () => {
  const links = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    {
      label: "Upload",
      path: "/upload",
      icon: Upload,
    },

    {
      label: "Invoice",
      path: "/invoice",
      icon: SquareKanban,
    },

    { label: "Schedule", path: "/schedule", icon: CalendarCheck2 },

    { label: "Notification", path: "/notification", icon: Bell },

    { label: "Settings", path: "/settings", icon: Settings },
  ];
  return (
    <div>
      {links.map((item, i) => (
        <NavItem key={i} label={item.label} />
      ))}
    </div>

    // <div>hii</div>
  );
};
