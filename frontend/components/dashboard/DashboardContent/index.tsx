"use client";

import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";

import PostContent, { PostContentProps } from "./PostContent";

import { API_URL, MOCK_POST_DATA, IRYS_GATE_WAY } from "@/config/constants";

export type Post = {
  post_content: string;
  post_image: string[];
  user_address: string;
};

const DashboardContent = () => {
  const [posts, setPosts] = React.useState<PostContentProps[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const url = `${API_URL}/api/v1/posts/get_all`;

      const response = await axios.get<Post[]>(url);

      const postsContent = response.data.map((post: Post): PostContentProps => {
        return {
          author: post.user_address,
          avatarUrl: faker.image.avatarGitHub(),
          lastActive: 1,
          isActive: true,
          imageUrl: `${IRYS_GATE_WAY}/${post.post_image[0]}`,
          postContent: post.post_content,
          commentList: [faker.lorem.sentence()],
        };
      });

      setPosts(postsContent);
    }

    fetchData();
  }, []);

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        className="mb-4"
        color="default"
        radius="full"
        variant="light"
      >
        <Tab key="trending" title="Trending">
          {posts.map((post, index) => (
            <PostContent key={index} {...post} />
          ))}
        </Tab>
        <Tab key="music" title="Music">
          <PostContent {...MOCK_POST_DATA} />
        </Tab>
        <Tab key="videos" title="Videos">
          <PostContent {...MOCK_POST_DATA} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default DashboardContent;
