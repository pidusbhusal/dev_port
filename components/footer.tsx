import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,

    transition: {
      type: "spring",

      duration: 1,
    },
  },
};

const social = {
  email: "ashanghimire10@gmail.com",
  facebook: "Aashan Ghimire",
  insta: "aashan10",
  linkedin: "aashan10",
};

const Footer = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
      variants={cardVariants}
    >
      <div className="wrapper grid flex-wrap justify-between gap-4 text-white md:flex md:gap-10 ">
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.5rem] xl:max-w-[20ch]">
            AASHAN GHIMIRE
          </h2>
          <p className="mt-4 max-w-[36ch]">
            I am front end developer with an work expreince of more then 10
            years
          </p>
          <p className="invisible  mt-10 font-normal text-gray-500 md:visible">
            © 2023. All Rights Reserved
          </p>
        </div>
        <div>
          <h3 className=" text-2xl  font-semibold ">QUICK LINKS</h3>
          <hr className="mb-5 mt-3  opacity-50   " />
          <div className="my-10 grid  grid-cols-1 gap-10 md:mt-3 md:gap-3 ">
            <Link className="inline-block w-full" href="google.com">
              Work
            </Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
        <div>
          <h3 className=" text-2xl  font-semibold ">WORKS</h3>
          <hr className="mb-5 mt-3  opacity-50   " />
          <div className="my-10 grid  grid-cols-1 gap-10 md:mt-3 md:gap-3">
            <Link href="#">Work 1</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Contact Us</Link>
          </div>
        </div>
        <div>
          <h3 className=" text-2xl  font-semibold ">SOCIALS</h3>
          <hr className="mb-5 mt-3  opacity-50   " />
          <div className="my-10 grid  grid-cols-1 gap-10 md:mt-3 md:gap-3">
            <div className="flex gap-2">
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5625 12.6132C18.5625 14.3393 19.6954 15.7382 21.0938 15.7382C22.4921 15.7382 23.625 14.3393 23.625 12.6132C23.625 10.4443 22.8127 8.34241 21.3267 6.6658C19.8406 4.98919 17.7727 3.84154 15.4752 3.41842C13.1777 2.99529 10.7929 3.32287 8.72704 4.34532C6.66118 5.36777 5.0421 7.02184 4.14569 9.0257C3.24928 11.0296 3.131 13.2592 3.811 15.3348C4.491 17.4103 5.92721 19.2034 7.87491 20.4084C9.82261 21.6134 12.1613 22.1558 14.4925 21.9432C16.8237 21.7305 19.0031 20.7761 20.6595 19.2424M18.5625 12.6132V8.70697M18.5625 12.6132C18.5625 13.8564 18.0291 15.0487 17.0797 15.9278C16.1303 16.8069 14.8427 17.3007 13.5 17.3007C12.1573 17.3007 10.8697 16.8069 9.92028 15.9278C8.97087 15.0487 8.4375 13.8564 8.4375 12.6132C8.4375 11.37 8.97087 10.1777 9.92028 9.29865C10.8697 8.41958 12.1573 7.92572 13.5 7.92572C14.8427 7.92572 16.1303 8.41958 17.0797 9.29865C18.0291 10.1777 18.5625 11.37 18.5625 12.6132V12.6132Z"
                  stroke="white"
                  strokeLinecap="round"
                />
              </svg>
              <Link href="#">{social.email}</Link>
            </div>
            <div className="flex gap-2">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6771 8.37189V16.6294C21.6771 17.9982 21.1333 19.3109 20.1655 20.2788C19.1976 21.2466 17.8849 21.7904 16.5161 21.7904H8.25861C6.88984 21.7904 5.57713 21.2466 4.60926 20.2788C3.6414 19.3109 3.09766 17.9982 3.09766 16.6294V8.37189C3.09766 7.00312 3.6414 5.69041 4.60926 4.72255C5.57713 3.75468 6.88984 3.21094 8.25861 3.21094H16.5161C17.8849 3.21094 19.1976 3.75468 20.1655 4.72255C21.1333 5.69041 21.6771 7.00312 21.6771 8.37189Z"
                  stroke="white"
                  strokeWidth="1.47603"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.3534 21.7896V12.4999C11.3534 10.2414 11.8695 8.37109 15.4822 8.37109M9.28906 13.532H15.4822"
                  stroke="white"
                  strokeWidth="1.47603"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Link href="#">{social.facebook}</Link>
            </div>
            <div className="flex gap-2">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.9999 16.8865C13.0607 16.8865 14.0781 16.4651 14.8283 15.715C15.5784 14.9648 15.9998 13.9475 15.9998 12.8866C15.9998 11.8258 15.5784 10.8084 14.8283 10.0583C14.0781 9.30814 13.0607 8.88672 11.9999 8.88672C10.9391 8.88672 9.92167 9.30814 9.17154 10.0583C8.42142 10.8084 8 11.8258 8 12.8866C8 13.9475 8.42142 14.9648 9.17154 15.715C9.92167 16.4651 10.9391 16.8865 11.9999 16.8865V16.8865Z"
                  stroke="white"
                  strokeWidth="1.42996"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 16.8864V8.88659C3 7.56054 3.52677 6.28881 4.46443 5.35115C5.40209 4.41349 6.67382 3.88672 7.99987 3.88672H15.9997C17.3257 3.88672 18.5975 4.41349 19.5351 5.35115C20.4728 6.28881 20.9995 7.56054 20.9995 8.88659V16.8864C20.9995 18.2124 20.4728 19.4842 19.5351 20.4218C18.5975 21.3595 17.3257 21.8863 15.9997 21.8863H7.99987C6.67382 21.8863 5.40209 21.3595 4.46443 20.4218C3.52677 19.4842 3 18.2124 3 16.8864Z"
                  stroke="white"
                  strokeWidth="1.42996"
                />
                <path
                  d="M17.5 7.39926L17.5132 7.38477"
                  stroke="white"
                  strokeWidth="1.42996"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Link href="#">{social.insta}</Link>
            </div>
            <div className="flex gap-2">
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70843 16.6787V9.97023M20.1254 8.05351V15.7204C20.1254 16.9912 19.6206 18.21 18.722 19.1087C17.8233 20.0073 16.6045 20.5122 15.3337 20.5122H7.66679C6.39593 20.5122 5.17712 20.0073 4.27848 19.1087C3.37985 18.21 2.875 16.9912 2.875 15.7204V8.05351C2.875 6.78265 3.37985 5.56384 4.27848 4.6652C5.17712 3.76657 6.39593 3.26172 7.66679 3.26172H15.3337C16.6045 3.26172 17.8233 3.76657 18.722 4.6652C19.6206 5.56384 20.1254 6.78265 20.1254 8.05351Z"
                  stroke="white"
                  strokeWidth="1.37045"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5405 16.6802V13.5656M10.5405 9.97174V13.5656M10.5405 13.5656C10.5405 9.97174 16.2906 9.97174 16.2906 13.5656V16.6802M6.70703 7.10625L6.71662 7.0957"
                  stroke="white"
                  strokeWidth="1.37045"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Link href="#">{social.linkedin}</Link>
            </div>
          </div>
        </div>
        <div className="visible font-normal text-gray-500 md:invisible">
          © 2023. All Rights Reserved
        </div>
      </div>
    </motion.div>
  );
}

export {Footer};
