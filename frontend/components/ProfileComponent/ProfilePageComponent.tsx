"use client";

import { Tab, Tabs } from "@nextui-org/react";

import ProfileComponent from "./ProfileComponent";
import TransactionComponent from "./TransactionComponent";

import ProjectInformationCard from "@/components/ProfileComponent/Project/ProjectInformationCard";
import { MOCK_PROJECT_DATA, PROFILE } from "@/config/constants";

const ProfilePageComponent = () => {
  const userData = PROFILE;
  const mockProjectData = MOCK_PROJECT_DATA;

  return (
    <div className="w-full flex flex-col items-center justify-start">
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
        fullWidth
        aria-label="Options"
        className="mb-4"
        color="default"
        radius="full"
        variant="light"
      >
        <Tab key="Transactions" title="Transactions" className="w-full">
          <TransactionComponent />
        </Tab>
        <Tab key="Me" title="Me">
          <ProjectInformationCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
          <ProjectInformationCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
          <ProjectInformationCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
        </Tab>
        <Tab key="Projects" title="Projects">
          <ProjectInformationCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
          <ProjectInformationCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
          <ProjectInformationCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
        </Tab>
        <Tab key="NFTs" title="NFTs">
          <ProjectInformationCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
          <ProjectInformationCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
          <ProjectInformationCard
            projectDescription={mockProjectData.projectDescription}
            projectImageLink={mockProjectData.projectImageLink}
            projectLink={mockProjectData.projectLink}
            projectName={mockProjectData.projectName}
          />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProfilePageComponent;
