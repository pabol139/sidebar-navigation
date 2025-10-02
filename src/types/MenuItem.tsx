import type { JSX } from "react";

export type MenuItem = {
  text: string;
  url: string;
  icon: ({ size, color }: { size: number; color: string }) => JSX.Element;
  iconColor: string;
};
