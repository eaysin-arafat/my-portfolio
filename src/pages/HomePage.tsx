import Intruduction from "../components/Intruduction";
import About from "../components/About";
import Projects from "../components/Project";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import OpenSource from "../components/OpenSource";
import Experience from "../components/Experience";
import { PostProps } from "../components/Post";

const HomePage = () => {
  const transformedPosts: PostProps[] = posts.map((post) => ({
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

const posts = [
  {
    id: 1,
    frontmatter: {
      title: "Post Title 1",
      cover_image: "https://via.placeholder.com/600x400",
      date: "2024-03-28",
      excerpt: "This is the excerpt for post 1.",
    },
    slug: "post-title-1",
  },
  {
    id: 2,
    frontmatter: {
      title: "Post Title 2",
      cover_image: "https://source.unsplash.com/random/600x400",
      date: "2024-03-27",
      excerpt: "This is the excerpt for post 2.",
    },
    slug: "post-title-2",
  },
  {
    id: 3,
    frontmatter: {
      title: "Post Title 3",
      cover_image: "https://picsum.photos/600/400",
      date: "2024-03-26",
      excerpt: "This is the excerpt for post 3.",
    },
    slug: "post-title-3",
  },
];
