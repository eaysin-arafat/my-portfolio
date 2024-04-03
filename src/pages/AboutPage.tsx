import PageLayout from "../layout/PageLayout";
import About from "../components/About";
import useScrollToTop from "../hooks/useScrollToTop";

const AboutPage = () => {
  useScrollToTop();

  return (
    <PageLayout className="min-h-screen">
      <About />
    </PageLayout>
  );
};

export default AboutPage;
