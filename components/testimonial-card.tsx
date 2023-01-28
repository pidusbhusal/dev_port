import Image from "next/image";
import React from "react";

export interface Testimonial {
  description: string;
  name: string;
  title: string;
  image: string;
}

export const TestimonialCard = ({description, name, title, image }: Testimonial) => {
  return (
    <div
      className={` grid items-stretch gap-5 rounded-lg border-solid border-[#1C1B1B] bg-opacity-20 bg-clip-padding py-7 px-7 backdrop-blur-xl backdrop-filter   first:border-[1px] first:bg-testimonial-gred`}
    >
      <Image width={100} height={20} src="./quote.svg" alt="" />
      <p className="tex-gray-400 min-h-[120px] overflow-hidden ">
        {description}
      </p>
      <div className="flex gap-4">
        <Image width={100} height={20} src={image} alt="" className="rounded-full" />
        <div>
          <h4 className="text-lg ">{name}</h4>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
}
