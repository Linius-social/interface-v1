"use client";

import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";

import LinkIcon from "@/components/shared/icon/LinkIcon";
import RepeatIcon from "@/components/shared/icon/RepeatIcon";

const NewPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="mb-4">
        <Textarea
          className="w-full resize-none overflow-hidden rounded-md p-2 border dark:border-gray-700 dark:text-white"
          placeholder="Type something..."
          rows={1}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-4">
          <RepeatIcon
            className="w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            height={24}
            width={24}
          />
          <LinkIcon
            className="w-6 h-6 cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            height={24}
            width={24}
          />
        </div>
        <div>
          <Button className="bg-[#f56e0f] text-white hover:bg-[#e65d00] focus:ring-2 focus:ring-[#f56e0f] focus:ring-opacity-50">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
