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

  const otherServices = allServices.filter(s => s.href !== "/services/large-thrust-subsidy");

  const faqs = [
    {
      question: "What is a Mega / Thrust Sector Project under Government subsidy schemes?",
      answer:
        "A Mega or Thrust Sector project is a large-scale industrial project that the Government actively promotes due to its high investment value, employment generation, exports, or strategic importance. Such projects are eligible for special incentives, higher subsidy limits, and fast-track approvals.",
    },
    {
      question: "Which businesses qualify as Mega or Thrust Sector units?",
      answer:
        "Eligibility depends on investment size, sector, and location. Typically eligible businesses include large manufacturing units, export-oriented units, engineering & specialty industries, chemical/pharma/textiles, auto & auto components, infrastructure-derived industries, and government-notified thrust sectors.",
    },
    {
      question: "What types of subsidies are available for Mega / Thrust Sector projects?",
      answer:
        "Eligible projects may receive multiple benefits such as capital investment subsidy, interest subsidy on term loans, stamp duty & registration fee exemption, electricity duty exemption, power tariff subsidy, employment generation incentives, SGST reimbursement, land & infrastructure support, etc.",
    },
    {
      question: "Is subsidy available only from State Government or also from Central Government?",
      answer:
        "Subsidies may be available from both Central and State Governments, depending on the scheme. Central schemes are generally framed by Government of India, while states offer additional and often more lucrative incentives under their industrial policies.",
    },
    {
      question: "What is the minimum investment required to qualify as a Mega project?",
      answer:
        "Minimum investment criteria differ from state to state but generally investment runs into crores of rupees. Higher investment attracts higher subsidy ceilings, and employment generation is also a key factor.",
    },
    {
      question: "Can an existing business expand and still get Mega sector subsidy?",
      answer:
        "Yes. Existing units are eligible if they undertake expansion, modernization or new product lines and meet additional investment and employment criteria; approvals are taken before starting expansion.",
    },
    {
      question: "What is the most common mistake businesses make while applying for subsidies?",
      answer:
        "The biggest mistake is starting investment or purchasing machinery before obtaining eligibility/acknowledgment approval. Once this happens, the subsidy may be rejected permanently, even if the project otherwise qualifies.",
    },
    {
      question: "How long does it take to receive Mega sector subsidy?",
      answer:
        "The timeline usually involves eligibility approval, investment completion, verification & inspection, claim filing & disbursement. Typically, 6 months to 24 months, depending on scheme and compliance quality.",
    },
    {
      question: "Are subsidies linked with bank loans or project finance?",
      answer:
        "Yes. Most Mega sector subsidies are linked with bank loans, project finance, or institutional funding. Proper project report, certifications, and bank coordination significantly improve approval and disbursement speed.",
    },
    {
      question: "Can multiple subsidies be claimed for the same project?",
      answer:
        "Yes, in most cases businesses can combine multiple incentives subject to policy limits and non-duplication clauses. Professional structuring ensures maximum lawful benefit.",
    },
    {
      question: "Is subsidy income taxable?",
      answer:
        "In many cases, capital-linked subsidies are treated as capital receipts and may not be taxable, while revenue-linked incentives could be taxable. Correct accounting and tax treatment is crucial to avoid future disputes.",
    },
    {
      question: "What documents are required for Mega sector subsidy application?",
      answer:
        "Common documents include project report/DPR, term loan sanction letter, land & factory documents, CA certificate, Udyam/Industrial registration, machinery invoices & payment proofs, employment details. Documentation accuracy directly impacts approval and disbursement.",
    },
    {
      question: "Why should a Chartered Accountant handle Mega sector subsidy cases?",
      answer:
        "Mega sector subsidy involves investment benefit, zero rejection risk, and long-term compliance safety. A CA ensures maximum benefit, prepares correct project report, handles documentation, timelines, departmental liaison, tax & accounting impact.",
    },
    {
      question: "How can your firm help in Mega / Thrust Sector subsidy services?",
      answer:
        "We provide end-to-end assistance including eligibility analysis, project structuring, subsidy planning before investment, application filling & follow-up, disbursement support, post-subsidy compliance and tax advisory. Our objective is not just subsidy approval, but subsidy realization.",
    },
  ];

  return (
    <>
      <SEO
        title="Government Subsidy for Large / Thrust Sector | Gujarat Industrial Policy"
        description="Expert support for subsidies to Large & Thrust Sector industries in Gujarat — capital subsidy, interest subsidy, SGST reimbursement, power tariff subsidy, and more."
        url="https://pvassociates.in/services/large-thrust-sector-subsidy"
        image="https://pvassociates.in/assets/large-thrust-subsidy-banner.jpg"
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
              {/* Scheme Overview */}
              <div className="bg-blue-50 p-6 rounded">
                <h3 className="text-xl font-bold text-main-dark mb-2">Aatmanibhar Gujarat Subsidy Scheme (2022–2027)</h3>
                <p className="text-main font-medium">Empowering Large and Thrust Sector with subsidies, tax benefits, and financial support.</p>
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
                      <tr className="">
                        <td className="border border-gray-300 px-4 py-3 font-bold text-gray-900">Large Industries / Thrust</td>
                        <td className="border border-gray-300 px-4 py-3 text-red-600 font-semibold">P&M investment &gt; ₹50 cr; plus notified in Thrust</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-800">Assistance to Large &amp; Thrust Industries</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Interest Subsidy Section */}
              <div className="border-l-4 border-main pl-6">
                <h3 className="text-xl font-bold text-main-dark mb-4">Interest Subsidy</h3>
                <p className="text-gray-700 mb-4">Up to 7% (subject to maximum up to 1.2% of EFCI per annum) for 10 years</p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-main text-white">
                        <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Particulars</th>
                        <th colSpan="2" className="border border-gray-300 px-3 py-2 text-center font-semibold">Taluka Category 1</th>
                        <th colSpan="2" className="border border-gray-300 px-3 py-2 text-center font-semibold">Taluka Category 2</th>
                        <th colSpan="2" className="border border-gray-300 px-3 py-2 text-center font-semibold">Taluka Category 3</th>
                      </tr>
                      <tr className="bg-blue-100">
                        <th className="border border-gray-300 px-3 py-2 text-left"></th>
                        <th className="border border-gray-300 px-3 py-2 text-center font-medium">General</th>
                        <th className="border border-gray-300 px-3 py-2 text-center font-medium">Thrust</th>
                        <th className="border border-gray-300 px-3 py-2 text-center font-medium">General</th>
                        <th className="border border-gray-300 px-3 py-2 text-center font-medium">Thrust</th>
                        <th className="border border-gray-300 px-3 py-2 text-center font-medium">General</th>
                        <th className="border border-gray-300 px-3 py-2 text-center font-medium">Thrust</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-3 py-2 font-medium">Ratio of Incentive on Disbursed Term Loan Amount</td>
                        <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">7%</td>
                        <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">7%</td>
                        <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">7%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">EFCI (Per Annum)</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">1%</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">1.2%</td>
                        <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">1%</td>
                        <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">1%</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border border-gray-300 px-3 py-2 font-medium">Tenure</td>
                        <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">10 Years</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">8 Years</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">10 Years</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">6 Years</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">8 Years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-2">* EFCI = Eligible Fixed Capital Investment</p>
              </div>

              {/* Tax & PF Benefits */}
              <div className="border-l-4 border-main pl-6">
                <h3 className="text-xl font-bold text-main-dark mb-4">Tax & PF Benefits</h3>
                
                {/* SGST Reimbursement */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">SGST Reimbursement</h4>
                  <p className="text-gray-700 mb-3">Up to 100% (subject to maximum up to 8% of EFCI per annum) for 10 years</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-main text-white">
                          <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Particulars</th>
                          <th colSpan="2" className="border border-gray-300 px-3 py-2 text-center font-semibold">Taluka Category 1</th>
                          <th colSpan="2" className="border border-gray-300 px-3 py-2 text-center font-semibold">Taluka Category 2</th>
                          <th colSpan="2" className="border border-gray-300 px-3 py-2 text-center font-semibold">Taluka Category 3</th>
                        </tr>
                        <tr className="bg-blue-100">
                          <th className="border border-gray-300 px-3 py-2 text-left"></th>
                          <th className="border border-gray-300 px-3 py-2 text-center font-medium">General Sector</th>
                          <th className="border border-gray-300 px-3 py-2 text-center font-medium">Thrust Sector</th>
                          <th className="border border-gray-300 px-3 py-2 text-center font-medium">General Sector</th>
                          <th className="border border-gray-300 px-3 py-2 text-center font-medium">Thrust Sector</th>
                          <th className="border border-gray-300 px-3 py-2 text-center font-medium">General Sector</th>
                          <th className="border border-gray-300 px-3 py-2 text-center font-medium">Thrust Sector</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-3 py-2 font-medium">% Net SGST</td>
                          <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">100%</td>
                          <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">90%</td>
                          <td colSpan={2} className="border border-gray-300 px-3 py-2 text-center">80%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-3 py-2 font-medium">EFCI (Per Annum)</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">7.5%</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">8%</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">6.5%</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">7%</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">5%</td>
                          <td className="border border-gray-300 px-3 py-2 text-center">5.5%</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="border border-gray-300 px-3 py-2 font-medium">Tenure</td>
                          <td colSpan="2" className="border border-gray-300 px-3 py-2 text-center">10 Years</td>
                          <td colSpan="2" className="border border-gray-300 px-3 py-2 text-center">10 Years</td>
                          <td colSpan="2" className="border border-gray-300 px-3 py-2 text-center">10 Years</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">* EFCI = Eligible Fixed Capital Investment</p>
                </div>

                {/* EPF Reimbursement */}
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>EPF Reimbursement:</strong> 100% employer's PF of new employees (with limit) for 10 years</span>
                  </li>
                </ul>
              </div>

              {/* Electricity Duty Benefit */}
              <div className="border-l-4 border-main pl-6">
                <h3 className="text-xl font-bold text-main-dark mb-3">Electricity Duty Benefit</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" /> <span><strong>Electricity Duty:</strong> 100% exemption</span>
                  </li>
                </ul>
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
              src="/assets/5124557.png" // ← Replace with your actual image
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