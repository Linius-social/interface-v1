import { faker } from "@faker-js/faker";

import ProjectInfoCard from "./ProjectInfoCard";

const genProjectData = (numProjects = 10) => {
  return Array.from({ length: numProjects }, () => ({
    contributors: faker.number.int({ min: 1, max: 100 }),
    description: faker.lorem.sentence(2),
    isOnline: true,
    maxBuy: faker.number.int({ min: 1, max: 20 }),
    minBuy: faker.number.int({ min: 1, max: 5 }),
    name: faker.company.name(),
    progress: faker.number.int({ min: 0, max: 100 }),
    value: faker.number.int({ min: 100, max: 1000 }),
  }));
};

const ProjectInfoCardContainer = () => {
  const projectData = genProjectData();

  return (
    <div className="my-auto grid max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2">
      {projectData.map((project, index) => (
        <ProjectInfoCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectInfoCardContainer;
