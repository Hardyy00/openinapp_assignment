import { Bell, PersonStanding } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full p-4 flex">
      <h1 className="text-2xl font-bold text-primary">Upload</h1>

      <div>
        <Bell />

        <PersonStanding />
      </div>
    </div>
  );
};
