"use client";

import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import {
  HiOutlineCurrencyRupee,
  HiOutlineClipboardList,
  HiOutlineDocumentReport,
  HiOutlineAcademicCap,
} from "react-icons/hi";

const floating = {
  animate: {
    y: [0, -20, 0],
    x: [0, 12, 0],
    rotate: [0, 4, -4, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HomeHero = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center font-main relative px-6 sm:px-10 pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/assets/S1.mp4"
          key="home-video"
        />
        <div className="absolute inset-0 bg-[#0d1321] opacity-85" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
        >
          Simplifying Your{" "}
          <span
            className="ml-2 font-extrabold text-transparent inline-block mr-3"
            style={{
              WebkitTextStroke: "2px #398db8",
            }}
          >
            Business
          </span>
          <span className="block mt-1">Compliance With Expert Precision</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Registration, taxation, audits, subsidies and loans —
          we manage everything with transparency and expert guidance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-6"
        >
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search services like GST, Registration, Loan…"
              className="
                w-full py-2 pl-5 pr-14 rounded-2xl
                bg-white/80 backdrop-blur-md
                border border-gray-300
                text-base text-gray-900 placeholder-gray-400
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                focus:ring-2 focus:ring-main focus:outline-none
                transition-all
              "
            />
            <FiSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 text-2xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8"
        >
          {[
            "Pvt Ltd Registration",
            "Project Loan",
            "MSME Subsidy",
            "GST & Compliance",
          ].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.05 }}
              href="#"
              className="py-2 border font-semibold rounded-lg text-white text-xs hover:bg-main transition-all duration-300 whitespace-nowrap"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Optional floating icons, currently disabled in original code */}
      {/* <motion.div
        variants={floating}
        animate="animate"
        className="absolute top-[25%] left-[12%] text-main text-6xl opacity-40"
      >
        <HiOutlineCurrencyRupee />
      </motion.div>

      <motion.div
        variants={floating}
        animate="animate"
        className="absolute top-[60%] left-[10%] text-mainDark text-6xl opacity-40"
      >
        <HiOutlineClipboardList />
      </motion.div>

      <motion.div
        variants={floating}
        animate="animate"
        className="absolute top-[32%] right-[14%] text-main text-6xl opacity-40"
      >
        <HiOutlineDocumentReport />
      </motion.div>

      <motion.div
        variants={floating}
        animate="animate"
        className="absolute bottom-[18%] right-[20%] text-mainDark text-6xl opacity-40"
      >
        <HiOutlineAcademicCap />
      </motion.div> */}
    </div>
  );
};

export default HomeHero;

