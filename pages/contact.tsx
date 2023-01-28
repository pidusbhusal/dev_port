import React from "react";

const social = {
  email: "pidusbhusal@gmail.com",
  phoneno: "9867433325",
  address: "little boy, Rosario",
  facebook: {
    name: "Aashan Ghimire",
    fbadress: "https://www.facebook.com/aashan10",
  },
  insta: {
    name: "Aashan10",
    instadress: "https://www.instagram.com/",
  },
  linkedins: {
    name: "Aashan Ghimire",
    linkedinadress: "https://www.linkedin.com/in/aashan10/",
  },
};




const ContactUs = () => {
  return (
    <div>
      <div className="wrapper mb-60 grid gap-y-16 text-white lg:grid-cols-2">
        {/* contact us form */}
        <div>
          <h2 className="text-left text-3xl font-semibold md:text-[2.5rem]">
            CONTACT
          </h2>

          <form action="" className="mt-8 grid gap-4">
            <div className="flex flex-col">
              <label className="mb-2 text-gray-300  ">Name*</label>
              <input
                required
                type="text"
                placeholder="ex. Chrish Doo"
                className="focused max-w-xs rounded bg-[#353535] px-4 py-3 outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-300">Phone No</label>
              <input
                type="text"
                placeholder="ex. +123 123456789"
                className="focused max-w-xs rounded bg-[#353535] px-4 py-3 outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-300">Email*</label>
              <input
                required
                type="text"
                placeholder="ex. example@gmail.com"
                className="focused max-w-xs rounded bg-[#353535] px-4 py-3 outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 text-gray-300">Message</label>
              <textarea
                placeholder="Enter your message here"
                className="focused h-32 max-w-xs rounded bg-[#353535] px-4 py-3 outline-none "
              />
            </div>
            <div className="mt-6">
              <input type="submit" className="pbtn w-full lg:w-max" />
            </div>
          </form>
        </div>

        {/* email and socials */}

        <hr className="opacity-20 lg:hidden" />

        <div className="flex flex-col items-stretch gap-16 ">
          <div className="">
            <h2 className="text-3xl font-semibold md:text-[2.5rem]">
              ENTER EMAIL
            </h2>
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

          <hr className="opacity-20" />

          {/* socials */}
          <div className="">
            <h2 className="text-3xl font-semibold md:text-[2.5rem]">SOCIALS</h2>

            <div className="mt-8  grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex  items-center  gap-2">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1875 12.4999C17.1875 14.226 18.2365 15.6249 19.5313 15.6249C20.826 15.6249 21.875 14.226 21.875 12.4999C21.875 10.331 21.1229 8.22913 19.7469 6.55252C18.3709 4.8759 16.4562 3.72826 14.3289 3.30514C12.2016 2.88201 9.99343 3.20958 8.08059 4.23204C6.16775 5.25449 4.66861 6.90856 3.83861 8.91242C3.0086 10.9163 2.89908 13.1459 3.52871 15.2215C4.15833 17.2971 5.48816 19.0901 7.29158 20.2951C9.09501 21.5001 11.2605 22.0425 13.419 21.8299C15.5775 21.6173 17.5955 20.6628 19.1292 19.1291M17.1875 12.4999V8.59368M17.1875 12.4999C17.1875 13.7431 16.6936 14.9354 15.8146 15.8145C14.9355 16.6936 13.7432 17.1874 12.5 17.1874C11.2568 17.1874 10.0645 16.6936 9.18544 15.8145C8.30636 14.9354 7.8125 13.7431 7.8125 12.4999C7.8125 11.2567 8.30636 10.0644 9.18544 9.18537C10.0645 8.30629 11.2568 7.81243 12.5 7.81243C13.7432 7.81243 14.9355 8.30629 15.8146 9.18537C16.6936 10.0644 17.1875 11.2567 17.1875 12.4999V12.4999Z"
                    stroke="white"
                    stroke-width="1.38187"
                    stroke-linecap="round"
                  />
                </svg>

                <p className="text-lg">{social.email}</p>
              </div>

              <div className="flex  items-center  gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6.53846C1 16.7342 9.26585 25 19.4615 25H22.2308C22.9652 25 23.6696 24.7082 24.1889 24.1889C24.7082 23.6696 25 22.9652 25 22.2308V20.5422C25 19.9071 24.568 19.3532 23.9514 19.1994L18.5077 17.8382C17.9662 17.7028 17.3975 17.9058 17.064 18.3514L15.8702 19.9428C15.5231 20.4055 14.9237 20.6098 14.3809 20.4105C12.366 19.6697 10.5362 18.4998 9.01819 16.9818C7.5002 15.4638 6.33031 13.634 5.58954 11.6191C5.39015 11.0763 5.59446 10.4769 6.05723 10.1298L7.64862 8.936C8.09538 8.60246 8.29723 8.03262 8.16185 7.49231L6.80062 2.04862C6.72571 1.74916 6.55289 1.48333 6.3096 1.29334C6.06632 1.10335 5.76653 1.0001 5.45785 1H3.76923C3.03479 1 2.33042 1.29176 1.81109 1.81109C1.29176 2.33042 1 3.03479 1 3.76923V6.53846Z"
                    stroke="white"
                    stroke-width="1.82407"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-lg">{social.phoneno}</p>
              </div>
              <div className="flex  items-center  gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5V10.5Z"
                    stroke="white"
                    stroke-width="1.82407"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.5 10.5C19.5 17.642 12 21.75 12 21.75C12 21.75 4.5 17.642 4.5 10.5C4.5 8.51088 5.29018 6.60322 6.6967 5.1967C8.10322 3.79018 10.0109 3 12 3C13.9891 3 15.8968 3.79018 17.3033 5.1967C18.7098 6.60322 19.5 8.51088 19.5 10.5V10.5Z"
                    stroke="white"
                    stroke-width="1.82407"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-lg">{social.address}</p>
              </div>

              <a
                href={social.facebook.fbadress}
                className="flex  items-center  gap-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z"
                    stroke="white"
                    stroke-width="2.17369"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 21V12C11 9.812 11.5 8 15 8M9 13H15"
                    stroke="white"
                    stroke-width="2.17369"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>{social.facebook.name}</p>
              </a>

              <a
                href={social.insta.instadress}
                className="flex  items-center  gap-2"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 15C12.0609 15 13.0783 14.5786 13.8284 13.8284C14.5786 13.0783 15 12.0609 15 11C15 9.93913 14.5786 8.92172 13.8284 8.17157C13.0783 7.42143 12.0609 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 12.0609 7.42143 13.0783 8.17157 13.8284C8.92172 14.5786 9.93913 15 11 15V15Z"
                    stroke="white"
                    stroke-width="2.17369"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 15V7C2 5.67392 2.52678 4.40215 3.46447 3.46447C4.40215 2.52678 5.67392 2 7 2H15C16.3261 2 17.5979 2.52678 18.5355 3.46447C19.4732 4.40215 20 5.67392 20 7V15C20 16.3261 19.4732 17.5979 18.5355 18.5355C17.5979 19.4732 16.3261 20 15 20H7C5.67392 20 4.40215 19.4732 3.46447 18.5355C2.52678 17.5979 2 16.3261 2 15Z"
                    stroke="white"
                    stroke-width="2.17369"
                  />
                  <path
                    d="M16.5 5.51371L16.5125 5.5"
                    stroke="white"
                    stroke-width="2.17369"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>{social.insta.name}</p>
              </a>

              <a
                href={social.linkedins.linkedinadress}
                className="flex  items-center  gap-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17V10M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 17.001V13.751M11 10.001V13.751M11 13.751C11 10.001 17 10.001 17 13.751V17.001M7 7.011L7.01 7"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p>{social.linkedins.name}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
