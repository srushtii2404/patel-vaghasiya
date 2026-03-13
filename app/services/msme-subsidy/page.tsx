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
import { allServices } from "@/lib/services";

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

  const otherServices = allServices.filter(s => s.href !== "/services/msme-subsidy");

  const faqs = [
    {
      question: "What is Government Subsidy for MSME?",
      answer:
        "Government subsidy is financial assistance provided by Central or State governments to Micro, Small and Medium Enterprises to lower cost of funding, encourage growth, promote employment, support capital investment or reimburse expenses. Schemes may cover capital subsidy, interest subsidy, credit guarantee, technology upgradation, stamp duty, power/water, and other incentives.",
    },
    {
      question: "Who is eligible for MSME subsidy in India?",
      answer:
        "All MSME units – new or existing – are eligible, provided they are registered (usually via Udyam) and classified correctly based on investment in plant & machinery or turnover. Eligibility can further depend on location, sector (manufacturing/service), and specific scheme criteria.",
    },
    {
      question: "What types of subsidies are available for MSMEs?",
      answer:
        "Common subsidies include capital subsidy or term loan assistance, interest subsidy on term loans, credit guarantee cover, technology upgradation support, export/marketing incentives, stamp duty reimbursement, and state-specific incentives under industrial policies.",
    },
    {
      question: "How much subsidy can an MSME get?",
      answer:
        "Subsidy rates vary by scheme – typically 10–50% of project cost for capital subsidies, 3–7% interest subsidy, or fixed amounts. Maximum limits depend on project cost, size category (micro/small/medium) and sector.",
    },
    {
      question: "Is subsidy available for existing businesses or only new units?",
      answer:
        "Both existing and new businesses can claim subsidies. While some schemes target new entrepreneurs, most allow current MSMEs to apply for expansion or modernization grants.",
    },
    {
      question: "Is subsidy available for service sector MSMEs also?",
      answer:
        "Yes. Service-sector MSMEs are eligible under many central and state schemes exactly like manufacturing units, subject to scheme-specific conditions.",
    },
    {
      question: "When should subsidy planning be done – before or after investment?",
      answer:
        "Ideally subsidy planning should be done before investment. Many schemes require prior approval or project sanction; planning in advance ensures compliance and avoids missed opportunities.",
    },
    {
      question: "Can subsidy be claimed after taking a bank loan?",
      answer:
        "Yes, subsidies can often be claimed post-loan, though some schemes require subsidy approval before loan disbursement. We advise coordinating loan and subsidy applications to minimise delays.",
    },
    {
      question: "Is subsidy only for government‑registered units or are state approvals enough?",
      answer:
        "Udyam/MSME registration is generally mandatory. Certain state schemes may also require additional registrations (GST, factory license, etc.) but formal government recognition is essential.",
    },
    {
      question: "How long does it take to receive MSME subsidy?",
      answer:
        "Timelines vary by scheme – typically 3–12 months from application to disbursement, depending on inspections, approvals and fund release. Complex projects may take longer.",
    },
    {
      question: "Can subsidy application be rejected?",
      answer:
        "Yes. Rejections occur due to incomplete documentation, wrong classification, non‑compliance with scheme guidelines or delayed filings. Proper preparation reduces this risk.",
    },
    {
      question: "Is professional help required to claim MSME subsidy?",
      answer:
        "While not mandatory, professional assistance greatly improves accuracy, speeds up processing, and increases your chances of approval by ensuring correct documentation and scheme selection.",
    },
    {
      question: "Why choose us for MSME subsidy consultancy?",
      answer:
        "We provide experienced guidance on scheme identification, accurate application preparation, liaison with authorities, follow‑up until disbursement and post‑approval compliance – all under one roof.",
    },
    {
      question: "Which authority provides MSME subsidies?",
      answer:
        "Subsidies are provided by the Ministry of MSME (central) and by state industry/development departments or nodal agencies such as SIDBI, KVIC, GIDC, etc., depending on the scheme.",
    },
    {
      question: "Can multiple subsidies be claimed for one project?",
      answer:
        "Yes, central and state subsidies can often be combined, or different scheme components accessed, provided the rules allow such stacking. We help structure applications to maximise benefits without violating norms.",
    },
    {
      question: "How can we check which subsidy is best for our business?",
      answer:
        "By analysing your project cost, industry, location, investment plan and current registrations, we shortlist suitable schemes and recommend the most beneficial subsidy mix for your business.",
    },
  ];

  return (
    <>
      <SEO
        title="MSME Subsidy & Government Incentive Services | Ahmedabad, Gujarat"
        description="Expert guidance for MSME Subsidy, capital subsidy, interest subsidy, credit guarantee, PMEGP, CLCSS, and Gujarat state incentives with complete application support."
        url="https://www.pvassociates.in/services/msme-subsidy"
        image="https://www.pvassociates.in/assets/msme-subsidy-banner.jpg"
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
              {/* Aatmanirbhar Gujarat Scheme Overview */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Aatmanibhar Gujarat Subsidy Scheme (2022–2027)</h3>
                <p className="text-blue-800 font-medium">Empowering MSMEs, Startups & Entrepreneurs with subsidies, tax benefits, and financial support</p>
              </div>

              {/* Project Category Table */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Project Category & Applicable Scheme</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-main text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Project Category</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Thresholds / Limits</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Applicable Scheme</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">MSME</td>
                        <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">P&M investment ≤ ₹50 cr</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-800">Assistance to MSMEs scheme</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Capital & Interest Subsidy */}
              <div className="border-l-4 border-main pl-6">
                <h3 className="text-xl font-bold text-main-dark mb-3">Capital Subsidy & Interest Subsidy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Capital Subsidy:</strong> Up to 25% term loan (max ₹35 lakh)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Interest Subsidy:</strong> Up to 7% p.a. (+1% for women, SC/ST, Startups, youth &lt;35)</span>
                  </li>
                </ul>
              </div>

              {/* Tax & Utility Benefits */}
              <div className="border-l-4 border-main pl-6">
                <h3 className="text-xl font-bold text-main-dark mb-3">Tax & Utility Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>SGST Reimbursement:</strong> Up to 100% for 10 years</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>CGTMSE Fees:</strong> 100% for 5 years</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>EPF Reimbursement:</strong> 100% employer's PF of new employees (with limit) for 10 years</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Rent Subsidy:</strong> 65% (max ₹1 lakh p.a. for 5 years)</span>
                  </li>
                </ul>
              </div>

              {/* Power & Electricity Benefits */}
              <div className="border-l-4 border-main pl-6">
                <h3 className="text-xl font-bold text-main-dark mb-3">Power Connection & Electricity Duty Benefit</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Power Subsidy:</strong> 35% (max ₹5 lakh)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Electricity Duty:</strong> 100% exemption</span>
                  </li>
                </ul>
              </div>

              {/* Other Benefits */}
              <div className="border-l-4 border-main pl-6">
                <h3 className="text-xl font-bold text-main-dark mb-3">Other Financial & Quality Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Quality Certification:</strong> 50% (max ₹10 lakh)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>ERP/ICT Support:</strong> Up to ₹1 lakh / ₹5 lakh</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Patent Filing:</strong> 75% (max ₹25 lakh)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Technology Acquisition:</strong> 65% (max ₹50 lakh)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>ZED Certificate:</strong> 50% (max ₹50k)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Energy & Water Audits:</strong> 75% (max ₹50k)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Equipment Support:</strong> 25% (max ₹20 lakh)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Exhibition Support:</strong> Domestic & International (stall, logistics, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>SME IPO:</strong> 25% of cost (max ₹5 lakh)</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-green-50 border border-green-300 p-6 rounded text-center">
                <p className="text-gray-900 font-semibold text-lg">
                  🚀 <strong>Be a part of Aatmanibhar Gujarat</strong>
                </p>
                <p className="text-gray-800 mt-2">
                  Take advantage of subsidies & incentives for your business growth.
                </p>
              </div>
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

            <div className="glass-card p-10 space-y-8">
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> Must have Udhyam Registration
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Investment & Turnover within MSME Limits</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-main text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Enterprise Category</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Investment in Plant & Machinery / Equipment</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Annual Turnover</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { category: "Micro Enterprise", investment: "2.5 Cr", turnover: "10 Cr" },
                        { category: "Small Enterprise", investment: "25 Cr", turnover: "100 Cr" },
                        { category: "Medium Enterprise", investment: "125 Cr", turnover: "500 Cr" },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="border border-gray-300 px-4 py-3 text-gray-800 font-medium">{row.category}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-800">{row.investment}</td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-800">{row.turnover}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> Must comply with scheme-specific criteria (e.g., location, sector, employment generation)
                </p>
                <p className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> New enterprise and existing enterprise that carries out expansion are eligible for it.
                </p>
                <p className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> Subsidy will be released after commencement of commercial production
                </p>
              </div>
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
              src="/assets/5124557.png" // Replace with your actual image
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