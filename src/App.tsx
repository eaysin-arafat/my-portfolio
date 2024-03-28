import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/404";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import OpenSourcePage from "./pages/OpenSourcePage";

function App() {
  return (
    <div className="bg-bgColor">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/blog" element={<BlogPage posts={posts} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/open-source" element={<OpenSourcePage />} />
        <Route path="*" element={<Error404 />} />{" "}
      </Routes>
    </div>
  );
}

export default App;

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
