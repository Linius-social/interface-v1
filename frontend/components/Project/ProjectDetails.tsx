import React from "react";
import { Image } from "@nextui-org/image";
import { SearchIcon } from "lucide-react";

export type ProjectDetailsProps = {
  description: string;
  projectImageLink: string;
};

const ProjectDetails = ({
  description,
  projectImageLink,
}: ProjectDetailsProps) => {
  return (
    <div className="p-6 font-sans">
      <div className="mb-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          Description <SearchIcon className="w-6 h-6 text-orange-500" />
        </h2>
        <p className="text-gray-400 text-sm">Explore all existin project</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">{description}</div>
        <Image
          alt="Project Image"
          className="rounded-lg mt-4"
          src={projectImageLink}
        />
      </div>
    </div>
  );
};

export default ProjectDetails;