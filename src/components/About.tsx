import RootLayout from "../layout/RootLayout";
import Skills from "./Skills";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <RootLayout>
      <h1 className="pageTitle">About Me</h1>

      <div>
        <div className="flex flex-col">
          <div className="">
            <h1 className="text-3xl font-bold sm:text-4xl mb-8 text-whiteColor">
              Hello, I&#39;m <span className="text-primaryColor">Prasad</span>
            </h1>

            <h2 className="font-bold text-3xl text-left mb-5 text-whiteColor">
              I&#39;m a
              <span className="text-primaryColor"> FullStack Developer</span>{" "}
              with a passion for
              <span className="text-primaryColor"> Cloud Computing</span>.
            </h2>
          </div>

          <p className="text-left font-normal flex-wrap text-grayColor">
            I pursuing graduation from SSBT, COET, JALGAON (425001). Most of my
            experience is in full stack web development and problem solving.
            Check out some of my work &nbsp;
            <Link
              to="https://github.com/prasad-chavan1"
              className="underline text-blue-500"
            >
              here
            </Link>
          </p>
          <p className="text-left font-normal mb-5 flex-wrap"></p>
          <p className="text-left font-normal mb-3 flex-wrap text-grayColor">
            In my free time, I love to learn new technologies and keep
            up-to-date with full stack developement. Outside of programming, I
            love to read novels and watch animes. I learnt alot things from
            anime. My one of the most favourite character is Itachi Uchiha.
          </p>
          {/* </motion.div> */}
        </div>
        <div className="text-bold text-3xl mt-10">
          <Skills />
        </div>
      </div>
    </RootLayout>
  );
};

export default About;
