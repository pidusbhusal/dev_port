import React from "react";
const projecttags = ["react", "backend", "nextjs", "fullstack"];
import Catagorypills from "../components/Catagorypills";
import { motion, useScroll } from "framer-motion";

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

      duration: 1,
    },
  },
};

const blogs = [
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "#",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "#",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "#",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
];

const blogrecomendations = [
  "React",
  "Design",
  "Graph",
  "Web Design",
  "Web Developnment",
  "Android",
  "Backend",
  "Life Style",
];

import ContactusBanner from "../components/ContactusBanner";

function blogopen() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

      {/* this will show progress in blog */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-white"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="wrapper text-white">
        <div className="flex  flex-wrap justify-between gap-14  md:flex-nowrap">
          <div className=" ">
            {/* title */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={fadeInUp}
              className=" flex flex-wrap items-center gap-0 md:gap-6"
            >
              <h2 className="text-3xl font-semibold md:text-[2.5rem]">
                NAME OF THE BLOGS
              </h2>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center gap-8"
            >
              {/* time and date */}

              <p className=" text-sm text-gray-400">
                Oct 24, 2022 · 7 min read
              </p>
              {/* projecttags */}

              <div className="">
                {projecttags &&
                  projecttags.map((projecttag, i) => {
                    return <Catagorypills key={i} catagory={projecttag} />;
                  })}
              </div>
            </motion.div>

            {/* rich text */}
            <hr className=" mt-8 opacity-20 md:mt-16" />

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={fadeInUp}
              className="md:mt-16"
            >
              <p className="mt-8 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block. Years ago, I (Marc) was a clinical intern at a
                large urban hospital, working under an extremely critical and
                generally unpleasant supervisor. She was the kind of person who
                complained incessantly, picking holes in even the most solid of
                efforts — be they of good will, or working hard to complete a
                tough case analysis on time. In my many months working with her,
                I don’t believe I saw her smile once. I was fascinated by the
                work but dreaded going in each day. In the end, I had to leave
                the internship. Looking back, my supervisor’s negativity — and
                the way I felt in her presence — cast a shadow over the entire
                experience. But even more remarkable than a dour and critical
                supervisor in a psychiatric treatment center is the fact when I
                told the story to Robin, she realized that she had encountered
                that same supervisor nearly two decades earlier! I (Robin) would
                not have remembered her name, but listening to the way Marc felt
                around her, I recognized her immediately. In my case, I was
                fortunate to have other supervisors who were more actively
                involved in my internship. But when I think back, her
                unpleasantness and negativity colored the day each time I met
                with her.
              </p>
              <p className="mt-8 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block. Years ago, I (Marc) was a clinical intern at a
                large urban hospital, working under an extremely critical and
                generally unpleasant supervisor. She was the kind of person who
                complained incessantly, picking holes in even the most solid of
                efforts — be they of good will, or working hard to complete a
                tough case analysis on time. In my many months working with her,
                I don’t believe I saw her smile once. I was fascinated by the
                work but dreaded going in each day. In the end, I had to leave
                the internship. Looking back, my supervisor’s negativity — and
                the way I felt in her presence — cast a shadow over the entire
                experience. But even more remarkable than a dour and critical
                supervisor in a psychiatric treatment center is the fact when I
                told the story to Robin, she realized that she had encountered
                that same supervisor nearly two decades earlier! I (Robin) would
                not have remembered her name, but listening to the way Marc felt
                around her, I recognized her immediately. In my case, I was
                fortunate to have other supervisors who were more actively
                involved in my internship. But when I think back, her
                unpleasantness and negativity colored the day each time I met
                with her.
              </p>
              <p className="mt-8 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block. Years ago, I (Marc) was a clinical intern at a
                large urban hospital, working under an extremely critical and
                generally unpleasant supervisor. She was the kind of person who
                complained incessantly, picking holes in even the most solid of
                efforts — be they of good will, or working hard to complete a
                tough case analysis on time. In my many months working with her,
                I don’t believe I saw her smile once. I was fascinated by the
                work but dreaded going in each day. In the end, I had to leave
                the internship. Looking back, my supervisor’s negativity — and
                the way I felt in her presence — cast a shadow over the entire
                experience. But even more remarkable than a dour and critical
                supervisor in a psychiatric treatment center is the fact when I
                told the story to Robin, she realized that she had encountered
                that same supervisor nearly two decades earlier! I (Robin) would
                not have remembered her name, but listening to the way Marc felt
                around her, I recognized her immediately. In my case, I was
                fortunate to have other supervisors who were more actively
                involved in my internship. But when I think back, her
                unpleasantness and negativity colored the day each time I met
                with her.
              </p>
              <p className="mt-8 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block. Years ago, I (Marc) was a clinical intern at a
                large urban hospital, working under an extremely critical and
                generally unpleasant supervisor. She was the kind of person who
                complained incessantly, picking holes in even the most solid of
                efforts — be they of good will, or working hard to complete a
                tough case analysis on time. In my many months working with her,
                I don’t believe I saw her smile once. I was fascinated by the
                work but dreaded going in each day. In the end, I had to leave
                the internship. Looking back, my supervisor’s negativity — and
                the way I felt in her presence — cast a shadow over the entire
                experience. But even more remarkable than a dour and critical
                supervisor in a psychiatric treatment center is the fact when I
                told the story to Robin, she realized that she had encountered
                that same supervisor nearly two decades earlier! I (Robin) would
                not have remembered her name, but listening to the way Marc felt
                around her, I recognized her immediately. In my case, I was
                fortunate to have other supervisors who were more actively
                involved in my internship. But when I think back, her
                unpleasantness and negativity colored the day each time I met
                with her.
              </p>
              <img src="blogtumbnail.png" alt="" className="mt-8" />
              <h3 className="mt-8 text-2xl font-semibold">Context</h3>
              <p className="mt-4 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block.
              </p>
              <hr className="my-16 opacity-20" />
            </motion.div>
          </div>

          {/* topic section */}
          <div className="    overscroll-none    md:col-span-2  ">
            <div className=" sticky  top-10 ">
              <motion.h4
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={fadeInUp}
                className="text-xl "
              >
                Reccomended topic
              </motion.h4>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={fadeInUp}
                className=" mt-8  flex-wrap justify-start gap-y-1 md:flex  "
              >
                {blogrecomendations.map((blogrecomendation, i) => {
                  return <Catagorypills key={i} catagory={blogrecomendation} />;
                })}
              </motion.div>

              <hr className="my-8 opacity-20" />
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={fadeInUp}
              >
                <motion.h4
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={fadeInUp}
                  className="text-xl "
                >
                  Subscribe to my newsletter
                </motion.h4>
                <motion.p
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={fadeInUp}
                  className="mt-4 text-gray-300"
                >
                  You can also write your email and I will get to you{" "}
                </motion.p>

                <motion.form
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={fadeInUp}
                  action=""
                  className="mt-4 grid gap-4"
                >
                  <div className="flex flex-col">
                    <label className="mb-2 text-gray-300">Email*</label>
                    <input
                      required
                      type="text"
                      placeholder="ex. example@gmail.com"
                      className="focused max-w-xs rounded bg-[#353535] px-4 py-3 outline-none "
                    />
                  </div>

                  <div className="mt-2">
                    <input
                      type="submit"
                      className="pbtn inline-block w-full lg:w-max"
                    />
                  </div>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ContactusBanner />
    </motion.div>
  );
}

export default blogopen;
