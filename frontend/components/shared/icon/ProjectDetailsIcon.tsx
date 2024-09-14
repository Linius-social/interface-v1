import React from "react";

const ProjectDetailsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    color={"#000000"}
    fill={"none"}
    height={24}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.50014 11.9999C2.50014 7.52156 2.50014 5.28238 3.89138 3.89114C5.28263 2.4999 7.5218 2.4999 12.0001 2.4999C16.4785 2.4999 18.7177 2.4999 20.1089 3.89114C21.5001 5.28238 21.5001 7.52156 21.5001 11.9999C21.5001 16.4782 21.5001 18.7174 20.1089 20.1087C18.7177 21.4999 16.4785 21.4999 12.0001 21.4999C7.5218 21.4999 5.28263 21.4999 3.89138 20.1087C2.50014 18.7174 2.50014 16.4782 2.50014 11.9999Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M2.5 8H21.5"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M11 17H17M7 17H8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M11 13H17M7 13H8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export default ProjectDetailsIcon;
