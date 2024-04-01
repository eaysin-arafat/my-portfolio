import Intruduction from "../components/Intruduction";
import About from "../components/About";
import Projects from "../components/Project";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import OpenSource from "../components/OpenSource";
import Experience from "../components/Experience";
import { posts } from "../data/blog";

const HomePage = () => {
  const transformedPosts = posts.map((post) => ({
    post: post,
  }));

  return (
    <div className="">
      <Intruduction />
      <About />
      <Projects seeMore />
      <Experience />
      <OpenSource />
      <Blog posts={transformedPosts} seeMore />
      <Contact />
    </div>
  );
};

export default HomePage;
