import { motion } from "framer-motion";
import React from "react";

const Contacts = () => {
  return (
    <div>
      <div id="contacts" className="mt-20 lg:mt-48">
        <div className="flex items-baseline space-x-10">
          <h1 className="text-[40px] text-nowrap text-[#E5A01D] font-bold inline-block">
            Contacts
          </h1>
          <span className="h-[2px] w-full bg-white"></span>
        </div>
      </div>
      <motion.section
      
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      >
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form
            action="https://formsubmit.co/f0528c2d844e52ee576a808b4f7fafaf"
            method="POST"
            className="space-y-8 max-w-7xl mx-auto"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
              <input type="hidden" name="_next" value="http://localhost:3000"></input>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="_subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-white">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                name="comments"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-xl bg-[#E5A01D] sm:w-fit hover:bg-amber-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Contacts;
