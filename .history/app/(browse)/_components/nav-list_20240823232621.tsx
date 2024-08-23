"use client";

import {
  Bell,
  CalendarCheck2,
  FolderUp,
  LayoutDashboard,
  MessageCircleMore,
  Settings,
  SquareKanban,
  SquarePlay,
  Upload,
  Users,
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
    <div className="flex flex-col gap-y-6">
      {links.map((item, i) => (
        <NavItem key={i} {...item} />
      ))}
    </div>

    // <div>hii</div>
  );
};
