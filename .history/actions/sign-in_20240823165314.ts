"use server";

import { signIn } from "@/auth";

export const SignIn = async () => {
  await signIn("google", { redirectTo: "/home" });

  return Response.json("success");
};
