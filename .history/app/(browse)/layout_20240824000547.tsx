import { isLogin } from "@/lib/user-service";
import { Sidebar } from "./_components";
import { notFound } from "next/navigation";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const login = await isLogin();

  if (!login) {
    notFound();
  }
  return (
    <div className="w-full h-full flex">
      <Sidebar />

      <div className="bg-background-muted">{children}</div>
    </div>
  );
}
