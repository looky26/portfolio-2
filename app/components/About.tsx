import { motion } from "framer-motion";
import { Reggae_One } from "next/font/google";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const reggae = Reggae_One({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  // const ref = useRef(null)
  // const isInView = useInView(ref)

  // useEffect(() => {
  //   console.log("Element is in view: ", isInView)
  // }, [isInView])

  return (
    <div>
      <div id="about" className="mt-20 lg:mt-48">
        <div className="flex items-baseline space-x-10">
          <h1 className="text-[40px] text-nowrap text-[#E5A01D] font-bold inline-block">
            About me
          </h1>
          <span className="h-[2px] w-full bg-white"></span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex items-center flex-wrap gap-y-10 md:gap-y-10 lg:gap-y-0 gap-x-40 justify-center text-white mt-20"
      >
        <img className="" src="./aboutmelogo.png" alt="" />
        <p className="w-[550px] text-[15px]">
          Hi, I'm Arvin Vaje. I'm currently working as an IT service desk at
          vestas wind system company. I'm a self-taught developer who is
          passionate about coding. I love creating websites that look best on
          all screen sizes. Looking forward to jumpstarting my career as a front
          end developer. I am always open to challenges and constructive
          feedback. I am open-minded and learn new things quickly. I want to
          dedicate all my skills and talents to developing high-quality and
          beautiful websites.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=" flex items-center text-center lg:text-start  flex-wrap gap-y-10 lg:gap-y-0 gap-x-40 justify-center text-white mt-20"
      >
        <div>
          <div className="w-fit mx-auto lg:mx-0 mb-10">
            <p className="text-[20px] font-bold">Personal Details</p>
            <div className="h-[4px] -mt-3  bg-[#E5A01D]"></div>
          </div>

          <div className="flex justify-between w-60">
            <p>Birthday</p>
            <p>08-26-1984</p>
          </div>
          <div className="flex justify-between w-60">
            <p>Phone</p>
            <p>09459854111</p>
          </div>
          <div className="flex justify-between w-60">
            <p>JobStatus</p>
            <p>Freelance</p>
          </div>
        </div>
        <div>
          <div className="w-fit mx-auto lg:mx-0 mb-10">
            <p className="text-[20px] font-bold">Interests</p>
            <div className="h-[4px] -mt-3  bg-[#E5A01D]"></div>
          </div>
          <div className="flex flex-wrap gap-5 justify-center lg:justify-between">
            <img src="./code.png" alt="" />
            <img src="./bike.png" alt="" />
            <img src="./game.png" alt="" />
            <img src="./music.png" alt="" />
            <img src="./motor.png" alt="" />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-20 text-white"
      >
        <Link
          href={"./ArvinVajeResume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          download={"./ArvinVajeResume.pdf"}
          className="bg-[#E5A01D] text-center px-7 py-2 rounded-xl hover:bg-amber-700"
        >
          DOWNLOAD CV
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
