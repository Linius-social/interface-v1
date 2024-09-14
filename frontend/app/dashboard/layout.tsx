import { Metadata } from "next";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function DashboardLayout({ children }: LayoutProps) {
  return <Providers>{children}</Providers>;
}
