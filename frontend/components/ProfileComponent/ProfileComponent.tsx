import LogoIcon from "@/components/shared/icon/LogoIcon";
import { useMemo } from "react";

export type ProfileComponentProps = {
  address: string;
  projectsNumber: number;
  earningsNumber: number;
  fieldNumber: number;
  tokenValue: number;
};

const ProfileComponent = ({
  address,
  projectsNumber,
  earningsNumber,
  fieldNumber,
  tokenValue,
}: ProfileComponentProps) => {
  const userData = useMemo<
    {
      title: string;
      value: number;
    }[]
  >(
    () => [
      {
        title: "Projects",
        value: projectsNumber,
      },
      {
        title: "Earnings",
        value: earningsNumber,
      },
      {
        title: "Field",
        value: fieldNumber,
      },
      {
        title: "Token Value",
        value: tokenValue,
      },
    ],
    [],
  );

  return (
    <div>
      <div>
        <LogoIcon />
      </div>
      <div>
        <p>{address}</p>
      </div>
      <div>
        <div>
          {userData.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
