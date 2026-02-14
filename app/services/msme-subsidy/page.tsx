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

export default function MsmeSubsidyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MSME Subsidy & Government Incentive Services in Ahmedabad",
    description:
      "Expert MSME Subsidy services in Gujarat — Get government grants, capital subsidy, interest subsidy, credit guarantee, and state/central scheme benefits with complete application support.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "Ahmedabad, Gujarat, India",
    serviceType: "MSME Subsidy & Incentives",
    keywords: [
      "MSME Subsidy Ahmedabad",
      "Government Subsidy for MSME Gujarat",
      "MSME Loan Subsidy",
      "Credit Guarantee Scheme",
      "Capital Subsidy MSME",
      "Interest Subsidy for MSME",
    ],
  };

  const otherServices = [
    { name: "Company Registration", href: "/services/company-registration", icon: "🏢" },
    { name: "Partnership Registration", href: "/services/partnership-registration", icon: "🤝" },
    { name: "GST Registration", href: "/services/gst-registration", icon: "🧾" },
    { name: "Project Loan", href: "/services/project-loan", icon: "🏗️" },
    { name: "Startup India", href: "/services/startup-india-registration", icon: "🚀" },
    { name: "Tax Advisory", href: "/services/tax-advisory", icon: "📊" },
  ];

  const faqs = [
    {
      question: "Who is eligible for MSME subsidy?",
      answer:
        "Any Micro, Small or Medium Enterprise registered under Udyam Registration (MSME certificate) is eligible. Classification depends on investment in plant/machinery/equipment and annual turnover.",
    },
    {
      question: "What are the main types of MSME subsidies?",
      answer:
        "Capital Subsidy, Interest Subsidy, Credit Guarantee Scheme, Technology Upgradation Subsidy, Marketing Assistance, Export Promotion Subsidy, and state-specific incentives (e.g., Gujarat Industrial Policy).",
    },
    {
      question: "How much subsidy can I get?",
      answer:
        "Subsidy amount varies by scheme: 15–35% capital subsidy, 3–7% interest subsidy, up to 90% guarantee cover under CGTMSE, etc. Maximum limits depend on project cost and category (Micro/Small/Medium).",
    },
    {
      question: "Is Udyam Registration mandatory for subsidy?",
      answer:
        "Yes, Udyam Registration (online MSME certificate) is mandatory for most central and state subsidy schemes. It is free and takes only a few minutes.",
    },
    {
      question: "How long does it take to get MSME subsidy?",
      answer:
        "It depends on the scheme — usually 3–12 months after application submission, including project approval, inspection, and disbursement. We help fast-track the process.",
    },
  ];

  return (
    <>
      <SEO
        title="MSME Subsidy & Government Incentive Services | Ahmedabad, Gujarat"
        description="Expert guidance for MSME Subsidy, capital subsidy, interest subsidy, credit guarantee, PMEGP, CLCSS, and Gujarat state incentives with complete application support."
        url="https://patelvaghasiyaassociates.com/services/msme-subsidy"
        image="https://patelvaghasiyaassociates.com/assets/msme-subsidy-banner.jpg"
        keywords="MSME Subsidy Ahmedabad, Government Subsidy MSME Gujarat, MSME Loan Subsidy, Credit Guarantee Scheme, Capital Subsidy MSME"
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
              MSME Subsidy & Government Incentives
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-100">
              Maximize your growth with government subsidies, grants, and incentives — get expert help for application, approval & disbursement.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {[
                "Capital Subsidy",
                "Interest Subsidy",
                "Credit Guarantee Scheme",
                "Technology Upgradation Support",
                "Export & Marketing Assistance",
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
              What is MSME Subsidy?
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800">
                MSME Subsidy refers to financial assistance, grants, and incentives provided by the Government of India and state governments to support Micro, Small, and Medium Enterprises.
              </p>
              <p className="text-gray-800">
                These subsidies help reduce setup costs, interest burden, technology upgradation, marketing, and export expenses — making businesses more competitive and profitable.
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
              Benefits of MSME Subsidy
            </h2>

            <div className="glass-card p-10 space-y-8">
              {[
                {
                  title: "Capital Subsidy",
                  points: [
                    "15–35% subsidy on plant & machinery cost",
                    "Up to ₹1–5 crore depending on scheme & category",
                  ],
                },
                {
                  title: "Interest Subsidy",
                  points: [
                    "3–7% annual interest subsidy on term loans",
                    "For 5–7 years in many schemes",
                  ],
                },
                {
                  title: "Credit Guarantee",
                  points: [
                    "CGTMSE: Up to 90% loan guarantee without collateral",
                    "No third-party guarantee required",
                  ],
                },
                {
                  title: "Technology & Quality Upgradation",
                  points: [
                    "CLCSS, ZED Certification subsidy",
                    "Energy & environment-friendly equipment support",
                  ],
                },
                {
                  title: "Marketing & Export Assistance",
                  points: [
                    "Bar code, packaging, marketing development assistance",
                    "International trade fair participation subsidy",
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
              Eligibility Criteria for MSME Subsidy
            </h2>

            <div className="glass-card p-10 space-y-4">
              {[
                "Must have valid Udyam Registration (MSME Certificate)",
                "Investment & Turnover within MSME limits (Micro: ₹1 Cr investment & ₹5 Cr turnover, Small: ₹10 Cr & ₹50 Cr, Medium: ₹50 Cr & ₹250 Cr)",
                "Business must be in manufacturing or service sector",
                "Project must be new or expansion/modernization",
                "Must comply with scheme-specific criteria (e.g., location, sector, employment generation)",
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
              Documents Required for MSME Subsidy
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800 font-semibold">Common Documents:</p>
              {[
                "Udyam Registration Certificate",
                "Project Report (Detailed)",
                "Quotation / Invoice for Machinery",
                "Sanction Letter from Bank / Financial Institution",
                "GST Registration Certificate",
                "PAN & Aadhaar of Proprietor / Partners / Directors",
                "Address Proof of Unit",
                "Bank Account Statement",
                "Pollution Control NOC (if applicable)",
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
              Step-by-Step MSME Subsidy Process
            </h2>

            <div className="glass-card p-10 space-y-6">
              {[
                {
                  step: "Step 1: Get Udyam Registration",
                  desc: "Register your business on udyamregistration.gov.in (free & online)",
                },
                {
                  step: "Step 2: Prepare Project Report",
                  desc: "Detailed report with project cost, machinery, employment generation, etc.",
                },
                {
                  step: "Step 3: Apply for Term Loan",
                  desc: "Approach bank/financial institution for project funding",
                },
                {
                  step: "Step 4: Submit Subsidy Application",
                  desc: "Apply online/offline to relevant scheme portal with documents",
                },
                {
                  step: "Step 5: Inspection & Approval",
                  desc: "Site inspection by authorities, followed by sanction letter",
                },
                {
                  step: "Step 6: Subsidy Disbursement",
                  desc: "Subsidy released after project completion & verification",
                },
              ].map((step, idx) => (
                <div key={idx} className="border-l-4 border-main pl-6">
                  <h3 className="text-xl font-bold text-main-dark mb-2">{step.step}</h3>
                  <p className="text-gray-700">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FEES & COMPLIANCE */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Fees, Renewal & Compliance for MSME Subsidy
            </h2>

            <div className="glass-card p-10 space-y-6">
              <p className="text-gray-800">
                Most central MSME subsidy schemes are free to apply (only project-related costs apply). State subsidies may have nominal application fees.
              </p>
              <p className="text-gray-800">
                Subsidy is one-time or time-bound (e.g., 5–7 years interest subsidy). No renewal required — but continued compliance is mandatory.
              </p>
              <p className="text-gray-800 font-semibold">
                Post-approval compliances include project completion report, utilization certificate, annual performance reports, GST/ITR filings.
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
              src="/assets/msme-subsidy-illustration.png" // Replace with your actual image
              alt="MSME Subsidy & Incentives"
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
              Ready to Avail MSME Subsidy?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Let our experts identify the best schemes, prepare applications, and get your subsidy approved — maximize your savings today!
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