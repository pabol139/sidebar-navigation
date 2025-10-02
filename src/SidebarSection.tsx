import SidebarItem from "./SidebarItem";
import type { MenuData } from "./types/MenuData";

export default function SidebarSection({ data }: { data: MenuData }) {
  const { title, items } = data;

  return (
    <section>
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className=" mt-2.5 text-sm">
        {items.map((item) => {
          return <SidebarItem key={item.text} item={item}></SidebarItem>;
        })}
      </ul>
    </section>
  );
}
