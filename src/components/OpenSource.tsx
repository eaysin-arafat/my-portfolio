import RootLayout from "../layout/RootLayout";
import { IoMdGitPullRequest } from "react-icons/io";

const pullRequest = [
  {
    state: "OPEN",
    url: "https://github.com/user/repo/pull/123",
    title: "Fix a bug in the login form",
    changedFiles: 2,
    createdAt: "2024-04-03T10:00:00Z",
    baseRepository: {
      url: "https://github.com/user/repo",
      owner: {
        login: "user",
      },
      name: "repo",
    },
    additions: 15,
    deletions: 5,
  },
  {
    state: "MERGED",
    url: "https://github.com/user/another-repo/pull/456",
    title: "Add a new feature for better user experience",
    changedFiles: 10,
    createdAt: "2024-03-28T15:30:00Z",
    baseRepository: {
      url: "https://github.com/user/another-repo",
      owner: {
        login: "user",
      },
      name: "another-repo",
    },
    additions: 80,
    deletions: 20,
    mergedBy: {
      login: "reviewer",
      url: "https://github.com/reviewer",
      avatarUrl: "https://avatars.githubusercontent.com/reviewer",
    },
  },
  {
    state: "CLOSED", // Test case for default state
    url: "https://github.com/another-user/different-repo/pull/789",
    title: "Update documentation for the latest release",
    changedFiles: 3,
    createdAt: "2024-03-20T09:00:00Z",
    baseRepository: {
      url: "https://github.com/another-user/different-repo",
      owner: {
        login: "another-user",
      },
      name: "different-repo",
    },
    additions: 2,
    deletions: 1,
  },
];

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
          <div className="grid grid-cols-8">
            <div className="flex justify-center gap-3 col-span-7">
              <IoMdGitPullRequest className="mt-1.5 text-primaryColor" />
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
            <div className="flex gap-1 col-span-1">
              <p
                className={`text-whiteColor bg-primaryColor h-fit rounded-sm flex items-center justify-center pb-[2px] px-[2px] text-sm`}
              >
                2
              </p>
              <p className="text-grayColor text-sm">Files Changed</p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default OpenSource;
