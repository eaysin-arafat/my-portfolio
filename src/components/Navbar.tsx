import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { accountUrl } from "../data/account_url";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
                  <Link to="/" className="text-whiteColor">
                    <span>Eaysin</span>
                    <span className={"text-primaryColor"}>Arafat</span>
                  </Link>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-10 font-semibold mt-1">
                  <Link
                    className={
                      location.pathname === "/"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className={
                      location.pathname === "/about"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    className={
                      location.pathname === "/projects"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/projects"
                  >
                    Projects
                  </Link>
                  <Link
                    className={
                      location.pathname === "/experience"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/experience"
                  >
                    Experience
                  </Link>
                  <Link
                    className={
                      location.pathname === "/open-source"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/open-source"
                  >
                    Open Source
                  </Link>
                  <Link
                    className={
                      location.pathname === "/blog"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/blog"
                  >
                    Blog
                  </Link>
                  <Link
                    className={
                      location.pathname === "/contact"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/contact"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center flex-shrink-0 md:block">
                <div className="flex space-x-4">
                  <Link to={accountUrl?.github} target="_blank">
                    <BsGithub
                      className="hidden md:block text-whiteColor"
                      size="2rem"
                    />
                  </Link>
                  <Link to={accountUrl?.leetCode} target="_blank">
                    <SiLeetcode
                      className="hidden md:block text-whiteColor"
                      size="2rem"
                    />
                  </Link>
                  <Link to={accountUrl?.linkedin} target="_blank">
                    <BsLinkedin
                      className="hidden md:block text-whiteColor"
                      size="2rem"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div onClick={handleMobileNav} className="mr-14 md:hidden">
              <AiOutlineMenu className="text-whiteColor" size="2rem" />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div
            className={
              isOpen ? "fixed left-0 top-0 w-full h-screen bg-bgColor" : ""
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
                    className="rounded bg-bgGrayColor shadow-md p-3 cursor-pointer"
                  >
                    <AiOutlineClose className="text-whiteColor" />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-4 pt-4 font-semibold">
                  <Link
                    className={
                      location.pathname === "/"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/"
                    onClick={handleMobileNav}
                  >
                    Home
                  </Link>
                  <Link
                    className={
                      location.pathname === "/about"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/about"
                    onClick={handleMobileNav}
                  >
                    About
                  </Link>
                  <Link
                    className={
                      location.pathname === "/projects"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/projects"
                    onClick={handleMobileNav}
                  >
                    Projects
                  </Link>
                  <Link
                    className={
                      location.pathname === "/experience"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/experience"
                    onClick={handleMobileNav}
                  >
                    Experience
                  </Link>
                  <Link
                    className={
                      location.pathname === "/open-source"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/open-source"
                    onClick={handleMobileNav}
                  >
                    Open Source
                  </Link>
                  <Link
                    className={
                      location.pathname === "/blog"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/blog"
                    onClick={handleMobileNav}
                  >
                    Blog
                  </Link>
                  <Link
                    className={
                      location.pathname === "/contact"
                        ? "text-primaryColor"
                        : "text-whiteColor"
                    }
                    to="/contact"
                    onClick={handleMobileNav}
                  >
                    Contact Me
                  </Link>
                </div>
                <div className="space-x-4 pt-20">
                  <div className="flex space-x-4">
                    <div className="rounded bg-bgGrayColor p-3 cursor-pointer">
                      <Link to={accountUrl?.github} target="_blank">
                        <BsGithub className="text-whiteColor" size="2rem" />
                      </Link>
                    </div>
                    <div className="rounded bg-bgGrayColor p-3 cursor-pointer">
                      <Link to={accountUrl?.leetCode} target="_blank">
                        <SiLeetcode className="text-whiteColor" size="2rem" />
                      </Link>
                    </div>

                    <div className="rounded bg-bgGrayColor p-3 cursor-pointer">
                      <Link to={accountUrl?.linkedin} target="_blank">
                        <BsLinkedin className="text-whiteColor" size="2rem" />
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
