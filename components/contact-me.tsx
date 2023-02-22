import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

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

      duration: 1,
    },
  },
};

const ContactMe = () => {

  const router = useRouter();
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={cardVariants}
    >
      <div className="wrapper my-16 text-white ">
        <div className="relative flex w-full flex-wrap items-center justify-between gap-10 overflow-hidden  rounded-lg bg-contactus-gred py-8 px-6 lg:px-40">
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-[2.5rem] xl:w-[20ch]">
              LETS GET IN TOUCH
            </h2>
            <p className="mt-4  leading-relaxed text-gray-300 md:w-[37ch]">
              I am always looking for new challenges and opportunities to work
              on. If you liked my work and want to work together, let&apos;s get in
              touch
            </p>
          </div>
          <div>
            <motion.button
              onClick={() => router.push("/contact")}
              className="pbtn z-20  "
            >
              Get in touch
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export {ContactMe};
