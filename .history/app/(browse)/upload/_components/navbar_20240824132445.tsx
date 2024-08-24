import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Bell, PersonStanding } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full py-4 px-8 flex justify-between">
      <h1 className="text-2xl font-extrabold text-primary">Upload CSV</h1>

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
