import React from "react";
import { motion } from "framer-motion";
import { BlogCard, ContactMe, StackPills } from "../../components";
import { client, gql } from "../../data-providers";
import { Article, AttributeCollection, Stack } from "../../types";

interface BlogPageProps {
  blogs: AttributeCollection<Article>;
  stacks: AttributeCollection<Stack>;
}

const BlogPage = ({blogs, stacks}: BlogPageProps) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

      <div className="wrapper text-white">
        {/* blogs */}
        <div className="  flex flex-wrap justify-between ">
          {/* blog section */}
          <div className=" grid gap-6 md:gap-16">
            {/* heading */}
            <h2 className="text-3xl font-semibold md:text-[2.5rem] xl:mb-4 ">
              BLOG
            </h2>

            {/* search bar which will apear on mobile */}
            <div className="gap flex w-full  items-center gap-4 rounded-full bg-[#353535] xl:hidden">
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
            <StackPills stacks={stacks} containerClassName="flex w-full overflow-hidden xl:hidden" />

            {blogs.data.map((blog, i) => {
              return (
                <BlogCard
                  {...blog.attributes}
                  key={i}
                />
              );
            })}
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
              <h4 className="text-xl xl:text-left">Recomended topic</h4>
              <StackPills stacks={stacks} containerClassName="mt-8 hidden flex-wrap justify-start gap-y-1 md:flex" />
              
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
  )
}

export default BlogPage;

export const getServerSideProps = async (context) => {

  const {page = 1} = context.query;

  const {data} = await client.query({
    query: gql`query {
      articles(pagination: {pageSize: 10, page: ${page}}, sort: "createdAt:desc") {
        data {
          attributes {
            title,
            content,
            slug,
            createdAt,
            updatedAt,
            publishedAt,
            stacks {
              data {
                attributes {
                  title,
                  slug,
                  image {
                    data {
                      attributes {
                        url,
                        height,
                        width,
                        alternativeText
                      }
                    }
                  }
                }
              }
            }
            seo {
              title,
              keywords,
              description,
              thumbnail {
                data {
                  attributes {
                    url,
                    height,
                    width,
                    alternativeText
                  }
                }
              }
            }
            banner {
              data {
                attributes {
                  url,
                  height,
                  width,
                  alternativeText
                }
              }
            }
          }
        }
      }
      stacks(pagination: {pageSize: 10}) {
        data {
          attributes {
            title,
            slug
          }
        }
      }
    }`
  });
  return {
    props: {
      blogs: data.articles,
      stacks: data.stacks
    }
  }
}