import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";
// import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
// import { DiDjango } from "react-icons/di";
// import { SiMysql } from "react-icons/si";
// import { FaBootstrap } from "react-icons/fa";
// import { SiSqlite } from "react-icons/si";
// import { SiNumpy } from "react-icons/si";
// import { SiPandas } from "react-icons/si";
// import { SiTensorflow } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";
// import { FaAws } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-full">
      <div className="mx-auto flex flex-col justify-center">
        <p className="font-bold text-whiteColor pb-4 text-center mb-5">
          Skills
        </p>

        {/* <ul className="flex justify-start items-center flex-row flex-wrap gap-8 mb-2 bg-blue-50 p-8 rounded-2xl">
          <span className="text-blue-500 text-2xl w-full text-center font-semibold md:w-fit">
            Backend
          </span>

          <li className=" text-xl font-bold flex justify-center items-center flex-col">
            <DiDjango size="40px" />
            Django
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col">
            <FaPython size="40px" />
            Python
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col">
            <FaNode size="40px" />
            Node Js
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col">
            <SiSqlite size="40px" />
            DB sqlite
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col">
            <SiMysql size="40px" />
            Mysql
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col">
            <FaBootstrap size="40px" />
            Bootstrap
          </li>
        </ul> */}

        <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-bgGrayColor p-8 rounded-md">
          <span className="text-primaryColor text-2xl w-full text-center font-semibold md:w-fit">
            Frontend
          </span>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <FaReact size="40px" />
            React
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            Bluma CSS
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <FaHtml5 size="40px" />
            HTML
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <FaCss3Alt size="40px" />
            CSS
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <SiTailwindcss size="40px" />
            Tailwind CSS
          </li>
        </ul>

        <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-bgGrayColor p-8 rounded-md">
          <span className="text-primaryColor text-2xl w-full text-center font-semibold md:w-fit">
            Frontend
          </span>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <FaReact size="40px" />
            React
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            Bluma CSS
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <FaHtml5 size="40px" />
            HTML
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <FaCss3Alt size="40px" />
            CSS
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <SiTailwindcss size="40px" />
            Tailwind CSS
          </li>
        </ul>

        <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-bgGrayColor p-8 rounded-md">
          <span className="text-primaryColor text-2xl w-full text-center font-semibold md:w-fit">
            Frontend
          </span>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <FaReact size="40px" />
            React
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            Bluma CSS
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <FaHtml5 size="40px" />
            HTML
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <FaCss3Alt size="40px" />
            CSS
          </li>
          <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
            <SiTailwindcss size="40px" />
            Tailwind CSS
          </li>
        </ul>
      </div>
    </div>
    // </motion.div>
  );
};

export default Skills;
