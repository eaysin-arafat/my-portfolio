import Intruduction from "../components/Intruduction";
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
    <div className="">
      <Intruduction />
      <About isTitle={true} />
      <Projects seeMore isTitle={true} />
      <Experience isTitle={true} />
      <OpenSource isTitle={true} />
      <Blog posts={transformedPosts} seeMore isTitle={true} />
      <Contact isTitle={true} />
    </div>
  );
};

export default HomePage;
