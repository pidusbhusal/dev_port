"use client";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

        <div className="home-work py-24 md:mt-20 md:py-40">
          <div className="wrapper">
            <div className="item-center flex items-center justify-between">
              <h2 className="text-3xl font-semibold md:text-[2.5rem]">WORK</h2>
              <div>
                <button className="pbtn">See my work</button>
              </div>
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
        {/* test */}
      </main>
    </>
  );
}
