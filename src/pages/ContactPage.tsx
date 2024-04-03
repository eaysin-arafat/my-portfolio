import Contact from "../components/Contact";
import useScrollToTop from "../hooks/useScrollToTop";
import PageLayout from "../layout/PageLayout";

const ContactPage = () => {
  useScrollToTop();

  return (
    <PageLayout className="h-screen">
      <Contact />
    </PageLayout>
  );
};

export default ContactPage;
