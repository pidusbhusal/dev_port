export const ContactUsBanner = () => {
  return (
    <div>
      <div className="wrapper ">
        <div className="flex w-full flex-wrap items-center justify-between gap-10  rounded-lg bg-contactus-gred py-8 px-6 lg:px-40">
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-[2.5rem] xl:w-[20ch]">
              LETS GET IN TOUCH
            </h2>
            <p className="mt-4  leading-relaxed text-gray-300 md:w-[37ch]">
              I am always looking for new challenges and opportunities to work
              on. If you liked my work and want to work together, let&apos;s get in
              touch
            </p>
          </div>
          <div>
            <button className="pbtn">Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  );
}
