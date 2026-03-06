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

export default function InternalAuditPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Internal Audit Services in Ahmedabad",
        description:
            "Strengthen internal controls, reduce risks and improve efficiency with our professional Internal Audit Services.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "Internal Audit Services",
        keywords: [
            "Internal Audit Services Ahmedabad",
            "Internal Control Review",
            "Operational Audit",
            "Compliance Audit",
            "Risk Assessment",
            "Process Audit",
            "Internal Auditor for Companies",
        ],
    };

    const otherServices = allServices.filter(s => s.href !== "/services/internal-audit");

    const faqs = [
        {
            question: "What is an Internal Audit?",
            answer:
                "A systematic, independent review of processes, controls, compliance and risk management systems to ensure efficiency, compliance and alignment with business objectives. It can be mandated under the Companies Act or taken up voluntarily for better control and growth.",
        },
        {
            question: "Is Internal Audit mandatory in India?",
            answer:
                "Yes, Internal Audit is mandatory for certain companies under the Companies Act 2013 based on turnover, paid-up capital or borrowings. Even when not mandatory, Internal Audit is strongly recommended for better control and growth.",
        },
        {
            question: "Who needs Internal Audit services?",
            answer:
                "Private & public limited companies, growing MSMEs, businesses availing bank loans or working capital, entities planning expansion, funding or IPOs, and those facing compliance or process issues all benefit from Internal Audit.",
        },
        {
            question: "What are the key objectives of an Internal Audit?",
            answer:
                "Identify process gaps & financial risks, improve internal controls, ensure statutory & regulatory compliance, prevent fraud & leakages, and strengthen management decision-making.",
        },
        {
            question: "How is Internal Audit different from Statutory Audit?",
            answer:
                "Internal Audit continues year‑round and focuses on preventive systems and operational controls, while Statutory Audit is a year‑end check under Acts like Companies Act for financial statement verification and compliance. The former is management‑oriented and the latter is compliance‑oriented.",
        },
        {
            question: "What areas are covered under Internal Audit?",
            answer:
                "Accounting & finance processes, revenue/purchase/expense controls, GST/TDS/statutory compliance review, inventory & fixed assets control, payroll & HR processes, bank & loan covenant compliance, internal control & SOP review.",
        },
        {
            question: "How frequently should Internal Audit be conducted?",
            answer:
                "Monthly, quarterly, half‑yearly or annually depending on size, risk level and business complexity.",
        },
        {
            question: "Will Internal Audit disturb daily business operations?",
            answer:
                "Our audit approach is non‑intrusive and planned, ensuring minimal disruption while maintaining effective review and reporting.",
        },
        {
            question: "Can Internal Audit help in bank loan or funding approvals?",
            answer:
                "Yes. Internal Audit improves bank confidence, strengthens loan renewals & enhancements, helps meet bank audit & stock audit requirements, and supports better credit ratings.",
        },
        {
            question: "Does Internal Audit help in fraud prevention?",
            answer:
                "Absolutely. It detects early warning signs of fraud, identifies control weaknesses, prevents revenue leakages, and improves accountability & transparency.",
        },
        {
            question: "Can a CA firm act as an Internal Auditor?",
            answer:
                "Yes. A Chartered Accountant firm is professionally qualified and legally permitted to act as Internal Auditor and provide independent assurance and advisory services.",
        },
        {
            question: "Will Internal Audit reports be shared with management?",
            answer:
                "Yes. Internal Audit reports are shared with management highlighting observations, risk levels, corrective measures and improvement suggestions, providing clear, practical and actionable insights.",
        },
        {
            question: "Is Internal Audit useful for small businesses?",
            answer:
                "Yes. Small and medium businesses benefit through better cost control, improved compliance, reduced errors and a strong foundation for future growth.",
        },
        {
            question: "How does Internal Audit add value beyond compliance?",
            answer:
                "It improves operational efficiency, strengthens systems, enables informed decisions, and prepares businesses for scale, funding or exit planning.",
        },
        {
            question: "Why choose Patel & Vaghasiya for Internal Audit?",
            answer:
                "Experienced CA professionals, practical & business‑oriented approach, strong compliance & risk focus, clear reporting & actionable insights, and trusted advice for growing businesses.",
        },
    ];

    return (
        <>
            <SEO
                title="Internal Audit Services in Ahmedabad | Patel & Vaghasiya CA"
                description="Internal Audit services to strengthen controls, reduce risk, enhance efficiency & ensure compliance."
                url="https://pvassociates.in/services/internal-audit"
                image="https://pvassociates.in/assets/internal-audit-banner.jpg"
                keywords="Internal Audit Services Ahmedabad, Operational Audit, Compliance Audit, Risk Assessment, Process Audit"
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
                            Internal Audit Services
                        </h1>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            Smart Controls. Strong Systems. Confident Compliance.
                        </p>
                        <p className="text-gray-100 leading-relaxed">
                           Every growing organisation needs a strong internal control system to stay compliant, reduce leakages, improve efficiency, and prevent financial risks. Our Internal Audit Services are designed to give you complete visibility of your operations—so you can make smarter decisions, safeguard your assets, and run your business smoothly with confidence.

                        </p>

                        <p className="text-gray-100 leading-relaxed">At Patel & Vaghasiya, Chartered Accountants, we bring professional expertise, industry knowledge, and technology-driven audit practices to ensure your business stays one step ahead of errors, fraud, and inefficiencies.
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

            {/* WHAT IS INTERNAL AUDIT */}
            <motion.section className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">What Is Internal Audit?</h2>
                <div className="glass-card p-6 sm:p-8 md:p-10">
                    <p className="text-gray-700 text-lg">
                        Internal Audit is an independent and systematic review of a company’s processes, controls, compliance, and risk management systems to ensure operations are efficient, compliant, and aligned with business objectives. Under the Companies Act 2013 certain entities must maintain internal audit depending on turnover, paid-up capital or borrowings. Even when not mandatory, internal audit is strongly recommended for better control and growth.
                    </p>
                </div>
            </motion.section>

            {/* ---------------- MAIN CONTENT ---------------- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-6 lg:gap-10 py-12 sm:py-16 md:py-20 section-bg">
                {/* LEFT CONTENT */}
                <div className="flex-1 space-y-12 sm:space-y-16">
                    {/* WHY INTERNAL AUDIT */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Why Internal Audit Is Essential for Your Business
                        </h2>

                        <div className="glass-card p-10 space-y-6">
                            <p>
                                Internal Audit is more than compliance — it is a strategic tool that helps your business:
                            </p>

                            {[
                                "Identify operational leakages & financial risks",
                                "Strengthen internal controls",
                                "Improve efficiency across departments",
                                "Ensure statutory & regulatory compliance",
                                "Reduce chances of fraud and misreporting",
                                "Enhance reliability of financial reporting",
                                "Support management in high-level decision-making",
                            ].map((item, idx) => (
                                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> {item}
                                </p>
                            ))}
                        </div>
                    </motion.section>

                    {/* OUR INTERNAL AUDIT SERVICES */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.1 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Our Internal Audit Services Include
                        </h2>

                        <div className="glass-card p-10 space-y-10">
                            {[
                                {
                                    title: "Internal Controls Review",
                                    points: [
                                        "Analysis of processes, authorisation matrix, documentation and system checks to strengthen internal controls.",
                                    ],
                                },
                                {
                                    title: "Financial & Accounting Audit",
                                    points: [
                                        "Ledger scrutiny, reconciliations, revenue recognition checks, expenditure analysis & reporting accuracy.",
                                    ],
                                },
                                {
                                    title: "Compliance Audit",
                                    points: [
                                        "Evaluation of compliance under GST, Income Tax, Companies Act, labour laws and industry regulations.",
                                    ],
                                },
                                {
                                    title: "Operational Audit",
                                    points: [
                                        "Procurement, production, inventory, logistics, sales & HR audit to reduce bottlenecks and improve efficiency.",
                                    ],
                                },
                                {
                                    title: "Risk Assessment & Mitigation",
                                    points: [
                                        "Identification of high-risk areas and actionable mitigation strategies to reduce fraud & process failures.",
                                    ],
                                },
                                {
                                    title: "Inventory & Fixed Asset Verification",
                                    points: [
                                        "Physical verification, stock movement checks, valuation accuracy & variance analysis.",
                                    ],
                                },
                                {
                                    title: "Management Reporting",
                                    points: [
                                        "Clear audit reports with dashboards, risk ratings, observations and actionable recommendations.",
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
                                                <li key={idx}>{p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Choose Us?</h2>

                        <div className="glass-card p-10 space-y-6">
                            {[
                                {
                                    title: "Industry Expertise",
                                    description:
                                        "Experience across manufacturing, trading, service sector, construction, FMCG and startups.",
                                },
                                {
                                    title: "Practical Recommendations",
                                    description:
                                        "We provide solutions that your team can implement easily, not just audit points.",
                                },
                                {
                                    title: "Technology-Driven Audits",
                                    description:
                                        "Use of data analytics, sample testing & digital tools for accuracy and efficiency.",
                                },
                                {
                                    title: "Transparent & Timely Reports",
                                    description:
                                        "Clear reporting with priority-based action points.",
                                },
                                {
                                    title: "Confidential & Professional",
                                    description:
                                        "Your data is secure and handled only by expert professionals.",
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
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Who Should Avail Internal Audit?
                        </h2>

                        <div className="glass-card p-10">
                            {[
                                "MSMEs & Large Enterprises",
                                "Private Limited Companies",
                                "LLPs & Partnership Firms",
                                "Manufacturing & Trading Units",
                                "Businesses aiming for stronger internal controls",
                                "Companies preparing for statutory or external audit",
                            ].map((item, idx) => (
                                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> {item}
                                </p>
                            ))}
                            <p className="mt-2">If your business is growing or planning to scale up, internal audit is essential to keep systems strong and error-free.
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
                            src="/assets/5124557.png"
                            alt="Internal Audit"
                            className="rounded-xl"
                            width={400}
                            height={400}
                            priority
                        />
                    </motion.div>

                    <motion.div
                        className="flex-1 text-center md:text-left"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Strengthen Your Business With Expert Internal Audit
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Build a process-driven, efficient and secure organisation with our professional Internal Audit services.
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
