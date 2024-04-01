import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projectData } from "../data/project";
import PageLayout from "../layout/PageLayout";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === Number(id));

  const [galleryOpen, setGalleryOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleGalleryOpen = () => {
    setGalleryOpen(true);
  };

  const handleGalleryClose = () => {
    setGalleryOpen(false);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? (project?.image?.length ?? 0) - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === (project?.image?.length ?? 0) - 1 ? 0 : prevIndex + 1
    );
  };

  console.log("currentImageIndex", currentImageIndex);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <PageLayout className="min-h-screen">
      <div className="pt-20">
        <Link to="/projects" className="btn !bg-slate-700 !text-whiteColor">
          Go Back
        </Link>
        <div className="mt-10 flex flex-col lg:block">
          <div
            className="block md:float-right pb-0 md:pb-1 ml-0 md:ml-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative"
              onClick={handleGalleryOpen}
              style={{ opacity: hovered ? 0.8 : 1 }}
            >
              <img
                src={project.image[0]}
                alt="projectImg"
                height={400}
                width={400}
                className="object-cover flex items-center justify-center px-3 md:px-0 w-full lg:w-[400px] cursor-pointer"
              />
              {hovered && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2 2m0 0l2-2m-2 2V8"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl font-bold pt-4 text-primaryColor">
              {project.title}
            </h1>
            <div className="prose pt-4 text-grayColor text-justify">
              {project.description}
            </div>
          </div>
        </div>
      </div>

      {/* Full-page gallery */}
      {galleryOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleGalleryClose}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.image[currentImageIndex]}
              alt=""
              className="max-w-full max-h-full"
            />
            <button
              onClick={handleGalleryClose}
              className="absolute top-4 right-4 text-white text-lg focus:outline-none"
            >
              Close
            </button>
            <button
              onClick={handlePreviousImage}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full focus:outline-none"
            >
              &lt;
            </button>
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-xl bg-black bg-opacity-50 p-2 rounded-full focus:outline-none"
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
