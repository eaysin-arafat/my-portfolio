import { aboutData } from "../data/about";
import { intruductionData } from "../data/personal";
import RootLayout from "../layout/RootLayout";
import Skills from "./Skills";

const About = ({ isTitle }: { isTitle?: boolean }) => {
  const { pageTitle, greetings, name, role, passion, description, interests } =
    aboutData;
  const { resumeLink } = intruductionData;

  return (
    <RootLayout>
      {isTitle && <h1 className="pageTitle">{pageTitle}</h1>}

      <div>
        <div className="flex flex-col">
          <div className="mb-5">
            <h1 className="text-3xl font-bold sm:text-4xl mb-8 text-whiteColor">
              {greetings}, I&#39;m{" "}
              <span className="text-primaryColor">{name}</span>
            </h1>

            <h2 className="font-bold text-3xl text-left mb-5 text-whiteColor">
              I am a <span className="text-primaryColor">{role}</span>,
              specializing in{" "}
              <span className="text-primaryColor">{passion}</span>.
            </h2>
          </div>

          <p className="text-left font-normal flex-wrap text-grayColor">
            {description} &nbsp;
            <a
              href={resumeLink}
              target="_blank"
              className="underline text-blue-500"
            >
              resume
            </a>
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
