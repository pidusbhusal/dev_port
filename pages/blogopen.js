import React from "react";
const projecttags = ["react", "backend", "nextjs", "fullstack"];
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

import Blogcard from "../components/Blogcard";

function blogopen() {
  return (
    <div>
      <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

      <div className="wrapper text-white">
        <div className="flex grid-cols-5 justify-between gap-16">
          <div className="col-span-3">
            {/* title */}
            <div className=" flex flex-wrap items-center gap-0 md:gap-6">
              <h2 className="text-3xl font-semibold md:text-[2.5rem]">
                NAME OF THE BLOGS
              </h2>
            </div>
            <div className="mt-8 flex items-center gap-8">
              {/* time and date */}

              <p className=" text-sm text-gray-400">
                Oct 24, 2022 · 7 min read
              </p>
              {/* projecttags */}

              <div className="">
                {projecttags &&
                  projecttags.map((projecttag) => {
                    return <Catagorypills catagory={projecttag} />;
                  })}
              </div>
            </div>

            {/* rich text */}
            <hr className=" opacity-20 md:mt-16" />

            <div className="md:mt-16">
              <img src="blogtumbnail.png" alt="" />
              Deciding on a JavaScript framework for your web application can be
              overwhelming. Angular and React are very popular these days, and
              there is an upstart which has been getting a lot of traction
              lately: VueJS. What’s more, these are just a few of the new kids
              on the block.
              <br className="mt-4" />
              Deciding on a JavaScript framework for your web application can be
              overwhelming. Angular and React are very popular these days, and
              there is an upstart which has been getting a lot of traction
              lately: VueJS. What’s more, these are just a few of the new kids
              on the block.
              <br className="mt-4" />
              Deciding on a JavaScript framework for your web application can be
              overwhelming. Angular and React are very popular these days, and
              there is an upstart which has been getting a lot of traction
              lately: VueJS. What’s more, these are just a few of the new kids
              on the block.
              <br className="mt-4" />
              Deciding on a JavaScript framework for your web application can be
              overwhelming. Angular and React are very popular these days, and
              there is an upstart which has been getting a lot of traction
              lately: VueJS. What’s more, these are just a few of the new kids
              on the block.
            </div>
          </div>

          {/* topic section */}
          <div className="sticky top-0  col-span-2">
            <div className=" hidden xl:block ">
              <h4 className="text-xl ">Reccomended topic</h4>
              <div className=" mt-8 hidden flex-wrap justify-start gap-y-1 md:flex  ">
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
    </div>
  );
}

export default blogopen;
