import { ThemeToggle } from "@/components/theme-toggle";
import { CircleSlash2 } from "lucide-react";
import Image from "next/image";
import { Intro } from "./_components/intro";
import { Navbar } from "./_components/navbar";
import { auth } from "@/auth";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full bg-background-muted">
      <Navbar />
      <div className="w-full h-full flex flex-col lg:flex-row">
        <Intro />

        <div className="flex-[0.7]">{children}</div>
      </div>
    </div>
  );
}
