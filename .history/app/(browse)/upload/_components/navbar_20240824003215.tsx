import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Bell, PersonStanding } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full p-4 px-8 flex justify-between">
      <h1 className="text-2xl font-bold text-primary">Upload</h1>

      <div className="flex gap-x-6 items-center mr-4">
        <Bell />

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>HG</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
