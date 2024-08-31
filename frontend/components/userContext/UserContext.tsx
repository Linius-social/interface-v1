"use client";

import { createContext } from "react";

import { PROFILE } from "@/config/constants";
import { ProfileType } from "@/types";

export const UserContext = createContext<ProfileType>(PROFILE);
