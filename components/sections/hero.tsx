import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SingleMediaAttribute } from '../../types';
const fadeInUp = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,

      transition: {
        type: "spring",

        duration: 1,
      },
    },
  };

interface HeroSectionProps {   
    title: string;
    content: string;
    buttonText: string;
    image: SingleMediaAttribute
}
const HeroSection: React.FC<HeroSectionProps> = ({title, content, buttonText, image}: HeroSectionProps) => {
    const router = useRouter();

    return (
        <motion.div className=" wrapper flex flex-wrap-reverse items-end justify-center md:flex-nowrap  ">
          <div className="mt-10 md:mt-0">
            <motion.button
              onClick={() => router.push("/work")}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={fadeInUp}
              className=" group flex w-[100%] items-center justify-between rounded-full bg-white px-9 py-4 text-black hover:bg-green-200 md:w-auto md:items-center md:gap-[10rem] md:px-8"
            >
              <p className="text-black">{buttonText}</p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.407 1.34254C13.407 0.928328 13.0712 0.592542 12.657 0.592542H5.90697C5.49276 0.592542 5.15697 0.928328 5.15697 1.34254C5.15697 1.75676 5.49276 2.09254 5.90697 2.09254L11.907 2.09254L11.907 8.09254C11.907 8.50676 12.2428 8.84254 12.657 8.84254C13.0712 8.84254 13.407 8.50676 13.407 8.09254V1.34254ZM1.87359 13.1866L13.1873 1.87287L12.1266 0.812212L0.812932 12.1259L1.87359 13.1866Z"
                  fill="black"
                />
              </svg>
            </motion.button>
            <motion.h1
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={fadeInUp}
              className="line mt-9  text-[2.4rem] font-bold leading-10 md:text-[4rem] md:leading-[4.15rem]"
            >
              {title}
            </motion.h1>
            <motion.p
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={fadeInUp}
              className="mt-5 max-w-[49ch]"
            >
              {content}
            </motion.p>
          </div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            variants={fadeInUp}
            className="overflow-hidden rounded-lg "
          >
            <Image priority={true} width={500} height={500} src={image.data.attributes.url} alt={title} />
          </motion.div>
        </motion.div>
    )
}

export {HeroSection};
export type {HeroSectionProps};