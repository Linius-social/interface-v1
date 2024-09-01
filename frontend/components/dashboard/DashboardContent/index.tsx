"use client";

import { Tab, Tabs } from "@nextui-org/react";

import PostContent from "./PostContent";

import { MOCK_POST_DATA } from "@/config/constants";

const DashboardContent = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        className="mb-4"
        color="default"
        variant="light"
        radius="full"
      >
        <Tab key="photos" title="Photos">
          <PostContent {...MOCK_POST_DATA} />
        </Tab>
        <Tab key="music" title="Music">
          <PostContent {...MOCK_POST_DATA} />
        </Tab>
        <Tab key="videos" title="Videos">
          <PostContent {...MOCK_POST_DATA} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default DashboardContent;
