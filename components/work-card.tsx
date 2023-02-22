"use client";
import React from "react";
import {StackPills} from './stack-pills';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Project } from "../types";
import Image from "next/image";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",
      delay: 0.1,
      duration: 0.8,
    },
  },
};

interface WorkCardProps {
    project: Project
}

const WorkCard = ({project}: WorkCardProps) => {
  const router = useRouter();

  const {title, thumbnail, stacks, seo, slug, link} = project;
  const {description} = seo;
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={cardVariants}
      className="mb-20  "
    >
      <Image
        loading="lazy"
        src={thumbnail.data.attributes.url}
        height={thumbnail.data.attributes.height}
        width={thumbnail.data.attributes.width}
        alt={title}
        className="w-full rounded  md:rounded-md "
      />
      <StackPills stacks={stacks} containerClassName="mt-7 flex flex-wrap"/>
      <div className="mt-5">
        <h3 className="text-2xl font-semibold ">{title}</h3>
        <p className="mt-2 w-[90%] text-gray-400 line-clamp-3 ">
          {description}
        </p>
      </div>
      {/* buttons */}
      <div className="mt-7 flex items-center gap-3">
        <div>
          <button title="Read Case Study" className="pbtn" onClick={() => router.push(`/projects/${slug}`)}>
            Read Case Study
          </button>
        </div>
        <div>
          {link && (
            <button title="View Project" className=" first-letter flex  h-[45px] w-[45px] items-center justify-center rounded-full bg-white md:h-[52px] md:w-[52px]">
            <a href={link} title="View project in a new tab" target="_blank" rel="noreferrer">
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
          )}
        </div>
      </div>
    </motion.div>
  );
}

export {WorkCard};
export type {WorkCardProps};
