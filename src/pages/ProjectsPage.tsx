import Project from "../components/Project";
import useScrollToTop from "../hooks/useScrollToTop";
import PageLayout from "../layout/PageLayout";
// import {HiOutlineExternalLink} from 'react-icons/hi'

const ProjectsPage = () => {
  useScrollToTop();

  return (
    <PageLayout className="mt-5">
      <Project />
    </PageLayout>
  );
};

export default ProjectsPage;
