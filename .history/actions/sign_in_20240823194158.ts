"use server";

import { signIn } from "@/auth";

export const signin = async () => {
  await signIn("google", { redirectTo: "/home" });

  return Response.json("success");
};
