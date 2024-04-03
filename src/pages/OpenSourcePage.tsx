import PageLayout from "../layout/PageLayout";
import OpenSource from "../components/OpenSource";
import useScrollToTop from "../hooks/useScrollToTop";

const OpenSourcePage = () => {
  useScrollToTop();

  return (
    <PageLayout className="h-screen">
      <OpenSource />
    </PageLayout>
  );
};

export default OpenSourcePage;
