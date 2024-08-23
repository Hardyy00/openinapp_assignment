import { auth } from "@/auth";
import { Navbar } from "./_components/navbar";

export default async function Page() {
  const session = await auth();
  return (
    <div>
      <Navbar />
    </div>
  );
}
