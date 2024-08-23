import {
  CalendarCheck2,
  LayoutDashboard,
  SquareKanban,
  Upload,
  
} from "lucide-react";

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

    {label : "Notification", path : "/notification", icon : },
  ];
  return <div>List</div>;
};
