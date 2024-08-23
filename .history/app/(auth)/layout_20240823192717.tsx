import { ThemeToggle } from "@/components/theme-toggle";
import { CircleSlash2 } from "lucide-react";
import Image from "next/image";
import { Intro } from "./_components/intro";
import { Navbar } from "./_components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-col lg:flex-row">
        <Intro />

        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
