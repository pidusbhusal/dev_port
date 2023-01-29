import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [navbutton, setnavbutton] = useState(true);
  return (
    <nav className="">
      <div className=" wrapper flex items-center justify-between  py-6 md:py-10">
        <Link href="/">
          <img src="logo.svg" alt="Our Logo" />
        </Link>

        <ul className=" hidden items-center gap-[4vw] md:flex md:flex-row">
          <li>
            <Link
              className="py-5 font-medium text-gray-400 hover:text-white"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="py-5 font-medium text-gray-400 hover:text-white"
              href="/work"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="py-5 font-medium text-gray-400 hover:text-white"
              href="/blog"
            >
              Blog
            </Link>
          </li>
        </ul>

        <div className="flex">
          <div>
            <Link
              href="/contact"
              className="pbtn hidden  hover:bg-green-200 md:hidden "
            >
              Get in touch
            </Link>
          </div>
          {/* mobile button goes here */}
          <Link href="/contact" className="pbtn   hover:bg-green-200 ">
            Get in touch
          </Link>
          <div className="z-50 flex items-center md:hidden">
            {navbutton ? (
              <button
                className="mobile-menu-button"
                onClick={() => setnavbutton(!navbutton)}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 11.25H33.75M6.25 20H33.75M6.25 28.75H33.75"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            ) : (
              <button
                className="mobile-menu-button"
                onClick={() => setnavbutton(!navbutton)}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 30L30 10M10 10L30 30"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="absolute left-[-77px] top-[-190px] h-[324px] w-[195px] bg-[#aabbb4] opacity-0   blur-3xl md:opacity-25  " />
      </div>

      {/* mobile menu */}

      <div className={` absolute  top-0 z-10 h-[100vh] w-[100vw]  md:hidden`}>
        <div className="  absolute left-[-77px] top-[-190px] h-[324px] w-[195px] bg-[#aabbb4] opacity-20 blur-3xl   " />
        <div
          className={` ${
            navbutton ? "opacity-0" : "opacity-80"
          } z-5  fixed   h-[100vh]   w-[100vw] bg-black  transition-opacity duration-500 ease-in-out `}
        />

        <div
          className={` ${
            navbutton ? "translate-x-[-100vw]" : "translate-x-0"
          }  "mobile-menu z-19  border-l-  fixed top-[0vw] h-full w-[60vw] border-0 border-r-[0.5px]  border-[#344347] bg-black bg-opacity-60 bg-clip-padding px-4 py-6   opacity-80 backdrop-blur-xl backdrop-filter  transition-transform duration-500  ease-in-out `}
        >
          <div className="absolute left-[-77px] top-[-190px] h-[324px] w-[195px] bg-[#aabbb4] opacity-30  blur-3xl   " />
          <div className="mb-10 flex items-center gap-3">
            <img src="/logo.svg" alt="" />
          </div>

          <div className=" divide-y divide-[#585858]">
            <Link
              className="block   py-6 px-3 font-medium text-gray-400 hover:text-white"
              href="/"
            >
              Home
            </Link>

            <Link
              className=" block    py-6  px-3   font-medium text-gray-400 hover:text-white"
              href="/work"
            >
              Work
            </Link>

            <Link
              className=" block py-6   px-3 font-medium text-gray-400 hover:text-white"
              href="/blog"
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
