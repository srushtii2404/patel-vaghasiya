"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import ContactForm from "@/components/ContactForm";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";
import Image from "next/image";

export default function PartnershipRegistrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Partnership Firm Registration Services in Ahmedabad",
    description:
      "Expert Partnership Firm Registration services in India. Get fast, hassle-free registration with professional deed drafting, PAN/TAN, and full legal assistance.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "Ahmedabad, Gujarat, India",
    serviceType: "Partnership Firm Registration",
    keywords: [
      "Partnership Firm Registration Ahmedabad",
      "Partnership Registration Online India",
      "Partnership Deed Drafting",
      "Register Partnership Firm",
      "Partnership Firm PAN TAN",
    ],
  };

  const otherServices = [
    { name: "Private Limited Company", href: "/services/company-registration", icon: "🏢" },
    { name: "LLP Registration", href: "/services/llp-registration", icon: "🤝" },
    { name: "One Person Company", href: "/services/opc-registration", icon: "👤" },
    { name: "GST Registration", href: "/services/gst-registration", icon: "🧾" },
    { name: "MSME Loan", href: "/services/msme-loan", icon: "💰" },
    { name: "Project Loan", href: "/services/project-loan", icon: "🏗️" },
  ];

  const faqs = [
    {
      question: "How to find the registration number of a partnership firm?",
      answer:
        "You can find the registration number on the Partnership Registration Certificate issued by the Registrar of Firms. Alternatively, you can contact the Registrar of Firms in your respective state and provide the firm’s name along with other relevant details to obtain the registration number.",
    },
    {
      question: "How to do GST registration of a partnership firm?",
      answer:
        "GST registration is required if your annual turnover exceeds ₹20 lakh (₹10 lakh in special category states). You can apply online through the GST portal with your partnership deed, PAN, address proof, and bank details. We assist with the complete process.",
    },
    {
      question: "Is registration of a partnership firm compulsory?",
      answer:
        "No, registration is not compulsory under the Indian Partnership Act, 1932. However, it is highly recommended as it provides legal recognition, easier dispute resolution, and better credibility with banks, vendors, and government authorities.",
    },
    {
      question: "What are the documents required for partnership firm registration?",
      answer:
        "Essential documents include: Partnership Deed, PAN Cards of Partners, Residential Address Proof, Business Address Proof, Photographs. Additional documents may include Rent Agreement, NOC from Landlord, Utility Bills, and Bank Statements.",
    },
    {
      question: "How to check partnership firm registration online?",
      answer:
        "You can check the status or verify registration on your state's Registrar of Firms official website by entering the firm name or registration number.",
    },
    {
      question: "What is the procedure for partnership firm registration?",
      answer:
        "Step-by-step: Choose a unique name → Draft Partnership Deed → Get it stamped & signed → Apply to Registrar of Firms (Form No. 1) → Submit documents & fees → Receive Certificate → Open firm bank account.",
    },
    {
      question: "How much time does it take to register a partnership firm in India?",
      answer:
        "The entire process usually takes 5–10 working days, depending on document readiness, stamp duty payment, and Registrar of Firms processing time.",
    },
    {
      question: "What is the cost of partnership registration in India?",
      answer:
        "The total cost ranges from ₹5,000 to ₹15,000 (including professional fees, stamp duty, registration fee, PAN/TAN charges). Exact cost depends on the capital amount and state stamp duty rules.",
    },
    {
      question: "Who is eligible for partnership?",
      answer:
        "Any two or more individuals (minimum 2, maximum 50) who are competent to contract (18+ years, sound mind, not insolvent) can form a partnership. Companies cannot be partners in a traditional partnership.",
    },
    {
      question: "Is a partnership firm a separate legal entity?",
      answer:
        "No, a partnership firm is not a separate legal entity from its partners. The firm and partners are considered the same under law.",
    },
  ];

  return (
    <>
      <SEO
        title="Partnership Firm Registration Online in India | Patel & Vaghasiya"
        description="Register your Partnership Firm online in India with expert help — Partnership Deed drafting, PAN & TAN registration, fast filing & complete legal assistance."
        url="https://patelvaghasiyaassociates.com/services/partnership-registration"
        image="https://patelvaghasiyaassociates.com/assets/partnership-banner.jpg"
        keywords="Partnership Firm Registration Ahmedabad, Partnership Registration Online India, Partnership Deed Drafting, Register Partnership Firm Gujarat"
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
              Partnership Firm Registration Online in India
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-100">
              Launch your business with a legally registered partnership firm — get expert help for drafting agreements and filing paperwork efficiently.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {[
                "Partnership Deed Drafting",
                "PAN & TAN Registration",
                "Professional Legal Assistance",
                "Fast Registration process",
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-white text-sm font-medium">
                  {feature}
                </div>
              ))}
            </div>

            {/* <div className="mt-8 flex flex-wrap items-center gap-8">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">Trusted by</div>
                <div className="text-xl">20,000+ Firms</div>
              </div>
              <div className="text-white text-center">
                <div className="text-3xl font-bold">4.6 out of 5</div>
                <div className="text-sm">(6911)</div>
              </div>
              <div className="text-white text-center">
                <div className="text-3xl font-bold">4.7 out of 5</div>
                <div className="text-sm">(3784)</div>
              </div>
            </div> */}
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
        {/* LEFT CONTENT */}
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
              What is Partnership Firm Registration?
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800">
                Partnership firm registration is the legal process of establishing a business partnership under the Indian Partnership Act, 1932, with the Registrar of Firms. You need a minimum of two partners with no upper limit and zero minimum capital investment.
              </p>
              <p className="text-gray-800">
                After you register a partnership firm, your business gains official legal status and benefits like partner protection, easier loan approvals, improved market reputation, and you operate with complete legal authority.
              </p>
            </div>
          </motion.section>

          {/* TYPES */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Types of Partnership Firms Eligible for Registration
            </h2>

            <div className="glass-card p-10 space-y-6">
              {[
                {
                  title: "General Partnership",
                  desc: "Traditional partnership where all partners share equal responsibility and liability for business operations and debts.",
                },
                {
                  title: "Limited Liability Partnership (LLP)",
                  desc: "A hybrid structure combining the benefits of partnership and corporate entities with limited liability protection.",
                },
                {
                  title: "Limited Partnership",
                  desc: "A Structure where some partners have limited liability while others maintain unlimited liability.",
                },
              ].map((type, idx) => (
                <div key={idx} className="border-l-4 border-main pl-6">
                  <h3 className="text-xl font-bold text-main-dark mb-2">{type.title}</h3>
                  <p className="text-gray-700">{type.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* KEY FEATURES */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Key Features of a Partnership Firm
            </h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800">
                A partnership brings together multiple people to run a business and share its rewards and risks.
              </p>

              {[
                "Two or More Partners: You need at least 2 people to start a partnership, with each person bringing money, skills, or work to the business.",
                "Shared Control: Every partner can make business decisions and sign contracts that legally bind the entire firm.",
                "Profit and Loss Sharing: Partners divide profits and losses according to their agreed percentage or split them equally.",
                "Personal Liability: If the business owes money, partners must pay from their own pockets if the business's funds run out.",
                "No Legal Separation: The law sees the firm and its partners as the same - there's no difference between them legally.",
                "Mutual Agreement: Partners join willingly and can end the partnership when they all agree to do so.",
              ].map((feature, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {feature}
                </p>
              ))}
            </div>
          </motion.section>

          {/* PURPOSE */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Purpose of Partnership Firm Registration
            </h2>

            <div className="glass-card p-10 space-y-4">
              {[
                "Builds Legal Standing: Registration helps you enforce contracts and protect your rights.",
                "Improves Banking Access: Banks trust registered partnerships more and offer accounts and loans more easily.",
                "Tax Benefits: Registration gives you access to tax deductions and simpler tax filing procedures.",
                "Boosts Business Trust: Customers and suppliers prefer working with registered firms over informal partnerships.",
                "Simplifies Property Deals: Your firm can buy, sell, and own property directly in its name.",
                "Handles Disputes Better: Registered partnerships have clear legal ways to solve problems with partners or outsiders.",
              ].map((purpose, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {purpose}
                </p>
              ))}
            </div>
          </motion.section>

          {/* LAWS & AUTHORITIES */}
          <motion.section
            className="space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Laws Governing Partnership Firm Registration in India
            </h2>

            <div className="glass-card p-10 space-y-6">
              <p className="text-gray-800">
                Partnership firm registration in India is mainly governed by the following laws and regulations:
              </p>

              {[
                {
                  title: "Indian Partnership Act, 1932",
                  desc: "This is the core law that regulates the formation, rights, duties, and dissolution of partnership firms.",
                },
                {
                  title: "Income Tax Act, 1961",
                  desc: "It governs the taxation of partnership firms, including provisions for filing returns and paying taxes.",
                },
                {
                  title: "Goods and Services Tax (GST) Laws",
                  desc: "A partnership firm must register for GST if its turnover exceeds the prescribed threshold.",
                },
                {
                  title: "Indian Contract Act, 1872",
                  desc: "This law applies to the partnership agreement, ensuring its validity and enforceability.",
                },
              ].map((law, idx) => (
                <div key={idx} className="border-l-4 border-main pl-6">
                  <h3 className="text-xl font-bold text-main-dark mb-2">{law.title}</h3>
                  <p className="text-gray-700">{law.desc}</p>
                </div>
              ))}

              <h3 className="text-2xl font-bold mt-8 mb-4">Regulatory Authorities</h3>
              <ul className="space-y-2">
                {[
                  "Registrar of Firms (RoF)",
                  "Income Tax Department",
                  "Goods and Services Tax Department",
                  "Local Municipal Authorities (Shops & Establishment Act)",
                ].map((auth, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl" /> {auth}
                  </li>
                ))}
              </ul>
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
              Benefits of Partnership Firm Registration
            </h2>

            <div className="glass-card p-10 space-y-8">
              {[
                {
                  title: "Legal Recognition & Protection",
                  points: [
                    "Establish Legal Standing: Your partnership gains formal recognition.",
                    "Protect Business Identity: Registration provides legal proof of existence.",
                  ],
                },
                {
                  title: "Enhanced Credibility & Trust",
                  points: [
                    "Build Customer Confidence: Registered status demonstrates commitment.",
                    "Strengthen Vendor Relations: Suppliers prefer registered entities.",
                  ],
                },
                {
                  title: "Financial Advantages",
                  points: [
                    "Access Banking Services: Banks offer accounts and loans easily.",
                    "Secure Credit Facilities: Better terms and higher limits.",
                  ],
                },
                {
                  title: "Operational Benefits",
                  points: [
                    "Resolve Partner Disputes: Clear terms help settle conflicts.",
                    "Enable Business Expansion: Facilitates branch/franchise operations.",
                  ],
                },
                {
                  title: "Tax Benefits",
                  points: [
                    "Claim Business Deductions: Reduce tax liability.",
                    "Access Government Schemes: Qualify for MSME benefits.",
                  ],
                },
                {
                  title: "Succession Planning",
                  points: [
                    "Ensure Business Continuity: Outline succession procedures.",
                    "Facilitate Ownership Changes: Simplify partner entry/exit.",
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

          {/* DISADVANTAGES */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Disadvantages of Partnership Firm Registration
            </h2>

            <div className="glass-card p-10 space-y-4">
              {[
                "Unlimited Personal Liability: Partners remain personally liable for debts.",
                "Joint and Several Liability: Each partner bears responsibility for others' actions.",
                "Limited Growth Potential: Cannot issue shares or raise public capital.",
                "Restricted Ownership Transfer: Cannot freely transfer interests.",
                "Lack of Separate Legal Entity: Firm and partners are the same.",
                "Partnership Instability: Death/retirement can dissolve the firm.",
                "Management Disputes: Equal rights can cause deadlocks.",
              ].map((dis, idx) => (
                <p key={idx} className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-red-500 text-xl font-bold">−</span> {dis}
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
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Eligibility Criteria for Partnership Firm Registration
            </h2>

            <div className="glass-card p-10 space-y-4">
              {[
                "Include at least two partners (minimum 2, maximum 50)",
                "Prepare a written partnership agreement (Partnership Deed)",
                "Set a lawful business objective",
                "Ensure only individuals act as partners (no companies)",
                "Confirm all partners are adults (18+ years)",
                "Submit valid identity and address proof",
                "Avoid disqualified individuals (insolvent, mentally unfit, etc.)",
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
              Documents Required for Partnership Firm Registration
            </h2>

            <div className="glass-card p-10 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-main-dark mb-4">Essential Documents</h3>
                <ul className="space-y-2">
                  {[
                    "Partnership Deed",
                    "PAN Cards of Partners",
                    "Residential Address Proof",
                    "Business Address Proof",
                    "Photographs",
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <HiCheckCircle className="text-main text-xl mt-1" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-main-dark mb-4">Additional Documents (if applicable)</h3>
                <ul className="space-y-2">
                  {[
                    "Rent Agreement",
                    "NOC from Landlord",
                    "Utility Bills",
                    "Bank Statements",
                  ].map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <HiCheckCircle className="text-main text-xl mt-1" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* CHECKLIST & PROCESS */}
          <motion.section
            className="space-y-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                Checklist for Partnership Firm Registration
              </h2>
              <div className="glass-card p-10">
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "Finalize Partners & Name",
                    "Draft Partnership Deed",
                    "Stamp & Sign Deed",
                    "Gather Partner Documents (PAN, Address Proofs)",
                    "Arrange Business Address Proof",
                    "Apply to Registrar (Optional but Recommended)",
                    "Obtain a Firm PAN Card",
                    "Open a Firm Bank Account",
                    "Secure Other Licenses (GST, Shops & Establishment, etc.)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <HiCheckCircle className="text-main text-xl" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                How to Register a Partnership Firm
              </h2>
              <div className="glass-card p-10 space-y-8">
                {[
                  {
                    step: "Step 1: Choose a Name for Your Partnership Firm",
                    desc: "Pick a unique name compliant with state regulations. Check availability on Registrar of Firms portal.",
                  },
                  {
                    step: "Step 2: Draft the Partnership Deed",
                    desc: "Prepare detailed deed with names, business scope, capital, profit sharing, duties, etc. Sign on stamp paper.",
                  },
                  {
                    step: "Step 3: Obtain a PAN Card for the Firm",
                    desc: "Apply online via NSDL/UTIITSL for firm PAN (mandatory for bank account & tax).",
                  },
                  {
                    step: "Step 4: Fill Out Application (Form No. 1)",
                    desc: "Obtain Form No. 1 from state RoF website and fill in firm details.",
                  },
                  {
                    step: "Step 5: Submit Documents to Registrar of Firms",
                    desc: "Submit deed, application, fees, PAN, address proofs, affidavit.",
                  },
                  {
                    step: "Step 6: Receive Your Registration Certificate",
                    desc: "Get Certificate with unique firm number after verification.",
                  },
                  {
                    step: "Step 7: Open a Current Bank Account",
                    desc: "Open firm bank account using Certificate & PAN.",
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

          {/* FEES & PENALTIES */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Fees and Penalties of Partnership Firm Registration
            </h2>

            <div className="glass-card p-10 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-main-dark mb-4">Registration Costs</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-left border">Fee Category</th>
                        <th className="p-3 text-left border">Item</th>
                        <th className="p-3 text-left border">Cost/Range (Rs)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border">Government Fees</td>
                        <td className="p-3 border">Partnership deed stamp duty</td>
                        <td className="p-3 border">200 to 2,000 (varies by state)</td>
                      </tr>
                      <tr>
                        <td className="p-3 border"></td>
                        <td className="p-3 border">Registration fees</td>
                        <td className="p-3 border">200 to 1,000 (varies by state)</td>
                      </tr>
                      {/* Add other rows similarly */}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-main-dark mb-4">Penalties for Non-Compliance</h3>
                <ul className="space-y-3">
                  {[
                    "Operating without registration: Partners lose right to sue third parties",
                    "Failure to file Income Tax Returns: Rs 5,000–10,000",
                    "Late GST return filing: Rs 200 per day",
                    "Non-maintenance of books: Up to Rs 25,000",
                  ].map((pen, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <HiCheckCircle className="text-red-500 text-xl mt-1" /> {pen}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* CANCELLATION & RENEWAL */}
          <motion.section
            className="space-y-8"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Cancellation & Renewal of Partnership Firm Registration
            </h2>

            <div className="glass-card p-10 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Cancellation</h3>
                <p className="text-gray-700 mb-4">
                  Registration can be cancelled automatically (dissolution, conversion, non-compliance) or voluntarily (mutual agreement, closure, merger).
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Renewal</h3>
                <p className="text-gray-700">
                  Partnership firm registration is generally permanent. There is no mandatory renewal required in future years.
                </p>
              </div>
            </div>
          </motion.section>

          {/* POST-REGISTRATION COMPLIANCE */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Post Registration Compliance Requirements
            </h2>

            <div className="glass-card p-10 space-y-6">
              {[
                {
                  title: "Income Tax Filing",
                  desc: "File ITR-5 annually (due 31st July or 31st Oct if audit required).",
                },
                {
                  title: "Tax Deducted at Source (TDS)",
                  desc: "Deduct, deposit, and file quarterly TDS returns when applicable.",
                },
                {
                  title: "GST Compliance",
                  desc: "File GSTR-1, GSTR-3B if registered; annual return if applicable.",
                },
                {
                  title: "Partnership Deed Amendments",
                  desc: "Update deed for any partner/capital changes and re-register if required.",
                },
                {
                  title: "Maintenance of Books",
                  desc: "Maintain cash book, ledger, P&L, balance sheet, capital accounts.",
                },
              ].map((comp, idx) => (
                <div key={idx} className="border-l-4 border-main pl-6">
                  <h3 className="text-xl font-bold text-main-dark mb-2">{comp.title}</h3>
                  <p className="text-gray-700">{comp.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CERTIFICATE */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Partnership Firm Registration Certificate
            </h2>

            <div className="glass-card p-10">
              <p className="text-gray-800">
                This certificate is proof that your partnership firm exists in the eyes of the law. It gives your firm official legal recognition under the Indian Partnership Act. It authorizes opening of a bank account in the firm’s name, legal status to enter into contracts, and conduct business transactions.
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
              src="/assets/partnership-illustration.png" // Replace with your actual image
              alt="Partnership Firm Registration"
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
              Ready to Register Your Partnership Firm?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Let our experts handle the entire process — deed drafting, filing, PAN/TAN, and compliance — so you can focus on growing your business.
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