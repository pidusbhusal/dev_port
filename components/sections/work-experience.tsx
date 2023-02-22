import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {WorkExperience} from '../../types';

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


interface WorkExperienceSectionProps {
  experiences: Array<WorkExperience>;
}

const WorkExperienceSection = ({experiences}: WorkExperienceSectionProps) => {

  const [selectedExperience, setSelectedExperience] = useState<undefined|WorkExperience>(undefined);

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      className="bg-timeline-bg py-28 md:py-28"
    >
      <div className="wrapper">
        <h2 className="text-3xl font-semibold md:text-[2.5rem] uppercase">Previous Experiences</h2>

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
                {experiences.map((workexp, i) => (
                  <motion.div
                    onClick={() => {
                      setSelectedExperience(workexp);
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
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
              <Image src="/timeline_hr.svg" alt="" width="1557" height="2" className="h-6" />
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
                {experiences.map((workexp, i) => (
                  <motion.div
                    layoutId={workexp.id.toString()}
                    onClick={() => {
                      setSelectedExperience(workexp);
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

              
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
              <Image src="timeline_vr.svg" height={1} width={2} className="" alt="" />
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
          {selectedExperience && (
            <motion.div
              onClick={() => {
                setSelectedExperience(null);
              }}
              className="fixed  top-0  left-0  z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-80"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                layoutId={selectedExperience.employer}
                className={`text   absolute  z-20  place-items-center rounded-lg  border-[0.5px]   border-[#313131]  bg-work-gred px-10 py-10`}
              >
                <motion.div>
                  <motion.div className="flex w-full justify-end">
                    <motion.button
                      onClick={() => {
                        setSelectedExperience(null);
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
                    {selectedExperience.work}
                  </motion.h3>
                  <motion.p className=" mb-2 text-lg text-gray-400">
                    {selectedExperience.employer}
                  </motion.p>
                  <motion.p className=" mb-2 max-w-prose">
                    {selectedExperience.desciption}
                  </motion.p>
                  <span>Skills: </span>
                  {selectedExperience.skills.map((skill, i) => (
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
  );
};

export { WorkExperienceSection };
export type {WorkExperienceSectionProps};
