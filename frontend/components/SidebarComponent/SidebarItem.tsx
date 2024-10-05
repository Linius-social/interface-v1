import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export type SidebarItemProps = {
  title: string;
  icon: React.ReactNode;
  href?: string;
  isActive?: boolean;
};

const SidebarItem = ({ title, icon, href, isActive }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActivePath = pathname.includes(href || "");

  return (
    <NextLink
      className="text-default-900 active:bg-none max-w-full"
      href={href || "#"}
    >
      <div
        className={clsx(
          isActivePath
            ? "bg-foreground-100 text-foreground-900 [&_svg_path]:fill-foreground-300"
            : "hover:bg-default-100",
          "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]",
          "text-default-500"
        )}
      >
        {icon}
        {title}
      </div>
    </NextLink>
  );
};

export default SidebarItem;
