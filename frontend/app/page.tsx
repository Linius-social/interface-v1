"use client";

import { useWallet } from "@aptos-labs/wallet-adapter-react";

import PageDashboard from "@/app/home/page";
import HomePage from "@/components/HomePage";

export default function Home() {
  const wallet = useWallet();

  if (wallet.account) {
    return <PageDashboard />;
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HomePage />
    </section>
  );
}
