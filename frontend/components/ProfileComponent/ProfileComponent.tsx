"use client";

import { useMemo } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Avatar, Divider, Image } from "@nextui-org/react";

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
    <Card className="my-10 w-[800px]">
      <CardHeader className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
        <div className="flex justify-center">
          <Image alt="background" src={backgroundUrl} />
        </div>
        <Avatar className="h-20 w-20 translate-y-12" src={avatarUrl} />
      </CardHeader>
      <CardBody className="mt-4 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 my-4 mx-2">
            <h3 className="text-2xl font-semibold text-foreground-900">
              {address}
            </h3>
            <div className="flex justify-between mt-4">
              <div className="flex gap-4 mx-4">
                {userData.map((data, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col gap-1 items-center justify-center">
                      <span className="text-sm font-medium text-foreground-500">
                        {data.title}
                      </span>
                      <span className="text-lg font-semibold text-foreground-900">
                        {data.value}
                      </span>
                    </div>
                    {index < userData.length - 1 && (
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
