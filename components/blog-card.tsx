import Link from "next/link";
import Image from "next/image";
import { CategoryPills } from "./category-pills";

export interface Blog {
  title: string;
  content: string;
  image: string;
  categories: Array<{ title: string; id: number }>;
  link: string;
  time: string;
}

export const BlogCard = ({
  title,
  content,
  image,
  categories,
  link,
  time,
}: Blog) => {
  return (
    <div className="  border-b-[0.5px] border-gray-700 pb-6  md:pb-16 ">
      <div className="hidden items-center  gap-2 sm:flex md:gap-10">
        <Link href={link}>
          <Image width={100} height={20} src={image} alt="" className="max-h-40" />
        </Link>
        <Link href={link}>
          <h3 className=" text-2xl  font-semibold">{title}</h3>
          <p className="text-overflow-ellipsis mt-2 hidden max-w-[60ch] overflow-hidden text-gray-400  sm:line-clamp-3 ">
            {content}
          </p>
          <div className="mt-4 flex  items-center gap-4">
            <CategoryPills
              containerClassName="variation overflow-hidden line-clamp-1"
              categories={categories}
            />
            ·<p className="text-gray-400">{time}</p>
          </div>
        </Link>
      </div>
      <div className="block   sm:hidden">
        <div className="flex items-center gap-2 md:gap-10">
          <Link href={link}>
            <Image width={100} height={20} src="/blogimg.jpg" alt="" className="max-h-40" />
          </Link>
          <Link href={link}>
            <h3 className=" text-2xl  font-semibold">{title}</h3>
            <p className="text-overflow-ellipsis mt-2 hidden max-w-[60ch] overflow-hidden text-gray-400  sm:line-clamp-3 ">
              {content}
            </p>
          </Link>
        </div>
        <div className="mt-4 flex  items-center gap-4">
          <CategoryPills categories={categories} containerClassName={'variation overflow-hidden line-clamp-1'} />
          ·<p className="text-gray-400">{time}</p>
        </div>
      </div>
    </div>
  );
};
