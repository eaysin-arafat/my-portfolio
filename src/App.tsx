import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Blog from "./components/Blog";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/404";
import Contact from "./components/Contact";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="bg-bgColor">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/blog" element={<Blog posts={posts} />} />
        <Route path="/contact-me" element={<Contact />} />
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
];
