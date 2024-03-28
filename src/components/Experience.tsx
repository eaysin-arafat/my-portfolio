import RootLayout from "../layout/RootLayout";
import { RiContractLeftRightLine } from "react-icons/ri";

const Experience = () => {
  return (
    <RootLayout>
      <h1 className="pageTitle">My Experiences</h1>
      <div className="max-w-3xl mx-auto grid gap-3">
        <div className="bg-bgGrayColor shadow-md rounded-md flex flex-col md:flex-row  justify-center gap-5 p-5">
          <div>
            <p className=" text-grayColor font-medium">June 2020 - Aug 2021</p>

            <div className="block justify-between">
              <h2 className="text-xl md:text-2xl font-bold text-primaryColor mb-1 flex items-center gap-1">
                <RiContractLeftRightLine size={30} />
                Experience Title 1
              </h2>
              <p className="text-grayColor text-xs">Hyderabad, Telangana</p>
            </div>
            <div className=" ">
              <p className="text-whiteColor">
                Description of your experience goes here.
              </p>
            </div>

            <p className="text-grayColor ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              delectus quia deserunt placeat sapiente necessitatibus accusamus
              assumenda enim aliquam eius!
            </p>
          </div>
        </div>

        <div className="bg-bgGrayColor shadow-md rounded-md flex flex-col md:flex-row  justify-center gap-5 p-5">
          <div>
            <p className=" text-grayColor font-medium">June 2020 - Aug 2021</p>

            <div className="block justify-between">
              <h2 className="text-xl md:text-2xl font-bold text-primaryColor mb-1 flex items-center gap-1">
                <RiContractLeftRightLine size={30} />
                Experience Title 1
              </h2>
              <p className="text-grayColor text-xs">Hyderabad, Telangana</p>
            </div>
            <div className=" ">
              <p className="text-whiteColor">
                Description of your experience goes here.
              </p>
            </div>

            <p className="text-grayColor ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              delectus quia deserunt placeat sapiente necessitatibus accusamus
              assumenda enim aliquam eius!
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Experience;
