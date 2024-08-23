import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Page() {
  const onSubmit = async () => {
    "use server";
    await signIn("google", { redirectTo: "/home" });
  };
  return (
    <div className="h-full p-8 light:bg-gray-100">
      <div className="p-8 border h-full flex items-center justify-center">
        <div className="flex flex-col gap-y-4">
          <div className="space-y-2">
            <h1 className="text-foreground font-bold text-3xl">Sign In</h1>
            <p className="text-lg">Sign In to you account</p>
          </div>

          <div className="flex justify-between gap-x-8">
            <form action={onSubmit}>
              {" "}
              <Button
                className="flex items-center py-2 px-6 border space-x-4 rounded-xl bg-gray-800 hover:bg-gray-900"
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

            <Button
              className="flex items-center py-2 px-6 border space-x-4 rounded-xl bg-gray-800 hover:bg-gray-900"
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
          </div>

          <div className="bg-back  p-4 pb-8 rounded-3xl">
            <form className="space-y-4">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input placeholder="Email" className="rounded-xl" />
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-xl"
                />
              </div>

              <div>
                <p className="text-blue-500 font-semibold">Forgot Password?</p>
              </div>

              <Button variant={"primary"} className="w-full rounded-xl">
                Sign In
              </Button>
            </form>
          </div>

          <div className="flex w-full justify-around  ">
            <div className="h-10 w-10 p-1 border rounded-[4rem] flex items-center justify-center bg-back hover:bg-gray-200 transition-all">
              <div className="h-8 w-8  relative">
                <Image src={"/github.svg"} alt="svg" fill />
              </div>
            </div>

            <div className="h-10 w-10 p-1 border rounded-[4rem] flex items-center justify-center bg-gray-500 hover:bg-gray-200 transition-all">
              <div className="h-6 w-6  relative ">
                <Image src={"/twitter.svg"} alt="svg" fill />
              </div>
            </div>

            <div className="h-10 w-10 p-1 border rounded-[4rem] flex items-center justify-center bg-gray-500 hover:bg-gray-200 transition-all">
              <div className="h-6 w-6  relative">
                <Image src={"/linkedin.svg"} alt="svg" fill />
              </div>
            </div>

            <div className="h-10 w-10 p-1 border rounded-[4rem] flex items-center justify-center bg-gray-500 hover:bg-gray-200 transition-all">
              <div className="h-6 w-6 relative">
                <Image src={"/discord.svg"} alt="svg" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
