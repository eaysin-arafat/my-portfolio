import { Link } from "react-router-dom";

const Intruduction = () => {
  return (
    <div className="text-center mx-auto h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl text-whiteColor font-extrabold md:text-6xl">
          Eaysin Arafat
        </h1>
        <h1 className="text-4xl text-primaryColor font-extrabold md:text-6xl">
          Jr. Front-End Developer
        </h1>
        <p className="text-sm mt-4 sm:leading-relaxed md:text-xl text-whiteColor">
          Exploring the syntax of life through code and words.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8 grid-cols-2">
          <Link to="/contact">
            <button className="px-12 py-3 text-sm font-medium text-white bg-[#37B55C] rounded shadow-md hover:bg-[#6BA324] transition-all focus:outline-none focus:ring">
              Contact Me
            </button>
          </Link>
          <Link to="/resume.pdf">
            <button className="px-12 py-3 text-sm font-medium text-white bg-[#37B55C] rounded shadow-md hover:bg-[#6BA324] transition-all focus:outline-none focus:ring">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intruduction;
