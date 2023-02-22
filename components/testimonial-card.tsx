import React from "react";
import { motion } from "framer-motion";
import { FadeInUp } from "../data-providers";
import Image from "next/image";
import { Attributes, Testimonial } from "../types";


interface TestimonialCardProps {
    testimonial: Attributes<Testimonial>
}
const TestimonialCard = ({testimonial}: TestimonialCardProps) => {
    const {attributes} = testimonial;
    const {name, company, avatar, position} = attributes;
    const content = attributes.testimonial;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={FadeInUp}
      className={` grid items-stretch gap-5 rounded-lg border-solid border-[#1C1B1B] bg-opacity-20 bg-clip-padding py-7 px-7 backdrop-blur-xl backdrop-filter   first:border-[1px] first:bg-testimonial-gred`}
    >
      <Image src="./quote.svg" alt="Quote icon" height={100} width={100} />
      <p className="tex-gray-400 min-h-[120px] overflow-hidden ">
        {content}
      </p>
      <div className="flex gap-4">
        <Image 
            src={avatar.data?.attributes.url ?? ''}
            alt={name} 
            height={avatar.data?.attributes.height}
            width={avatar.data?.attributes.width}
            className="rounded-full h-20 w-20" 
        />
        <div>
          <p className="text-lg">{name}</p>
          <p className="text-sm text-gray-400">{position} at {company}</p>
        </div>
      </div>
    </motion.div>
  );
}

export {TestimonialCard};
export type {TestimonialCardProps};
