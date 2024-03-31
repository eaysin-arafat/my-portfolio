import { aboutData } from "../data/about";
import RootLayout from "../layout/RootLayout";
import Skills from "./Skills";
import { Link } from "react-router-dom";

const About = () => {
  const {
    pageTitle,
    greetings,
    name,
    role,
    passion,
    description,
    githubLink,
    interests,
  } = aboutData;

  return (
    <RootLayout>
      <h1 className="pageTitle">{pageTitle}</h1>

      <div>
        <div className="flex flex-col">
          <div className="mb-5">
            <h1 className="text-3xl font-bold sm:text-4xl mb-8 text-whiteColor">
              {greetings}, I&#39;m{" "}
              <span className="text-primaryColor">{name}</span>
            </h1>

            <h2 className="font-bold text-3xl text-left mb-5 text-whiteColor">
              I&#39;m a<span className="text-primaryColor"> {role}</span> with a
              passion for
              <span className="text-primaryColor"> {passion}</span>.
            </h2>
          </div>

          <p className="text-left font-normal flex-wrap text-grayColor">
            {description}
            <Link to={githubLink} className="underline text-blue-500">
              here
            </Link>
          </p>
          <p className="text-left font-normal mb-5 flex-wrap"></p>
          <p className="text-left font-normal mb-3 flex-wrap text-grayColor">
            {interests}
          </p>
        </div>
        <div className="text-bold text-3xl mt-10">
          <Skills />
        </div>
      </div>
    </RootLayout>
  );
};

export default About;
