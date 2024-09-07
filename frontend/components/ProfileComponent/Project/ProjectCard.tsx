"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export type ProjectCardProps = {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  projectImageLink: string;
};

const ProjectCard = ({
  projectName,
  projectDescription,
  projectLink,
  projectImageLink,
}: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <div>
            <h3>{projectName}</h3>
            <p>{projectDescription}</p>
          </div>
          <Button color="primary" href={projectLink} radius="full">
            View Project
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <Image alt="project" src={projectImageLink} />
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
