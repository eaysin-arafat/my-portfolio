import About from "../components/About";
import Projects from "../components/Project";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import OpenSource from "../components/OpenSource";
import Experience from "../components/Experience";
import { posts } from "../data/blog";
import useScrollToTop from "../hooks/useScrollToTop";

const HomePage = () => {
  useScrollToTop();

  const transformedPosts = posts.map((post) => post);

  return (
    <div>
      <div className="pt-32">
        <About isTitle={false} />
        <Projects seeMore isTitle={true} />
        <Experience isTitle={true} />
        <OpenSource isTitle={true} />
        <Blog posts={transformedPosts} seeMore isTitle={true} />
        <Contact isTitle={true} />
      </div>
    </div>
  );
};

export default HomePage;
