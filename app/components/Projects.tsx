import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div className="text-white">
      <div className="mt-20 lg:mt-48">
        <div className="flex items-baseline space-x-10">
          <h1
            id="projects"
            className="text-[40px] text-nowrap text-[#E5A01D] font-bold inline-block"
          >
            Projects
          </h1>
          <span className="h-[2px] w-full bg-white"></span>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-white font-bold">
            Here are some of the projects that I built.
          </p>
        </motion.div>

        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hover:bg-[#263D4B] bg-[#172530] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mt-20 p-5 rounded-lg"
        >
          {/* left */}
          <div className="text-center lg:text-left">
            <h1 className="text-[20px] font-bold">SLD Tech Store</h1>
            <p className="lg:w-[512px] w-full">
              SLD Techstore is a self-developed e-commerce platform designed for
              selling tech products. It utilizes modern web development
              technologies and tools to provide a smooth and efficient shopping
              experience.
            </p>
            <p className="mt-5">Technologies Used</p>
            <div className="flex items-center justify-center lg:justify-start flex-wrap gap-2 mt-2 w-full lg:w-[512px]">
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Nextjs
              </p>
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">Xata</p>
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Stripe
              </p>
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Tailwind Css
              </p>
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Zustand
              </p>
            </div>
            <div className="space-x-2 mt-5">
              <button className="bg-gradient-to-b from-[#F8E4C4] to-[#928673] px-5 py-2 rounded-lg">
                View Code
              </button>
              <Link
                href={"https://tech-store-2.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="border hover:bg-amber-700 border-[#F8E4C4] px-5 py-[6.5px] rounded-lg"
              >
                Live Demo
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="flex justify-center lg:justify-start mb-5 lg:m-0">
            <img className="w-full lg:w-[528px]" src="./techstore.png" alt="" />
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
        
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="hover:bg-[#263D4B] bg-[#172530] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mt-10 p-5 rounded-lg">
          {/* left */}
          <div className="text-center lg:text-left">
            <h1 className="text-[20px] font-bold">Artlines</h1>
            <p className="lg:w-[512px] w-full">
              Artlines is a platform designed for purchasing mock-up designs. It
              leverages a combination of modern web technologies to offer a
              seamless and visually appealing user experience.
            </p>
            <p className="mt-5">Technologies Used</p>
            <div className="flex items-center justify-center lg:justify-start flex-wrap gap-2 mt-2 w-full lg:w-[512px]">
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Nextjs
              </p>
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Sanity Cms
              </p>
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Stripe
              </p>
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Tailwind Css
              </p>
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Redux toolkit
              </p>
            </div>
            <div className="space-x-2 mt-5">
              <button className="bg-gradient-to-b from-[#F8E4C4] to-[#928673] px-5 py-2 rounded-lg">
                View Code
              </button>
              <Link
                href={"https://artlines-project.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="border hover:bg-amber-700 border-[#F8E4C4] px-5 py-[6.5px] rounded-lg"
              >
                Live Demo
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="flex justify-center lg:justify-start mb-5 lg:m-0">
            <img
              className="w-full lg:w-[528px]"
              src="./artlinesimage.png"
              alt=""
            />
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        className="hover:bg-[#263D4B] bg-[#172530] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between mt-10 p-5 rounded-lg">
          {/* left */}
          <div className="text-center lg:text-left">
            <h1 className="text-[20px] font-bold">Osaps</h1>
            <p className="lg:w-[512px] w-full">
              The OSAPS 2024 Cebu website is for the 18th International Congress
              of the Oriental Society of Aesthetic Plastic Surgery, hosted in
              Cebu, Philippines, from July 4-6, 2024. I worked here as a
              freelancer to build the front end part of the website.
            </p>
            <p className="mt-5">Technologies Used</p>
            <div className="flex items-center justify-center lg:justify-start flex-wrap gap-2 mt-2 w-full lg:w-[512px]">
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Nextjs
              </p>
              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Airtable
              </p>

              <p className="bg-[#E5A01D] px-10 py-2 rounded-full w-fit">
                Tailwind Css
              </p>
            </div>
            <div className="space-x-2 mt-5">
              <button className="bg-gradient-to-b from-[#F8E4C4] to-[#928673] px-5 py-2 rounded-lg">
                View Code
              </button>
              <Link
                href={"https://osaps2024cebu.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="border hover:bg-amber-700 border-[#F8E4C4] px-5 py-[6.5px] rounded-lg"
              >
                Live Demo
              </Link>
            </div>
          </div>
          {/* right */}
          <div className="flex justify-center lg:justify-start mb-5 lg:m-0">
            <img className="w-full lg:w-[528px]" src="./osaps.png" alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
