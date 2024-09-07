import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ProfileType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  address: string;
};

export type ProfileDetailType = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  address: string;
  projectsNumber: number;
  earningsNumber: number;
  fieldNumber: number;
  tokenValue: number;
  backgroundUrl: string;
};
