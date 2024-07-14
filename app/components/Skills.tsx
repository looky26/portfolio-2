import { motion } from "framer-motion";
import { Reggae_One } from "next/font/google";
import React, { useRef } from "react";

const reggae = Reggae_One({
  subsets: ["latin"],
  weight: "400",
});
const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeftButton = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRightButton = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="mt-20 lg:mt-48">
        <div className="flex items-baseline space-x-10">
          <h1
            id="skills"
            className="text-[40px] text-nowrap text-[#E5A01D] font-bold inline-block"
          >
            Skills
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
            Here are some of the technologies I use when building a website.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-2 mt-5"
        >
          <button
            onClick={scrollLeftButton}
            className="bg-orange-300 p-1 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </button>
          <button
            onClick={scrollRightButton}
            className="bg-orange-300 p-1 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=" snap-x grid grid-flow-col overflow-x-auto  md:auto-cols-[25%] auto-cols-[50%] lg:auto-cols-[16.66%]  mt-10"
          ref={containerRef}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollSnapType: "x mandatory",
          }}
        >
          <img className="snap-end w-full px-2" src="./html.png" alt="" />
          <img className="snap-end w-full px-2" src="./css.png" alt="" />
          <img className="snap-end w-full px-2" src="./js.png" alt="" />
          <img className="snap-end w-full px-2" src="./react.png" alt="" />
          <img className="snap-end w-full px-2" src="./next.png" alt="" />
          <img className="snap-end w-full px-2" src="./github.png" alt="" />
          <img className="snap-end w-full px-2" src="./firebase.png" alt="" />
          <img className="snap-end w-full px-2" src="./sanity.png" alt="" />
          <img className="snap-end w-full px-2" src="./xata.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
