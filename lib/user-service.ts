"use server";

import { auth } from "@/auth";

export const isLogin = async () => {
  const session = await auth();

  return !!session;
};
