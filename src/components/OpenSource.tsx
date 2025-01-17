import RootLayout from "../layout/RootLayout";
import { IoMdGitPullRequest } from "react-icons/io";

const OpenSource = ({ isTitle }: { isTitle?: boolean }) => {
  return (
    <RootLayout className="mt-3">
      {isTitle && <h1 className="pageTitle !mb-1 !pb-1">Open Source</h1>}
      <h2 className="font-bold text-primaryColor pb-4 text-center mb-3 text-3xl ">
        Contributed Source
      </h2>

      <div className="mt-8">
        <div
          className={`p-3 rounded-sm bg-bgGrayColor`}
          style={{ border: `1px solid` }}
        >
          <div className="flex flex-col gap-2 lg:gap-0 lg:grid grid-cols-8 ">
            <div className="flex justify-center gap-3 col-span-7">
              <IoMdGitPullRequest
                size={24}
                className="lg:mt-1.5 text-primaryColor"
              />
              <div className="space-y-1.5">
                <div>
                  <a
                    href="https://github.com/atapas/imaginary/issues/2"
                    target="_blank"
                    className="text-whiteColor"
                  >
                    I want add a new Feature. Add a button in the corner of each
                    image which on click will show the image in full screen.
                  </a>
                  <p className="text-grayColor">
                    #2 by eaysin-arafat was closed on Nov 2, 2023
                  </p>
                </div>

                <p className="text-whiteColor">
                  Repository: &nbsp;
                  <a href="https://github.com/atapas/imaginary">
                    /atapas/imaginary
                  </a>
                  <div className="changes-files">
                    <strong className="text-primaryColor">+308</strong>
                    <strong className="text-red-500">&nbsp; -165</strong>
                  </div>
                </p>
              </div>
            </div>
            <div className="flex gap-1 col-span-1 ml-7 md:ml-8 lg:ml-0">
              <p
                className={`text-whiteColor bg-primaryColor h-fit rounded-sm flex items-center justify-center lg:pb-[2px] px-[2px] text-sm font-semibold`}
              >
                2
              </p>
              <p className="text-grayColor text-sm !font-semibold">
                Files Changed
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default OpenSource;
