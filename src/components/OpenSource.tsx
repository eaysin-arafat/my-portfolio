import { FaReact } from "react-icons/fa";
import RootLayout from "../layout/RootLayout";

const OpenSource = () => {
  return (
    <RootLayout>
      <h1 className="pageTitle">Open Source</h1>
      <div className="w-full">
        <div className="mx-auto flex flex-col justify-center">
          <h2 className="font-bold text-whiteColor pb-4 text-center mb-5 text-3xl">
            Contributed Organizations
          </h2>

          <ul className="flex justify-start items-center flex-row gap-8 flex-wrap mb-2 bg-bgGrayColor p-8 rounded-md">
            <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
              <FaReact size="40px" />
              React
            </li>
            <li className=" text-xl font-bold flex justify-center items-center flex-col text-whiteColor">
              Bluma CSS
            </li>
          </ul>
        </div>
      </div>
    </RootLayout>
  );
};

export default OpenSource;
