import React from "react";
import Catagorypills from "../components/Catagorypills";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useRef } from "react";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}    

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });









const projecttags = ["react", "backend", "nextjs", "fullstack"];

function project1() {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <div className="wrapper text-white">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 origin-left bg-white"
          style={{ scaleX: scrollYProgress }}
        />
        {/* title */}
        <div className="mt-28 flex items-center gap-4">
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
            projecttags.map((projecttag) => {
              return <Catagorypills catagory={projecttag} />;
            })}
        </div>

        {/* time and date */}
        <p className="mt-4 text-sm text-gray-400">Oct 24, 2022 · 7 min read</p>

        {/* description */}

        <p className="mt-8 max-w-prose text-lg leading-[1.7]">
          Deciding on a JavaScript framework for your web application can be
          overwhelming. Angular and React are very popular these days, and there
          is an upstart which has been getting a lot of traction lately: VueJS.
          What’s more, these are just a few of the new kids on the block.
        </p>

        {/* ss from the projects */}

        <section>



        </section>

        {/* rich text */}

        <div></div>
      </div>
    </div>
  );
}

export default project1;
