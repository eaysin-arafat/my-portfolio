import { experienceData } from "../data/experience";
import RootLayout from "../layout/RootLayout";

const Experience = () => {
  return (
    <RootLayout>
      <h1 className="pageTitle">Experiences</h1>
      <div className="grid gap-5">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className="bg-bgGrayColor shadow-md rounded-md flex flex-col md:flex-row justify-start gap-5 p-5"
          >
            <div className="flex flex-col gap-1">
              <p className="text-whiteColor font-semibold text-sm">
                {experience.date}
              </p>
              <div className="block justify-between mb-1">
                <h2 className="text-xl md:text-2xl font-bold text-primaryColor mb-1">
                  {experience.title}
                </h2>
                <p className="text-grayColor text-xs">{experience.location}</p>
              </div>
              <div>
                <ul className="list pl-4 list-disc">
                  {experience?.description?.map((desc) => (
                    <li key={desc} className="text-grayColor">
                      {desc}
                    </li>
                  ))}
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
