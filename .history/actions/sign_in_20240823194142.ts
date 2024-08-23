"use server";

export const signin = async () => {
  await signIn("google", { redirectTo: "/home" });
};
