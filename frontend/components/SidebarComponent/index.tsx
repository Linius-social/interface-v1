import { faker } from "@faker-js/faker";
import { Home, User, Notification, Money4 } from "iconsax-react";

import ProfileAccordion from "./ProfileAccordion";
import { Sidebar } from "./sidebar.style";
import SidebarMenu from "./SidebarMenu";
import SidebarItem from "./SidebarItem";

const profile = {
  name: faker.name.fullName(),
  address: faker.finance.ethereumAddress(),
  avatarUrl: faker.image.avatar(),
};

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

const SidebarComponent = () => {
  return (
    <aside className="h-screen z-[20] sticky top-0">
      <div className={Sidebar.Header()}>
        <ProfileAccordion {...profile} />
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
        </div>
      </div>
    </aside>
  );
};

export default SidebarComponent;
