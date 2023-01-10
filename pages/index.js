import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { Poppins, Figtree } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="text-white py-20">
        {/* herosection */}
        <div className=" flex items-end wrapper  ">
          <div>
            <button className=" group flex gap-[10rem] bg-white rounded-full px-8 py-4 text-black items-center hover:bg-[#E2FDE6]">
              <p>See My Work</p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.407 1.34254C13.407 0.928328 13.0712 0.592542 12.657 0.592542H5.90697C5.49276 0.592542 5.15697 0.928328 5.15697 1.34254C5.15697 1.75676 5.49276 2.09254 5.90697 2.09254L11.907 2.09254L11.907 8.09254C11.907 8.50676 12.2428 8.84254 12.657 8.84254C13.0712 8.84254 13.407 8.50676 13.407 8.09254V1.34254ZM1.87359 13.1866L13.1873 1.87287L12.1266 0.812212L0.812932 12.1259L1.87359 13.1866Z"
                  fill="black"
                />
              </svg>
            </button>
            <h1 className="text-[4rem] font-semibold leading-[4.15rem] mt-9">
              I'M A FULL STACK DEVELOPER
            </h1>
            <p className="max-w-[49ch] mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </div>
          <div className="overflow-hidden rounded-lg ">
            <img width="100%" src="./profile.jpg" alt="Me 😁" />
          </div>
        </div>

        {/* work */}
        <div className="home-work py-40 mt-20">
          <div className="wrapper">
            <div className="flex justify-between item-center">
              <h2 className="font-semibold text-[2.5rem]">WORK</h2>
              <button className="pbtn">See More work</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
