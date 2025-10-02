import type { MenuItem } from "./types/MenuItem";

export default function SidebarItem({ item }: { item: MenuItem }) {
  const { text, url, icon: Icon, iconColor } = item;

  return (
    <li>
      <a
        className="flex gap-1 items-center px-2 py-2.5 md:py-1.5 -mx-2 transition-[background-color,transform] active:scale-95 hover:bg-[#404040] rounded-md"
        href={url}
      >
        <Icon size={20} color={iconColor}></Icon>
        {text}
      </a>
    </li>
  );
}
