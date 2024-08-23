import { auth } from "@/auth";

export default function Page() {
  const session = auth();
  return <div>Page</div>;
}
