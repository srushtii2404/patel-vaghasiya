"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";

export default function MachineryLoanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Machinery Loan Consultant in Ahmedabad",
    description:
      "Independent and professional Machinery Loan Consultancy for manufacturers, traders and service providers — eligibility assessment, CMA data, documentation, bank coordination, and subsidy guidance.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "Ahmedabad, Gujarat",
    serviceType: "Machinery Loan Consultancy",
    keywords: [
      "Machinery Loan Consultant Ahmedabad",
      "Machine Loan Consultant",
      "Machinery Finance",
      "CMA Data for Machine Loan",
      "Machinery Loan Documentation",
      "Machine Loan Eligibility",
      "MSME Machinery Loan",
      "CGTMSE Machinery Loan",
      "Machinery Loan Subsidy Gujarat",
      "Equipment Finance Consultant"
    ],
  };

  const otherServices = [
    { name: "Private Limited Company Registration", href: "/services/pvt-ltd", icon: "🏢" },
    { name: "LLP Registration", href: "/services/llp", icon: "📄" },
    { name: "Startup India Registration", href: "/services/startup", icon: "🚀" },
    { name: "Project Loan", href: "/services/project-loan", icon: "💰" },
    { name: "Machine Loan", href: "/services/machine-loan", icon: "🏭" },
    { name: "MSME Loan", href: "/services/msme-loan", icon: "🧾" },
    { name: "Working Capital Loan", href: "/services/working-capital", icon: "📊" },
    { name: "Property Loan", href: "/services/property-loan", icon: "🏠" },
    { name: "Secured Loan", href: "/services/secured-loan", icon: "🔒" },
    { name: "Unsecured Loan", href: "/services/unsecured-loan", icon: "📌" },
    { name: "Government Subsidy Guidance", href: "/services/subsidy", icon: "🏛️" },
  ];

  const faqs = [
    {
      question: "What documents are required for a machinery loan?",
      answer:
        "GST returns, ITR & financial statements, bank statements, machinery quotation / proforma invoice, KYC of business & promoters, business registration documents, collateral documents (if applicable). Banks may ask additional documents based on profile.",
    },
    {
      question: "What types of machinery can be financed?",
      answer:
        "New or upgraded plant & machinery including CNC machines, fabrication machines, molding machines, printing & packaging equipment, commercial vehicles, automation tools and specialized industrial equipment.",
    },
    {
      question: "Can MSMEs get collateral-free machinery loans?",
      answer:
        "Some schemes (like CGTMSE) and certain NBFC products provide collateral-free options for eligible MSMEs. Eligibility depends on business profile and scheme rules.",
    },
  ];

  return (
    <>
      <SEO
        title="Machinery Loan Consultant Service in Ahmedabad | Patel & Vaghasiya CA"
        description="Helping manufacturers, traders & service providers get the right machinery finance — eligibility assessment, CMA data, documentation, lender coordination & subsidy guidance."
        url="https://yourwebsite.com/services/machine-loan"
        image="https://yourwebsite.com/assets/machinery-loan-banner.jpg"
        keywords="Machinery Loan Consultant Ahmedabad, Machine Loan Consultant, Machinery Finance, CMA Data for Machine Loan, Machinery Loan Documentation, Machine Loan Eligibility, MSME Machinery Loan, CGTMSE Machinery Loan, Machinery Loan Subsidy Gujarat, Equipment Finance Consultant"
        jsonLd={jsonLd}
      />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative bg-gradient-to-r from-[#134c78] to-[#398db8] rounded-4xl mx-2 py-12 sm:py-16 md:py-20 overflow-hidden mt-20 sm:mt-24 md:mt-28">
        {/* Soft Animated Circles */}
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
          {/* LEFT TEXT BLOCK */}
          <motion.div
            className="flex-1 space-y-6 lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Machinery Loan Consultant Service in Ahmedabad
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-gray-100">
              Helping Businesses Upgrade, Expand & Grow with the Right Machinery Finance
            </p>

            <p className="text-gray-100 leading-relaxed">
              Every growing business needs modern machinery to increase production, improve quality, and stay ahead of competitors. But selecting the right loan, preparing documents, and dealing with banks can be time-consuming and confusing.
            </p>

            <p className="text-gray-100 leading-relaxed">
              At Patel & Vaghasiya, Chartered Accountants, we provide independent and professional <strong className="text-gray-100">Machinery Loan Consultancy</strong> to help manufacturers, traders, and service providers get the right funding solution for their business expansion.
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            className="flex-1 lg:w-1/3 lg:flex lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-6 lg:gap-10 py-12 sm:py-16 md:py-20 section-bg">
        {/* LEFT CONTENT */}
                <div className="flex-1 space-y-12 sm:space-y-16">
          {/* WHY MACHINERY LOAN */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Why Machinery Loan Is Important for Your Business?
            </h2>

            <div className="glass-card p-10 space-y-6">
              <p className="text-gray-700 text-lg">A Machinery Loan helps you finance:</p>

              <motion.ul
                className="space-y-3 text-gray-700 text-[17px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {[
                  "New or upgraded plant & machinery",
                  "CNC machines, fabrication machines, molding machines",
                  "Printing, packaging & manufacturing equipment",
                  "Commercial vehicles and industrial equipment",
                  "Automation tools, technology machines & specialized equipment",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <HiCheckCircle className="text-main text-xl mt-1" /> {item}
                  </motion.li>
                ))}
              </motion.ul>

              <p className="text-gray-700 text-lg">
                It improves production capacity, reduces manual work, and increases profits.
              </p>
            </div>
          </motion.section>

          {/* OUR SERVICES */}
          <motion.section
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
              Our Machinery Loan Consultancy Services
            </h2>

            <p className="text-gray-700 text-lg">
              We assist you at every step of the funding process so you can focus on business while we take care of paperwork and compliance.
            </p>

            <div className="glass-card p-10 space-y-10">
              {[
                {
                  title: "Loan Eligibility Assessment",
                  points: [
                    "Eligible loan amount",
                    "Type of loan",
                    "Margin requirement",
                    "Expected processing flow",
                  ],
                },
                {
                  title: "Preparation of Required Documents",
                  points: [
                    "Financial statements",
                    "projected financials",
                    "CMA Data",
                    "KYC documents",
                    "Machinery quotations",
                    "Business justification note for banks",
                    "Collateral documents (if needed)",                  ],
                },
                {
                  title: "Bank & NBFC Coordination",
                  points: [
                    "PSU banks",
                    "Private banks",
                    "Co-operative banks",
                    "NBFCs offering fast machinery finance",
                  ],
                },
                {
                  title: "Assistance in Subsidy & Government Schemes",
                  points: [
                    "CGTMSE coverage guidance (collateral-free options)",
                    "MSME subsidies in Gujarat",
                    "Interest Subsidy Schemes for Machinery Purchase",
                    "Technology Upgradation Schemes",
                  ],
                },
                {
                  title: "End-to-End Support till Loan Sanction",
                  points: [
                    "Compliance with banking norms",
                    "Accurate and timely submissions",
                    "Professional representation of your case",
                  ],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="step-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="step-circle">{i + 1}</div>
                  <div className="step-content w-full">
                    <h3 className="font-bold text-main-dark text-xl mb-2">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex gap-2">
                          <HiCheckCircle className="text-main text-[18px]" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* WHO SHOULD AVAIL */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Who Should Avail This Service?</h2>

            <div className="glass-card p-10">
              <ul className="space-y-3 text-gray-700 text-[17px]">
                {[
                  "Manufacturing units",
                  "Engineering workshops",
                  "Fabrication units",
                  "Printing & packaging businesses",
                  "Pharma, chemical & plastic industries",
                  "Furniture & interior units",
                  "Any MSME planning to buy new machinery",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <HiCheckCircle className="text-main text-xl mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* WHY CHOOSE US */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Choose Us as Your Machinery Loan Consultant?</h2>

            <div className="glass-card p-10">
              <ul className="space-y-3 text-gray-700 text-[17px]">
                {[
                  "Chartered Accountants with strong understanding of financial analysis",
                  "Experience with machinery loans for manufacturing & industrial clients",
                  "Transparent process and no misleading promises",
                  "Practical advice understood by all business owners",
                  "One-stop solution for loan, compliance, subsidy & documentation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <HiCheckCircle className="text-main text-xl" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

           {/* Documents Required for Machinery Loan */}
          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Documents Required for Machinery Loan</h2>

            <div className="glass-card p-10">
              <ul className="space-y-3 text-gray-700 text-[17px]">
                {[
                  "GST Returns",
                  "ITR & Financial Statements",
                  "Bank Statements",
                  "Machinery Quotation / Proforma Invoice",
                  "KYC of business & promoters",
                  "Business registration documents",
                  "Collateral documents (if applicable)",
                  "(Additional documents may be requested by the bank based on profile.)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <HiCheckCircle className="text-main text-xl" /> {item}
                  </li>
                ))}
              </ul>
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

      {/* CTA SECTION BELOW FAQ */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <section className="bg-main-dark p-10 rounded-xl shadow-md border border-bg-mainDark-100 flex flex-col md:flex-row items-center gap-8">
          {/* LEFT IMAGE */}
          <motion.div
            className="flex-1"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/5124557.png"
              alt="Machinery Loan Guidance"
              className="rounded-xl"
              width={400}
              height={400}
              priority
            />
          </motion.div>

          {/* RIGHT TEXT & CTA BUTTON */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Talk to Our Machinery Loan Expert
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              If you are planning to purchase new machinery or expand production, we can guide you with the right loan option, documentation, and subsidy benefits.
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
