/**
 * @file constants.ts
 * @summary Constants for the frontend, all the constants should be defined here
 */

import { faker } from "@faker-js/faker";

import { PostContentProps } from "@/components/dashboard/DashboardContent/PostContent";
import { ProfileDetailType } from "@/types";

export const API_URL = "http://localhost:3000";
export const APP_NAME = "My App";
export const APP_VERSION = "0.0.1";
export const APP_DESCRIPTION = "My App Description";
export const APP_KEYWORDS = "My App Keywords";

export const PROFILE: ProfileDetailType = {
  name: faker.person.fullName(),
  address: faker.finance.ethereumAddress(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  id: faker.finance.ethereumAddress(),
  projectsNumber: faker.number.int({
    min: 1,
    max: 100,
  }),
  earningsNumber: faker.number.int({
    min: 1,
    max: 100,
  }),
  fieldNumber: faker.number.int({
    min: 1,
    max: 100,
  }),
  tokenValue: faker.number.int({
    min: 1,
    max: 100,
  }),
  backgroundUrl: faker.image.urlLoremFlickr({
    category: "nature",
    width: 600,
    height: 400,
  }),
};

export const MOCK_PROJECT_DATA = {
  projectName: faker.lorem.words(),
  projectDescription: faker.lorem.sentence(),
  projectLink: faker.internet.url(),
  projectImageLink: faker.image.url(),
  contributors: faker.number.int({
    min: 1,
    max: 100,
  }),
  saleType: "Public",
  minBuy: faker.number.int({
    min: 1,
    max: 100,
  }),
  maxBuy: faker.number.int({
    min: 1,
    max: 100,
  }),
  tokenValue: faker.number.int({
    min: 1,
    max: 100,
  }),
  progress: faker.number.int({
    min: 1,
    max: 100,
  }),
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

export const MOCK_PROJECT_DETAILS = {
  projectDescription: faker.lorem.paragraphs(10, "\n"),
  projectLink: faker.internet.url(),
  projectImageLink: faker.image.urlLoremFlickr({
    category: "nature",
    width: 600,
    height: 400,
  }),
};
