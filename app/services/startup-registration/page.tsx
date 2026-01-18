"use client";

import React, { useRef } from "react";
import Link from "next/link";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import ContactForm from "@/components/ContactForm";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";
import Image from "next/image";

export default function StartupIndiaRegistrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Startup India Registration & DPIIT Recognition Services",
    description:
      "Register your Startup under Startup India scheme — DPIIT recognition, tax exemptions, funding support, fast-track IPR, and simplified compliance in Ahmedabad, Gujarat.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "Ahmedabad, Gujarat, India",
    serviceType: "Startup India Registration",
    keywords: [
      "Startup India Registration Ahmedabad",
      "DPIIT Recognition",
      "Startup Tax Benefits",
      "Startup Funding Support",
      "Startup India Scheme",
    ],
  };

  const otherServices = [
    { name: "Private Limited Company", href: "/services/company-registration", icon: "🏢" },
    { name: "LLP Registration", href: "/services/llp-registration", icon: "🤝" },
    { name: "Partnership Firm", href: "/services/partnership-registration", icon: "🤲" },
    { name: "GST Registration", href: "/services/gst-registration", icon: "🧾" },
    { name: "MSME Loan", href: "/services/msme-loan", icon: "💰" },
    { name: "Project Loan", href: "/services/project-loan", icon: "🏗️" },
  ];

  const faqs = [
    {
      question: "What is Startup Registration?",
      answer:
        "Startup Registration involves legally incorporating your business as a Private Limited Company or LLP with the Ministry of Corporate Affairs (MCA). Businesses receive a legal status and then can handle operations by following required compliances.",
    },
    {
      question: "Who is eligible for Startup Registration?",
      answer:
        "Any Private Limited Company, LLP, or registered Partnership Firm less than 10 years old, with turnover below ₹100 crore, working towards innovation/scalable model, and not formed by splitting an existing business.",
    },
    {
      question: "What are the legal documents required for a Startup business?",
      answer:
        "Directors'/Partners' PAN, Aadhaar, Address Proof, Photograph, Registered Office Proof (Rent Agreement/NOC + Utility Bill), Memorandum & Articles of Association (for Pvt Ltd), LLP Agreement (for LLP), Partnership Deed (if applicable).",
    },
    {
      question: "What is the cost of Startup Registration?",
      answer:
        "Incorporation (Pvt Ltd/LLP): ₹12,000–₹25,000 (including govt fees, DSC, DIN, professional fees). DPIIT Recognition is completely free. Total approx. ₹15,000–₹35,000 depending on structure.",
    },
    {
      question: "How long does Startup Registration take?",
      answer:
        "Incorporation: 7–15 working days. DPIIT Recognition: 2–7 working days after application submission (usually instant recognition number + certificate soon after).",
    },
    {
      question: "How to apply for Startup Registration?",
      answer:
        "Step 1: Incorporate entity via MCA (SPICe+ form) → Step 2: Create profile on startupindia.gov.in → Step 3: Fill DPIIT application → Step 4: Upload documents & self-certify → Step 5: Get recognition number/certificate.",
    },
    {
      question: "Which registration is best for a Startup?",
      answer:
        "Private Limited Company is best for most startups (especially if planning to raise funds, issue ESOPs, or scale aggressively). LLP is good for service-based bootstrapped startups with lower compliance needs.",
    },
  ];

  return (
    <>
      <SEO
        title="Startup India Registration & DPIIT Recognition | Ahmedabad, Gujarat"
        description="Register your Startup under Startup India scheme — Get DPIIT recognition, tax holiday, funding support, fast-track IPR, and simplified compliance with expert help."
        url="https://patelvaghasiyaassociates.com/services/startup-india-registration"
        image="https://patelvaghasiyaassociates.com/assets/startup-banner.jpg"
        keywords="Startup India Registration Ahmedabad, DPIIT Recognition, Startup Tax Benefits, Startup Funding, Startup India Scheme Gujarat"
        jsonLd={jsonLd}
      />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative bg-gradient-to-r from-[#134c78] to-[#398db8] rounded-4xl mx-2 py-20 overflow-hidden mt-28">
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

        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-start gap-10 relative z-10">
          <motion.div
            className="flex-1 space-y-6 lg:w-2/3"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Startup Registration Online in India
            </h1>
            <p className="text-2xl font-semibold text-gray-100">
              Incorporate your startup online easily and get legal recognition with end-to-end expert support.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {[
                "Startup Incorporation Certificate",
                "Tax Benefits, Funding & Compliance Relief",
                "ROC Filings & Expert Documentation",
                "Eligibility Check & Full Support",
                "End-to-End Support by Startup Specialists",
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
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex gap-10 py-20 section-bg">
        <div className="flex-1 space-y-16">
          {/* WHAT IS STARTUP REGISTRATION */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-heading">
              What is Startup Registration?
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800">
                Startup Registration is a critical two-stage process that establishes a new business's legal standing and substantial government-backed benefits.
              </p>
              <p className="text-gray-800">
                The first stage is Business Incorporation, which is mandatory and involves registering the business with the Ministry of Corporate Affairs (MCA) as a Private Limited Company, Limited Liability Partnership (LLP), or Partnership Firm. This step provides the business with a legal identity, a unique name, and a Permanent Account Number (PAN).
              </p>
              <p className="text-gray-800">
                The second stage, DPIIT Recognition, is optional but highly recommended. It involves obtaining certification from the Department for Promotion of Industry and Internal Trade (DPIIT) under the Startup India initiative.
              </p>
            </div>
          </motion.section>

          {/* TYPES OF STRUCTURES */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-heading">
              Types of Business Structures for Startup Registration
            </h2>

            <div className="glass-card p-10 space-y-6">
              {[
                {
                  title: "Private Limited Company",
                  desc: "Ideal for startups aiming for growth and funding. Offers limited liability, separate legal identity, and ESOP eligibility. High compliance required.",
                },
                {
                  title: "Limited Liability Partnership (LLP)",
                  desc: "Best for professional firms and bootstrapped startups. Combines flexibility with limited liability. Lower compliance, but not suited for equity funding or ESOPs.",
                },
                {
                  title: "Partnership Firm",
                  desc: "Simple to set up, but partners have unlimited liability. Less suitable for high-risk or investor-backed ventures.",
                },
                {
                  title: "Sole Proprietorship",
                  desc: "Owned by one person with full control and unlimited liability. Easy to start, but not eligible for Startup India (DPIIT) recognition.",
                },
              ].map((type, idx) => (
                <div key={idx} className="border-l-4 border-main pl-6">
                  <h3 className="text-xl font-bold text-main-dark mb-2">{type.title}</h3>
                  <p className="text-gray-700">{type.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* WHAT SETS US APART */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-heading">
              What Sets Us Apart
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "500+ MCA Certified Experts", icon: "👥" },
                { title: "10,000+ Verified Reviews", icon: "⭐" },
                { title: "2500+ Monthly Clients Onboardings", icon: "🚀" },
                { title: "Serving Businesses Across India", icon: "🇮🇳" },
              ].map((item, idx) => (
                <div key={idx} className="glass-card p-6 text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <p className="font-semibold text-main-dark">{item.title}</p>
                </div>
              ))}
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
            <h2 className="text-4xl font-extrabold gradient-heading">
              Benefits of Registering a Startup in India
            </h2>

            <div className="glass-card p-10 space-y-8">
              {[
                {
                  title: "Tax Exemptions",
                  points: [
                    "Three-Year Income Tax Holiday (Section 80-IAC)",
                    "Angel Tax Exemption (Section 56(2)(viib))",
                  ],
                },
                {
                  title: "Funding and Financial Incentives",
                  points: [
                    "Fund of Funds for Startups (FFS)",
                    "Startup India Seed Fund Scheme (SISFS)",
                  ],
                },
                {
                  title: "Simplified Compliance and IPR Protection",
                  points: [
                    "Self-Certification under labour & environmental laws",
                    "80% rebate on patent & 50% on trademark fees",
                    "Fast-track patent examination",
                  ],
                },
                {
                  title: "Easier Public Procurement Norms",
                  points: ["Exempt from prior experience/turnover criteria in tenders"],
                },
                {
                  title: "Simple Winding Up",
                  points: ["Fast-track exit within 90 days under IBC"],
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

          {/* DISADVANTAGES */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-heading">
              Disadvantages of Registering a Startup
            </h2>

            <div className="glass-card p-10 space-y-4">
              {[
                "Funding Delays: Government funds are slow to disburse",
                "Complex Processes: Time-consuming paperwork & strict checks",
                "Limited Mentorship: Government mentors may lack startup experience",
                "High Entry Expectations: Preference for revenue-generating startups",
                "Location Bias: Resources mostly in metro cities",
              ].map((dis, idx) => (
                <p key={idx} className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-red-500 text-xl font-bold">−</span> {dis}
                </p>
              ))}
            </div>
          </motion.section>

          {/* WHO NEEDS */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-heading">
              Who Needs Startup Registration?
            </h2>

            <div className="glass-card p-10 space-y-4">
              {[
                "You Plan to Raise External Funds → Pvt Ltd is must",
                "Bootstrapped Service Business → LLP is good",
                "Highly Regulated Sector → Self-certification benefit helps",
              ].map((who, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {who}
                </p>
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
            <h2 className="text-4xl font-extrabold gradient-heading">
              Eligibility Criteria for Startup Registration
            </h2>

            <div className="glass-card p-10 space-y-4">
              {[
                "Business Structure: Pvt Ltd, LLP, or Registered Partnership Firm",
                "Age of Entity: Less than 10 years old",
                "Annual Turnover: Not exceeding ₹100 crore",
                "Original Entity: Not formed by splitting existing business",
                "Innovation & Scalability: Working towards innovation or scalable model",
              ].map((el, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {el}
                </p>
              ))}
            </div>
          </motion.section>

          {/* DOCUMENTS & PROCESS */}
          <motion.section
            className="space-y-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold gradient-heading">
                Documents Required for Startup Registration
              </h2>
              <div className="glass-card p-10">
                <p className="text-gray-800 mb-4">
                  For Directors/Partners: PAN, Aadhaar, Address Proof, Photograph
                </p>
                <p className="text-gray-800">
                  For Registered Office: Proof of Address + NOC (if rented) + Utility Bill
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold gradient-heading">
                Step-by-Step Process for Startup Registration
              </h2>
              <div className="glass-card p-10 space-y-8">
                {[
                  {
                    step: "Phase 1: Business Incorporation (MCA)",
                    desc: "Obtain DSC/DIN → Reserve Name → Prepare MoA/AoA → File SPICe+ → Get COI, PAN, TAN",
                  },
                  {
                    step: "Phase 2: DPIIT Recognition (Startup India)",
                    desc: "Create profile → Fill application → Upload documents → Self-certify → Get recognition number/certificate",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="border-l-4 border-main pl-6">
                    <h3 className="text-xl font-bold text-main-dark mb-2">{step.step}</h3>
                    <p className="text-gray-700">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* FEES, RENEWAL & COMPLIANCE */}
          <motion.section
            className="space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold gradient-heading">
              Startup Registration Fees, Renewal & Compliance
            </h2>

            <div className="glass-card p-10 space-y-6">
              <p className="text-gray-800">
                DPIIT Recognition is free. Incorporation cost: ₹12,000–₹35,000 depending on structure.
              </p>
              <p className="text-gray-800">
                Legal entity has perpetual succession — no renewal needed if compliances are met.
              </p>
              <p className="text-gray-800 font-semibold">
                Annual compliances include board meetings, AGM, AOC-4, MGT-7, DIR-3 KYC, ITR, GST returns (where applicable).
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
              src="/assets/startup-illustration.png" // ← Replace with your actual startup-related image
              alt="Startup India Registration"
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
              Ready to Launch Your Startup the Right Way?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Get DPIIT recognition, tax benefits, funding support, and complete compliance assistance from our experts.
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