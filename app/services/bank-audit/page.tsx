"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";

export default function BankAuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Bank Audit Services in Ahmedabad",
    description:
      "Expert Bank Audit Services to ensure accuracy, compliance with RBI guidelines, fraud detection and robust risk management for banks and financial institutions.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "Ahmedabad, Gujarat",
    serviceType: "Bank Audit Services",
    keywords: [
      "Bank Audit Services Ahmedabad",
      "Concurrent Audit",
      "Statutory Bank Audit",
      "Forensic Audit for Banks",
      "IS Audit for Banks",
      "Credit Audit",
      "Stock & Book Debts Audit",
    ],
  };

  const otherServices = [
    { name: "Statutory Audit", href: "/services/statutory-audit", icon: "📊" },
    { name: "Internal Audit", href: "/services/internal-audit", icon: "🔍" },
    { name: "Tax Audit", href: "/services/tax-audit", icon: "🧾" },
    { name: "GST Registration", href: "/services/gst-registration", icon: "📄" },
    { name: "MSME Loan", href: "/services/msme-loan", icon: "💰" },
    { name: "Project Loan", href: "/services/project-loan", icon: "🏗️" },
  ];

  const faqs = [
    {
      question: "What types of banks do you audit?",
      answer:
        "We audit Public & Private Sector Banks, RRBs, Co-operative Banks, NBFCs, microfinance institutions, credit societies and fintech lending platforms.",
    },
    {
      question: "What is Concurrent Audit and why is it important?",
      answer:
        "Concurrent Audit is an ongoing review of branch operations (daily/periodic) to verify transactions, KYC compliance, monitoring of advances and to identify fraud risks early.",
    },
    {
      question: "Do you follow RBI guidelines and LFAR reporting?",
      answer:
        "Yes — our methodology includes RBI compliance checks and preparation of Long Form Audit Reports (LFAR) where applicable, along with actionable recommendations.",
    },
  ];

  return (
    <>
      <SEO
        title="Bank Audit Services in Ahmedabad | Patel & Vaghasiya CA"
        description="Ensure accuracy, compliance & trust with our expert Bank Audit Services — statutory audits, concurrent audits, IS audits, credit & forensic audits for banks and financial institutions."
        url="https://yourwebsite.com/services/bank-audit"
        image="https://yourwebsite.com/assets/bank-audit-banner.jpg"
        keywords="Bank Audit Services Ahmedabad, Bank Audit, Concurrent Audit, IS Audit, Forensic Audit, Credit Audit"
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">Bank Audit Services</h1>
            <p className="text-2xl font-semibold text-gray-100">Ensure Accuracy, Compliance & Trust With Our Expert Bank Audit Services</p>

            <p className="text-gray-100 leading-relaxed">
              In the fast-changing banking and financial ecosystem, accuracy, transparency, and strict compliance are non-negotiable. Our Bank Audit Services are designed to help banks and financial institutions strengthen internal controls, prevent misstatements, and ensure adherence to RBI guidelines and statutory requirements. With a proven track record and domain expertise, we deliver audits that are meticulous, compliant, and value-driven.
            </p>
          </motion.div>

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
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex gap-10 py-20 section-bg">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-16">
          {/* WHY BANK AUDITS ARE CRUCIAL */}
          <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-extrabold gradient-heading">Why Bank Audits Are Crucial</h2>

            <div className="glass-card p-10 space-y-4">
              <p className="text-gray-800">A bank handles high-volume transactions, customer deposits, and sensitive financial data. Any error, non-compliance, or weak control can lead to heavy penalties, reputational risk, and financial loss. Our Bank Audit Services help ensure:</p>

              {[
                "Accuracy in financial reporting",
                "Compliance with RBI, Income Tax, and statutory norms",
                "Improvement in internal controls and risk management",
                "Detection of irregularities, fraud, and non-performing assets (NPAs)",
                "Efficient branch functioning and MIS reporting",
              ].map((item, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {item}
                </p>
              ))}
            </div>
          </motion.section>

          {/* OUR BANK AUDIT EXPERTISE */}
          <motion.section className="space-y-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.1 }}>
            <h2 className="text-4xl font-extrabold gradient-heading">Our Bank Audit Expertise</h2>

            <div className="glass-card p-10 space-y-8">
              {[
                {
                  title: "Statutory Bank Audit",
                  points: [
                    "Verification of financial statements",
                    "Review of advances, asset classification & provisioning",
                    "Audit of income recognition and expenditure",
                    "Compliance with RBI Master Directions",
                    "Reporting as per LFAR (Long Form Audit Report)",
                  ],
                },
                {
                  title: "Concurrent Audit",
                  points: [
                    "Regular, ongoing audit of branch operations",
                    "Verification of daily transactions, KYC compliance",
                    "Monitoring of cash, deposits, loans, and high-value accounts",
                    "Fraud risk identification and prevention",
                  ],
                },
                {
                  title: "Stock & Book Debts Audit",
                  points: [
                    "Assessment of drawing power",
                    "Verification of stock statements, creditors, debtors",
                    "Review of turnover & fund utilization",
                    "Reporting irregularities impacting loan limits",
                  ],
                },
                {
                  title: "Revenue Audit",
                  points: [
                    "Review of interest income, fees, & charges",
                    "Detection of revenue leakages",
                    "Reviewing application of interest rates and fee structures",
                    "Ensuring proper classification and accounting",
                  ],
                },
                {
                  title: "Information System (IS) Audit",
                  points: [
                    "Review of CBS system controls",
                    "Security evaluation and access rights",
                    "IT governance & risk assessment",
                    "Data integrity and cyber-security compliance",
                  ],
                },
                {
                  title: "Credit Audit",
                  points: [
                    "Loan documentation review",
                    "Appraisal process verification",
                    "End-use check of funds",
                    "Monitoring high-risk exposures",
                  ],
                },
                {
                  title: "Forensic Audit for Banks",
                  points: [
                    "Investigation of fraud-suspected accounts",
                    "Tracing fund diversion",
                    "Transaction trail analysis",
                    "Reporting for legal & regulatory action",
                  ],
                },
              ].map((service, idx) => (
                <motion.div key={idx} className="step-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.12 }}>
                  <div className="step-circle">{idx + 1}</div>
                  <div className="step-content w-full">
                    <h3 className="font-bold text-main-dark text-xl mb-2">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <HiCheckCircle className="text-main text-xl mt-1" /> <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* AUDIT APPROACH */}
          <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-extrabold gradient-heading">Our Audit Approach</h2>

            <div className="glass-card p-10 space-y-3">
                <p className="text-gray-700 text-md">We follow a structured, technology-driven and compliance-oriented audit methodology:
</p>
              {[
                "Planning & Understanding Bank Operations",
                "Risk Assessment & Control Testing",
                "Data Analysis using Tech Tools",
                "Verification of Records & Field Inspection",
                "Compliance Checks with RBI & Statutory Norms",
                "Reporting & Actionable Recommendations",
                "Follow-up Review for Implementation",
              ].map((step, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {step}
                </p>
              ))}

              <p className="text-gray-700 mt-4">
                Our goal is not only to detect issues but also to add value by suggesting improvements that enhance performance, efficiency, and compliance.
              </p>
            </div>
          </motion.section>

          {/* WHY CHOOSE US */}
          <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-extrabold gradient-heading">Why Choose Us?</h2>

            <div className="glass-card p-10 space-y-6">
              {[
                "Experienced team of Chartered Accountants",
                "Strong understanding of CBS systems & banking processes",
                "Timely completion of audits",
                "Transparent communication & professional reporting",
                "100% compliance with RBI guidelines",
                "Trusted by banks, NBFCs, and financial institutions",
                "Data confidentiality & secured systems",
              ].map((item, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {item}
                </p>
              ))}
            </div>
          </motion.section>

          {/* WHO CAN AVAIL */}
          <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-extrabold gradient-heading">Who Can Avail Our Bank Audit Services?</h2>

            <div className="glass-card p-10 space-y-3">
              {[
                "Public & Private Sector Banks",
                "Regional Rural Banks (RRBs)",
                "Co-operative Banks",
                "NBFCs & Micro-finance Institutions",
                "Credit Societies",
                "Fintech-enabled lending platforms",
              ].map((item, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {item}
                </p>
              ))}

              <p className="mt-4 text-gray-700">Looking for a reliable and experienced partner for your bank audit requirements? We ensure thorough auditing, compliance assurance, and value-added insights that strengthen your branch’s overall financial health.</p>
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
          <motion.div className="flex-1" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Image src="/assets/5124557.png" alt="Bank Audit" className="rounded-xl" width={400} height={400} priority />
          </motion.div>

          <motion.div className="flex-1 text-center md:text-left" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Get Reliable Bank Audit Support</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Safeguard your financial accuracy and ensure complete compliance with our professional bank audit services.</p>
            <div className="mt-6">
              <Link href="/contact" className="inline-block bg-main text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-bg-mainDark-600 transition">Contact Us Today</Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
