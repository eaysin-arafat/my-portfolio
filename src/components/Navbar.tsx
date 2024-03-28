import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="fixed z-20 w-full bg-bgColor">
        <div className="w-full">
          <div className="flex items-center h-20 w-full ">
            <div className="flex items-center mx-10 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <h1 className=" font-bold text-xl cursor-pointer">
                  <Link to="/">
                    <span className="text-whiteColor">Eaysin</span>
                    <span className="text-primaryColor">Arafat</span>
                  </Link>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-10 font-semibold mt-1">
                  <Link className="text-whiteColor" to="/">
                    Home
                  </Link>
                  <Link className="text-whiteColor" to="/about">
                    About
                  </Link>
                  {/* <Link to="/experience">Experience</Link> */}
                  <Link className="text-whiteColor" to="/projects">
                    Projects
                  </Link>
                  <Link className="text-whiteColor" to="/experience">
                    Experience
                  </Link>
                  <Link to="/open-source" className="text-whiteColor">
                    Open Source
                  </Link>
                  <Link className="text-whiteColor" to="/blog">
                    Blog
                  </Link>
                  <Link className="text-whiteColor" to="/contact-me">
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center flex-shrink-0 md:block">
                <div className="flex space-x-4">
                  <Link
                    to="https://github.com/prasad-chavan1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub
                      className="hidden md:block text-whiteColor"
                      size="2rem"
                    />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/prasad-chavan2003/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin
                      className="hidden md:block text-whiteColor"
                      size="2rem"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div onClick={handleMobileNav} className="mr-14 md:hidden">
              <AiOutlineMenu size="2rem" />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div
            className={
              isOpen ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
            }
          >
            <div
              className={
                isOpen
                  ? "fixed left-0 top-0 w-full sm:w[40%] md:w-[30%] h-screen bg-culturedWhite p-10 ease-in duration-300"
                  : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
              }
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <div
                    onClick={handleMobileNav}
                    className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-4 pt-4 font-semibold">
                  <Link
                    className="text-blue-500"
                    to="/"
                    onClick={handleMobileNav}
                  >
                    Home
                  </Link>
                  <Link
                    className="text-blue-500"
                    to="/about"
                    onClick={handleMobileNav}
                  >
                    About
                  </Link>
                  {/* <Link to="/experience" onClick={handleMobileNav}>
                    Experience
                  </Link> */}
                  <Link
                    className="text-blue-500"
                    to="/projects"
                    onClick={handleMobileNav}
                  >
                    Projects
                  </Link>
                  <Link
                    className="text-blue-500"
                    to="/experience"
                    onClick={handleMobileNav}
                  >
                    Experience
                  </Link>
                  <Link to="/open-source" onClick={handleMobileNav}>
                    Open Source
                  </Link>
                  <Link
                    className="text-blue-500"
                    to="/blog"
                    onClick={handleMobileNav}
                  >
                    Blog
                  </Link>
                  <Link
                    className="text-blue-500"
                    to="/contact-me"
                    onClick={handleMobileNav}
                  >
                    Contact Me
                  </Link>
                </div>
                <div className="space-x-4 pt-20">
                  <div className="flex space-x-4">
                    <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer">
                      <Link
                        to="https://github.com/prasad-chavan1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub size="2rem" />
                      </Link>
                    </div>
                    <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer">
                      <Link
                        to="https://www.linkedin.com/in/prasad-chavan2003/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin size="2rem" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
