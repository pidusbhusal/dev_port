import { React, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Skills = [
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
];

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

export default function test() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(false);

  {
    selectedId &&
      (selectedId != selectedJob.id
        ? setSelectedJob(workexpes.find((data) => data.id === selectedId))
        : "");
  }

  return (
    <div className="wrapper text-white">
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
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
            <img src="timeline_hr.svg" alt="" width="100%" className="h-6" />
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
  );
}
