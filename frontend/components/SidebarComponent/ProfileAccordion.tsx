"use client";

import React from "react";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
} from "@nextui-org/react";
import { ArrowRight01Icon } from "hugeicons-react";
import { truncateAddress, useWallet } from "@aptos-labs/wallet-adapter-react";

import LogoIcon from "../shared/icon/LogoIcon";
import WalletSelector from "../dashboard/Wallet/WalletSelector";

import { truncateText } from "@/helpers";

export type ProfileAccordionProps = {
  address: string;
  name: string;
};

const ProfileAccordion = ({ name, address }: ProfileAccordionProps) => {
  const [isClient, setIsClient] = React.useState(false);
  const { connected, isLoading, account, wallet, disconnect} = useWallet();

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || isLoading) {
    return <Skeleton className="w-full h-16 rounded-2xl" />;
  }
  if (!connected) return <WalletSelector />;

  return (
    <Dropdown classNames={{ base: "w-full" }}>
      <DropdownTrigger className="cursor-pointer w-full">
        <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-foreground-50 border border-default/25">
          <div className="flex-shrink-0">
            <Avatar
              src={wallet?.icon}
              alt="Wallet"
              className="w-10 h-10"
            />
          </div>
          <div className="flex flex-col justify-center overflow-hidden">
            <h3 className="text-base font-medium text-foreground-900 truncate">
              {wallet?.name}
            </h3>
            <span className="text-xs font-medium text-foreground-500 truncate">
              {truncateAddress(account?.address)}
            </span>
          </div>
          <div>
            <ArrowRight01Icon className="w-4 h-4 ml-auto" />
          </div>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem key="profile">Profile</DropdownItem>
        <DropdownItem key="settings">Settings</DropdownItem>
        <DropdownItem key="logout" onClick={disconnect}>Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileAccordion;
