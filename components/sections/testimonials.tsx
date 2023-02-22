import { motion } from "framer-motion";
import { FadeInUp } from '../../data-providers/';
import { AttributeCollection, SingleMediaAttribute, Testimonial } from "../../types";
import { TestimonialCard } from "../testimonial-card";
import Image from 'next/image';

interface TestimonialcardProps {
  testimonials: AttributeCollection<Testimonial>;
  companies: AttributeCollection<{
    name: string;
    image: SingleMediaAttribute;
  }>
}

const TestimonialsSection = ({testimonials, companies}: TestimonialcardProps) => {

    return (
        <div className="pt-16">
          <div className="wrapper">
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <motion.h2
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={FadeInUp}
                className="text-3xl font-semibold leading-tight md:text-[2.5rem] xl:w-[20ch]"
              >
                WHAT PEOPLE ARE SAYING ABOUT ME
              </motion.h2>

              <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0 }}
                variants={FadeInUp}
                className="leading-loose xl:w-[37ch]"
              >
                Over the year I have worked with plenty of client and here are
                some of their testimonial
              </motion.p>
            </div>
            {/* testimonial card */}
            <div className="my-20 grid gap-6 md:mt-24 md:grid-cols-2 lg:grid-cols-4">
              {testimonials.data.map((testimonial, id) => {
                return (
                  <TestimonialCard testimonial={testimonial} key={id} />
                );
              })}
            </div>

            {/* testimonial company */}
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0 }}
              variants={FadeInUp}
              className=" grid grid-cols-2 place-items-start  gap-7  md:grid-cols-3 md:gap-28 md:gap-y-2 xl:grid-cols-5"
            >
              {companies.data.map((company, i) => {
                return <Image alt={company.attributes.name} key={i} src={company.attributes.image.data.attributes.url} />;
              })}
            </motion.div>
          </div>
        </div>
    )
}

export {TestimonialsSection}