import Project from "../components/Project";
import useScrollToTop from "../hooks/useScrollToTop";
import PageLayout from "../layout/PageLayout";
import { projectData } from "../data/project";

const ProjectsPage = () => {
  useScrollToTop();

  return (
    <PageLayout className="mt-5">
      <Project projectData={projectData} />
    </PageLayout>
  );
};

export default ProjectsPage;
