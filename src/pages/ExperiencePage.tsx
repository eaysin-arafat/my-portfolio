import Experience from "../components/Experience";
import useScrollToTop from "../hooks/useScrollToTop";
import PageLayout from "../layout/PageLayout";

const ExperiencePage = () => {
  useScrollToTop();

  return (
    <PageLayout className="h-screen">
      <Experience />
    </PageLayout>
  );
};

export default ExperiencePage;
