import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {Article} from '../types';
import Image from "next/image";
import { StackPills } from "./stack-pills";

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

interface BlogcardProps extends Article {}

export const BlogCard: React.FC<BlogcardProps> = ({
    title,
    content,
    seo,
    stacks,
    slug,
    createdAt
}: BlogcardProps) => {
    const link = `/blogs/${slug}`;
    const {thumbnail} = seo;

    return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={cardVariants}
      className="  border-b-[0.5px] border-gray-700 pb-6  md:pb-16 "
    >
      <div className="hidden items-center  gap-2 sm:flex md:gap-10">
        <Link href={link}>
            <Image src={thumbnail.data.attributes.url} height={200} width={200} className="max-h-40" alt={title} />
        </Link>
        <Link href={link}>
          <h3 className=" text-2xl font-semibold">{title}</h3>
          <p className="text-overflow-ellipsis mt-2 hidden max-w-[60ch] overflow-hidden text-gray-400  sm:line-clamp-3 ">
            {content}
          </p>
          <div className="mt-4 flex  items-center gap-4">
            <StackPills containerClassName="variation overflow-hidden line-clamp-1" stacks={stacks} />
            ·<p className="text-gray-400">{new Date(createdAt).toDateString()}</p>
          </div>
        </Link>
      </div>
      <div className="block   sm:hidden">
        <div className="flex items-center gap-2 md:gap-10">
          <Link href={link}>
            <Image height={400} width={400} src={thumbnail.data.attributes.url} alt={title} className="max-h-40" />
          </Link>
          <Link href={link}>
            <h3 className=" text-2xl  font-semibold">{title}</h3>
            <p className="text-overflow-ellipsis mt-2 hidden max-w-[60ch] overflow-hidden text-gray-400  sm:line-clamp-3 ">
              {content}
            </p>
          </Link>
        </div>
        <div className="mt-4 flex  items-center gap-4">
          <StackPills containerClassName="variation overflow-hidden line-clamp-1" stacks={stacks} />
          ·<p className="text-gray-400">{new Date(createdAt).toDateString()}</p>
        </div>
      </div>
    </motion.div>
    )
}


