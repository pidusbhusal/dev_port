import React from "react";
import Blogcard from "../components/Blogcard";
import ContactusBanner from "../components/ContactusBanner";
import Catagorypills from "../components/Catagorypills";
import ScrollableTitles from "../components/scrollableTitles";
const blogs = [
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "/blogopen",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "/blogopen",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "/blogopen",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "/blogopen",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "/blogopen",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "/blogopen",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "/blogopen",
    blogtime: "8min",
    blogtags: ["React", "Android", "Web Development"],
  },
  {
    blogtitle: "Project title name would be here",
    blogcontent:
      "Everyone wants to know what UX is nowadays, but can a course help you become a designer? The following are my thoughts after taking the Google UX Design course a year ago. As we begin this experience, let’s",
    blogimage: "blogimg.jpg",
    bloglink: "/blogopen",
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
];

function blog() {
  return (
    <div>
      <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

      <div className="wrapper text-white">
        {/* blogs */}
        <div className="  flex flex-wrap justify-between ">
          {/* blog section */}
          <div className=" grid   gap-6 md:gap-16">
            {/* heading */}
            <h2 className="text-3xl font-semibold md:text-[2.5rem] xl:mb-4 ">
              BLOG
            </h2>

            {/* search bar which will apear on mobile */}
            <div className="gap flex w-full  items-center  gap-4 rounded-full bg-[#353535] xl:hidden">
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
                className="w-full border-none  bg-transparent py-2 outline-0  md:py-3"
              />
            </div>

            {/* blog recomendation in mobile version */}
            <div className="flex w-full overflow-hidden xl:hidden">
              <ScrollableTitles />
            </div>

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
          {/* side bar*/}
          <div className="   hidden xl:block xl:w-64">
            <div className="sticky top-10">
              <div className=" mb-16 flex w-full items-center  gap-4 rounded-full border-[0px] border-solid border-[#585858] bg-[#353535] md:w-fit  ">
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
                  className="w-full border-none bg-transparent py-2  outline-0 md:py-3"
                />
              </div>
              <h4 className="text-xl xl:text-left">Reccomended topic</h4>
              <div className="    mt-8 hidden flex-wrap justify-start gap-y-1 md:flex  ">
                {blogrecomendations.map((blogrecomendation) => {
                  return <Catagorypills catagory={blogrecomendation} />;
                })}
              </div>
              <hr className="my-16 opacity-20" />
              <div>
                <h4 className="text-xl ">Subscribe to my newsletter</h4>
                <p className="mt-4 text-gray-300">
                  You can also write your email and I will get to you{" "}
                </p>

                <form action="" className="mt-4 grid gap-4">
                  <div className="flex flex-col">
                    <label className="mb-2 text-gray-300">Email*</label>
                    <input
                      required
                      type="text"
                      placeholder="ex. example@gmail.com"
                      className="focused max-w-xs rounded bg-[#353535] px-4 py-3 outline-none "
                    />
                  </div>

                  <div className="mt-2">
                    <input
                      type="submit"
                      className="pbtn inline-block w-full lg:w-max"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactusBanner />
    </div>
  );
}

export default blog;
