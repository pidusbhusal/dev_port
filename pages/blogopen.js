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
import ContactusBanner from "../components/ContactusBanner";

function blogopen() {
  return (
    <div>
      <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

      <div className="wrapper text-white">
        <div className="flex  flex-wrap justify-between gap-16  md:flex-nowrap">
          <div className=" ">
            {/* title */}
            <div className=" flex flex-wrap items-center gap-0 md:gap-6">
              <h2 className="text-3xl font-semibold md:text-[2.5rem]">
                NAME OF THE BLOGS
              </h2>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-8">
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
            <hr className=" mt-8 opacity-20 md:mt-16" />

            <div className="md:mt-16">
              <p className="mt-8 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block. Years ago, I (Marc) was a clinical intern at a
                large urban hospital, working under an extremely critical and
                generally unpleasant supervisor. She was the kind of person who
                complained incessantly, picking holes in even the most solid of
                efforts — be they of good will, or working hard to complete a
                tough case analysis on time. In my many months working with her,
                I don’t believe I saw her smile once. I was fascinated by the
                work but dreaded going in each day. In the end, I had to leave
                the internship. Looking back, my supervisor’s negativity — and
                the way I felt in her presence — cast a shadow over the entire
                experience. But even more remarkable than a dour and critical
                supervisor in a psychiatric treatment center is the fact when I
                told the story to Robin, she realized that she had encountered
                that same supervisor nearly two decades earlier! I (Robin) would
                not have remembered her name, but listening to the way Marc felt
                around her, I recognized her immediately. In my case, I was
                fortunate to have other supervisors who were more actively
                involved in my internship. But when I think back, her
                unpleasantness and negativity colored the day each time I met
                with her.
              </p>
              <p className="mt-8 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block. Years ago, I (Marc) was a clinical intern at a
                large urban hospital, working under an extremely critical and
                generally unpleasant supervisor. She was the kind of person who
                complained incessantly, picking holes in even the most solid of
                efforts — be they of good will, or working hard to complete a
                tough case analysis on time. In my many months working with her,
                I don’t believe I saw her smile once. I was fascinated by the
                work but dreaded going in each day. In the end, I had to leave
                the internship. Looking back, my supervisor’s negativity — and
                the way I felt in her presence — cast a shadow over the entire
                experience. But even more remarkable than a dour and critical
                supervisor in a psychiatric treatment center is the fact when I
                told the story to Robin, she realized that she had encountered
                that same supervisor nearly two decades earlier! I (Robin) would
                not have remembered her name, but listening to the way Marc felt
                around her, I recognized her immediately. In my case, I was
                fortunate to have other supervisors who were more actively
                involved in my internship. But when I think back, her
                unpleasantness and negativity colored the day each time I met
                with her.
              </p>
              <p className="mt-8 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block. Years ago, I (Marc) was a clinical intern at a
                large urban hospital, working under an extremely critical and
                generally unpleasant supervisor. She was the kind of person who
                complained incessantly, picking holes in even the most solid of
                efforts — be they of good will, or working hard to complete a
                tough case analysis on time. In my many months working with her,
                I don’t believe I saw her smile once. I was fascinated by the
                work but dreaded going in each day. In the end, I had to leave
                the internship. Looking back, my supervisor’s negativity — and
                the way I felt in her presence — cast a shadow over the entire
                experience. But even more remarkable than a dour and critical
                supervisor in a psychiatric treatment center is the fact when I
                told the story to Robin, she realized that she had encountered
                that same supervisor nearly two decades earlier! I (Robin) would
                not have remembered her name, but listening to the way Marc felt
                around her, I recognized her immediately. In my case, I was
                fortunate to have other supervisors who were more actively
                involved in my internship. But when I think back, her
                unpleasantness and negativity colored the day each time I met
                with her.
              </p>
              <p className="mt-8 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block. Years ago, I (Marc) was a clinical intern at a
                large urban hospital, working under an extremely critical and
                generally unpleasant supervisor. She was the kind of person who
                complained incessantly, picking holes in even the most solid of
                efforts — be they of good will, or working hard to complete a
                tough case analysis on time. In my many months working with her,
                I don’t believe I saw her smile once. I was fascinated by the
                work but dreaded going in each day. In the end, I had to leave
                the internship. Looking back, my supervisor’s negativity — and
                the way I felt in her presence — cast a shadow over the entire
                experience. But even more remarkable than a dour and critical
                supervisor in a psychiatric treatment center is the fact when I
                told the story to Robin, she realized that she had encountered
                that same supervisor nearly two decades earlier! I (Robin) would
                not have remembered her name, but listening to the way Marc felt
                around her, I recognized her immediately. In my case, I was
                fortunate to have other supervisors who were more actively
                involved in my internship. But when I think back, her
                unpleasantness and negativity colored the day each time I met
                with her.
              </p>
              <img src="blogtumbnail.png" alt="" className="mt-8" />
              <h3 className="mt-8 text-2xl font-semibold">Context</h3>
              <p className="mt-4 text-gray-300">
                Deciding on a JavaScript framework for your web application can
                be overwhelming. Angular and React are very popular these days,
                and there is an upstart which has been getting a lot of traction
                lately: VueJS. What’s more, these are just a few of the new kids
                on the block.
              </p>
            </div>
          </div>

          {/* topic section */}
          <div className="    overscroll-none   px-4  md:col-span-2  ">
            <div className=" sticky  top-10 ">
              <h4 className="text-xl ">Reccomended topic</h4>
              <div className=" mt-8  flex-wrap justify-start gap-y-1 md:flex  ">
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

export default blogopen;
