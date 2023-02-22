import { useScroll, motion } from "framer-motion";
import { ContactMe, StackPills } from "../../components";
import { ArticleProseClasses, client, FadeInUp, gql } from "../../data-providers";
import { Article } from "../../types";
import Image from "next/image";
import Head from "next/head";
import html from "remark-html";
import {remark} from 'remark';

interface BlogViewPageProps {
  article: Article;
}

const BlogViewPage = ({ article }: BlogViewPageProps) => {
  const {
    recommended_articles,
    stacks,
    title,
    seo,
    banner,
    createdAt,
    content,
  } = article;
  const { description, thumbnail, keywords } = seo;

  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <Head>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Aashan Ghimire" />
            <meta name="og:title" content={title} />
            <meta name="og:description" content={description} />
            <meta name="og:image" content={thumbnail.data.attributes.url} />
            <meta name="og:url" content={`https://aashan.dev/blogs/${article.slug}`} />
        </Head>
      <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />

      {/* this will show progress in blog */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-white"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="wrapper text-white">
        <div className="flex  flex-wrap justify-between gap-14  md:flex-nowrap">
          <div className=" ">
            {/* title */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={FadeInUp}
              className=" flex flex-wrap items-center gap-0 md:gap-6"
            >
              <h2 className="text-3xl font-semibold md:text-[2.5rem]">
                {title}
              </h2>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={FadeInUp}
              className="mt-8 flex flex-wrap items-center gap-8"
            >
              {/* time and date */}

              <p className=" text-sm text-gray-400">
                {new Date(createdAt).toDateString()} · 7 min read
              </p>
              {/* projecttags */}

              <StackPills stacks={stacks} />
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={FadeInUp}
              className="md:mt-16"
            >
              {banner.data && (
                <Image src={banner.data.attributes.url} width={1200} height={600} alt={banner.data.attributes.alternativeText} />
              )}

              <article className={ArticleProseClasses} dangerouslySetInnerHTML={{__html: content}}>

              </article>
            </motion.div>
          </div>

          {/* topic section */}
          <div className="    overscroll-none md:col-span-2  ">
            <div className=" sticky  top-10 ">
              <motion.h4
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={FadeInUp}
                className="text-xl "
              >
                Reccomended topic
              </motion.h4>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={FadeInUp}
                className=" mt-8  flex-wrap justify-start gap-y-1 md:flex  "
              >
                <StackPills stacks={stacks} />
              </motion.div>

              <hr className="my-8 opacity-20" />
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={FadeInUp}
              >
                <motion.h4
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={FadeInUp}
                  className="text-xl "
                >
                  Subscribe to my newsletter
                </motion.h4>
                <motion.p
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={FadeInUp}
                  className="mt-4 text-gray-300"
                >
                  You can also write your email and I will get to you{" "}
                </motion.p>

                <motion.form
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={FadeInUp}
                  action=""
                  className="mt-4 grid gap-4"
                >
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
                </motion.form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ContactMe />
    </motion.div>
  );
};

export default BlogViewPage;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const { data } = await client.query({
    query: gql`query {
            articles(filters:{ slug: {eq: "${id}"} }, pagination: {pageSize: 1, page: 1}) {
              data {
                attributes {
                  title,
                  slug,
                  content,
                  createdAt,
                  updatedAt,
                  publishedAt,
                  banner {
                    data {
                      attributes {
                        url,
                        height,
                        width,
                        alternativeText
                      }
                    }
                  },
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
                  },
                  seo {
                    description,
                    title,
                    keywords,
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
                  },
                  recommended_articles(pagination: {pageSize: 5}) {
                    data {
                      attributes {
                        title,
                        slug,
                        content,
                        banner {
                          data {
                            attributes {
                              url,
                              height,
                              width,
                              alternativeText
                            }
                          }
                        },
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
                        },
                        seo {
                          description,
                          title,
                          keywords,
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
                        },
                      }
                    }
                  }
                }
              }
            }
          }`,
  });

  if (!data.articles.data.length) {
    return {
      notFound: true,
    };
  }

  let post: Article = data.articles.data[0].attributes;
  const content = (await remark().use(html).process(post.content)).toString();

  return {
    props: {
      article: {...post, content: content},
    },
  };
};
