import { Home, User, Money4, Notification } from "iconsax-react";

import { BottomNavbarMenu, BottomNavbarItem } from "./BottomNavbarMenu";

const lisSite = [
  {
    title: "Home",
    icon: <Home />,
    href: "/dashboard",
  },
  {
    title: "Profile",
    icon: <User />,
    href: "/profle",
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

export const BottomNavbarComponent = () => {
  return (
    <header className="p-4 w-full rounded-full">
      <BottomNavbarMenu>
        {lisSite.map((item, index) => (
          <BottomNavbarItem
            key={index}
            href={item.href}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </BottomNavbarMenu>
    </header>
  );
};
