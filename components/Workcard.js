"use client";
import React from "react";
import Catagorypills from "./Catagorypills";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Workcard({
  projectthumbnail,
  catagories,
  projectdescription,
  projecttitle,
  projectlink,
  projectcasestudy,
}) {
  const router = useRouter();

  return (
    <div className="mb-20  ">
      <img
        src={projectthumbnail}
        alt="dis my work"
        className="w-full rounded  md:rounded-md "
      />
      <div className=" mt-7 flex flex-wrap ">
        {catagories &&
          catagories.map((catagory, i) => {
            return <Catagorypills key={i} catagory={catagory} />;
          })}
      </div>
      <div className="mt-5">
        <h3 className="text-2xl font-semibold ">{projecttitle}</h3>
        <p className="mt-2 w-[90%] text-gray-400 line-clamp-3 ">
          {projectdescription}
        </p>
      </div>
      {/* buttons */}
      <div className="mt-7 flex items-center gap-3">
        <div>
          <button className="pbtn" onClick={() => router.push("/project1")}>
            Read Case Study
          </button>
        </div>
        <div>
          <button className=" first-letter flex  h-[45px] w-[45px] items-center justify-center rounded-full bg-white md:h-[52px] md:w-[52px]">
            <a href="#">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8814 0.596377C11.8814 0.332532 11.6675 0.118644 11.4036 0.118644L7.10402 0.118644C6.84018 0.118644 6.62629 0.332532 6.62629 0.596377C6.62629 0.860222 6.84018 1.07411 7.10402 1.07411L10.9259 1.07411L10.9259 4.89598C10.9259 5.15982 11.1398 5.37371 11.4036 5.37371C11.6675 5.37371 11.8814 5.15982 11.8814 4.89598L11.8814 0.596377ZM0.931559 11.7441L11.7414 0.934186L11.0658 0.258569L0.255941 11.0684L0.931559 11.7441Z"
                  fill="black"
                />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Workcard;
