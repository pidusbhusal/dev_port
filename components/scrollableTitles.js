import React from "react";
import Catagorypills from "./Catagorypills";

const generatedTopics = [
  "React",
  "Andrioud",
  "Web Development",
  "Nepal",
  "Europe",
  "Messi",
  "React",
  "Andrioud",
  "Web Development",
  "Nepal",
  "Europe",
  "Messi",
  "React",
  "Andrioud",
  "Web Development",
  "Nepal",
  "Europe",
  "Messi",
];

export default function ScrollableTitles() {
  return (
    <div className="">
      <div className="relative flex  w-[87%] items-start md:w-[95%] xl:w-[95%]">
        <div className="absolute  z-10">
          <button
            onClick={() => {
              document.getElementById("scrollbar").scrollLeft += -600;
            }}
            className="top- right-full z-10  bg-fading-bg-left  px-8 py-3 text-black"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9 7.86805e-07C4.02944 1.22135e-06 -1.22135e-06 4.02944 -7.86805e-07 9C-3.52265e-07 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 3.52265e-07 9 7.86805e-07ZM9.89377 13.6954C10.2574 14.059 10.8469 14.059 11.2104 13.6954C11.574 13.3318 11.574 12.7424 11.2104 12.3788L7.52396 8.69227L11.2104 5.00578C11.574 4.64219 11.574 4.05269 11.2104 3.6891C10.8469 3.32551 10.2574 3.32551 9.89377 3.6891L4.8906 8.69227L9.89377 13.6954Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <button
          onClick={() => {
            document.getElementById("scrollbar").scrollLeft += +600;
          }}
          className=" absolute left-full z-10    bg-fading-bg-right px-10 py-3 text-black"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM8.10623 4.30456C7.74264 3.94097 7.15314 3.94097 6.78955 4.30456C6.42596 4.66815 6.42596 5.25765 6.78955 5.62124L10.476 9.30773L6.78955 12.9942C6.42596 13.3578 6.42596 13.9473 6.78955 14.3109C7.15314 14.6745 7.74264 14.6745 8.10623 14.3109L13.1094 9.30773L8.10623 4.30456Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div
        id="scrollbar"
        className="z-0 flex w-full translate-x-0 cursor-grab overflow-x-scroll scrollbar-hide  "
      >
        {generatedTopics.map((generatedTopic, i) => {
          return <Catagorypills key={i} catagory={generatedTopic} />;
        })}
      </div>
    </div>
  );
}
