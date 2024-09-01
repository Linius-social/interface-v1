"use client";

import { Button } from "@nextui-org/button";
import { Textarea } from "@nextui-org/input";

import LinkIcon from "@/components/shared/icon/LinkIcon";
import RepeatIcon from "@/components/shared/icon/RepeatIcon";

const NewPost = () => {
  return (
    <div className="p-4 bg-foreground-50 rounded-3xl">
      <div className="mb-4">
        <Textarea
          className="w-full resize-none overflow-hidden rounded-md"
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
          <Button color="primary" radius="full">
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
