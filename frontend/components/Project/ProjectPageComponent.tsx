import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";
import ProjectToken from "./ProjectToken";

import { MOCK_PROJECT_DATA, MOCK_PROJECT_DETAILS } from "@/config/constants";

const ProjectPageComponent = () => {
  return (
    <div>
      <div>
        <ProjectCard
          backgroundUrl={MOCK_PROJECT_DATA.projectImageLink}
          contributors={MOCK_PROJECT_DATA.contributors}
          isOnline={true}
          maxBuy={MOCK_PROJECT_DATA.maxBuy}
          minBuy={MOCK_PROJECT_DATA.minBuy}
          name={MOCK_PROJECT_DATA.projectName}
          saleType={MOCK_PROJECT_DATA.saleType}
          tokenValue={MOCK_PROJECT_DATA.tokenValue}
        />
      </div>
      <div>
        <ProjectDetails
          description={MOCK_PROJECT_DETAILS.projectDescription}
          projectImageLink={MOCK_PROJECT_DETAILS.projectImageLink}
        />
      </div>
      <ProjectToken />
    </div>
  );
};

export default ProjectPageComponent;
