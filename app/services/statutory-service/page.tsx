"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";
import { allServices } from "@/lib/services";

export default function StatutoryAuditPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Statutory Audit Services in Ahmedabad",
    description:
      "End-to-end Statutory Audit services to enhance reliability, improve compliance, and give stakeholders financial confidence.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "Ahmedabad, Gujarat",
    serviceType: "Statutory Audit Services",
    keywords: [
      "Statutory Audit Services Ahmedabad",
      "Audit Compliance",
      "Financial Statement Audit",
      "Internal Control Evaluation",
      "Companies Act Audit",
      "Audit for Private Limited Company",
      "Audit for LLP",
      "Audit Recommendations",
    ],
  };

  const otherServices = allServices.filter(s => s.href !== "/services/statutory-service");

  const faqs = [
    {
      question: "What is a statutory audit?",
      answer:
        "A statutory audit is a mandatory audit required by law to verify whether a company's financial statements present a true and fair view of its financial position, as per applicable laws like the Companies Act, Income Tax Act, LLP Act, etc.",
    },
    {
      question: "Who is required to undergo a statutory audit in India?",
      answer:
        "Statutory audit is mandatory for all Private Limited & Public Limited Companies, LLPs exceeding prescribed turnover limits, partnership firms & proprietorships under tax audit criteria, and any entities required under specific laws or bank/authority conditions.",
    },
    {
      question: "Why is statutory audit important for a business?",
      answer:
        "Statutory audit helps ensure legal compliance, improve financial transparency, build trust with banks, investors and stakeholders, detect errors, frauds, and compliance gaps, and strengthen internal financial controls.",
    },
    {
      question: "Is statutory audit compulsory even if there is no profit?",
      answer:
        "Yes. Profit or loss is irrelevant. If your entity is covered under statutory provisions, audit is mandatory regardless of turnover, loss, or no business activity.",
    },
    {
      question: "What documents are required for statutory audit?",
      answer:
        "Common documents include trial balance & ledgers, bank statements & reconciliations, invoices (sales & purchases), statutory registers, GST, TDS, PF, ESIC returns, and previous audit reports & financial statements. Exact requirements may vary by entity type.",
    },
    {
      question: "What is the difference between statutory audit and tax audit?",
      answer:
        "Statutory audit is done under the Companies Act/LLP Act and focuses on financial statements, whereas tax audit is conducted under the Income Tax Act and focuses on tax compliance. Both may have different turnover limits and focus areas.",
    },
    {
      question: "Who can conduct a statutory audit?",
      answer:
        "Only a practicing Chartered Accountant holding a valid Certificate of Practice (COP) is authorised to conduct a statutory audit.",
    },
    {
      question: "What happens if statutory audit is not done on time?",
      answer:
        "Non‑compliance may result in heavy penalties on company & directors, disqualification of directors, issues in ROC filings, loan rejection by banks, and legal prosecution in severe cases.",
    },
    {
      question: "What is included in your statutory audit service?",
      answer:
        "Our statutory audit service typically includes audit planning & risk assessment, verification of books & records, compliance check (Companies Act/LLP Act), final audit report & observations, and guidance on improving controls & compliance.",
    },
    {
      question: "How long does a statutory audit take?",
      answer:
        "Duration depends on size of business, quality of accounts, volume of transactions. On average, audits take 2–6 weeks from receipt of complete data.",
    },
    {
      question: "Can statutory audit help in getting bank loans or funding?",
      answer:
        "Absolutely. Audited financial statements are mandatory for bank loans, VC/private equity funding, government tenders & subsidies.",
    },
    {
      question: "Is statutory audit required for newly incorporated companies?",
      answer:
        "Yes. Even new companies must appoint an auditor and conduct statutory audit after a financial year is complete, regardless of profitability.",
    },
    {
      question: "What is an audit report?",
      answer:
        "An audit report is a formal opinion issued by the auditor stating whether financial statements comply with applicable laws and accounting standards.",
    },
    {
      question: "How much does statutory audit cost?",
      answer:
        "Audit fees depend on turnover & transaction volume, complexity of operations. We offer transparent, reasonable, and customized pricing.",
    },
    {
      question: "Why choose a professional CA firm for statutory audit?",
      answer:
        "Because a professional audit ensures zero compliance risk, practical guidance, not just reporting, timely completion & ROC support, and better financial discipline & credibility.",
    },
  ];

  return (
    <>
      <SEO
        title="Statutory Audit Services in Ahmedabad | Patel & Vaghasiya CA"
        description="Ensuring Accuracy, Transparency & Full Compliance through professional Statutory Audit Services for companies, LLPs and organizations."
        url="https://www.pvassociates.in/services/statutory-service"
        image="https://www.pvassociates.in/assets/statutory-audit-banner.jpg"
        keywords="Statutory Audit Services Ahmedabad, Audit Compliance, Financial Statement Audit, Internal Control Evaluation, Companies Act Audit, Audit for Private Limited Company, Audit for LLP, Audit Recommendations"
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
            className="flex-1 space-y-4 sm:space-y-6 lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Statutory Audit Services
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-gray-100">
              Ensuring Accuracy, Transparency & Full Compliance
            </p>
            <p className="text-gray-100 leading-relaxed">
              A Statutory Audit is more than just a legal requirement—it is a powerful tool to strengthen your organisation’s financial integrity. At Patel & Vaghasiya, Chartered Accountants, we provide end-to-end Statutory Audit services designed to enhance reliability, improve compliance, and give stakeholders absolute financial confidence.
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-6 lg:gap-10 py-12 sm:py-16 md:py-20 section-bg">
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-12 sm:space-y-16">
          {/* WHY AUDIT */}
          <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Statutory Audit Is Important?</h2>
            <div className="glass-card p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
              <p>A statutory audit is mandated under the Companies Act and other regulatory frameworks. It ensures:
              </p>
              {[
                "True & fair financial statements",
                "Accurate disclosure of assets, liabilities & profits",
                "Compliance with applicable laws & Accounting Standards",
                "Internal control evaluation",
                "Credibility for lenders, investors & regulators",
              ].map((item, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {item}
                </p>
              ))}
            </div>
          </motion.section>

          {/* OUR SERVICES */}
          <motion.section className="space-y-6 sm:space-y-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.1 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Our Statutory Audit Services Include</h2>
            <div className="glass-card p-6 sm:p-8 md:p-10 space-y-8 sm:space-y-10">
              {[
                {
                  title: "Review of Books of Accounts",
                  points: ["Verification of ledgers, vouchers & supporting documents to ensure correctness and authenticity."],
                },
                {
                  title: "Internal Control Evaluation",
                  points: ["Assessment of internal systems, risk areas, and operational controls."],
                },
                {
                  title: "Compliance Verification",
                  points: ["Companies Act, Accounting Standards, Income Tax provisions, GST laws, and other applicable statutes."],
                },
                {
                  title: "Finalisation of Financial Statements",
                  points: ["Preparation of Balance Sheet, Profit & Loss Account, Notes to Accounts and Audit Report."],
                },
                {
                  title: "Reporting & Recommendations",
                  points: ["Clear audit observations with practical suggestions to improve efficiency, financial discipline and compliance."],
                },
              ].map((item, i) => (
                <motion.div key={i} className="step-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                  <div className="step-circle">{i + 1}</div>
                  <div className="step-content w-full">
                    <h3 className="font-bold text-main-dark text-xl mb-2">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex gap-2">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>



          <motion.section
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Choose Us?</h2>

            <div className="glass-card p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
              {[
                {
                  title: "Experienced Audit Professionals",
                  description: "Backed by years of audit experience across industries and corporate structures.",
                },
                {
                  title: "Sector-Specific Expertise",
                  description: "Manufacturing, Trading, Real Estate, Service Sector, Startups, NBFCs, FMCG and more.",
                },
                {
                  title: "Transparent & Systematic Approach",
                  description: "Documented audit procedures ensuring accuracy, reliability and completeness.",
                },
                {
                  title: "On-Time Deliveries",
                  description: "Complete audit solutions within statutory timelines with zero last-minute hassles.",
                },
                {
                  title: "Technology-Driven Audit Tools",
                  description: "Use of data-analytics & cloud-based systems to enhance audit efficiency.",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="flex items-center gap-3 text-gray-800 font-semibold text-lg">
                    <HiCheckCircle className="text-main text-xl" /> {item.title}
                  </p>
                  <p className="pl-7 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* WHO SHOULD AVAIL */}
          <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Who Should Avail Statutory Audit?</h2>
            <div className="glass-card p-6 sm:p-8 md:p-10">
              {[
                "Private Limited Companies",
                "Public Limited Companies",
                "LLPs (as applicable)",
                "Entities requiring audit under specific regulatory laws",
              ].map((item, idx) => (
                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                  <HiCheckCircle className="text-main text-xl" /> {item}
                </p>
              ))}
            </div>
          </motion.section>


          {/* BENEFITS SECTION */}
<motion.section
  className="space-y-6"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Benefits of Our Statutory Audit Services</h2>
  <div className="glass-card p-6 sm:p-8 md:p-10 space-y-4">
    {[
      "Enhanced financial credibility",
      "Stronger internal control systems",
      "Reduced chances of penalties & compliance risks",
      "Increased investor & lender confidence",
      "Improved financial planning & decision making",
    ].map((item, idx) => (
      <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
        <HiCheckCircle className="text-main text-xl" /> {item}
      </p>
    ))}
  </div>
</motion.section>

{/* INDUSTRIES SECTION */}
<motion.section
  className="space-y-6"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Industries We Serve</h2>
  <div className="glass-card p-6 sm:p-8 md:p-10 space-y-4">
    {[
      "Manufacturing",
      "Construction & Real Estate",
      "Logistics & Infrastructure",
      "Retail & Wholesale Trading",
      "IT & Software",
      "Agriculture & Food Processing",
      "Hospitality",
      "Pharmaceuticals",
      "NGOs & Educational Institutions",
    ].map((item, idx) => (
      <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
        <HiCheckCircle className="text-main text-xl" /> {item}
      </p>
    ))}
  </div>
</motion.section>

        </div>

        {/* RIGHT SIDEBAR */}
        <Sidebar services={otherServices} />
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-0 bg-sky-50">
        <FAQ faqs={faqs} />
      </div>

      {/* CTA SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16">
        <section className="bg-main-dark p-6 sm:p-8 md:p-10 rounded-xl shadow-md border border-bg-mainDark-100 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <motion.div className="flex-1" initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <Image
              src="/assets/5124557.png"
              alt="Statutory Audit"
              className="rounded-xl w-full h-auto"
              width={400}
              height={400}
              priority
            />
          </motion.div>
          <motion.div className="flex-1 text-center md:text-left" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Reliable Statutory Audit Support</h2>
            <p className="text-gray-300 text-lg leading-relaxed">Safeguard your financial accuracy and ensure complete compliance with our professional audit services.</p>
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
