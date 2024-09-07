import ProfileComponent from "./ProfileComponent";

import { PROFILE } from "@/config/constants";

const ProfilePageComponent = () => {
  const userData = PROFILE;

  return (
    <div>
      <ProfileComponent
        address={userData.address}
        backgroundUrl={userData.backgroundUrl}
        earningsNumber={userData.earningsNumber}
        fieldNumber={userData.fieldNumber}
        projectsNumber={userData.projectsNumber}
        tokenValue={userData.tokenValue}
      />
    </div>
  );
};

export default ProfilePageComponent;
