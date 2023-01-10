import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="container flex gap-10 bg-black text-white ">
        <Link href="/sudip">Sudip</Link>
        <Link href="/">home</Link>
      </div>
    </div>
  );
};

export default Navbar;
