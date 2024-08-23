import { ThemeToggle } from "@/components/theme-toggle";
import { CircleSlash2 } from "lucide-react";
import Image from "next/image";
import { Intro } from "./_components/intro";
import { Navbar } from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="w-full h-full flex flex-col lg:flex-row">
        <Intro />

        <div className="flex-1 border border-red-500">{children}</div>
      </div>
    </div>
  );
}
