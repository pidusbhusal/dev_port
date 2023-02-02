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

export default function test() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(false);

  selectedId && selectedId != selectedJob.id
    ? setSelectedJob(workexpes.find((data) => data.id === selectedId))
    : "";

  return (
    <div className="wrapper text-white">
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
                <div
                  onClick={() => {
                    setSelectedId(workexp.id);
                  }}
                  key={i}
                  className={`${workexp.workgap} flex ${workexp.timeline}   items-center  justify-center rounded-lg  border-[0.5px] border-[#313131] bg-opacity-60   bg-work-gred  bg-clip-padding px-6  backdrop-blur-xl backdrop-filter`}
                >
                  <div>
                    <h3 className="text-center  font-medium">{workexp.work}</h3>
                    <p className="text-center text-sm text-gray-400">
                      {workexp.employer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {selectedJob && (
              <AnimatePresence>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  layout
                  className="text absolute top-[50%] right-[50%] bg-timeline-bg px-10 py-10"
                >
                  <h3 className="  text-xl font-medium">{selectedJob.work}</h3>
                  <p className=" mb-2 text-lg text-gray-400">
                    {selectedJob.employer}
                  </p>
                  <p className=" mb-2">
                    Developed numerous freelance projects consisting of work in
                    Magento 2 module development, Magento 2 theme development,
                    Mobile Application development in React Native and Ionic
                    Framework and LAMP stack.
                  </p>
                  <span>Skills: </span>
                  {Skills.map((skill, i) => (
                    <span className=" text-gray-400" key={i}>
                      {skill} ·{" "}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
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
  );
}
