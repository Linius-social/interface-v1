import React from "react";

export interface SidebarMenuProps {
  title: string;
  children?: React.ReactNode;
}

const SidebarMenu = ({ title, children }: SidebarMenuProps) => {
  return (
    <div className="flex gap-2 flex-col">
      <span className="text-xs font-normal ">{title}</span>
      {children}
    </div>
  );
};

export default SidebarMenu;
