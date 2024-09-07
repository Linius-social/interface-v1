"use client";

import { Tab, Tabs } from "@nextui-org/react";

import ProfileComponent from "./ProfileComponent";

import { MOCK_PROJECT_DATA, PROFILE } from "@/config/constants";
import ProjectCard from "@/components/ProfileComponent/Project/ProjectCard";

const ProfilePageComponent = () => {
  const userData = PROFILE;
  const mockProjectData = MOCK_PROJECT_DATA;

  return (
    <div>
      <ProfileComponent
        address={userData.address}
        avatarUrl={userData.avatar}
        backgroundUrl={userData.backgroundUrl}
        earningsNumber={userData.earningsNumber}
        fieldNumber={userData.fieldNumber}
        projectsNumber={userData.projectsNumber}
        tokenValue={userData.tokenValue}
      />
      <Tabs
        aria-label="Options"
        className="mb-4"
        color="default"
        radius="full"
        variant="light"
      >
        <Tab key="Me" title="Me">
          <ProjectCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
          <ProjectCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
          <ProjectCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
        </Tab>
        <Tab key="Projects" title="Projects">
          here
        </Tab>
        <Tab key="NFTs" title="NFTs">
          here
        </Tab>
        <Tab key="Transactions" title="Transactions">
          hehe
        </Tab>
        <Tab key="Activities" title="Activites">
          here
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProfilePageComponent;
