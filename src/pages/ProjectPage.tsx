import { Link, useParams } from "react-router-dom";
import { projectData } from "../data/project";
import PageLayout from "../layout/PageLayout";
import useScrollToTop from "../hooks/useScrollToTop";
import Images from "../components/Images";

export default function ProjectPage() {
  useScrollToTop();
  const { id } = useParams();
  const project = projectData.find((p) => p.id === Number(id));

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <PageLayout className="min-h-screen ">
      <div className="pt-20">
        <Link
          to="/projects"
          className="btn !bg-neutral-800 hover:!bg-neutral-700 transition-all"
        >
          Go Back
        </Link>
        <div className="mt-10 flex flex-col lg:block">
          <div className="block md:float-right pb-0 md:pb-1 ml-0 md:ml-4">
            <div className="h-[200px] sm:h-[280px] sm:w-[500px] my-0 mx-auto">
              <Images slides={project.image} />
            </div>
          </div>

          <div className="">
            <h1 className="text-2xl font-bold pt-4 text-primaryColor">
              {project.title}
            </h1>
            <ul className="prose pt-4 text-grayColor text-justify list-disc pl-5">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
