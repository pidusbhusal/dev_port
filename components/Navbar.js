import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-20 h-20 absolute blur-2xl bg-white top-[-5%] opacity-50 "></div>
      <div className=" text-white py-[2.15rem] relative">
        <div className="container flex justify-between max-w-7xl mx-auto ">
          <div className="logo">
            <img src="./logo.svg" alt="logo" />
          </div>
          <div className="navlinks flex justify-between gap-[100px] items-center">
            <Link href="/">Home</Link>
            <Link href="/works">Work</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
          <button className="py-2 px-5   bg-white text-black font-medium rounded-full ">
            <Link href="/contactUs">Get in touch</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
