import { ThemeToggle } from "@/components/theme-toggle";
import { CircleSlash2 } from "lucide-react";
import Image from "next/image";
import { Intro } from "./_components/intro";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    <Nabar/>
    <div className="w-full h-full border flex flex-col lg:flex-row">
      <Intro />

      <div>{children}</div>
    </div>
  );
}
