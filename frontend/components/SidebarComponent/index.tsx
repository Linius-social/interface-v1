"use client";

import { Home, Money4, Notification, Task, User } from "iconsax-react";
import { useContext } from "react";

import { UserContext } from "../userContext/UserContext";
import ProfileAccordion from "./ProfileAccordion";
import { Sidebar } from "./sidebar.style";
import SidebarItem from "./SidebarItem";
import SidebarMenu from "./SidebarMenu";

import { PROFILE } from "@/config/constants";

const lisSite = [
  {
    title: "Home",
    icon: <Home />,
    href: "/dashboard",
  },
  {
    title: "Profile",
    icon: <User />,
    href: "/actors",
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
];

const SidebarComponent = () => {
  const profile = useContext(UserContext);

  return (
    <UserContext.Provider value={PROFILE}>
      <aside className="h-screen z-[20] sticky top-0 p-2">
        <div>
          <ProfileAccordion address={profile.address} name={profile.name} />
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
            </SidebarMenu>
          </div>
        </div>
      </aside>
    </UserContext.Provider>
  );
};

export default SidebarComponent;
