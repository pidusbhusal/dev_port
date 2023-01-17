import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [navbutton, setnavbutton] = useState(true);
  return (
    <nav className="">
      <div className=" wrapper flex items-center justify-between  py-6 md:py-10">
        <div>
          <img src="logo.svg" alt="Our Logo" />
        </div>

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
              href="/about"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="py-5 font-medium text-gray-400 hover:text-white"
              href="/"
            >
              Product
            </Link>
          </li>
        </ul>

        <div>
          <button className="pbtn hover:bg-green-200">Get in touch</button>
        </div>

        {/* mobile button goes here */}
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

      {/* mobile menu */}

      <div
        className={`${
          navbutton ? "hidden bg-transparent" : ""
        } fixed  top-0 z-10 h-[100vh] w-[100vw]  md:hidden`}
      >
        <div className="z-5  fixed   h-[100vh]   w-[100vw] bg-black  opacity-50 " />
        <div className="absolute h-[100vh] w-[100vw]  opacity-90   backdrop-blur-[4px]   " />
        <div
          className={`${
            navbutton ? "left-[-100vw] " : "left-[0] "
          } "mobile-menu z-19   fixed top-[0vw] h-full  w-[60vw] border-r-[0.5px]  border-[#344347]  bg-black  px-4 py-6 opacity-90  transition-transform duration-300  ease-in `}
        >
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
              href="/about"
            >
              Work
            </Link>

            <Link
              className=" block py-6   px-3 font-medium text-gray-400 hover:text-white"
              href="/"
            >
              Product
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
