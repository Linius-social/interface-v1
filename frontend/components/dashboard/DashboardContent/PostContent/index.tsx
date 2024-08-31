"use client";

import { Avatar, Divider } from "@nextui-org/react";
import Image from "next/image";

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
    <div className="bg-black text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
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
          <div className="font-bold text-lg">{author}</div>
          <div className="text-gray-400 text-sm">
            {isActive ? `Active ${lastActive} minutes ago` : "Inactive"}
          </div>
          <div className="text-gray-500">Some information</div>
        </div>
      </div>

      <div className="mb-4">
        <Image
          alt="Post image"
          className="rounded-lg"
          height={400}
          src={imageUrl}
          width={400}
        />
      </div>

      <div className="mb-4 text-lg">{postContent}</div>

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

      <div className="mt-4 flex space-x-4 text-gray-600 dark:text-gray-300">
        <HeartIcon className="h-6 w-6" />
        <ShareIcon className="h-6 w-6" />
        <ViewIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default PostContent;
