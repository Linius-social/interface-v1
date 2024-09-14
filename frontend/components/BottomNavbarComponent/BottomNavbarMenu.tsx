"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface BottomNavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  icon?: React.ReactNode;
  href?: string;
}

export const BottomNavbarItem = ({
  title,
  icon,
  href,
}: BottomNavbarItemProps) => {
  const pathname = usePathname();

  return (
    <Button
      key={title}
      isIconOnly
      as={Link}
      className={clsx(
        "hover:bg-primary hover:text-primary-foreground",
        pathname === href && "bg-primary text-primary-foreground",
      )}
      href={href || "#"}
      radius="full"
      variant="light"
    >
      {icon}
    </Button>
  );
};

interface BottomNavbarMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BottomNavbarMenu = ({ children }: BottomNavbarMenuProps) => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      {children}
    </div>
  );
};
