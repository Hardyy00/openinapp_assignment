"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Bell, Menu } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { SidebarMobile } from "./sidebar-mobile";

export const Navbar: React.FC = () => {
  const matches = useMediaQuery("(max-width: 1024px)");
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="w-full py-4 px-8 flex justify-between items-center">
      {matches && <Menu className="" onClick={handleClick} />}

      {matches && open && <SidebarMobile onclose={setOpen} />}
      <h1 className="lg:text-2xl md:text-xl text-lg  font-bold text-primary">
        Upload CSV
      </h1>

      <div className="flex gap-x-6 items-center">
        <Bell />

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>HG</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
