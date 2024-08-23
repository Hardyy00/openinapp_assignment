import { LayoutDashboard, Upload } from "lucide-react";

export const NavList: React.FC = () => {
  const links = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    {
      label: "Upload",
      path: "/upload",
      icon: Upload,
    },

    {},
  ];
  return <div>List</div>;
};
