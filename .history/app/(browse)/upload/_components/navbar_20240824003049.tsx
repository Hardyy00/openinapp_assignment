import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, PersonStanding } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full p-4 flex justify-between">
      <h1 className="text-2xl font-bold text-primary">Upload</h1>

      <div className="flex gap-x-6">
        <Bell />

        <Avatar>
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
