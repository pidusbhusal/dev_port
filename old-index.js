"use client";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Workcard from "../components/Workcard";
import Testimonialcard from "../components/Testimonialcard";
import Blogcard from "../components/Blogcard";
import Catagorypills from "../components/Catagorypills";
import ContactusBanner from "../components/ContactusBanner";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const workexpes = [
  {
    id: 1,
    work: "Mobile Application Developer",
    employer: "Mirror Grid Pvt.Ltd",
    workgap: "mt-[0%] xl:ml-[0]",
    timeline: "h-[21%] xl:w-[21%] xl:h-[0%] xl:p-4",
    casestudy: "/project1",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
  },

  {
    id: 2,
    work: "PHP Developer",
    employer: "Inititaive Nepal",
    workgap: "mt-[7%] xl:ml-[29%] xl:mt-2",
    timeline: "h-[9%] xl:w-[9%] xl:h-[0%] xl:p-4",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
  },
  {
    id: 3,
    work: "Software Engineer",
    employer: "Java Software",
    workgap: "mt-[6%] xl:ml-[44%] xl:mt-2",
    timeline: "h-[10%] xl:w-[10%] xl:h-[0%] xl:p-4 ",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
  },
  {
    id: 4,
    work: "Software Engineer",
    employer: "Sastodeal",
    workgap: "mt-[3%] xl:ml-[57%] xl:mt-2",
    timeline: "h-[23%] xl:w-[23%] xl:h-[0%] xl:p-4 ",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
  },
  {
    id: 5,
    work: "Software Engineer",
    employer: "Freelancing",
    workgap: "mt-[2%] xl:ml-[82%] xl:mt-2",
    timeline: "h-[21%] xl:w-[21%] xl:h-[0%] xl:p-4",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
    islast: true,
  },
];

const projects = [
  {
    id: 1,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
    projectcasestudy: "/project1",
  },
  {
    id: 1,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
  },
];

const testimonials = [
  {
    id: 0,
    testimonialDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    testimonialName: "Chrish Doo",
    testimonialTitle: "CEO of Futur",
    testimonialImage: "testimonialprofile.jpg",
  },
  {
    id: 1,
    testimonialDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    testimonialName: "Chrish Doo",
    testimonialTitle: "CEO of Futur",
    testimonialImage: "testimonialprofile.jpg",
  },
  {
    id: 2,
    testimonialDetail: "Lorem ipsum dolor sit amet, consectetur e",
    testimonialName: "Chrish Doo",
    testimonialTitle: "CEO of Futur",
    testimonialImage: "testimonialprofile.jpg",
  },
  {
    id: 3,
    testimonialDetail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    testimonialName: "Chrish Doo",
    testimonialTitle: "CEO of Futur",
    testimonialImage: "testimonialprofile.jpg",
  },
];

const testimonialcompanys = [
  "airwallex.png",
  "afterpay.png",
  "amazon.png",
  "amplitude.png",
  "asana-logo.png",
];

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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(false);

  {
    selectedId &&
      (selectedId != selectedJob.id
        ? setSelectedJob(workexpes.find((data) => data.id === selectedId))
        : "");
  }

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
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="py-20 text-white ">
        <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />
        

        {/* work */}


        {/* Timeline */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-timeline-bg py-28 md:py-28"
        >
          <div className="wrapper">
            <h2 className="text-3xl font-semibold md:text-[2.5rem]">
              TIMELINE
            </h2>

            {/* timelinelines */}

            {/* mobile version */}
            <div className="relative xl:hidden ">
              <div className="flex justify-between">
                <div className="date mt-10 flex flex-col gap-5 pr-2 sm:pr-4">
                  <span className="items-top flex ">2017</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2018</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2019</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2020</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2021</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2022</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2023</span>
                </div>
                <div className="date mt-10 flex flex-col  gap-5">
                  <div className="absolute top-[90%] z-10 ml-4 h-16 w-[82%] bg-last-gred-mobile"></div>
                  <div className="absolute  ml-4 h-[100%]">
                    {workexpes.map((workexp, i) => (
                      <motion.div
                        onClick={() => {
                          setSelectedId(workexp.id);
                        }}
                        layout
                        key={i}
                        className={`${workexp.workgap} flex ${workexp.timeline}   items-center  justify-center rounded-lg  border-[0.5px] border-[#313131] bg-opacity-60   bg-work-gred  bg-clip-padding px-6  backdrop-blur-xl backdrop-filter`}
                      >
                        <motion.div>
                          <motion.h3 className="text-center  font-medium">
                            {workexp.work}
                          </motion.h3>
                          <motion.p className="text-center text-sm text-gray-400">
                            {workexp.employer}
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="flex h-6 items-center"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                  <img
                    src="timeline_hr.svg"
                    alt=""
                    width="100%"
                    className="h-6"
                  />
                </div>
              </div>
            </div>
            {/* desktop version */}
            <div className=" mt-20 hidden xl:grid ">
              <div>
                {/* date at top */}
                <div className="dates flex justify-between md:max-w-[100%]">
                  <span className="items-top flex ">2017</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2018</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2019</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2020</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2021</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2022</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2023</span>
                </div>

                {/* bars */}
                <div className="relative my-7 flex justify-between md:max-w-[100%]">
                  <div className="absolute inline w-[100%]">
                    {workexpes.map((workexp, i) => (
                      <motion.div
                        layoutId={workexp.id}
                        onClick={() => {
                          setSelectedId(workexp.id);
                        }}
                        key={i}
                        className={`${workexp.workgap} flex ${workexp.timeline}  cursor-pointer  items-center  justify-center rounded-lg  border-[0.5px] border-[#313131] bg-opacity-60   bg-work-gred  bg-clip-padding px-6  backdrop-blur-xl backdrop-filter`}
                      >
                        <motion.div>
                          <motion.h3 className="  font-medium">
                            {workexp.work}
                          </motion.h3>
                          <motion.p className="text-sm text-gray-400">
                            {workexp.employer}
                          </motion.p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                  <img src="timeline_vr.svg" className="" alt="" />
                </div>

                {/* buttom date */}
                <div className="dates flex justify-between md:max-w-[100%]">
                  <span className="items-top flex ">2017</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2018</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2019</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2020</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2021</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2022</span>
                  <span className="flex items-center p-3 "></span>
                  <span className="items-top flex ">2023</span>
                </div>
              </div>
            </div>
            <AnimatePresence>
              {selectedJob && (
                <motion.div
                  onClick={() => {
                    setSelectedId(null);
                    setSelectedJob(false);
                  }}
                  className="fixed  top-0  left-0  z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-80"
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    layoutId={selectedId}
                    className={`text   absolute  z-20  place-items-center rounded-lg  border-[0.5px]   border-[#313131]  bg-work-gred px-10 py-10`}
                  >
                    <motion.div>
                      <motion.div className="flex w-full justify-end">
                        <motion.button
                          onClick={() => {
                            setSelectedId(null);
                            setSelectedJob(false);
                          }}
                          className="  rounded-sm bg-gray-200 bg-opacity-10 px-2 py-2 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </motion.button>
                      </motion.div>

                      <motion.h3 className="  text-xl font-medium">
                        {selectedJob.work}
                      </motion.h3>
                      <motion.p className=" mb-2 text-lg text-gray-400">
                        {selectedJob.employer}
                      </motion.p>
                      <motion.p className=" mb-2 max-w-prose">
                        {selectedJob.desciption}
                      </motion.p>
                      <span>Skills: </span>
                      {selectedJob.skills.map((skill, i) => (
                        <span className=" text-gray-400" key={i}>
                          {skill} ·{" "}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* testimonials*/}
        

        {/* blog */}
        <div className="pt-16">
          <div className="wrapper">
            {/* title */}
            <div className="title mb-11 flex justify-between md:mb-0">
              <motion.h2
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={fadeInUp}
                className="text-3xl font-semibold leading-tight md:text-[2.5rem] xl:w-[20ch]"
              >
                BLOGS
              </motion.h2>
              <div>
                <motion.button
                  onClick={() => router.push("/blog")}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={fadeInUp}
                  className="sbtn flex gap-0  sm:gap-1"
                >
                  <p>Read More Blogs</p>{" "}
                  <svg
                    className="hidden sm:block"
                    width="36"
                    height="21"
                    viewBox="0 0 36 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.3536 10.8536C26.5488 10.6583 26.5488 10.3417 26.3536 10.1464L23.1716 6.96447C22.9763 6.76921 22.6597 6.76921 22.4645 6.96447C22.2692 7.15973 22.2692 7.47631 22.4645 7.67157L25.2929 10.5L22.4645 13.3284C22.2692 13.5237 22.2692 13.8403 22.4645 14.0355C22.6597 14.2308 22.9763 14.2308 23.1716 14.0355L26.3536 10.8536ZM10 11L26 11L26 10L10 10L10 11Z"
                      fill="white"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
            <div className="flex flex-wrap justify-between md:mt-20">
              {/* blog section */}
              <div className="grid place-items-center  gap-16">
                {blogs.map((blog, i) => {
                  return (
                    <Blogcard
                      key={i}
                      blogcontent={blog.blogcontent}
                      blogimg={blog.blogimage}
                      blogtitle={blog.blogtitle}
                      bloglink={blog.bloglink}
                      catagories={blog.blogtags}
                      blogtime={blog.blogtime}
                    />
                  );
                })}
              </div>
              {/* topic section */}
              <div className=" hidden xl:block xl:w-64">
                <motion.h4
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={fadeInUp}
                  className="text-xl xl:text-left"
                >
                  Reccomended topic
                </motion.h4>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={fadeInUp}
                  className=" justify-left mt-8 hidden flex-wrap gap-y-1 md:flex  "
                >
                  {blogrecomendations.map((blogrecomendation, i) => {
                    return (
                      <Catagorypills key={i} catagory={blogrecomendation} />
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* contact us */}

        <div className="contactus pt-16 ">
          <ContactusBanner />
        </div>
      </main>
    </motion.div>
  );
}
