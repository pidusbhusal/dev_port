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

const workexpes = [
  {
    id: 1,
    work: "Mobile Application Developer",
    employer: "Mirror Grid Pvt.Ltd",
    workgap: "mt-[0%] xl:ml-[0]",
    timeline: "h-[21%] xl:w-[21%] xl:h-[0%] xl:p-4",
  },

  {
    id: 2,
    work: "PHP Developer",
    employer: "Inititaive Nepal",
    workgap: "mt-[7%] xl:ml-[29%] xl:mt-2",
    timeline: "h-[9%] xl:w-[9%] xl:h-[0%] xl:p-4",
  },
  {
    id: 3,
    work: "Software Engineer",
    employer: "Java Software",
    workgap: "mt-[6%] xl:ml-[44%] xl:mt-2",
    timeline: "h-[10%] xl:w-[10%] xl:h-[0%] xl:p-4 ",
  },
  {
    id: 4,
    work: "Software Engineer",
    employer: "Sastodeal",
    workgap: "mt-[3%] xl:ml-[57%] xl:mt-2",
    timeline: "h-[23%] xl:w-[23%] xl:h-[0%] xl:p-4 ",
  },
  {
    id: 5,
    work: "Software Engineer",
    employer: "Freelancing",
    workgap: "mt-[2%] xl:ml-[82%] xl:mt-2",
    timeline: "h-[21%] xl:w-[21%] xl:h-[0%] xl:p-4",
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

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="py-20 text-white ">
        {/* herosection */}
        <div className=" wrapper flex flex-wrap-reverse items-end justify-center md:flex-nowrap  ">
          <div className="mt-10 md:mt-0">
            <button className=" group flex w-[100%] items-center justify-between rounded-full bg-white px-9 py-4 text-black hover:bg-green-200 md:w-auto md:items-center md:gap-[10rem] md:px-8">
              <p>See My Work</p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.407 1.34254C13.407 0.928328 13.0712 0.592542 12.657 0.592542H5.90697C5.49276 0.592542 5.15697 0.928328 5.15697 1.34254C5.15697 1.75676 5.49276 2.09254 5.90697 2.09254L11.907 2.09254L11.907 8.09254C11.907 8.50676 12.2428 8.84254 12.657 8.84254C13.0712 8.84254 13.407 8.50676 13.407 8.09254V1.34254ZM1.87359 13.1866L13.1873 1.87287L12.1266 0.812212L0.812932 12.1259L1.87359 13.1866Z"
                  fill="black"
                />
              </svg>
            </button>
            <h1 className="line mt-9  text-[2.4rem] font-bold leading-10 md:text-[4rem] md:leading-[4.15rem]">
              I'M A FULL STACK DEVELOPER
            </h1>
            <p className="mt-5 max-w-[49ch]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </div>
          <div className="overflow-hidden rounded-lg ">
            <img width="100%" src="./profile.jpg" alt="Me 😁" />
          </div>
        </div>

        {/* work */}

        <div className="home-work py-24 md:mt-3 md:pt-40 md:pb-20 ">
          <div className="wrapper">
            <div className="item-center flex items-center justify-between">
              <h2 className="text-3xl font-semibold md:text-[2.5rem]">WORK</h2>
              <div>
                <button className="pbtn">See my work</button>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 justify-start gap-x-11 sm:grid-cols-2 ">
              {projects.map((project) => {
                return (
                  <Workcard
                    projecttitle={project.projecttitle}
                    projectdescription={project.projctdescription}
                    projectthumbnail={project.projectthumbnail}
                    catagories={project.catagories}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-timeline-bg py-28 md:py-48">
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
                    {workexpes.map((workexp, key) => (
                      <div
                        key={key}
                        className={`${workexp.workgap} flex ${workexp.timeline}   items-center  justify-center rounded-lg  border-[0.5px] border-[#313131] bg-opacity-60   bg-work-gred  bg-clip-padding px-6  backdrop-blur-xl backdrop-filter`}
                      >
                        <div>
                          <h3 className="text-center  font-medium">
                            {workexp.work}
                          </h3>
                          <p className="text-center text-sm text-gray-400">
                            {workexp.employer}
                          </p>
                        </div>
                      </div>
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
            <div class=" mt-20 hidden xl:grid ">
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
                    {workexpes.map((workexp, key) => (
                      <div
                        key={key}
                        className={`${workexp.workgap} flex ${workexp.timeline}   items-center  justify-center rounded-lg  border-[0.5px] border-[#313131] bg-opacity-60   bg-work-gred  bg-clip-padding px-6  backdrop-blur-xl backdrop-filter`}
                      >
                        <div>
                          <h3 className="text-center  font-medium">
                            {workexp.work}
                          </h3>
                          <p className="text-center text-sm text-gray-400">
                            {workexp.employer}
                          </p>
                        </div>
                      </div>
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
          </div>
        </div>

        {/* testimonials*/}
        <div className="pt-16">
          <div className="wrapper">
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <h2 className="text-3xl font-semibold leading-tight md:text-[2.5rem] xl:w-[20ch]">
                WHAT PEOPLE ARE SAYING ABOUT ME
              </h2>

              <p className="leading-loose xl:w-[37ch]">
                Over the year I have worked with plenty of client and here are
                some of their testimonial
              </p>
            </div>
            {/* testimonial card */}
            <div className="my-20 grid gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
              {testimonials.map((testimonial) => {
                return (
                  <Testimonialcard
                    key={testimonial.id}
                    description={testimonial.testimonialDetail}
                    name={testimonial.testimonialName}
                    profile={testimonial.testimonialImage}
                    title={testimonial.testimonialTitle}
                  />
                );
              })}
            </div>

            {/* testimonial company */}
            <div className=" grid grid-cols-2 place-items-start  gap-7  md:grid-cols-3 md:gap-28 md:gap-y-2 xl:grid-cols-5">
              {testimonialcompanys.map((testimonialcompany) => {
                return <img src={testimonialcompany} />;
              })}
            </div>
          </div>
        </div>

        {/* blog */}
        <div className="pt-16">
          <div className="wrapper">
            {/* title */}
            <div className="title mb-11 flex justify-between md:mb-0">
              <h2 className="text-3xl font-semibold leading-tight md:text-[2.5rem] xl:w-[20ch]">
                BLOGS
              </h2>
              <div>
                <button className="sbtn flex gap-0  sm:gap-1">
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
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-between md:mt-20">
              {/* blog section */}
              <div className="grid place-items-center  gap-16">
                {blogs.map((blog) => {
                  return (
                    <Blogcard
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
                <h4 className="text-xl xl:text-right">Reccomended topic</h4>
                <div className=" mt-8 hidden flex-wrap justify-end gap-y-1 md:flex  ">
                  {blogrecomendations.map((blogrecomendation) => {
                    return <Catagorypills catagory={blogrecomendation} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact us */}

        <div className="contactus pt-16 ">
          <ContactusBanner />
        </div>
      </main>
    </>
  );
}
