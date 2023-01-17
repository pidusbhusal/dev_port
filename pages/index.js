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
      <main className="py-20 text-white ">
        {/* herosection */}
        <div className=" wrapper flex items-end  ">
          <div>
            <button className=" group flex items-center gap-[10rem] rounded-full bg-green-100 px-8 py-4 text-black hover:bg-green-200">
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
            <h1 className="mt-9 text-[4rem] font-semibold leading-[4.15rem]">
              I'M A FULL STACK DEVELOPER
            </h1>
            <p className="mt-5 max-w-[49ch]">
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
        <div className="home-work mt-20 py-40">
          <div className="wrapper">
            <div className="item-center flex justify-between">
              <h2 className="text-[2.5rem] font-semibold">WORK</h2>
              <button className="pbtn">See More work</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
