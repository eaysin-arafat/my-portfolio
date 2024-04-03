import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import { projectData } from "../data/project";
import RootLayout from "../layout/RootLayout";

const Project = ({
  seeMore,
  isTitle,
}: {
  seeMore?: boolean;
  isTitle?: boolean;
}) => {
  return (
    <RootLayout>
      {isTitle && <h1 className="pageTitle">Projects</h1>}
      <div className="grid gap-4">
        {projectData?.map((project, index) => (
          <section
            key={index}
            className="p-4 md:p-8 bg-bgGrayColor rounded-lg shadow-lg"
          >
            <h1 className="font-bold text-lg md:text-xl text-primaryColor pb-4">
              {project?.title}
            </h1>
            <div className="grid gap-3 sm:gap-8 md:grid-cols-3 ">
              <div className="col-span-2 md:col-span-1 flex items-center justify-center text-center">
                <img
                  src={project?.image[0]}
                  alt={
                    project?.image?.length
                      ? project?.title
                      : "These are government projects for which I don't have permission to use or copy any content"
                  }
                  className="min-w-full text-grayColor text-sm border border-gray-800 h-full w-full text-center"
                />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base text-grayColor">
                  {project?.description?.slice(0, 2).join(" ")} &nbsp;
                  <Link
                    className="text-primaryColor"
                    to={`/project/${project.id}`}
                  >
                    See more
                  </Link>
                </p>
                <cite className="flex flex-row lg:flex-col justify-between lg:justify-start mt-3 md:mt-0">
                  <div className="inline-flex items-center not-italic">
                    <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                    <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                      {project?.technologies.join(", ")}
                    </p>
                  </div>
                  <div className="flex justify-end items-end gap-3">
                    <Link
                      to={project?.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-whiteColor"
                    >
                      <FiGithub size="30px" />
                    </Link>
                    <HiOutlineExternalLink
                      size="30px"
                      className="text-whiteColor"
                    />
                  </div>
                </cite>
              </blockquote>
            </div>
          </section>
        ))}
        {/* See More Button */}
        {seeMore && (
          <div className="text-center mt-8">
            <Link to="/projects" className="btn btn-primary">
              See More
            </Link>
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default Project;
