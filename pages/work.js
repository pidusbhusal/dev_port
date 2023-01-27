import React from "react";
import Catagorypills from "../components/Catagorypills";
import ContactusBanner from "../components/ContactusBanner";
import Workcard from "../components/Workcard";

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
  },
  {
    id: 2,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
  },
  {
    id: 2,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
  },

  {
    id: 2,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
  },
  {
    id: 2,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
  },

  {
    id: 2,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
  },
];

function work() {
  return (
    <div className="text-white">
      <div className="wrapper">
        {/* catagories */}
        <div className="heading flex flex-wrap items-center justify-between gap-y-4">
          <h2 className="text-3xl font-semibold md:text-[2.5rem]">WORK</h2>
          <div className="flex items-center  gap-4 rounded-full border-[1px] border-solid border-[#585858] bg-[#353535] px-6 ">
            <svg
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0195 18.4844L21.5436 21.9992"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="search"
              className="border-none bg-transparent  py-3  outline-0"
            />
          </div>
        </div>
        {/* Catagories  tags*/}
        <div className="mt-8 md:mt-4">
          {catagories.map((catagory) => {
            return <Catagorypills catagory={catagory} />;
          })}
        </div>

        {/* projects */}
        <div className="mt-14 grid grid-cols-1 justify-start gap-x-11 sm:grid-cols-2">
          {projects.map((project) => {
            return (
              <Workcard
                key={project.id}
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
