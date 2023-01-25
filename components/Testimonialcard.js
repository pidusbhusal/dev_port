import React from "react";

function Testimonialcard({ key, description, name, title, profile }) {
  return (
    <div
      className={` grid items-stretch gap-5 rounded-lg border-solid border-[#1C1B1B] bg-opacity-20 bg-clip-padding py-7 px-7 backdrop-blur-xl backdrop-filter   first:border-[1px] first:bg-testimonial-gred`}
    >
      <img src="./quote.svg" alt="" />
      <p className="tex-gray-400 min-h-[120px] overflow-hidden ">
        {description}
      </p>
      <div className="flex gap-4">
        <img src={profile} alt="" className="rounded-full" />
        <div>
          <h4 className="text-lg ">{name}</h4>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonialcard;
