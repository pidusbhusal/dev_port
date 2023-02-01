"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  function MyButton({ href, children }) {
    return (
      <button
        className="w-full border-b border-y-[#ffffff35]   py-16   text-center "
        onClick={() => {
          router.push(href);
          setnavbutton(!navbutton);
        }}
      >
        {children}
      </button>
    );
  }

  // navcontroller
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const [navbutton, setnavbutton] = useState(true);
  return (
    <>
      <nav
        className={` ${
          show ? "top-0" : "top-[-100px]"
        } sticky z-50  block w-full bg-[#0F1010]  bg-opacity-60 bg-clip-padding backdrop-blur-xl backdrop-filter transition-[top] duration-[0.3s] ease-in`}
      >
        <div className="  wrapper flex items-center justify-between  py-6 md:py-4">
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
              <button
                className="pbtn hidden  hover:bg-green-200 md:block "
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Get in touch
              </button>
            </div>
            {/* mobile button goes here */}
            <button
              className="pbtn   hover:bg-green-200 md:hidden "
              onClick={() => {
                router.push("/contact");
                navbutton ? "" : setnavbutton(!navbutton);
              }}
            >
              Get in touch
            </button>
            <div className="z-50 flex items-center md:hidden">
              {navbutton ? (
                // burger menu
                <button
                  className="mobile-menu-button focus:bg-none"
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                // close button will display
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* mobile menu that apears when button is clicked */}
      <div
        className={`${
          navbutton ? " translate-x-[175%]" : " translate-x-0"
        } fixed right-0 top-0 z-20 grid h-full w-2/3 place-items-center  bg-[#0F1010]  bg-opacity-90 bg-clip-padding py-24 text-white backdrop-blur-xl backdrop-filter transition-all duration-[0.3s]  ease-in-out md:hidden`}
      >
        <MyButton href={"/"}>Home</MyButton>
        <MyButton href={"/work"}>Work</MyButton>
        <MyButton href={"/blog"}>Blog</MyButton>
      </div>

      {/* this is background bg when mobile nav is open */}
      <div
        className={`${
          navbutton ? " hidden opacity-0" : "  bg-opacity-50 "
        } fixed  top-0    z-10 h-full w-full place-items-center bg-[#0F1010]  bg-clip-padding py-24 text-white backdrop-blur-xl backdrop-filter transition-all duration-[0.3s]  ease-in-out md:hidden`}
      ></div>
    </>
  );
};

export default Navbar;
