import React from "react";
import Catagorypills from "../components/Catagorypills";
import ContactusBanner from "../components/ContactusBanner";
import Workcard from "../components/Workcard";
import ScrollableTitles from "../components/scrollableTitles";

const catagories = [
  "React",
  "Javascript",
  "TypeScript",
  "Android",
  "Android",
  "Android",
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
    id: 2,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
    projectcasestudy: "/project1",
  },
  {
    id: 3,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
    projectcasestudy: "/project1",
  },

  {
    id: 4,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
    projectcasestudy: "/project1",
  },
  {
    id: 5,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
    projectcasestudy: "/project1",
  },

  {
    id: 6,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
    projectcasestudy: "/project1",
  },
];

function work() {
  return (
    <div className="text-white">
      <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

      <div className="wrapper">
        {/* heading */}
        <div className="heading mb-8 flex flex-wrap items-center justify-between gap-y-2 md:mb-8">
          <h2 className="text-3xl font-semibold md:text-[2.5rem]">WORKS</h2>
          <div className="mt-4  flex w-full items-center gap-4 rounded-full  bg-[#353535] md:w-fit ">
            <svg
              className="ml-4"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.7659"
                cy="11.7659"
                r="8.98856"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0195 18.4844L21.5436 21.9992"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="search"
              className="border-none bg-transparent  py-2 outline-0  md:py-3"
            />
          </div>
        </div>
        {/* Catagories  tags*/}

        <ScrollableTitles />

        {/* projects */}
        <div className="mt-8 grid grid-cols-1 justify-start gap-x-11 sm:grid-cols-2 md:mt-4">
          {projects.map((project) => {
            return (
              <Workcard
                key={project.id}
                projectcasestudy={project.projectcasestudy}
                projecttitle={project.projecttitle}
                projectdescription={project.projctdescription}
                projectthumbnail={project.projectthumbnail}
                catagories={project.catagories}
              />
            );
          })}
        </div>
      </div>
      {/* contact us banner */}
      <div className="mb-16">
        <ContactusBanner />
      </div>
    </div>
  );
}
<h1>WORK</h1>;
export default work;
