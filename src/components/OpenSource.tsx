import { openSourceData } from "../data/openSource";
import RootLayout from "../layout/RootLayout";

const OpenSource = () => {
  return (
    <RootLayout className="">
      <h1 className="pageTitle">Open Source</h1>
      <h2 className="font-bold text-whiteColor pb-4 text-center mb-5 text-3xl ">
        Contributed Organizations
      </h2>

      <ul className="flex flex-row gap-8 mb-2 bg-bgGrayColor p-8 rounded-md min-w-full">
        {openSourceData.map((organization, index) => (
          <li
            key={index}
            className="text-xl font-bold flex justify-center items-center flex-col text-whiteColor"
          >
            {organization}
          </li>
        ))}
      </ul>
    </RootLayout>
  );
};

export default OpenSource;
