import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";
import { Upload } from "./_components/upload";

export default async function Page() {
  const session = await auth();
  return (
    <div className="h-full flex flex-col">
      <Navbar />

      <div className="h-full flex justify-center items-center">
        <Upload />
      </div>
    </div>
  );
}
