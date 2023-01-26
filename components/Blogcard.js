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
    <div className="flex gap-10 border-b-[0.5px] border-gray-700 pb-16">
      <Link href={bloglink}>
        <img src="blogimg.jpg" alt="" className="max-h-40" />
      </Link>

      <Link href={bloglink}>
        <h3 className=" text-2xl font-semibold">{blogtitle}</h3>
        <p className="text-overflow-ellipsis mt-2 max-w-[60ch] overflow-hidden text-gray-400 line-clamp-3">
          {blogcontent}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="variation overflow-hidden line-clamp-1">
            {catagories &&
              catagories.map((catagory) => {
                return <Catagorypills catagory={catagory} />;
              })}
          </div>
          ·<p className="text-gray-400">{blogtime}</p>
        </div>
      </Link>
    </div>
  );
}

export default Blogcard;
