"use client";

import React from "react";
import Link from "next/link";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import ContactForm from "@/components/ContactForm";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";
import Image from "next/image";

export default function MegaSectorSubsidyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Government Subsidy for Mega Sector Projects in Gujarat",
    description:
      "Expert support for Mega Sector subsidies in Gujarat — massive capital investment subsidy, interest subsidy, SGST reimbursement, power subsidy, and special incentives under Gujarat Industrial Policy for ultra-large projects.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "Ahmedabad, Gujarat, India",
    serviceType: "Mega Sector Subsidy",
    keywords: [
      "Mega Sector Subsidy Gujarat",
      "Gujarat Industrial Policy Mega Projects",
      "Capital Subsidy Mega Industries",
      "Interest Subsidy Mega Sector",
      "SGST Reimbursement Mega Projects",
      "Mega Project Incentives Gujarat",
    ],
  };

  const otherServices = [
    { name: "Large / Thrust Sector Subsidy", href: "/services/large-thrust-sector-subsidy", icon: "🏭" },
    { name: "MSME Subsidy", href: "/services/msme-subsidy", icon: "🔧" },
    { name: "Project Loan", href: "/services/project-loan", icon: "🏗️" },
    { name: "Company Registration", href: "/services/company-registration", icon: "🏢" },
    { name: "Startup India", href: "/services/startup-india-registration", icon: "🚀" },
    { name: "GST Registration", href: "/services/gst-registration", icon: "🧾" },
  ];

  const faqs = [
    {
      question: "What qualifies as a Mega Sector project in Gujarat?",
      answer:
        "Mega projects typically involve fixed capital investment of ₹250 crore or more (threshold may vary by sector and policy year). They are high-impact projects in thrust or priority sectors with significant employment generation and economic contribution.",
    },
    {
      question: "What are the major incentives for Mega Sector projects?",
      answer:
        "Incentives include: Capital Subsidy (up to 20–30%), Interest Subsidy (5–10% for 10–15 years), 100% SGST / VAT reimbursement (up to 100–200% of investment), Power Subsidy, Stamp Duty Exemption, Electricity Duty Exemption, and special infrastructure support.",
    },
    {
      question: "What is the minimum investment required for Mega Sector subsidy?",
      answer:
        "Usually ₹250 crore or more in fixed capital investment. Lower thresholds may apply in backward/tribal areas or for specific thrust sectors. Additional benefits for Ultra-Mega projects (₹1000 crore+).",
    },
    {
      question: "How long does it take to get Mega Sector subsidy approval?",
      answer:
        "Approval process takes 6–18 months after application, including DPR submission, site inspection, High-Level Committee approval, and final sanction. We help expedite through proper documentation and follow-up.",
    },
    {
      question: "Is there any special benefit for employment generation?",
      answer:
        "Yes — additional incentives based on employment generated (e.g., ₹5,000–₹10,000 per job per year for 5–10 years). Mega projects with high employment get priority and extra benefits.",
    },
  ];

  return (
    <>
      <SEO
        title="Government Subsidy for Mega Sector Projects | Gujarat Industrial Policy"
        description="Expert guidance for Mega Sector subsidies in Gujarat — massive capital subsidy, interest subsidy, 100% SGST reimbursement, power tariff relief, and special incentives for ultra-large projects."
        url="https://patelvaghasiyaassociates.com/services/mega-sector-subsidy"
        image="https://patelvaghasiyaassociates.com/assets/mega-sector-subsidy-banner.jpg"
        keywords="Mega Sector Subsidy Gujarat, Gujarat Industrial Policy Mega Projects, Capital Subsidy Mega Industries, SGST Reimbursement Mega Projects, Mega Project Incentives"
        jsonLd={jsonLd}
      />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative bg-gradient-to-r from-[#134c78] to-[#398db8] rounded-4xl mx-2 py-12 sm:py-16 md:py-20 overflow-hidden mt-20 sm:mt-24 md:mt-28">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-start gap-6 lg:gap-10 relative z-10">
          <motion.div
            className="flex-1 space-y-6 lg:w-2/3"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Government Subsidy to Mega Sector
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-100">
              Unlock massive government incentives for ultra-large industrial projects — capital subsidy, interest relief, 100% SGST reimbursement & more under Gujarat Industrial Policy.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {[
                "Capital Subsidy (up to 30%)",
                "Interest Subsidy (5–10%)",
                "100% SGST / VAT Reimbursement",
                "Power Tariff & Electricity Duty Relief",
                "Stamp Duty & Registration Exemption",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-white text-sm font-medium"
                >
                  {feature}
                </div>
              ))}
            </div>


          </motion.div>

          <motion.div
            className="flex-1 lg:w-1/3 lg:flex lg:justify-end"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactForm /> {/* Your existing ContactForm component */}
          </motion.div>
        </div>
      </section>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-6 lg:gap-10 py-12 sm:py-16 md:py-20 section-bg">
        <div className="flex-1 space-y-12 sm:space-y-16">
          {/* OVERVIEW */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              What is Mega Sector Subsidy?
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800">
                Mega Sector Subsidy is a special incentive package under the Gujarat Industrial Policy for ultra-large industrial projects with investment typically above ₹250 crore (Mega) or ₹1000 crore (Ultra-Mega).
              </p>
              <p className="text-gray-800">
                These projects in priority/thrust sectors receive the highest level of government support — including massive capital subsidy, long-term interest subsidy, 100% SGST reimbursement, power tariff relief, and special infrastructure assistance to attract high-impact investments.
              </p>
            </div>
          </motion.section>

          {/* BENEFITS */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Key Benefits of Mega Sector Subsidy
            </h2>

            <div className="glass-card p-10 space-y-8">
              {[
                {
                  title: "Capital Investment Subsidy",
                  points: [
                    "20–30% of eligible fixed capital investment",
                    "Higher in backward/tribal areas",
                    "Up to ₹50–100 crore or more for Mega/Ultra-Mega projects",
                  ],
                },
                {
                  title: "Interest Subsidy",
                  points: [
                    "5–10% annual interest subsidy on term loans",
                    "For 10–15 years (longest duration among all categories)",
                  ],
                },
                {
                  title: "SGST / VAT Reimbursement",
                  points: [
                    "100% reimbursement of Net SGST",
                    "For 10–20 years (capped at 100–200% of investment)",
                  ],
                },
                {
                  title: "Power Tariff & Electricity Duty",
                  points: [
                    "Significant power tariff reduction",
                    "Full electricity duty exemption for 10+ years",
                  ],
                },
                {
                  title: "Other Special Incentives",
                  points: [
                    "100% Stamp Duty & Registration Fee Exemption",
                    "Employment Generation Incentive (per job subsidy)",
                    "Special infrastructure support (road, water, power)",
                    "Priority in land allotment & approvals",
                  ],
                },
              ].map((benefit, idx) => (
                <div key={idx} className="border-l-4 border-main pl-6">
                  <h3 className="text-xl font-bold text-main-dark mb-2">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <HiCheckCircle className="text-main text-xl mt-1" /> <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ELIGIBILITY */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Eligibility Criteria for Mega Sector Subsidy
            </h2>

            <div className="glass-card p-10 space-y-4">
              {[
                "Minimum fixed capital investment: ₹250 crore (Mega) or ₹1000 crore (Ultra-Mega)",
                "Project must be in thrust/priority sectors (e.g., Chemicals, Pharma, Auto, Renewable Energy, Food Processing, etc.)",
                "New greenfield or substantial expansion projects",
                "Must be located in Gujarat",
                "High employment generation & economic impact",
                "Compliance with environmental, labour & other regulatory norms",
                "Additional benefits in backward/tribal/special category areas",
              ].map((el, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {el}
                </p>
              ))}
            </div>
          </motion.section>

          {/* DOCUMENTS */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Documents Required for Mega Sector Subsidy
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800 font-semibold">Key Documents:</p>
              {[
                "Detailed Project Report (DPR) with financials & employment projection",
                "Sanction Letter from Bank / Financial Institution",
                "Quotation / Invoice for Plant & Machinery",
                "Land Documents / Lease Agreement / Allotment Letter",
                "Pollution Control NOC / Consent to Establish",
                "PAN, Aadhaar, Address Proof of Promoters/Directors",
                "GST Registration (if applicable)",
                "Board Resolution / Partnership Deed",
                "Udyam Registration (if applicable)",
              ].map((doc, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {doc}
                </p>
              ))}
            </div>
          </motion.section>

          {/* PROCESS */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Step-by-Step Process to Avail Mega Sector Subsidy
            </h2>

            <div className="glass-card p-10 space-y-6">
              {[
                {
                  step: "Step 1: Project Conceptualization & DPR",
                  desc: "Prepare comprehensive Detailed Project Report with investment, employment, and economic impact.",
                },
                {
                  step: "Step 2: Secure Term Loan Sanction",
                  desc: "Obtain loan sanction from bank/financial institution for project funding.",
                },
                {
                  step: "Step 3: Apply to Industries & Mines Department",
                  desc: "Submit online application through iNDEXTb / Gujarat Govt portal with DPR & documents.",
                },
                {
                  step: "Step 4: High-Level Committee Scrutiny",
                  desc: "Government committee reviews proposal & conducts site visit.",
                },
                {
                  step: "Step 5: In-Principle / Final Approval",
                  desc: "Receive Letter of Intent or Final Sanction with incentive details.",
                },
                {
                  step: "Step 6: Project Implementation & Subsidy Claim",
                  desc: "Complete project milestones → Submit completion certificate → Claim phased disbursement.",
                },
              ].map((step, idx) => (
                <div key={idx} className="border-l-4 border-main pl-6">
                  <h3 className="text-xl font-bold text-main-dark mb-2">{step.step}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* IMPORTANT NOTES */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Important Notes for Mega Sector Subsidy
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800">
                Mega projects receive the highest incentive package — disbursed in phases after achieving milestones.
              </p>
              <p className="text-gray-800 font-semibold">
                Must maintain employment generation, production targets, and compliance for continued benefits. Gujarat Industrial Policy is updated periodically — we ensure you get the latest maximum benefits.
              </p>
            </div>
          </motion.section>
        </div>

        {/* RIGHT SIDEBAR */}
        <Sidebar services={otherServices} />
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-0 bg-sky-50">
        <FAQ faqs={faqs} />
      </div>

      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <section className="bg-main-dark p-10 rounded-xl shadow-md border border-bg-mainDark-100 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="flex-1"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/mega-sector-subsidy-illustration.png" // ← Replace with your actual image
              alt="Mega Sector Subsidy Gujarat"
              width={400}
              height={400}
              className="rounded-xl"
              priority
            />
          </motion.div>

          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Avail Mega Sector Subsidy?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Get the highest level of government incentives — massive capital subsidy, long-term interest relief, 100% SGST reimbursement & more. Let our experts handle the entire process!
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-main text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-bg-mainDark-600 transition"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}