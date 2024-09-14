import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

export type SidebarItemProps = {
  title: string;
  icon: React.ReactNode;
  href?: string;
  isActive?: boolean;
};

const SidebarItem = ({ title, icon, href, isActive }: SidebarItemProps) => {
  return (
    <NextLink
      className="text-default-900 active:bg-none max-w-full"
      href={href || "#"}
    >
      <div
        className={clsx(
          isActive
            ? "bg-primary-100 [&_svg_path]:fill-primary-500"
            : "hover:bg-default-100",
          "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]",
        )}
      >
        {icon}
        <span className="text-default-900">{title}</span>
      </div>
    </NextLink>
  );
};

export default SidebarItem;
