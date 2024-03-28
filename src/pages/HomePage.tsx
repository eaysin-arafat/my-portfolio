import Intruduction from "../components/Intruduction";
import About from "../components/About";
import Projects from "../components/Project";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import OpenSource from "../components/OpenSource";
import Experience from "../components/Experience";

const HomePage = () => {
  return (
    <div className="">
      <Intruduction />
      <About />
      <Projects seeMore />
      <Experience />
      <OpenSource />
      <Blog posts={posts} seeMore />
      <Contact />
    </div>
  );
};

export default HomePage;

const posts = [
  {
    frontmatter: {
      title: "Example Post 1",
      cover_image: "https://example.com/image1.jpg",
      date: "2024-03-27",
      excerpt: "This is an example excerpt for post 1.",
    },
    slug: "example-post-1",
  },
  {
    frontmatter: {
      title: "Example Post 2",
      cover_image: "https://example.com/image2.jpg",
      date: "2024-03-28",
      excerpt: "This is an example excerpt for post 2.",
    },
    slug: "example-post-2",
  },
  {
    frontmatter: {
      title: "Example Post 2",
      cover_image: "https://example.com/image2.jpg",
      date: "2024-03-28",
      excerpt: "This is an example excerpt for post 2.",
    },
    slug: "example-post-2",
  },
  {
    frontmatter: {
      title: "Example Post 2",
      cover_image: "https://example.com/image2.jpg",
      date: "2024-03-28",
      excerpt: "This is an example excerpt for post 2.",
    },
    slug: "example-post-2",
  },
];
