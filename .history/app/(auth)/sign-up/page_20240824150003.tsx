"use client";
import { signin } from "@/actions/sign_in";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import { useMediaQuery } from "usehooks-ts";

export default function Page() {
  const matches = useMediaQuery("(max-width: 1024px)");
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // useEffect(() => {
  //   async function check() {
  //     const login = await isLogin();

  //     if (login) {
  //       router.push("/upload");
  //     }
  //   }

  //   check();
  // }, [router]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("clicked");

    if (
      !email ||
      !email.length ||
      !email.includes("@") ||
      !email.includes(".")
    ) {
      toast.error("Either your Email is empty or has some errors.");
      return;
    }

    if (!password || password.length < 8) {
      toast.error("Password length must be at least 8 characters");
      return;
    }

    router.push("/upload");
  };

  return (
    <div className="h-full p-8">
      <div className="lg:px-8 py-6 h-full flex items-center justify-center">
        <div className="flex flex-col gap-y-8 lg:gap-y-8 h-full">
          <div className="space-y-2">
            <h1 className="text-foreground font-bold text-3xl">Sign Up</h1>
            <p className="text-lg">Sign Up to you account</p>
          </div>

          <div className="flex lg:gap-x-8 gap-x-4">
            <form action={signin}>
              {" "}
              <Button
                className={cn(
                  "flex items-center py-2 lg:px-6 px-2  lg:space-x-4 space-x-1 rounded-xl bg-background hover:bg-gray-900 text-muted-foreground",
                  matches && "bg-white"
                )}
                variant={"ghost"}
              >
                <div className="w-5 h-5 relative">
                  <Image src={"/google.svg"} alt="svg" fill />
                </div>

                <div>
                  <p
                    className={cn(
                      "text-foreground",
                      matches && "text-muted-foreground"
                    )}
                  >
                    Sign Up with Google
                  </p>
                </div>
              </Button>
            </form>

            <Button
              className={cn(
                "flex items-center py-2 lg:px-6 px-4  lg:space-x-4 space-x-2 rounded-xl bg-background hover:bg-gray-900 text-muted-foreground",
                matches && "bg-white"
              )}
              variant={"ghost"}
            >
              <div className="w-5 h-5 relative">
                <Image
                  src={"/apple.svg"}
                  alt="svg"
                  fill
                  className="bg-white bg-clip-border"
                />
              </div>

              <div>
                <p
                  className={cn(
                    "text-foreground",
                    matches && "text-muted-foreground"
                  )}
                >
                  Sign Up with Apple
                </p>
              </div>
            </Button>
          </div>

          <div
            className={cn(
              "bg-background p-4 pb-8 rounded-3xl",
              matches && "bg-white"
            )}
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input
                  type="text"
                  placeholder="Email"
                  className={cn(
                    "rounded-xl bg-background-muted",
                    matches && "bg-back"
                  )}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  placeholder="Password"
                  type="password"
                  className={cn(
                    "rounded-xl bg-background-muted",
                    matches && "bg-back"
                  )}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Button variant={"primary"} className="w-full rounded-xl">
                Sign Up
              </Button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href={"/"} className="text-blue-600 font-semibold">
                Sign In
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
