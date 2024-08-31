"use client";

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";

import PostContent from "./PostContent";

import { MOCK_POST_DATA } from "@/config/constants";

const DashboardContent = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        className="mb-4"
        color="warning"
        variant="light"
      >
        <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
              <PostContent {...MOCK_POST_DATA} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              <PostContent {...MOCK_POST_DATA} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              <PostContent {...MOCK_POST_DATA} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default DashboardContent;
