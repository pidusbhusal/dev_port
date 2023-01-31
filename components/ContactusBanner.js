import React from "react";

function ContactusBanner() {
  return (
    <div>
      <div className="wrapper my-16 text-white ">
        <div className="relative flex w-full flex-wrap items-center justify-between gap-10 overflow-hidden  rounded-lg bg-contactus-gred py-8 px-6 lg:px-40">
          <div className="absolute right-20 z-0 h-[324px] w-[300px] bg-[#30473a]   opacity-0 blur-3xl md:opacity-10 " />
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-[2.5rem] xl:w-[20ch]">
              LETS GET IN TOUCH
            </h2>
            <p className="mt-4  leading-relaxed text-gray-300 md:w-[37ch]">
              I am always looking for new challenges and opportunities to work
              on. If you liked my work and want to work together, let's get in
              touch
            </p>
          </div>
          <div>
            <button className="pbtn z-20  ">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactusBanner;
