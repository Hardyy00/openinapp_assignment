import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

export const Switcher: React.FC = () => {
  const matches = useMediaQuery("(max-width:1024px)");

  useEffect(() => {}, [matches]);
  return null;
};
