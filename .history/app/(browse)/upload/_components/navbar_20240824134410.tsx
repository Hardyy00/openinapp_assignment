"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Bell, Menu, PersonStanding } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

export const Navbar: React.FC = () => {
  const matches = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="w-full py-4 px-8 flex justify-between items-center">
      <Menu />
      <h1 className="text-2xl font-bold text-primary">Upload CSV</h1>

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
