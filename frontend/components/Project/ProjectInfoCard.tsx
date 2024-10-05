"use client";

import { Card, Progress } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { useMemo } from "react";

export type ProjectInfoCardProps = {
  name: string;
  description: string;
  isOnline: boolean;
  value: number;
  progress: number;
  contributors: number;
  minBuy: number;
  maxBuy: number;
};

const ProjectInfoCard: React.FC<ProjectInfoCardProps> = ({
  name,
  description,
  isOnline,
  value,
  progress,
  contributors,
  minBuy,
  maxBuy,
}) => {
  const fieldValue = useMemo(() => {
    return [
      {
        field: "Contributors",
        value: contributors,
      },
      {
        field: "Min Buy",
        value: minBuy,
      },
      {
        field: "Max Buy",
        value: maxBuy,
      },
    ];
  }, [contributors, minBuy, maxBuy]);

  return (
    <Card className="p-4 rounded-3xl w-full m-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
            <PlusIcon className="text-orange-500" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-400">{description}</p>
          </div>
        </div>
        <div
          className={`px-3 py-1 rounded-full ${isOnline ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"}`}
        >
          {isOnline ? "Live" : "Offline"}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-400 mb-1">Soft</p>
        <p className="text-4xl font-bold">{value.toLocaleString()}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {fieldValue.map((field) => (
          <div key={field.field}>
            <p className="text-gray-400 text-sm">{field.field}</p>
            <p className="font-semibold">{field.value}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-400">Progress</p>
          <p className="font-semibold">{progress}%</p>
        </div>
        <Progress
          className="h-2"
          classNames={{
            track: "drop-shadow-md border border-default",
            indicator: "bg-gradient-to-r from-orange-500 to-orange-300",
          }}
          value={progress}
        />
      </div>
    </Card>
  );
};

export default ProjectInfoCard;
