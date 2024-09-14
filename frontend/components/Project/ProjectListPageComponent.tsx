"use client";

import { Tab, Tabs } from "@nextui-org/tabs";

import ProjectInfoCardContainer from "./ProjectInfoCardContainer";

const ProjectListPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold shadow-lg mb-6">Projects</h1>
      <Tabs aria-label="Tabs variants" variant="underlined">
        <Tab key="All" title="All">
          <ProjectInfoCardContainer />
        </Tab>
        <Tab key="My Projects" title="My Projects">
          <ProjectInfoCardContainer />
        </Tab>
        <Tab key="Favorites" title="Favorites">
          <ProjectInfoCardContainer />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProjectListPage;
