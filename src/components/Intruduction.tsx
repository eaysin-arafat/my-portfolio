import { Link } from "react-router-dom";
import { intruductionData } from "../data/personal";

const Intruduction = () => {
  const { name, role, description, contactLink, resumeLink } = intruductionData;

  return (
    <div className="text-center mx-auto h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl text-whiteColor font-extrabold md:text-6xl">
          {name}
        </h1>
        <h1 className="text-4xl text-primaryColor font-extrabold md:text-6xl">
          {role}
        </h1>
        <p className="text-sm mt-4 sm:leading-relaxed md:text-xl text-whiteColor">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8 grid-cols-2">
          <Link to={contactLink}>
            <button className="px-12 py-3 text-sm font-medium text-white bg-[#37B55C] rounded shadow-md hover:bg-[#6BA324] transition-all focus:outline-none focus:ring">
              Contact Me
            </button>
          </Link>
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            <button className="px-12 py-3 text-sm font-medium text-white bg-[#37B55C] rounded shadow-md hover:bg-[#6BA324] transition-all focus:outline-none focus:ring">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intruduction;
