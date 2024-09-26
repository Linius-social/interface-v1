"use client";

import { Tab, Tabs } from "@nextui-org/react";

import KOL from "./KOL";
import Protocol from "./Protocol";

const tabs = [
  { label: "Stake protocol token", content: <Protocol /> },
  { label: "Stake KOL's Token", content: <KOL /> },
];
const StakingTabsContainer = () => {
  return (
    <Tabs variant="underlined">
      {tabs.map((tab, index) => (
        <Tab key={index} title={tab.label}>
          {tab.content}
        </Tab>
      ))}
    </Tabs>
  );
};

export default StakingTabsContainer;
