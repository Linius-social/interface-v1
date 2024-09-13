"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/card";

export type ProjectCardProps = {
  backgroundUrl: string;
  name: string;
  contributors: number;
  saleType: number;
  minBuy: number;
  maxBuy: number;
  tokenValue: number;
  isOnline: boolean;
};

const ProjectCard = ({
  backgroundUrl,
  name,
  contributors,
  saleType,
  minBuy,
  maxBuy,
  tokenValue,
  isOnline,
}: ProjectCardProps) => {
  return (
    <Card className="my-10 w-[800px]">
      <CardHeader className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
        hehe
      </CardHeader>
      <CardBody className="mt-4 justify-between" />
    </Card>
  );
};

export default ProjectCard;
