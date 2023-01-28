import { Category, CategoryPills, ContactUsBanner, WorkCard } from "@app/components";
import React from "react";


const categories : Array<Category> = [
  {title:"react", id: 1},
  {title:"backend", id: 2},
  {title:"nextjs", id: 3},
  {title:"fullstack", id: 4},
];



const projects = [
  {
    id: 1,
    title: "Poroject tite would be here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  Ut enim ad minim veniam, quis nostrud exercitation",
    categories: [
      {title: "React", id: 1},
      {title: "Android", id: 2},
      {title: "Typescript", id: 3},
      {title: "handsome", id: 4},
  ],
    thumbnail: "workimage.jpg",
  },
  {
    id: 2,
    title: "Poroject tite would be here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    categories: [
      {title: "React", id: 1},
      {title: "Android", id: 2},
      {title: "Typescript", id: 3},
      {title: "handsome", id: 4},
  ],
    thumbnail: "workimage.jpg",
  },
  {
    id: 2,
    title: "Poroject tite would be here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    categories: [
      {title: "React", id: 1},
      {title: "Android", id: 2},
      {title: "Typescript", id: 3},
      {title: "handsome", id: 4},
  ],
    thumbnail: "workimage.jpg",
  },

  {
    id: 2,
    title: "Poroject tite would be here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    categories: [
      {title: "React", id: 1},
      {title: "Android", id: 2},
      {title: "Typescript", id: 3},
      {title: "handsome", id: 4},
  ],
    thumbnail: "workimage.jpg",
  },
  {
    id: 2,
    title: "Poroject tite would be here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    categories: [
      {title: "React", id: 1},
      {title: "Android", id: 2},
      {title: "Typescript", id: 3},
      {title: "handsome", id: 4},
  ],
    thumbnail: "workimage.jpg",
  },

  {
    id: 2,
    title: "Poroject tite would be here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    categories: [
      {title: "React", id: 1},
      {title: "Android", id: 2},
      {title: "Typescript", id: 3},
      {title: "handsome", id: 4},
  ],
    thumbnail: "workimage.jpg",
  },
];

function work() {
  return (
    <div className="text-white">
      <div className="wrapper">
        {/* heading */}
        <div className="heading mb-8 flex flex-wrap items-center justify-between gap-y-2 md:mb-4">
          <h2 className="text-3xl font-semibold md:text-[2.5rem]">WORKS</h2>
          <div className="flex items-center  gap-4 rounded-full border-[1px] border-solid border-[#585858] bg-[#353535] px-6  ">
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
              className="border-none bg-transparent  py-2 outline-0  md:py-3"
            />
          </div>
        </div>
        {/* categories  tags*/}
        <CategoryPills containerClassName="mt-8 md:mt-4" categories={categories} />
        {/* projects */}
        <div className="mt-8 grid grid-cols-1 justify-start gap-x-11 sm:grid-cols-2 md:mt-4">
          {projects.map((project, id) => {
            return (

              <WorkCard key={id} {...project} />
            );
          })}
        </div>
      </div>
      {/* contact us banner */}
      <div className="mb-16">
        <ContactUsBanner />
      </div>
    </div>
  );
}
<h1>WORK</h1>;
export default work;
