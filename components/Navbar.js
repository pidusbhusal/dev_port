import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className=" text-white py-[2.15rem] ">
        <div className="container flex justify-between max-w-7xl mx-auto ">
          <div className="logo">
            <img src="./logo.svg" alt="logo" />
          </div>
          <div className="navlinks flex justify-between gap-10 items-center">
            <Link href="/">Home</Link>
            <Link href="/works">Work</Link>
            <Link href="/blogs">Blogs</Link>
          </div>
          <button>
            <Link href="/contactUs">Get in touch</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
