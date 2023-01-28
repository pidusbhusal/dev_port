import React from "react";
import {BlogCard, ContactUsBanner, CategoryPills, Category, Blog as BlogType} from '@app/components';



const blogs: Array<BlogType> = [
  {
    title: "Project title name would be here",
    content:
      "veryone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    image: "/blogimg.jpg",
    link: "#",
    time: "8min",
    categories: [{id: 1, title: "React"}, {id: 2, title: "Web Development"}, {id: 3, title: "Android"}],
  },
  {
    title: "Project title name would be here",
    content:
      "veryone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    image: "/blogimg.jpg",
    link: "#",
    time: "8min",
    categories: [{id: 1, title: "React"}, {id: 2, title: "Web Development"}, {id: 3, title: "Android"}],
  },
  {
    title: "Project title name would be here",
    content:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    image: "/blogimg.jpg",
    link: "#",
    time: "8min",
    categories: [{id: 1, title: "React"}, {id: 2, title: "Web Development"}, {id: 3, title: "Android"}],
  },
];

const recomendations: Array<Category> = [
  {title: "React", id: 1},
  {title: "Design", id: 2},
  {title: "Graph", id: 3},
  {title: "Web Design", id: 4},
  {title: "Web Developnment", id: 5},
  {title: "Android", id: 6},
  {title: "Backend", id: 7},
  {title: "Life Style", id: 8},
];

interface BlogPageProps {
  blogs: Array<BlogType>,
  recommendations: Array<Category>
}

export const BlogPage = ({blogs, recommendations}: BlogPageProps) => {
  return (
    <div>
      <div className="wrapper text-white">
        {/* heading */}
        <div className="heading mb-8 flex flex-wrap items-center justify-between gap-y-2 md:mb-4">
          <h2 className="text-3xl font-semibold md:text-[2.5rem]">BLOG </h2>
          <div className="flex items-center  gap-4 rounded-full border-[1px] border-solid border-[#585858] bg-[#353535] px-6  ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11.7659"
                cy="11.7659"
                r="8.98856"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0195 18.4844L21.5436 21.9992"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="search"
              className="border-none bg-transparent  py-2 outline-0  md:py-3"
            />
          </div>
        </div>

        {/* blog recomendation in mobile version */}
        <CategoryPills categories={recommendations} containerClassName="mt-8 block md:hidden" />
        {/* blogs */}
        <div className="flex flex-wrap justify-between md:mt-20">
          {/* blog section */}
          <div className="grid place-items-center  gap-6 md:gap-16">
            {blogs.map((blog, id) => {
              return (
                <BlogCard key={id} {...blog} />
              );
            })}
          </div>
          {/* topic section */}
          <div className=" hidden xl:block xl:w-64">
            <h4 className="text-xl xl:text-right">Reccomended topic</h4>
            <CategoryPills categories={recommendations} containerClassName="mt-8 hidden flex-wrap justify-end gap-y-1 md:flex" />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() { 
  return {
    props: {
      blogs,
      recommendations: recomendations
    }
  }
}
export default BlogPage;