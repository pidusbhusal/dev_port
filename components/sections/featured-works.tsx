import { useRouter } from "next/router";
import { AttributeCollection, Project } from "../../types";
import { WorkCard } from "../work-card";

interface FeaturedWorksSectionProps {
    projects: AttributeCollection<Project>
}

const FeaturedWorksSection = ({projects}: FeaturedWorksSectionProps) => {

    const {data} = projects;
    const router = useRouter();
    return (
        <div className="home-work py-20 md:mt-3 md:pt-40 md:pb-20 ">
          <div className="wrapper">
            <div className="item-center flex items-center justify-between">
              <h2 className="text-3xl font-semibold md:text-[2.5rem]">WORK</h2>
              <div>
                <button onClick={() => router.push("/projects")} className="pbtn">
                  See more
                </button>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 justify-start gap-x-11 sm:grid-cols-2 ">
              {data.map((project, i) => {
                return (
                  <WorkCard key={i} project={project.attributes} />
                );
              })}
            </div>
          </div>
        </div>
    )
}

export {FeaturedWorksSection};