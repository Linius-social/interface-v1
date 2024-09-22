"use client";

import { Avatar, Divider, Image, Textarea } from "@nextui-org/react";
import React from "react";

import { HeartIcon } from "@/components/shared/icon/HeartIcon";
import LogoIcon from "@/components/shared/icon/LogoIcon";
import { ShareIcon } from "@/components/shared/icon/ShareIcon";
import { ViewIcon } from "@/components/shared/icon/ViewIcon";

export type PostContentProps = {
  author: string;
  avatarUrl?: string;
  lastActive: number;
  isActive: boolean;
  imageUrl: string;
  postContent: string;
  commentList: string[];
};

const PostContent = ({
  author,
  avatarUrl,
  lastActive,
  isActive,
  imageUrl,
  postContent,
  commentList,
}: PostContentProps) => {
  return (
    <div className="py-4 rounded-lg shadow-lg w-full mx-auto flex flex-col gap-4">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          {avatarUrl ? (
            <Avatar
              alt={author}
              className="w-16 h-16 rounded-full"
              src={avatarUrl}
            />
          ) : (
            <LogoIcon className="w-16 h-16" height={16} width={16} />
          )}
        </div>
        <div>
          <div className="flex flex-row flex-wrap gap-2 items-center justify-start">
            <div className="font-bold text-lg">{author}</div>
            <div className="text-gray-400 text-sm">
              {isActive ? `• Active ${lastActive} minutes ago` : "Inactive"}
            </div>
          </div>
          <div className="text-gray-500">Some information</div>
        </div>
      </div>
      <Image
        alt="Post image"
        className="w-full h-auto"
        classNames={{
          wrapper: "!max-w-full rounded-2xl",
        }}
        isLoading={!imageUrl}
        src={imageUrl}
      />
      <div className="mb-4 text-base">
        {postContent.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <Divider className="bg-gray-700 my-4" />
      <div className="mb-4">
        <div className="text-gray-400 mb-2">Comments</div>
        <div>
          {commentList.map((comment) => (
            <div key={comment} className="text-gray-300 mb-1">
              {comment}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex space-x-4 text-default-500">
        <HeartIcon className="h-6 w-6 text-default-500" />
        <ShareIcon className="h-6 w-6 text-default-500" />
        <ViewIcon className="h-6 w-6 text-default-500" />
      </div>
      <div className="w-full flex flex-row items-start justify-start gap-2">
        <Avatar alt={author} className="w-8 h-8 rounded-full" src={avatarUrl} />
        <Textarea placeholder="Write your comment..." radius="full" rows={1} />
      </div>
    </div>
  );
};

export default PostContent;
