import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Catagorypills from "./Catagorypills";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      delay: 0.1,
      duration: 0.8,
    },
  },
};

function Blogcard({
  blogtitle,
  blogcontent,
  blogimg,
  catagories,
  bloglink,
  blogtime,
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={cardVariants}
      className="  border-b-[0.5px] border-gray-700 pb-6  md:pb-16 "
    >
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
    </motion.div>
  );
}

export default Blogcard;
