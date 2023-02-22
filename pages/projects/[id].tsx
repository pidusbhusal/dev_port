import { motion, useScroll } from "framer-motion";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { remark } from "remark";
import { ContactMe, StackPills } from "../../components";
import { client, FadeInUp, gql, SlideInRight } from "../../data-providers";
import { Project } from "../../types";
import html from "remark-html";

interface ProjectDetailsPageProps {
    project: Project
}

const ProjectDetailPage = ({project}: ProjectDetailsPageProps) => {  
    const {title, link, seo} = project;
    const {description} = seo;
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Head>
            <title>{title}</title>
          </Head>
        <div className=" text-white">
          <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />
  
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 origin-left bg-white"
            style={{ scaleX: scrollYProgress }}
          />
  
          <div className="wrapper">
            {/* title */}
            <div className="mt-28 flex flex-wrap items-center gap-0 md:gap-6">
              <motion.h2 initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={FadeInUp} className="text-3xl font-semibold md:text-[2.5rem]">
                {title}
              </motion.h2>
            </div>
  
  
            {/* projecttags */}
  
            <div className="mt-4 flex row">
            {link && (
                <motion.button title="View project in a new tab" initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={FadeInUp} className="mr-5 first-letter flex  h-[45px] w-[45px] items-center justify-center rounded-full bg-white md:h-[52px] md:w-[52px]">
                <a href={link} rel="noreferrer" target="_blank">
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
              </motion.button>
              )}
            <motion.div initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={FadeInUp} className="mt-2">
              <StackPills stacks={project.stacks} />
            </motion.div>
            </div>
  
            {/* time and date */}
            <motion.p initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={FadeInUp} className="mt-4 text-sm text-gray-400">{new Date(project.createdAt).toDateString()} · 7 min read</motion.p>
  
            {/* description */}
  
            <motion.p initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={FadeInUp} className="mt-8 max-w-prose text-lg leading-[1.7] text-gray-300">
              {description}
            </motion.p>
          </div>
  
  
  
          {/* ss from the projects */}
  
          <motion.section initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={SlideInRight} className="h-[80vh]  mt-16  overflow-hidden bg-[#262626]">
  
  
            <div className="grid grid-col-1  md:grid-cols-5 gap-10">
  
  
              {project.gallery.data.map((image, index) => (
                <Image key={index} src={image.attributes.url} alt={title + ' gallery image'} height={500} width={700} className="even:pt-40  sticky odd:pb-40" />
              ))}              
  
            </div>
  
  
          </motion.section>
  
  
  
  
          {/* project attributes */}
  
          <div>
            <div className="wrapper">
              <div className="grid mt-16 mb-16 justify-around grid-cols-1 md:grid-cols-2 gap-y-10">
                <motion.div initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={FadeInUp}>
                  <h3 className="text-2xl font-semibold">Context</h3>
                  <p className="max-w-[44ch] mt-2 text-gray-300">{project.context}</p>
                </motion.div>
  
                <motion.div initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={FadeInUp}>
                  <h3 className="text-2xl font-semibold">Project Includes</h3>
                  <ul className="mt-2 text-gray-300">
                    {project.includes}
                  </ul>
                </motion.div>
                <motion.div initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={FadeInUp}>
                  <h3 className="text-2xl font-semibold">Objective</h3>
                  <p className="max-w-[44ch] mt-2 text-gray-300">{project.objectives}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
  
  
          {/* rich text */}
  
          <hr className="opacity-20" />
  
          <motion.div initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            variants={FadeInUp} >
            <div className="wrapper">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  {project.content_first}
                </div>
  
                <div>
                  {project.content_second}
                </div>
              </div>
  
  
            </div>
          </motion.div>
  
          <hr className="opacity-20" />
  
          {/* read more */}
  
          <div className="wrapper">
  
            <div>
              <div className="flex justify-between wrap">
                <motion.h2 initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0 }}
                  variants={FadeInUp} className="text-3xl font-semibold md:text-[2.5rem]">
                  OTHER PROJECTS
                </motion.h2>
                <div>
                  <motion.button initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0 }}
                    variants={FadeInUp} className="pbtn inline-block ">View all</motion.button>
                </div>
              </div>
              <div className=" mt-14 grid grid-cols-1 justify-start gap-x-11 sm:grid-cols-2">
                {/* {projects.map((project) => {
                  return (<Workcard
                    key={project.id}
                    projectlink={project.projectlink}
                    projecttitle={project.projecttitle}
                    projectdescription={project.projctdescription}
                    projectthumbnail={project.projectthumbnail}
                    catagories={project.categories}
                    projectcasestudy={project.projectcasestudy}
                  />)
                })} */}
              </div>
            </div>
  
  
          </div>
  
  
          {/* contactbanner */}
          <div className="mb-16">
            <ContactMe />
          </div>
  
  
        </div>
      </motion.div> 
    )
}

export default ProjectDetailPage;

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {id} = context.query;

    const {data} = await client.query({
        query: gql`query {
            projects(filters: {slug: {eq: "${id}"}}, pagination: {pageSize: 1}) {
              data {
                attributes {
                  name,
                  title,
                  publishedAt,
                  updatedAt,
                  createdAt,
                  link,
                  stacks {
                    data{
                      attributes {
                        title,
                        slug,
                        image {
                          data {
                            attributes {
                              url
                            }
                          }
                        }
                      }
                    }
                  },
                  gallery {
                    data {
                      attributes {
                        url,
                      }
                    }
                  },
                  context,
                  objectives,
                  content_first,
                  content_second,
                  seo {
                    title,
                    description
                    keywords,
                    thumbnail {
                      data {
                        attributes {
                          url,
                          alternativeText
                        }
                      }
                    }
                  }
                  recommended_articles {
                    data {
                      attributes {
                        title,
                        content,
                        seo {
                          thumbnail {
                            data {
                              attributes {
                                url
                              }
                            }
                          },
                          title,
                        }
                      }
                    }
                  }
                }
              }
            }
          }`
    });

    if (data.projects.data.length === 0) {
        return {
            notFound: true
        }
     }
    const project: Project = data.projects.data[0].attributes;
    const [projectContext, objectives,
    content_first, content_second] = await Promise.allSettled([
      remark().use(html).process(project.context),
      remark().use(html).process(project.objectives),
      remark().use(html).process(project.content_first),
      remark().use(html).process(project.content_second)
    ]).then((data) => data.map((item) => {
      if (item.status === 'fulfilled') {
        return item.value.toString();
      }
      return '';
    }));

    console.log(projectContext, objectives, content_first, content_second);
    
    return {
        props: {
            project: {
              ...project,
              context: projectContext,
              objectives,
              content_first,
              content_second
            }
        }
    }
}
