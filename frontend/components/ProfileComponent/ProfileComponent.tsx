"use client";

import { useMemo } from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Avatar, Divider } from "@nextui-org/react";
import { truncateAddress } from "@aptos-labs/wallet-adapter-react";

export type ProfileComponentProps = {
  backgroundUrl: string;
  address: string;
  projectsNumber: number;
  earningsNumber: number;
  fieldNumber: number;
  tokenValue: number;
  avatarUrl: string;
};

const ProfileComponent = ({
  address,
  projectsNumber,
  earningsNumber,
  fieldNumber,
  tokenValue,
  backgroundUrl,
  avatarUrl,
}: ProfileComponentProps) => {
  const userData = useMemo<
    {
      title: string;
      value: number;
    }[]
  >(
    () => [
      {
        title: "Projects",
        value: projectsNumber,
      },
      {
        title: "Earnings",
        value: earningsNumber,
      },
      {
        title: "Field",
        value: fieldNumber,
      },
    ],
    [],
  );

  return (
    <Card className="my-10 w-full rounded-[24px]">
      <div className="flex h-fit relative">
        <Avatar
          className="absolute h-20 w-20 bottom-0 transform translate-x-1/2 translate-y-1/2"
          src={avatarUrl}
        />
        <img
          alt="background"
          className="w-full aspect-[3/1] object-cover"
          src={backgroundUrl}
        />
      </div>
      <CardBody className="mt-8 justify-between items-start w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 my-4 mx-2">
            <h3 className="text-2xl font-semibold text-foreground-900">
              {truncateAddress(address)}
            </h3>
            <div className="flex gap-4 mt-4 items-start flex-wrap w-full">
              <div className="flex gap-4">
                {userData.map((data, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <span className="text-sm font-medium text-foreground-500">
                        {data.title}
                      </span>
                      <span className="text-lg font-semibold text-foreground-900">
                        {data.value}
                      </span>
                    </div>
                    {index < userData.length + 1 && (
                      <Divider className="h-full mx-4" orientation="vertical" />
                    )}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-foreground-500">
                    Token Value
                  </span>
                  <span className="text-lg font-semibold text-foreground-900">
                    {tokenValue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileComponent;
