import { CircleSlash2 } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <div className="lg:hidden sticky top-0 bg-blue-600 text-black p-4">
      <div className="flex">
        <CircleSlash2 className="fill-white stroke-blue-600" />
      </div>
    </div>
  );
};
