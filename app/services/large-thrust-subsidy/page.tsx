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

export default function LargeThrustSectorSubsidyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Government Subsidy for Large / Thrust Sector in Gujarat",
    description:
      "Expert assistance for government subsidies to Large & Thrust Sector industries — capital subsidy, interest subsidy, SGST reimbursement, power tariff subsidy, and more under Gujarat Industrial Policy.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "Ahmedabad, Gujarat, India",
    serviceType: "Large & Thrust Sector Subsidy",
    keywords: [
      "Large Sector Subsidy Gujarat",
      "Thrust Sector Subsidy",
      "Gujarat Industrial Policy Subsidy",
      "Capital Subsidy Large Industries",
      "Interest Subsidy Thrust Sector",
      "SGST Reimbursement Gujarat",
    ],
  };

  const otherServices = [
    { name: "MSME Subsidy", href: "/services/msme-subsidy", icon: "🏭" },
    { name: "Company Registration", href: "/services/company-registration", icon: "🏢" },
    { name: "Project Loan", href: "/services/project-loan", icon: "🏗️" },
    { name: "Startup India", href: "/services/startup-india-registration", icon: "🚀" },
    { name: "GST Registration", href: "/services/gst-registration", icon: "🧾" },
    { name: "Tax Advisory", href: "/services/tax-advisory", icon: "📊" },
  ];

  const faqs = [
    {
      question: "What is considered a Large / Thrust Sector project?",
      answer:
        "Large Sector projects typically have investment ≥ ₹50 crore. Thrust Sectors include industries prioritized by the Gujarat government (e.g., Chemicals, Pharmaceuticals, Textiles, Engineering, Renewable Energy, Food Processing, Ceramics, Auto & Auto Components, etc.).",
    },
    {
      question: "What are the major incentives under Gujarat Industrial Policy?",
      answer:
        "Capital Investment Subsidy (up to 20–25%), Interest Subsidy (5–7% for 5–10 years), SGST / VAT Reimbursement (up to 100% for 7–10 years), Power Tariff Subsidy, Employment Generation Subsidy, Stamp Duty Exemption, and more.",
    },
    {
      question: "What is the minimum investment required for Large Sector subsidy?",
      answer:
        "Minimum fixed capital investment of ₹50 crore (varies by category & location — lower in backward/tribal areas). Thrust sector projects may have additional relaxations.",
    },
    {
      question: "How long does it take to get subsidy approval?",
      answer:
        "Approval usually takes 3–12 months after application submission, depending on project size, documentation, site inspection, and government processing time.",
    },
    {
      question: "Is there any SGST / GST reimbursement for large industries?",
      answer:
        "Yes — under Gujarat Industrial Policy, eligible large & thrust sector units get reimbursement of 70–100% of Net SGST paid for 7–10 years (capped at 100% of fixed capital investment in most cases).",
    },
  ];

  return (
    <>
      <SEO
        title="Government Subsidy for Large / Thrust Sector | Gujarat Industrial Policy"
        description="Expert support for subsidies to Large & Thrust Sector industries in Gujarat — capital subsidy, interest subsidy, SGST reimbursement, power tariff subsidy, and more."
        url="https://patelvaghasiyaassociates.com/services/large-thrust-sector-subsidy"
        image="https://patelvaghasiyaassociates.com/assets/large-thrust-subsidy-banner.jpg"
        keywords="Large Sector Subsidy Gujarat, Thrust Sector Subsidy, Gujarat Industrial Policy Subsidy, Capital Subsidy Large Industries, SGST Reimbursement Gujarat"
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
              Government Subsidy to Large / Thrust Sector
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-100">
              Maximize your industrial project with attractive capital subsidy, interest subsidy, SGST reimbursement, and more under Gujarat Industrial Policy.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {[
                "Capital Investment Subsidy",
                "Interest Subsidy (5–7%)",
                "SGST / VAT Reimbursement",
                "Power Tariff Subsidy",
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
              What is Large / Thrust Sector Subsidy?
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800">
                The Government of Gujarat offers attractive incentives under the Gujarat Industrial Policy to promote large-scale investments and thrust sector industries.
              </p>
              <p className="text-gray-800">
                Large Sector projects (investment ≥ ₹50 crore) and Thrust Sector industries (e.g., Chemicals, Pharma, Textiles, Engineering, Renewable Energy, Food Processing, etc.) receive capital subsidy, interest subsidy, SGST reimbursement, power tariff relief, and other benefits to make Gujarat a preferred investment destination.
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
              Key Benefits of Large / Thrust Sector Subsidy
            </h2>

            <div className="glass-card p-10 space-y-8">
              {[
                {
                  title: "Capital Investment Subsidy",
                  points: [
                    "10–25% of eligible fixed capital investment",
                    "Higher rates in backward/tribal areas",
                    "Up to ₹20–50 crore maximum (varies by project)",
                  ],
                },
                {
                  title: "Interest Subsidy",
                  points: [
                    "5–7% annual interest subsidy on term loans",
                    "For 5–10 years depending on location & sector",
                  ],
                },
                {
                  title: "SGST / VAT Reimbursement",
                  points: [
                    "70–100% reimbursement of Net SGST paid",
                    "For 7–10 years (capped at 100% of eligible investment)",
                  ],
                },
                {
                  title: "Power Tariff Subsidy",
                  points: [
                    "Fixed power tariff reduction",
                    "Additional subsidy for renewable energy usage",
                  ],
                },
                {
                  title: "Other Incentives",
                  points: [
                    "Stamp Duty & Registration Fee Exemption",
                    "Employment Generation Subsidy",
                    "Electricity Duty Exemption",
                    "Special incentives for Mega / Ultra-Mega projects",
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
              Eligibility Criteria for Large / Thrust Sector Subsidy
            </h2>

            <div className="glass-card p-10 space-y-4">
              {[
                "Minimum fixed capital investment: ₹50 crore (Large Sector)",
                "Project must be in Thrust Sector (as notified by Gujarat Govt)",
                "New or expansion/modernization projects eligible",
                "Must be set up in Gujarat",
                "Compliance with environmental, labour & other norms",
                "Higher benefits in backward, tribal, or special category areas",
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
              Documents Required for Large / Thrust Sector Subsidy
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800 font-semibold">Common Documents:</p>
              {[
                "Detailed Project Report (DPR)",
                "Udyam Registration / MSME Certificate (if applicable)",
                "Sanction Letter from Bank / Financial Institution",
                "Quotation / Invoice for Plant & Machinery",
                "Land Documents / Lease Agreement",
                "Pollution Control NOC / Consent",
                "PAN, Aadhaar, Address Proof of Promoters",
                "GST Registration (if applicable)",
                "Board Resolution / Partnership Deed",
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
              Step-by-Step Process to Avail Subsidy
            </h2>

            <div className="glass-card p-10 space-y-6">
              {[
                {
                  step: "Step 1: Project Planning & DPR",
                  desc: "Prepare Detailed Project Report with investment, employment, and financials.",
                },
                {
                  step: "Step 2: Apply for Term Loan",
                  desc: "Get loan sanction from bank/financial institution.",
                },
                {
                  step: "Step 3: Submit Application to Industries Department",
                  desc: "Apply online through iNDEXTb / Gujarat Govt portal with documents.",
                },
                {
                  step: "Step 4: Scrutiny & Site Inspection",
                  desc: "Government committee reviews & conducts site visit.",
                },
                {
                  step: "Step 5: In-Principle Approval",
                  desc: "Receive Letter of Intent / In-principle approval.",
                },
                {
                  step: "Step 6: Implementation & Subsidy Claim",
                  desc: "Complete project → Submit completion certificate → Claim subsidy disbursement.",
                },
              ].map((step, idx) => (
                <div key={idx} className="border-l-4 border-main pl-6">
                  <h3 className="text-xl font-bold text-main-dark mb-2">{step.step}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* COMPLIANCE & NOTE */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Important Compliance & Notes
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800">
                Subsidy is disbursed in phases after project milestones. Must maintain employment generation & production targets for continued benefits.
              </p>
              <p className="text-gray-800 font-semibold">
                Gujarat Industrial Policy is periodically updated — we ensure you get the latest incentives and maximum benefits.
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
              src="/assets/large-thrust-subsidy-illustration.png" // ← Replace with your actual image
              alt="Large & Thrust Sector Subsidy"
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
              Ready to Avail Large / Thrust Sector Subsidy?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Get maximum benefits under Gujarat Industrial Policy — capital subsidy, interest relief, SGST reimbursement & more. Let our experts handle everything!
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