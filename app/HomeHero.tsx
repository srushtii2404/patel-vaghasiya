"use client";

import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";

const HomeHero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Complete services list
  const allServices = [
    { name: "Private Limited Company Registration", slug: "company-registration" },
    { name: "Limited Liability Partnership (LLP) Registration", slug: "llp-registration" },
    { name: "One Person Company (OPC) Registration", slug: "opc-registration" },
    { name: "Partnership Firm Registration", slug: "partnership-registration" },
    { name: "Start-up India Registration", slug: "startup-registration" },

    { name: "Project Loan", slug: "project-loan" },
    { name: "Machine Loan", slug: "machine-loan" },
    { name: "Working Capital Loan (OD / CC)", slug: "working-capital" },
    { name: "MSME Loan", slug: "msme-loan" },
    { name: "Secured Loan", slug: "secured-loan" },
    { name: "Unsecured Loan", slug: "unsecured-loan" },

    { name: "Government subsidy to MSME", slug: "msme-subsidy" },
    { name: "Government subsidy to Large or Thrust Sector", slug: "large-thrust-subsidy" },
    { name: "Government subsidy to Mega sector", slug: "mega-subsidy" },
    { name: "Government subsidy to IT / ITeS", slug: "it-subsidy" },
    { name: "Government subsidy to Logistic Park", slug: "logistic-subsidy" },
    { name: "Government subsidy to GCC", slug: "gcc-subsidy" },

    { name: "GST Registration, Return Filing & Litigation", slug: "gst-service" },
    { name: "ITR Filing, TDS & Litigation", slug: "itr-service" },

    { name: "Statutory Audit", slug: "statutory-service" },
    { name: "Tax Audit", slug: "tax-audit" },
    { name: "Internal Audit", slug: "internal-audit" },
    { name: "Bank Audit", slug: "bank-audit" },

    { name: "IPO Advisory & Support", slug: "ipo-service" },
  ];

  // Filter services (optimized)
  const filteredServices = useMemo(() => {
    if (searchQuery.trim() === "") return [];
    return allServices.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleServiceClick = () => {
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <section
      className="
        relative w-full overflow-hidden font-main
        px-4 sm:px-8 md:px-10
        pt-24 sm:pt-28
        md:min-h-screen
      "
    >
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/assets/S1.mp4"
        />
        <div className="absolute inset-0 bg-[#0d1321]/85" />
      </div>

      {/* Content */}
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
          <div
            ref={searchContainerRef}
            className="relative w-full max-w-md sm:max-w-xl"
          >
            <input
              type="text"
              placeholder="Search services like GST, Registration, Loan…"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsOpen(e.target.value.trim() !== "");
              }}
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

            {/* Dropdown Results */}
            {isOpen && filteredServices.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 max-h-72 overflow-y-auto z-50">
                {filteredServices.map((service, index) => (
                  <Link
                    key={index}
                    href={`/services/${service.slug}`}
                    onClick={handleServiceClick}
                    className="block px-4 sm:px-5 py-2.5 sm:py-3 text-left text-sm sm:text-base text-gray-900 hover:bg-blue-50 border-b border-gray-100 last:border-b-0 flex items-center gap-2"
                  >
                    <FiSearch className="text-gray-400 text-base" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* No Results */}
            {isOpen && filteredServices.length === 0 && searchQuery.trim() !== "" && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 px-4 sm:px-5 py-3 sm:py-4 text-center text-sm text-gray-500 z-50">
                No services found for "{searchQuery}"
              </div>
            )}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8"
        >
          {[
            { name: "Pvt Ltd Registration", href: "/services/company-registration" },
            { name: "Project Loan", href: "/services/project-loan" },
            { name: "MSME Subsidy", href: "/services/msme-subsidy" },
            { name: "GST & Compliance", href: "/services/gst-service" },
          ].map((item, index) => (
            <Link key={index} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="
                  py-2 sm:py-2.5 px-3
                  border font-semibold rounded-lg
                  text-white text-xs sm:text-sm
                  hover:bg-main transition-all duration-300
                  text-center
                "
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;