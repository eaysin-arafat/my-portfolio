import { experienceData } from "../data/experience";
import RootLayout from "../layout/RootLayout";
import { RiContractLeftRightLine } from "react-icons/ri";

const Experience = () => {
  return (
    <RootLayout>
      <h1 className="pageTitle">Experiences</h1>
      <div className="grid gap-3">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="bg-bgGrayColor shadow-md rounded-md flex flex-col md:flex-row justify-center gap-5 p-5"
          >
            <div>
              <p className="text-grayColor font-medium">{experience.date}</p>
              <div className="block justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-primaryColor mb-1 flex items-center gap-1">
                  <RiContractLeftRightLine size={30} />
                  {experience.title}
                </h2>
                <p className="text-grayColor text-xs">{experience.location}</p>
              </div>
              <div>
                <p className="text-whiteColor">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </RootLayout>
  );
};

export default Experience;
