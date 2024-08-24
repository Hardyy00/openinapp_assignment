import { Intro } from "./_components/intro";
import { Navbar } from "./_components/navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full bg-background-muted">
      <Navbar />
      <div className="w-full h-full flex flex-col lg:flex-row bg-background-muted">
        <Intro />

        <div className="lg:flex-[0.7] flex-1  bg-background-muted">
          {children}
        </div>
      </div>
    </div>
  );
}
