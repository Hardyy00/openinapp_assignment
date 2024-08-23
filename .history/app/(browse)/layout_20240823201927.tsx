import { Sidebar } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-full">
      <Sidebar />
    </div>
  );
}
