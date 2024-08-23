import { LayoutDashboard, SquareKanban, Upload } from "lucide-react";

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

    { label: "Schedule" },
  ];
  return <div>List</div>;
};
