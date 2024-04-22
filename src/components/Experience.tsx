import { experienceData } from "../data/experience";
import RootLayout from "../layout/RootLayout";

const Experience = ({ isTitle }: { isTitle?: boolean }) => {
  return (
    <RootLayout>
      {isTitle && <h1 className="pageTitle">Experiences</h1>}
      <div className="grid gap-5">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="bg-bgGrayColor shadow-md rounded-md flex flex-col md:flex-row justify-start gap-5 p-5"
          >
            <div className="flex flex-col gap-1 w-full">
              <div className="w-full">
                <div className="block justify-between mb-1">
                  <h2 className="text-xl md:text-2xl font-bold text-primaryColor mb-1 flex justify-between">
                    <p className="text-whiteColor">
                      <span className="text-primaryColor">
                        {experience.title}, &nbsp;
                      </span>
                      {experience.companyName}
                    </p>
                    <p className="text-whiteColor font-semibold text-sm  mb-1">
                      {experience.date}
                    </p>
                  </h2>
                  <p className="text-grayColor text-xs">
                    {experience.location}
                  </p>
                </div>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="text-grayColor">{experience.description}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </RootLayout>
  );
};

export default Experience;
