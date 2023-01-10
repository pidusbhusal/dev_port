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
      <div height="100vh">
        <h1 className="text-3xl underline font-extrabold">HELLO WORLD</h1>
        <p>This is suppose to be poppins</p>
        <h1 className="text-3xl underline font-extrabold py-[100vh]">
          HELLO WORLD
        </h1>
        <p>This is suppose to be poppins</p>
      </div>
    </>
  );
}
