"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

import { HeartIcon } from "@/components/shared/icon/HeartIcon";
import { ShareIcon } from "@/components/shared/icon/ShareIcon";
import { ViewIcon } from "@/components/shared/icon/ViewIcon";

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
    <Card className="w-full my-4">
      <CardHeader className="flex justify-between">
        <div>
          <div>
            <h3 className="text-lg font-medium mb-1">{projectName}</h3>
            <p className="text-sm font-medium text-foreground-500">
              {projectDescription}
            </p>
          </div>
        </div>
        <Button href={projectLink} radius="full" size="sm">
          Link
        </Button>
      </CardHeader>
      <CardBody>
        <Image alt="project" src={projectImageLink} />
        <div className="mt-4 flex space-x-4 text-default-500">
          <HeartIcon className="h-6 w-6 text-default-500" />
          <ShareIcon className="h-6 w-6 text-default-500" />
          <ViewIcon className="h-6 w-6 text-default-500" />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
