"use server";

import { signIn } from "@/auth";

export const SignIn = async () => {
  await signIn("google", { redirectTo: "/home" });

  return new Response("Hii");
};
