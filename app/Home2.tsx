"use client";

import React, { useRef,useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {
  FaBuilding,
  FaPeopleCarry,
  FaUserTie,
  FaHandshake,
  FaLightbulb,
  FaChartLine,
  FaTools,
  FaCoins,
  FaPiggyBank,
  FaCogs,
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
    // Tab 0: Register Company
    [
      {
        title: "Private Limited Company Registration",
        desc: "Get full legal protection and build strong business credibility with fast Pvt Ltd registration.",
        icon: <FaBuilding />,
        color: "#F59E0B",
        light: "#FEF3C7",
        link: "/services/company-registration", // ← Added here
      },
      {
        title: "LLP Registration",
        desc: "Register your LLP with limited liability and flexible management structure ideal for MSMEs.",
        icon: <FaPeopleCarry />,
        color: "#10B981",
        light: "#D1FAE5",
        link: "/services/llp-registration",
      },
      {
        title: "One Person Company Registration",
        desc: "Best for solo entrepreneurs seeking limited liability with a simplified compliance system.",
        icon: <FaUserTie />,
        color: "#3B82F6",
        light: "#DBEAFE",
        link: "/services/opc-registration",
      },
      {
        title: "Partnership Firm Registration",
        desc: "Easy and quick registration process for traditional partnership businesses.",
        icon: <FaHandshake />,
        color: "#8B5CF6",
        light: "#EDE9FE",
        link: "/services/partnership-registration",
      },
      {
        title: "Startup India Registration",
        desc: "Get DPIIT recognition and unlock tax exemptions, funding support and government benefits.",
        icon: <FaLightbulb />,
        color: "#EF4444",
        light: "#FEE2E2",
        link: "/services/startup-registration",
      },
    ],

    // Tab 1: Loan for Business
    [
      {
        title: "Project Loan",
        desc: "Long-term financing for new business projects, expansion and modernization.",
        icon: <FaChartLine />,
        color: "#F97316",
        light: "#FFEDD5",
        link: "/services/project-loan",
      },
      {
        title: "Machine Loan",
        desc: "Get funding to purchase machinery and industrial equipment at flexible terms.",
        icon: <FaTools />,
        color: "#0EA5E9",
        light: "#E0F2FE",
        link: "/services/machine-loan",
      },
      {
        title: "Working Capital Loan (OD/CC)",
        desc: "Maintain steady cash flow with overdraft and cash credit facilities.",
        icon: <FaCoins />,
        color: "#10B981",
        light: "#D1FAE5",
        link: "/services/working-capital",
      },
      {
        title: "MSME Loan",
        desc: "Government-backed loans designed to support micro and small enterprises.",
        icon: <FaPiggyBank />,
        color: "#22C55E",
        light: "#DCFCE7",
        link: "/services/msme-loan",
      },
      {
        title: "Secured Loan",
        desc: "High-value loans offered against security like assets, property or collateral.",
        icon: <FaHandshake />,
        color: "#8B5CF6",
        light: "#EDE9FE",
        link: "/services/secured-loan",
      },
      {
        title: "Unsecured Loan",
        desc: "Business loans without collateral for short-term needs and working capital.",
        icon: <FaUserTie />,
        color: "#EF4444",
        light: "#FEE2E2",
        link: "/services/unsecured-loan",
      },
    ],

    // Tab 2: Government Subsidy
    [
      {
        title: "Subsidy for MSME",
        desc: "Financial incentives for micro and small industries to reduce cost of operations.",
        icon: <FaCoins />,
        color: "#F59E0B",
        light: "#FEF3C7",
        link: "/services/msme-subsidy",
      },
      {
        title: "Subsidy for Large/Thrust Sector",
        desc: "Government support schemes for major industries under thrust categories.",
        icon: <FaBuilding />,
        color: "#3B82F6",
        light: "#DBEAFE",
        link: "/services/large-thrust-subsidy", // ← Adjust if needed
      },
      {
        title: "Subsidy for Mega Sector",
        desc: "Special incentives for mega-scale industrial projects.",
        icon: <FaChartLine />,
        color: "#EF4444",
        light: "#FEE2E2",
        link: "/services/mega-subsidy",
      },
      {
        title: "Subsidy for IT / ITeS",
        desc: "Financial support for IT, software, and BPO service companies.",
        icon: <FaLightbulb />,
        color: "#10B981",
        light: "#D1FAE5",
        link: "/services/it-subsidy",
      },
      {
        title: "Subsidy for Logistic Park",
        desc: "Incentives for constructing and running modern logistics & warehousing parks.",
        icon: <FaTools />,
        color: "#F97316",
        light: "#FFEDD5",
        link: "/services/logistic-subsidy",
      },
      {
        title: "Subsidy for GCC",
        desc: "Government support programs for Global Capability Centers (GCC).",
        icon: <FaUserTie />,
        color: "#22C55E",
        light: "#DCFCE7",
        link: "/services/gcc-subsidy",
      },
    ],

    // Tab 3: Taxation
    [
      {
        title: "GST Registration & Litigation",
        desc: "Complete GST registration, return filing and legal representation.",
        icon: <FaFileInvoice />,
        color: "#EF4444",
        light: "#FEE2E2",
        link: "/services/gst-service",
      },
      {
        title: "Income Tax & TDS",
        desc: "ITR filing, TDS filing, tax planning and compliance management.",
        icon: <FaCogs />,
        color: "#10B981",
        light: "#D1FAE5",
        link: "/services/itr-service",
      },
    ],

    // Tab 4: Audit & Assurance
    [
      {
        title: "Statutory Audit",
        desc: "Ensure complete compliance and financial accuracy as per legal requirements.",
        icon: <FaSearch />,
        color: "#6366F1",
        light: "#E0E7FF",
        link: "/services/statutory-service",
      },
      {
        title: "Tax Audit",
        desc: "Detailed audit to verify tax calculations and income declarations.",
        icon: <FaFileInvoice />,
        color: "#F59E0B",
        light: "#FEF3C7",
        link: "/services/tax-audit",
      },
      {
        title: "Internal Audit",
        desc: "Strengthen internal controls and prevent operational risks.",
        icon: <FaTools />,
        color: "#0EA5E9",
        light: "#E0F2FE",
        link: "/services/internal-audit",
      },
      {
        title: "Bank Audit",
        desc: "Complete audit support for bank loan documentation and verification.",
        icon: <FaPiggyBank />,
        color: "#22C55E",
        light: "#DCFCE7",
        link: "/services/bank-audit",
      },
    ],

    // Tab 5: IPO Advisory
    [
      {
        title: "IPO Advisory & Support",
        desc: "End-to-end assistance for IPO documentation, valuation, SEBI compliance and launch.",
        icon: <FaChartLine />,
        color: "#F97316",
        light: "#FFEDD5",
        link: "/services/ipo-service",
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

              {/* Know More Link - Now from data array */}
              <Link
                href={item.link}
                className="mt-4 text-main font-medium inline-flex items-center hover:text-mainDark transition-colors"
              >
                Know More <span className="ml-1">→</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scrollbar Hide */}
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