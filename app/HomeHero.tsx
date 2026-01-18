"use client";

import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

const HomeHero = () => {
  return (
    <section
      className="
        relative w-full overflow-hidden font-main
        px-4 sm:px-8 md:px-10
        pt-24 sm:pt-28
        md:min-h-screen
      "
    >
      {/* ===== Background Video ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="
            w-full h-full
            object-cover
          "
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          src="/assets/S1.mp4"
        />
        <div className="absolute inset-0 bg-[#0d1321]/85" />
      </div>

      {/* ===== Content Wrapper ===== */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 pb-10 md:pb-0">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold text-white leading-tight
          "
        >
          Simplifying Your{" "}
          <span
            className="inline-block mx-2 font-extrabold text-transparent"
            style={{ WebkitTextStroke: "2px #398db8" }}
          >
            Business
          </span>
          <span className="block mt-2">
            Compliance With Expert Precision
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            text-gray-100
            text-sm sm:text-base md:text-lg
            max-w-xl md:max-w-2xl
            mx-auto leading-relaxed
          "
        >
          Registration, taxation, audits, subsidies and loans —
          we manage everything with transparency and expert guidance.
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md sm:max-w-xl">
            <input
              type="text"
              placeholder="Search services like GST, Registration, Loan…"
              className="
                w-full py-2.5 sm:py-3
                pl-4 sm:pl-5 pr-12 sm:pr-14
                rounded-xl sm:rounded-2xl
                bg-white/80 backdrop-blur-md
                border border-gray-300
                text-sm sm:text-base
                text-gray-900 placeholder-gray-400
                shadow-md
                focus:ring-2 focus:ring-main focus:outline-none
              "
            />
            <FiSearch className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-600 text-xl sm:text-2xl" />
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-3 sm:gap-4
            mt-6 sm:mt-8
          "
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
              className="
                py-2 sm:py-2.5 px-3
                border font-semibold rounded-lg
                text-white text-xs sm:text-sm
                hover:bg-main transition-all duration-300
                text-center
              "
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HomeHero;
