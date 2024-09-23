"use client";

import { Tabs, Tab } from "@nextui-org/react";

import KOL from "./KOL";
import Project from "./Project";
import Protocol from "./Protocol";

const tabs = [
  { label: "Protocol", content: <Protocol /> },
  { label: "Project", content: <Project /> },
  { label: "KOL", content: <KOL /> },
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
