import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Error404 from "./pages/404";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import OpenSourcePage from "./pages/OpenSourcePage";
import ProjectPage from "./pages/Project";
import { posts } from "./data/blog";

function App() {
  return (
    <div className="bg-bgColor">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project/:id" element={<ProjectPage />} />{" "}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage posts={posts} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/open-source" element={<OpenSourcePage />} />
        <Route path="*" element={<Error404 />} />{" "}
      </Routes>
    </div>
  );
}

{
  /* <div className="mx-5 sm:mx-auto pt-16 pb-8">
      <div className={`max-w-5xl md:px-4 mx-auto space-y-10 ${className}`}>
        {children}
      </div>
    </div> */
}

export default App;
