import { Link } from "react-router-dom";

const Intruduction = () => {
  return (
    <div className="text-center mx-auto">
      <h1 className="text-4xl text-black font-extrabold md:text-6xl">
        Eaysin Arafat
      </h1>
      <h1 className="text-4xl text-blue-500 font-extrabold md:text-6xl">
        Jr. Front-End Developer
      </h1>
      <p className="text-sm mt-4 sm:leading-relaxed md:text-xl text-black">
        Exploring the syntax of life through code and words.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8 grid-cols-2">
        <Link to="/contact">
          <p className="px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring">
            Contact Me
          </p>
        </Link>
        <Link to="/resume.pdf">
          <p
            rel="noopener noreferrer"
            className="px-12 py-3 text-sm font-medium text-culturedWhite bg-mnBlue rounded shadow active:bg-blue-500 hover:bg-carolinaBlue focus:outline-none focus:ring"
          >
            Resume
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Intruduction;
