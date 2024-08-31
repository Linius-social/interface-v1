"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import LogoIcon from "../shared/icon/LogoIcon";

import { truncateText } from "@/helpers";

export type ProfileAccordionProps = {
  address: string;
  name: string;
};

const ProfileAccordion = ({ name, address }: ProfileAccordionProps) => {
  const truncatedAddress = truncateText(address, 20);

  return (
    <Dropdown classNames={{ base: "w-full min-w-[260px]" }}>
      <DropdownTrigger className="cursor-pointer w-full">
        <div className="flex items-center gap-4 p-4 border border-gray-300 dark:border-gray-700 shadow-md rounded-lg bg-white dark:bg-gray-800">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <LogoIcon className="w-12 h-12" />
            </div>
          </div>
          <div className="flex flex-col justify-center overflow-hidden">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 truncate">
              {name}
            </h3>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
              {truncatedAddress}
            </span>
          </div>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem key="settings">Settings</DropdownItem>
        <DropdownItem key="logout">Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileAccordion;
