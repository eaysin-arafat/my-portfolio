import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

const Project = () => {
  return (
    <RootLayout>
      <h1 className="pageTitle">Projects</h1>
      <div className="grid gap-4">
        {[5, 7, 9, 7, 5, 9].map((item) => (
          <section
            key={item}
            className="p-4 md:p-8 bg-bgGrayColor rounded-lg shadow-lg"
          >
            <h1 className="font-bold text-lg md:text-xl text-primaryColor pb-4">
              Word Scrambler Fire Fox Extension
            </h1>
            <div className="grid grid-cols-1 gap-0 sm:gap-8 md:grid-cols-3 items-center">
              <div className="aspect-w-4 aspect-h-3">
                <img src="/images/project-images/ordsc.png" alt="" />
              </div>
              <blockquote className="sm:col-span-2">
                <p className="text-xs md:text-base text-grayColor">
                  Word Scramble Solver Pro is a powerful Firefox extension
                  designed to enhance your word game experience. Whether you're
                  into crossword puzzles, Scrabble, or any word-related
                  challenge, this extension has got you covered. It simplifies
                  the process of unscrambling letters and offers a range of
                  features to improve your word game skills. &nbsp;
                  <Link
                    className="text-primaryColor"
                    to="https://addons.mozilla.org/addon/wordy-birdy-scramble-game/"
                  >
                    Visit Extension
                  </Link>
                </p>
                <cite className="inline-flex items-center mt-8 not-italic">
                  <span className="hidden w-6 h-px bg-gray-400 sm:inline-block"></span>
                  <p className="text-xs md:text-base text-gray-500 sm:ml-3">
                    Java, HTML, CSS, Bootstrape
                  </p>
                </cite>
                <div className="flex pt-8 space-x-4">
                  <div>
                    <Link
                      to="https://github.com/prasad-chavan1/word-scramble-extension"
                      target="_blank"
                      rel="noopner noreferrer"
                      className="text-whiteColor"
                    >
                      <FiGithub size="30px" />
                    </Link>
                  </div>
                  <div>
                    <HiOutlineExternalLink size="30px" />
                  </div>
                </div>
              </blockquote>
            </div>
          </section>
        ))}
      </div>
    </RootLayout>
  );
};

export default Project;
