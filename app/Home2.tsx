"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Icons
import {
  FaBuilding,
  FaPeopleCarry,
  FaUserTie,
  FaHandshake,
  FaLightbulb,
  FaPiggyBank,
  FaCoins,
  FaCogs,
  FaTools,
  FaChartLine,
  FaFileInvoice,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Home2 = () => {
  const tabs = [
    "Register Company",
    "Loan for Business",
    "Government Subsidy",
    "Taxation",
    "Audit & Assurance",
    "IPO Advisory",
  ];

  const [active, setActive] = useState(0);
  const tabRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (dir: "left" | "right") => {
    if (!tabRef.current) return;
    tabRef.current.scrollBy({
      left: dir === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  const iconStyles =
    "w-12 h-12 rounded-full flex items-center justify-center text-2xl";

const data = [
    [
      {
        title: "Private Limited Company Registration",
        desc: "Get full legal protection and build strong business credibility with fast Pvt Ltd registration.",
        icon: <FaBuilding />,
        color: "#F59E0B",
        light: "#FEF3C7",
      },
      {
        title: "LLP Registration",
        desc: "Register your LLP with limited liability and flexible management structure ideal for MSMEs.",
        icon: <FaPeopleCarry />,
        color: "#10B981",
        light: "#D1FAE5",
      },
      {
        title: "One Person Company Registration",
        desc: "Best for solo entrepreneurs seeking limited liability with a simplified compliance system.",
        icon: <FaUserTie />,
        color: "#3B82F6",
        light: "#DBEAFE",
      },
      {
        title: "Partnership Firm Registration",
        desc: "Easy and quick registration process for traditional partnership businesses.",
        icon: <FaHandshake />,
        color: "#8B5CF6",
        light: "#EDE9FE",
      },
      {
        title: "Startup India Registration",
        desc: "Get DPIIT recognition and unlock tax exemptions, funding support and government benefits.",
        icon: <FaLightbulb />,
        color: "#EF4444",
        light: "#FEE2E2",
      },
    ],

    [
      {
        title: "Project Loan",
        desc: "Long-term financing for new business projects, expansion and modernization.",
        icon: <FaChartLine />,
        color: "#F97316",
        light: "#FFEDD5",
      },
      {
        title: "Machine Loan",
        desc: "Get funding to purchase machinery and industrial equipment at flexible terms.",
        icon: <FaTools />,
        color: "#0EA5E9",
        light: "#E0F2FE",
      },
      {
        title: "Working Capital Loan (OD/CC)",
        desc: "Maintain steady cash flow with overdraft and cash credit facilities.",
        icon: <FaCoins />,
        color: "#10B981",
        light: "#D1FAE5",
      },
      {
        title: "MSME Loan",
        desc: "Government-backed loans designed to support micro and small enterprises.",
        icon: <FaPiggyBank />,
        color: "#22C55E",
        light: "#DCFCE7",
      },
      {
        title: "Property Loan",
        desc: "Loan against property for business expansion with competitive interest rates.",
        icon: <FaBuilding />,
        color: "#3B82F6",
        light: "#DBEAFE",
      },
      {
        title: "Secured Loan",
        desc: "High-value loans offered against security like assets, property or collateral.",
        icon: <FaHandshake />,
        color: "#8B5CF6",
        light: "#EDE9FE",
      },
      {
        title: "Unsecured Loan",
        desc: "Business loans without collateral for short-term needs and working capital.",
        icon: <FaUserTie />,
        color: "#EF4444",
        light: "#FEE2E2",
      },
    ],

    [
      {
        title: "Subsidy for MSME",
        desc: "Financial incentives for micro and small industries to reduce cost of operations.",
        icon: <FaCoins />,
        color: "#F59E0B",
        light: "#FEF3C7",
      },
      {
        title: "Subsidy for Large/Thrust Sector",
        desc: "Government support schemes for major industries under thrust categories.",
        icon: <FaBuilding />,
        color: "#3B82F6",
        light: "#DBEAFE",
      },
      {
        title: "Subsidy for Mega Sector",
        desc: "Special incentives for mega-scale industrial projects.",
        icon: <FaChartLine />,
        color: "#EF4444",
        light: "#FEE2E2",
      },
      {
        title: "Subsidy for IT / ITeS",
        desc: "Financial support for IT, software, and BPO service companies.",
        icon: <FaLightbulb />,
        color: "#10B981",
        light: "#D1FAE5",
      },
      {
        title: "Subsidy for Logistic Park",
        desc: "Incentives for constructing and running modern logistics & warehousing parks.",
        icon: <FaTools />,
        color: "#F97316",
        light: "#FFEDD5",
      },
      {
        title: "Subsidy for GCC",
        desc: "Government support programs for Global Capability Centers (GCC).",
        icon: <FaUserTie />,
        color: "#22C55E",
        light: "#DCFCE7",
      },
    ],

    [
      {
        title: "GST Registration & Litigation",
        desc: "Complete GST registration, return filing and legal representation.",
        icon: <FaFileInvoice />,
        color: "#EF4444",
        light: "#FEE2E2",
      },
      {
        title: "Income Tax & TDS",
        desc: "ITR filing, TDS filing, tax planning and compliance management.",
        icon: <FaCogs />,
        color: "#10B981",
        light: "#D1FAE5",
      },
    ],

    [
      {
        title: "Statutory Audit",
        desc: "Ensure complete compliance and financial accuracy as per legal requirements.",
        icon: <FaSearch />,
        color: "#6366F1",
        light: "#E0E7FF",
      },
      {
        title: "Tax Audit",
        desc: "Detailed audit to verify tax calculations and income declarations.",
        icon: <FaFileInvoice />,
        color: "#F59E0B",
        light: "#FEF3C7",
      },
      {
        title: "Internal Audit",
        desc: "Strengthen internal controls and prevent operational risks.",
        icon: <FaTools />,
        color: "#0EA5E9",
        light: "#E0F2FE",
      },
      {
        title: "Bank Audit",
        desc: "Complete audit support for bank loan documentation and verification.",
        icon: <FaPiggyBank />,
        color: "#22C55E",
        light: "#DCFCE7",
      },
    ],

    [
      {
        title: "IPO Advisory & Support",
        desc: "End-to-end assistance for IPO documentation, valuation, SEBI compliance and launch.",
        icon: <FaChartLine />,
        color: "#F97316",
        light: "#FFEDD5",
      },
    ],
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-offwhite">
      {/* TABS */}
      <div className="relative flex items-center justify-center mb-8">
        {/* LEFT ARROW */}
        <button
          onClick={() => scrollTabs("left")}
          className="md:hidden absolute -left-2 z-10 p-2 bg-white shadow rounded-full"
        >
          <FaChevronLeft />
        </button>

        {/* TABS LIST */}
        <div
          ref={tabRef}
          className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide px-8 border-b"
        >
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`pb-3 font-medium transition ${
                active === i
                  ? "text-main border-b-2 border-main"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={() => scrollTabs("right")}
          className="md:hidden absolute -right-2 z-10 p-2 bg-white shadow rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* CARDS */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data[active].map((item, i) => (
          <SwiperSlide key={i}>
            <div className="h-full p-6 rounded-2xl bg-white shadow hover:shadow-lg transition flex flex-col">
              <div
                className={iconStyles}
                style={{ backgroundColor: item.light, color: item.color }}
              >
                {item.icon}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 flex-grow">
                {item.desc}
              </p>

              <Link
                href={`/services/${item.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                className="mt-4 text-main font-medium inline-flex items-center"
              >
                Know More <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Home2;
