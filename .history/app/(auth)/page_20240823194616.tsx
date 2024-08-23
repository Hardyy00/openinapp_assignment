"use client";
import { signin } from "@/actions/sign_in";
// import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

export default function Page() {
  const matches = useMediaQuery("(max-width: 1024px)");
  // const onSubmit = async () => {
  //   "use server";
  //   await signIn("google", { redirectTo: "/home" });
  // };
  return (
    <div className="h-full p-8">
      <div className="lg:px-8 py-6 h-full flex items-center justify-center">
        <div className="flex flex-col gap-y-8 lg:gap-y-8 h-full">
          <div className="space-y-2">
            <h1 className="text-foreground font-bold text-3xl">Sign In</h1>
            <p className="text-lg">Sign In to you account</p>
          </div>

          <div className="flex justify-between lg:gap-x-8 gap-x-4">
            <form action={signin}>
              {" "}
              <Button
                className={cn(
                  "flex items-center py-2 lg:px-6 px-4  space-x-4 rounded-xl bg-back hover:bg-gray-900 text-muted-foreground",
                  matches && "bg-white"
                )}
                variant={"ghost"}
              >
                <div className="w-5 h-5 relative">
                  <Image src={"/google.svg"} alt="svg" fill />
                </div>

                <div>
                  <p className="text-foreground">Sign In with Google</p>
                </div>
              </Button>
            </form>

            <Button
              className="flex items-center lg:py-2 lg:px-6 border lg:space-x-4 rounded-xl bg-back hover:bg-gray-900"
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

          <div
            className={cn(
              "bg-back p-4 pb-8 rounded-3xl",
              matches && "bg-white"
            )}
          >
            <form className="space-y-4">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input
                  placeholder="Email"
                  className={cn("rounded-xl", matches && "bg-back")}
                />
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  placeholder="Password"
                  type="password"
                  className={cn("rounded-xl", matches && "bg-back")}
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

          <div className="text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link href={"/sign-up"} className="text-blue-600 font-semibold">
                Sign Up
              </Link>
            </p>
          </div>

          <div className="flex w-full justify-around mt-4">
            <div className="h-10 w-10 p-1 border rounded-[4rem] flex items-center justify-center bg-back hover:bg-gray-200 transition-all">
              <div className="h-8 w-8  relative">
                <Image src={"/github.svg"} alt="svg" fill />
              </div>
            </div>

            <div className="h-10 w-10 p-1 border rounded-[4rem] flex items-center justify-center bg-back hover:bg-gray-200 transition-all">
              <div className="h-6 w-6  relative ">
                <Image src={"/twitter.svg"} alt="svg" fill />
              </div>
            </div>

            <div className="h-10 w-10 p-1 border rounded-[4rem] flex items-center justify-center bg-back hover:bg-gray-200 transition-all">
              <div className="h-6 w-6  relative">
                <Image src={"/linkedin.svg"} alt="svg" fill />
              </div>
            </div>

            <div className="h-10 w-10 p-1 border rounded-[4rem] flex items-center justify-center bg-back hover:bg-gray-200 transition-all">
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
