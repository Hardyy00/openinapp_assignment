import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";
import { Upload } from "./_components/upload";

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <Navbar />

      <div className="w-full h-full flex justify-center">
        <Upload />
      </div>
    </div>
  );
}
