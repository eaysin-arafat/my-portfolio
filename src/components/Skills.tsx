import { FaGithub, FaNpm, FaReact, FaYarn } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiTypescript, SiWebpack } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const skillsData = [
  {
    category: "Programming Language",
    skills: [
      { icon: <IoLogoJavascript size={"24px"} />, name: "JavaScript" },
      { icon: <SiTypescript size="24px" />, name: "TypeScript" },
    ],
  },
  {
    category: "Framework",
    skills: [
      { icon: <FaReact size="24px" />, name: "ReactJS " },
      { icon: <TbBrandRedux size="24px" />, name: "Redux Toolkit" },
      { icon: null, name: "RTK Query" },
    ],
  },
  {
    category: "Others",
    skills: [
      { icon: <IoLogoNodejs size="24px" />, name: "NodeJS (basic)" },
      { icon: <SiWebpack size="24px" />, name: "Webpack" },
      { icon: <FaGithub size="24px" />, name: "Git & GitHub" },
      { icon: <FaNpm size="24px" />, name: "NPM" },
      { icon: <FaYarn size="24px" />, name: "Yarn" },
      // { icon: null, name: "Little Photoshop experience" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="w-full">
      <h1 className="text-primaryColor font-bold text-center mb-7">Skills</h1>
      <div className="mx-auto flex flex-col gap-3 justify-center">
        {skillsData.map((category, index) => (
          <ul
            key={index}
            className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-bgGrayColor p-8 rounded-md"
          >
            <span className="text-primaryColor text-2xl w-full text-center font-semibold md:w-fit">
              {category.category}
            </span>
            {category.skills.map((skill, idx) => (
              <li
                key={idx}
                className="text-xl font-bold flex justify-center items-center flex-col text-whiteColor"
              >
                {skill.icon && <span className="mr-2">{skill.icon}</span>}
                {skill.name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Skills;
