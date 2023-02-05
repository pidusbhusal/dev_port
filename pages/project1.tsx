import React from "react";
import Catagorypills from "../components/Catagorypills";
import Workcard from "../components/Workcard";
import ContactusBanner from "../components/ContactusBanner"
import {
  motion,
  useScroll,
} from "framer-motion";

const projects = [
  {
    id: 1,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
    projectcasestudy: "/project1",
    projectlink: "google.com"
  },
  {
    id: 2,
    projecttitle: "Poroject tite would be here",
    projctdescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    catagories: ["React", "Android", "Typescript", "handsome"],
    projectthumbnail: "workimage.jpg",
    projectlink: "google.com"
  },
];



const projectincludes = ["Concept Design", "Final Design", "Design Prototypem", "Design Presentation"]

const projecttags = ["react", "backend", "nextjs", "fullstack"];

function project1() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className=" text-white">
        <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 origin-left bg-white"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="wrapper">
          {/* title */}
          <div className="mt-28 flex flex-wrap items-center gap-0 md:gap-6">
            <h2 className="text-3xl font-semibold md:text-[2.5rem]">
              NAME OF THE PROJEECT
            </h2>
            <button className=" first-letter flex  h-[45px] w-[45px] items-center justify-center rounded-full bg-white md:h-[52px] md:w-[52px]">
              <a href="#">
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
          </div>

          {/* role */}
          <p className="mt-1 text-lg">Backend Developer</p>

          {/* projecttags */}

          <div className="mt-2">
            {projecttags &&
              projecttags.map((projecttag, i) => {
                return <Catagorypills key={i} catagory={projecttag} />;
              })}
          </div>

          {/* time and date */}
          <p className="mt-4 text-sm text-gray-400">Oct 24, 2022 · 7 min read</p>

          {/* description */}

          <p className="mt-8 max-w-prose text-lg leading-[1.7] text-gray-300">
            Deciding on a JavaScript framework for your web application can be
            overwhelming. Angular and React are very popular these days, and there
            is an upstart which has been getting a lot of traction lately: VueJS.
            What’s more, these are just a few of the new kids on the block.
          </p>
        </div>



        {/* ss from the projects */}

        <section className="h-[80vh]  mt-16  overflow-hidden bg-[#262626]">


          <div className="grid grid-col-1  md:grid-cols-5 gap-10">


            <img src="projectss.png" alt="" width="100%" className="even:pt-40  sticky odd:pb-40" />
            <img src="projectss.png" alt="" width="100%" className="even:pt-40  sticky odd:pb-40" />
            <img src="projectss.png" alt="" width="100%" className="even:pt-40  sticky odd:pb-40" />
            <img src="projectss.png" alt="" width="100%" className="even:pt-40  sticky odd:pb-40" />
            <img src="projectss.png" alt="" width="100%" className="even:pt-40  sticky odd:pb-40" />

          </div>


        </section>




        {/* project attributes */}

        <div>
          <div className="wrapper">

            <div className="grid mt-16 mb-16 justify-around grid-cols-1 md:grid-cols-2 gap-y-10">
              <div>
                <h3 className="text-2xl font-semibold">Context</h3>
                <p className="max-w-[44ch] mt-2 text-gray-300">To design a fresh application experience with a high emphasis on user interactivity and visual content in a functional yet innovative design while also introducing new functionally.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Project Includes</h3>
                <ul className="mt-2 text-gray-300">
                  {projectincludes.map((projectinclude, i) => { return (<li key={i}>{projectinclude}</li>) })}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Objective</h3>
                <p className="max-w-[44ch] mt-2 text-gray-300">To design a fresh application experience with a high emphasis on user interactivity and visual content in a functional yet innovative design while also introducing new functionally.
                </p>
              </div>
            </div>





          </div>
        </div>


        {/* rich text */}

        <hr className="opacity-20" />

        <div>
          <div className="wrapper">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h1 className="text-4xl text-semibold first-letter:">Egestas sed sed risus pretium quam vulputate digniss</h1>
                <p className="mt-4 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Pharetra convallis posuere morbi leo urna. Ac turpis egestas maecenas pharetra convallis posuere morbi. Curabitur vitae nunc sed velit dignissim. A cras semper auctor neque vitae tempus quam pellentesque nec. Quis vel eros donec ac odio tempor orci dapibus. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nibh sit amet commodo nulla facilisi nullam vehicula. Elit at imperdiet dui accumsan sit amet nulla facilisi. Id semper risus in</p>
                <p className="mt-4 text-gray-300">Deciding on a JavaScript framework for your web application can be overwhelming. Angular and React are very popular these days, and there is an upstart which has been getting a lot of traction lately: VueJS. What’s more, these are just a few of the new kids on the block.</p>
                <p className="mt-4 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Pharetra convallis posuere morbi leo urna. Ac turpis egestas maecenas pharetra convallis posuere morbi. Curabitur vitae nunc sed velit dignissim. A cras semper auctor neque vitae tempus quam pellentesque nec. Quis vel eros donec ac odio tempor orci dapibus. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nibh sit amet commodo nulla facilisi nullam vehicula. Elit at imperdiet dui accumsan sit amet nulla facilisi. Id semper risus in</p>
              </div>

              <div>
                <h1 className="text-4xl text-semibold first-letter:">Egestas sed sed risus pretium quam vulputate digniss</h1>
                <p className="mt-4 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Pharetra convallis posuere morbi leo urna. Ac turpis egestas maecenas pharetra convallis posuere morbi. Curabitur vitae nunc sed velit dignissim. A cras semper auctor neque vitae tempus quam pellentesque nec. Quis vel eros donec ac odio tempor orci dapibus. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nibh sit amet commodo nulla facilisi nullam vehicula. Elit at imperdiet dui accumsan sit amet nulla facilisi. Id semper risus in</p>
                <p className="mt-4 text-gray-300">Deciding on a JavaScript framework for your web application can be overwhelming. Angular and React are very popular these days, and there is an upstart which has been getting a lot of traction lately: VueJS. What’s more, these are just a few of the new kids on the block.</p>
                <p className="mt-4 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Pharetra convallis posuere morbi leo urna. Ac turpis egestas maecenas pharetra convallis posuere morbi. Curabitur vitae nunc sed velit dignissim. A cras semper auctor neque vitae tempus quam pellentesque nec. Quis vel eros donec ac odio tempor orci dapibus. Ornare massa eget egestas purus viverra accumsan in nisl nisi. Nibh sit amet commodo nulla facilisi nullam vehicula. Elit at imperdiet dui accumsan sit amet nulla facilisi. Id semper risus in</p>
              </div>
            </div>


          </div>
        </div>

        <hr className="opacity-20" />

        {/* read more */}

        <div className="wrapper">

          <div>
            <div className="flex justify-between wrap">
              <h2 className="text-3xl font-semibold md:text-[2.5rem]">
                OTHER PROJECTS
              </h2>
              <div>
                <button className="pbtn inline-block ">View all</button>
              </div>
            </div>
            <div className=" mt-14 grid grid-cols-1 justify-start gap-x-11 sm:grid-cols-2">
              {projects.map((project) => {
                return (<Workcard
                  key={project.id}
                  projectlink={project.projectlink}
                  projecttitle={project.projecttitle}
                  projectdescription={project.projctdescription}
                  projectthumbnail={project.projectthumbnail}
                  catagories={project.catagories}
                  projectcasestudy={project.projectcasestudy}
                />)
              })}
            </div>
          </div>


        </div>


        {/* contactbanner */}
        <div className="mb-16">
          <ContactusBanner />
        </div>


      </div>
    </motion.div>
  );
}

export default project1;
