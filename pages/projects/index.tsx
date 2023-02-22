import { motion } from "framer-motion";
import Head from "next/head";
import { ContactMe, StackPills } from "../../components";
import { WorkCard } from "../../components/work-card";
import { client, gql } from "../../data-providers";
import { AttributeCollection, Project, Stack } from "../../types";

interface ProjectPageProps {
  projects: AttributeCollection<Project>;
  pagination: {
    page: number;
    total: number;
    pageSize: number;
    pageCount: number;
  };
  stacks: AttributeCollection<Stack>;
}

const ProjectPage = ({ projects, pagination, stacks }: ProjectPageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <Head>
            <title>Projects</title>
        </Head>
      <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

      <div className="wrapper text-white">
        {/* blogs */}
        <div className="  flex flex-wrap justify-between ">
          {/* blog section */}
          <div className=" grid   gap-6 md:gap-16">
            {/* heading */}
            <h2 className="text-3xl font-semibold md:text-[2.5rem] xl:mb-4 ">
              Projects
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.0195 18.4844L21.5436 21.9992"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                placeholder="search"
                className="w-full border-none  bg-transparent py-2 outline-0  md:py-3"
              />
            </div>

            {/* blog recomendation in mobile version */}
            <StackPills stacks={stacks} containerClassName="flex w-full overflow-hidden xl:hidden"/>

            <div className="grid grid-cols-2 gap-4">
              {projects.data.map((project, i) => {
                return <WorkCard key={i} project={project.attributes} />;
              })}
            </div>
          </div>
          {/* side bar*/}
          <div className="hidden xl:block xl:w-64">
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.0195 18.4844L21.5436 21.9992"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="search"
                  className="w-full border-none bg-transparent py-2  outline-0 md:py-3"
                />
              </div>
              <h4 className="text-xl xl:text-left">Reccomended topic</h4>
              <StackPills
                stacks={stacks}
                containerClassName="mt-8 hidden flex-wrap justify-start gap-y-1 md:flex"
              />
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

        <div className="mt-16 xl:hidden">
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
                className="pbtn inline-block w-full  lg:w-max"
              />
            </div>
          </form>
        </div>
      </div>

      <ContactMe />
    </motion.div>
  );
};

export default ProjectPage;

export const getServerSideProps = async (context) => {
  const { page = 1 } = context.query;

  const {data} = await client.query({
    query: gql`query {
            projects (pagination: {pageSize: 10, page: ${page}}, sort:  "createdAt:desc") {
              meta {
                pagination {
                  page,
                  total,
                  pageCount,
                  pageSize
                }
              }
              data{
                attributes {
                  title,
                  name,
                  slug,
                  link,
                  stacks {
                    data {
                        attributes {
                          title,
                          slug
                        }
                      }
                  },
                  thumbnail {
                    data {
                      attributes {
                        url,
                        height,
                        width,
                        alternativeText
                      }
                    }
                  },
                  seo {
                    description,
                    title,
                    keywords,
                  }
                  createdAt,
                  updatedAt,
                  publishedAt,
                }
              }
            },
            stacks {
              data {
                attributes {
                  title,
                  slug
                }
              }
            }
          }`,
  });

  return {
    props: {
      projects: data.projects,
      pagination: data.projects.meta.pagination,
      stacks: data.stacks,
    },
  };
};
