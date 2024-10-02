import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { RepeatIcon } from "hugeicons-react";
import { Zap } from "lucide-react";

import { HeartIcon } from "../shared/icon/HeartIcon";
import LinkIcon from "../shared/icon/LinkIcon";
import LogoIcon from "../shared/icon/LogoIcon";

export type ProjectCardProps = {
  backgroundUrl: string;
  name: string;
  contributors: number;
  saleType: string;
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
    <Card className="text-white overflow-hidden">
      <CardHeader className="h-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 relative">
        <div className="absolute -bottom-10 left-6 bg-white rounded-full p-2">
          <LogoIcon className="h-16 w-16 text-gray-900" />
        </div>
      </CardHeader>
      <CardBody className="pt-12 pb-4 px-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <span
              className={`flex items-center px-2 py-0.5 rounded-full text-xs ${isOnline ? "text-green-400 border border-green-400" : "text-gray-400 border border-gray-400"}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full mr-1 ${isOnline ? "bg-green-400" : "bg-gray-400"}`}
              />
              {isOnline ? "Live" : "Offline"}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="flex gap-4 mb-4">
              <HeartIcon className="w-5 h-5 text-gray-400" />
              <RepeatIcon className="w-5 h-5 text-gray-400" />
              <LinkIcon className="w-5 h-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-5 text-sm">
              <div>
                <div className="text-gray-400">Contributors</div>
                <div className="font-semibold">{contributors}</div>
              </div>
              <div className="pl-3 border-l border-gray-700">
                <div className="text-gray-400">Sale Type</div>
                <div className="font-semibold">{saleType}</div>
              </div>
              <div className="pl-3 border-l border-gray-700">
                <div className="text-gray-400">Min Buy</div>
                <div className="font-semibold">{minBuy} SOL</div>
              </div>
              <div className="pl-3 border-l border-gray-700">
                <div className="text-gray-400">Max Buy</div>
                <div className="font-semibold">{maxBuy} SOL</div>
              </div>
              <div className="pl-3 border-l border-gray-700">
                <div className="text-gray-400">Current Raised</div>
                <div className="font-semibold">{tokenValue} SOL</div>
              </div>
            </div>
          </div>
          <div className="rounded-full p-[2px] bg-gradient-to-tr from-white via-black/0 to-primary w-fit h-fit">
            <div className="inline-flex items-center bg-foreground-50 rounded-full p-4 text-base text-primary font-semibold">
              <Zap className="mr-1" size={16} />
              <span>{tokenValue}ƒ</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
