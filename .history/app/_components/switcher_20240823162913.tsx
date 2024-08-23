"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

export const Switcher: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const matches = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    if (matches) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [matches, theme, setTheme]);
  return null;
};
