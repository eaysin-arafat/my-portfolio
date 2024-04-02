import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SkillsData } from "../data/skill";

const skillsData: SkillsData = [
  {
    category: "Frontend",
    skills: [
      { icon: <FaReact size="40px" />, name: "React" },
      { name: "Bluma CSS" },
      { icon: <FaHtml5 size="40px" />, name: "HTML" },
      { icon: <FaCss3Alt size="40px" />, name: "CSS" },
      { icon: <SiTailwindcss size="40px" />, name: "Tailwind CSS" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="w-full">
      <h1 className="text-primaryColor font-bold text-center mb-7">Skills</h1>
      <div className="mx-auto flex flex-col justify-center">
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
                {skill.icon}
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
