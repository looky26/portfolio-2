"use client";
import { Inter, Reggae_One } from "next/font/google";
import Image from "next/image";
import { useRef, useState } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Link from "next/link";
import Contacts from "./components/Contacts";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });
const reggae = Reggae_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main id="home" className="max-w-7xl mx-auto px-5 ">
      <nav className="flex flex-col lg:flex-row justify-between text-center items-center text-white py-5  px-5">
        <div className="flex justify-between space-x-2">
          <h2 className="text-lg">AVDev</h2>
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex justify-between lg:space-x-5 text-lg w-full lg:w-auto`}
        >
          <Link href={"#about"}>
            <li className="hover:bg-[#E5A01D] px-4 py-1 rounded-full">About</li>
          </Link>

          <Link href={"#projects"}>
            <li className="hover:bg-[#E5A01D] px-4 py-1 rounded-full">
              Projects
            </li>
          </Link>

          <Link href={"#skills"}>
            <li className="hover:bg-[#E5A01D] px-4 py-1 rounded-full">
              Skills
            </li>
          </Link>

          <Link href={"#contacts"}>
            <li className="hover:bg-[#E5A01D] px-4 py-1 rounded-full">
              Contacts
            </li>
          </Link>
        </ul>
      </nav>

      <Link href={"#home"} className="sticky top-5 flex justify-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-8 text-white cursor-pointer bg-[#243947] hover:bg-[#E5A01D] p-1 rounded-full"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 text-white gap-x-10 mt-40">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left pt-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[20px]">Hello, My name is</h1>
          <h1 className={`${reggae.className} text-[50px] text-[#E5A01D]`}>
            Arvin Vaje
          </h1>
          <p className="font-semibold text-[20px]">
            I am a Front End Developer
          </p>
          <p className="text-[15px] lg:w-[550px] mt-10">
            I'm open to learning, adapt to work with the team, freelance
            opportunities, contract jobs and use skills to solve complex UI{" "}
            <br />
            challenges and provide value to the growth of an organization.
          </p>
          <Link
            href={"#projects"}
            className="bg-[#E5A01D] hover:bg-amber-700 rounded-xl px-14 py-3 mt-14"
          >
            See Projects
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center lg:justify-end mt-20 lg:mt-0"
        >
          <img
            src="./bannerlogo.png"
            alt=""
            className="w-[539px] h-[391px] object-contain"
          />
        </motion.div>
      </div>

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}
