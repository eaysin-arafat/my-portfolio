import Contact from "../components/Contact";
import useScrollToTop from "../hooks/useScrollToTop";
import PageLayout from "../layout/PageLayout";

const ContactPage = () => {
  useScrollToTop();

  return (
    <PageLayout className="h-screen mt-32">
      <Contact isTitle={false} />
    </PageLayout>
  );
};

export default ContactPage;
