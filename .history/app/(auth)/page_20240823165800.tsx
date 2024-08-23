import { sign_in } from "@/actions/sign-in";
import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  const onSubmit = async () => {
    "use server";
    await signIn;
  };
  return (
    <div className="h-full p-8">
      <div className="p-8 border h-full flex items-center justify-center">
        <div className="flex flex-col gap-y-4">
          <div className="space-y-2">
            <h1 className="text-foreground font-bold text-3xl">Sign In</h1>
            <p className="text-lg">Sign In to you account</p>
          </div>

          <div className="flex justify-between gap-x-8">
            <form>
              {" "}
              <Button
                className="flex items-center py-2 px-6 border space-x-4 rounded-xl bg-gray-800"
                variant={"ghost"}
              >
                <div className="w-5 h-5 relative">
                  <Image src={"/google.svg"} alt="svg" fill />
                </div>

                <div>
                  <p className="text-white">Sign In with Google</p>
                </div>
              </Button>
            </form>
            <form>
              <Button
                className="flex items-center py-2 px-6 border space-x-4 rounded-xl bg-gray-800"
                variant={"ghost"}
              >
                <div className="w-5 h-5 relative">
                  <Image
                    src={"/apple.svg"}
                    alt="svg"
                    fill
                    className="fill-white"
                  />
                </div>

                <div>
                  <p className="text-white">Sign In with Apple</p>
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
