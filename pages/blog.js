import React from "react";
import Blogcard from "../components/Blogcard";
import ContactusBanner from "../components/ContactusBanner";
import Catagorypills from "../components/Catagorypills";

const blogs = [
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "#",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "#",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "#",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
];

const blogrecomendations = [
  "React",
  "Design",
  "Graph",
  "Web Design",
  "Web Developnment",
  "Android",
  "Backend",
  "Life Style",
];

function blog() {
  return (
    <div>
      <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

      <div className="wrapper text-white">
        {/* heading */}
        <div className="heading mb-8 mt-4 flex flex-wrap items-center justify-between gap-y-2 md:mb-4">
          <h2 className="text-3xl font-semibold md:text-[2.5rem]">BLOG </h2>
          <div className="flex w-full items-center  gap-4 rounded-full border-[0px] border-solid border-[#585858] bg-[#353535] md:w-fit  ">
            <svg
              className="ml-4"
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
              className="w-full border-none  bg-transparent py-2  outline-0 md:py-3"
            />
          </div>
        </div>

        {/* blog recomendation in mobile version */}
        <div className="mt-8 block md:hidden">
          {blogrecomendations.map((catagory) => {
            return <Catagorypills catagory={catagory} />;
          })}
        </div>
        {/* blogs */}
        <div className="flex flex-wrap justify-between md:mt-20">
          {/* blog section */}
          <div className="my-16 grid  place-items-center gap-6 md:gap-16">
            {blogs.map((blog) => {
              return (
                <Blogcard
                  blogcontent={blog.blogcontent}
                  blogimg={blog.blogimage}
                  blogtitle={blog.blogtitle}
                  bloglink={blog.bloglink}
                  catagories={blog.blogtags}
                  blogtime={blog.blogtime}
                />
              );
            })}
          </div>
          {/* topic section */}
          <div className=" hidden xl:block xl:w-64">
            <h4 className="text-xl xl:text-right">Reccomended topic</h4>
            <div className=" mt-8 hidden flex-wrap justify-end gap-y-1 md:flex  ">
              {blogrecomendations.map((blogrecomendation) => {
                return <Catagorypills catagory={blogrecomendation} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <ContactusBanner />
    </div>
  );
}

export default blog;
