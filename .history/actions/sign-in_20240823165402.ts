"use server";

import { signIn } from "@/auth";

export const sign_in = async () => {
  await signIn("google", { redirectTo: "/home" });

  return Response.json("success");
};
