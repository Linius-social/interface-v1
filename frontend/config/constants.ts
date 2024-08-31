/**
 * @file constants.ts
 * @summary Constants for the frontend, all the constants should be defined here
 */

import { PostContentProps } from "@/components/dashboard/DashboardContent/PostContent";
import { faker } from "@faker-js/faker";

export const API_URL = "http://localhost:3000";
export const APP_NAME = "My App";
export const APP_VERSION = "0.0.1";
export const APP_DESCRIPTION = "My App Description";
export const APP_KEYWORDS = "My App Keywords";

export const PROFILE = {
  name: faker.person.fullName(),
  address: faker.finance.ethereumAddress(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  id: faker.finance.ethereumAddress(),
};

export const MOCK_POST_DATA: PostContentProps = {
  author: faker.person.fullName(),
  avatarUrl: faker.image.avatar(),
  lastActive: 1,
  isActive: true,
  imageUrl: faker.image.url(),
  postContent: faker.lorem.paragraph(),
  commentList: [
    faker.lorem.sentence(),
    faker.lorem.sentence(),
    faker.lorem.sentence(),
  ],
};
