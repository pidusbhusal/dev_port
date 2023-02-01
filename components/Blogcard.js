import Link from "next/link";
import React from "react";
import Catagorypills from "./Catagorypills";

function Blogcard({
  blogtitle,
  blogcontent,
  blogimg,
  catagories,
  bloglink,
  blogtime,
}) {
  return (
    <div className="  border-b-[0.5px] border-gray-700 pb-6  md:pb-16 ">
      <div className="hidden items-center  gap-2 sm:flex md:gap-10">
        <Link href={bloglink}>
          <img src="blogimg.jpg" alt="" className="max-h-40" />
        </Link>
        <Link href={bloglink}>
          <h3 className=" text-2xl  font-semibold">{blogtitle}</h3>
          <p className="text-overflow-ellipsis mt-2 hidden max-w-[60ch] overflow-hidden text-gray-400  sm:line-clamp-3 ">
            {blogcontent}
          </p>
          <div className="mt-4 flex  items-center gap-4">
            <div className="variation overflow-hidden line-clamp-1">
              {catagories &&
                catagories.map((catagory, i) => {
                  return <Catagorypills key={i} catagory={catagory} />;
                })}
            </div>
            ·<p className="text-gray-400">{blogtime}</p>
          </div>
        </Link>
      </div>
      <div className="block   sm:hidden">
        <div className="flex items-center gap-2 md:gap-10">
          <Link href={bloglink}>
            <img src="blogimg.jpg" alt="" className="max-h-40" />
          </Link>
          <Link href={bloglink}>
            <h3 className=" text-2xl  font-semibold">{blogtitle}</h3>
            <p className="text-overflow-ellipsis mt-2 hidden max-w-[60ch] overflow-hidden text-gray-400  sm:line-clamp-3 ">
              {blogcontent}
            </p>
          </Link>
        </div>
        <div className="mt-4 flex  items-center gap-4">
          <div className="variation overflow-hidden line-clamp-1">
            {catagories &&
              catagories.map((catagory, i) => {
                return <Catagorypills key={i} catagory={catagory} />;
              })}
          </div>
          ·<p className="text-gray-400">{blogtime}</p>
        </div>
      </div>
    </div>
  );
}

export default Blogcard;
