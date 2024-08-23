import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";
import { Upload } from "./_components/upload";

export default async function Page() {
  const session = await auth();
  return (
    <div className="h-full">
      <Navbar />

      <div className="w-full flex justify-center border">
        <Upload />
      </div>
    </div>
  );
}
