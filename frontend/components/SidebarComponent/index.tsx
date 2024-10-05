"use client";

import {
  DocumentText,
  Home,
  Money4,
  Notification,
  Task,
  User,
} from "iconsax-react";
import { useContext, useMemo } from "react";
import { Vault } from "lucide-react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

import { UserContext } from "../userContext/UserContext";

import ProfileAccordion from "./ProfileAccordion";
import { Sidebar } from "./sidebar.style";
import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";

import { PROFILE, SOCIAL_ADDRESS } from "@/config/constants";

const SidebarComponent = () => {
  const profile = useContext(UserContext);
  const wallet = useWallet();

  const lisSite = useMemo(
    () => [
      {
        title: "Home",
        icon: <Home />,
        href: "/home",
      },
      {
        title: "Profile",
        icon: <User />,
        href: "/account" + (wallet.account ? `/${wallet.account.address}` : ""),
      },
      {
        title: "Notification",
        icon: <Notification />,
        href: "/notification",
      },
      {
        title: "Stake",
        icon: <Money4 />,
        href: "/stake",
      },
      {
        title: "Project",
        icon: <DocumentText />,
        href: "/project",
      },
    ],
    [wallet],
  );

  const handleFaucet = async () => {
    await wallet.signAndSubmitTransaction({
      data: {
        function: `${SOCIAL_ADDRESS}::social::faucet`,
        functionArguments: [10 * 10 ** 8],
      },
    });
  };

  const handleFaucet2 = async () => {
    await wallet.signAndSubmitTransaction({
      data: {
        function: `${SOCIAL_ADDRESS}::social::faucet_kol`,
        functionArguments: [
          "0xc3084eb39877ded56fdecaee9c469c15332392fb3cec7c21a937d7d355698aa0",
          100 * 10 ** 8,
        ],
      },
    });
  };

  return (
    <UserContext.Provider value={PROFILE}>
      <aside className="h-screen z-[20] sticky top-0 p-2 min-w-64 ">
        <div>
          <ProfileAccordion
            address={wallet?.account?.address || "0x0"}
            name={profile.name}
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarMenu title="Menu">
              {lisSite.map((item, index) => (
                <SidebarItem
                  key={index}
                  href={item.href}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </SidebarMenu>
            <SidebarMenu title="Other">
              <SidebarItem
                key="faq"
                href="/faq"
                icon={<Task />} // Replace with the actual FAQ icon component
                title="FAQ"
              />
              <div
                key="faucet"
                className="hover:bg-default-100 flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
                role="button"
                tabIndex={0} // Makes the div focusable
                title="faucet"
                onClick={(e) => {
                  e.preventDefault();
                  handleFaucet();
                }}
                onKeyDown={() => {}}
              >
                <Vault />
                <span className="text-default-900">
                  Faucet native testing tokens
                </span>
              </div>
              <div
                key="faucet"
                className="hover:bg-default-100 flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
                role="button"
                tabIndex={0} // Makes the div focusable
                title="faucet"
                onClick={(e) => {
                  e.preventDefault();
                  handleFaucet2();
                }}
                onKeyDown={() => {}}
              >
                <Vault />
                <span className="text-default-900">
                  Faucet KOL testing tokens
                </span>
              </div>
            </SidebarMenu>
          </div>
        </div>
      </aside>
    </UserContext.Provider>
  );
};

export default SidebarComponent;
