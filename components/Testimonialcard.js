import React from "react";

function Testimonialcard({ key, description, name, title, profile }) {
  return (
    <div
      className={` grid gap-5 rounded-lg border-solid border-[#1C1B1B] bg-opacity-20 bg-clip-padding py-7 px-7 backdrop-blur-xl backdrop-filter   first:border-[1px] first:bg-testimonial-gred`}
    >
      <img src="./quote.svg" alt="" />
      <p>{description}</p>
      <div className="flex gap-4">
        <img src={profile} alt="" className="rounded-full" />
        <div>
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonialcard;
