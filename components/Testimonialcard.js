import React from "react";
import { motion } from "framer-motion";
const fadeInUp = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",

      duration: 2,
    },
  },
};

function Testimonialcard({ description, name, title, profile }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={fadeInUp}
      className={` grid items-stretch gap-5 rounded-lg border-solid border-[#1C1B1B] bg-opacity-20 bg-clip-padding py-7 px-7 backdrop-blur-xl backdrop-filter   first:border-[1px] first:bg-testimonial-gred`}
    >
      <img src="./quote.svg" alt="" />
      <p className="tex-gray-400 min-h-[120px] overflow-hidden ">
        {description}
      </p>
      <div className="flex gap-4">
        <img src={profile} alt="" className="rounded-full" />
        <div>
          <h4 className="text-lg ">{name}</h4>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonialcard;
