import { client, gql } from "../data-providers";
import { HomePageData, WorkExperience } from "../types";
import {motion} from 'framer-motion';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { HeroSection, FeaturedWorksSection, WorkExperienceSection} from "../components/sections/homepage";
import { TestimonialsSection } from "../components/sections/testimonials";
import { ContactMe, SEO } from "../components";

const workexpes: Array<WorkExperience> = [
  {
    id: 1,
    work: "Mobile Application Developer",
    employer: "Mirror Grid Pvt.Ltd",
    workgap: "mt-[0%] xl:ml-[0]",
    timeline: "h-[21%] xl:w-[21%] xl:h-[0%] xl:p-4",
    casestudy: "/project1",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
  },

  {
    id: 2,
    work: "PHP Developer",
    employer: "Inititaive Nepal",
    workgap: "mt-[7%] xl:ml-[29%] xl:mt-2",
    timeline: "h-[9%] xl:w-[9%] xl:h-[0%] xl:p-4",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
  },
  {
    id: 3,
    work: "Software Engineer",
    employer: "Java Software",
    workgap: "mt-[6%] xl:ml-[44%] xl:mt-2",
    timeline: "h-[10%] xl:w-[10%] xl:h-[0%] xl:p-4 ",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
  },
  {
    id: 4,
    work: "Software Engineer",
    employer: "Sastodeal",
    workgap: "mt-[3%] xl:ml-[57%] xl:mt-2",
    timeline: "h-[23%] xl:w-[23%] xl:h-[0%] xl:p-4 ",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
  },
  {
    id: 5,
    work: "Software Engineer",
    employer: "Freelancing",
    workgap: "mt-[2%] xl:ml-[82%] xl:mt-2",
    timeline: "h-[21%] xl:w-[21%] xl:h-[0%] xl:p-4",
    desciption:
      "Developed numerous freelance projects consisting of work  in Magento 2 module development, Magento 2 theme development, Mobile Application development in React Native and Ionic Framework and LAMP stack.",
    skills: [
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
      "test",
    ],
    isLast: true,
  },
];
const HomePage = (props: HomePageData) => {

  const {hero, projects, blogs, testimonials, seo} = props.data.homePage.data.attributes;

  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>

      <SEO {...seo}/>
      <main className="py-20 text-white overflow-x-hidden">
        <div className="absolute left-[-77px] top-[-190px] z-50 h-[324px] w-[195px] bg-[#779283]   opacity-0 blur-3xl md:opacity-25 " />
        <HeroSection {...hero} />

        <FeaturedWorksSection projects={projects} />

        <WorkExperienceSection experiences={workexpes} />

        <TestimonialsSection testimonials={testimonials} companies={{data: []}} />

        <div className="contactus pt-16 ">
          <ContactMe />
        </div>
      </main>

    </motion.div>
  )
}

export default HomePage;

export async function getServerSideProps() {
  const homePageData: HomePageData = await client.query({
    query: gql`query {
      homePage {
       data {
         attributes {
           hero {
             title,
             content,
             buttonText,
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
           projects(pagination: {pageSize: 2}) {
               data {
                 attributes {
                   name,
                   title,
                   slug,
                   seo {
                     description
                   }
                   stacks {
                     data {
                       attributes {
                         title,
                         slug,
                         image {
                           data {
                             attributes {
                               url, 
                               height, width
                             }
                           }
                         }
                       }
                     }
                   }
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
               }
             }
           testimonials(pagination: {pageSize: 10}) {
             data {
               attributes {
                 title,
                 name,
                 position,
                 company,
                 testimonial,
                 avatar {
                   data {
                     attributes {
                       url,
                       width,
                       height
                     }
                   }
                 }
               }
             }
           }
           blogs(pagination: {pageSize: 3}) {
             data {
               attributes {
                 title,
                 createdAt,
                 updatedAt,
                 stacks {
                   data {
                     attributes {
                       title,
                       image {
                         data {
                           attributes {
                             height,
                             width,
                             url
                           }
                         }
                       }
                     }
                   }
                 }
                 seo {
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
                   keywords,
                   description,
                   title
                 }
               }
             }
           }
          seo {
            title,
            description,
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
          }
         }
       }
     }
    }`
  });
  return {
    props: {
      ...homePageData
    }
  }
}