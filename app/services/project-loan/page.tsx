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

export default function ProjectLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Project Loan Consultant in Ahmedabad",
        description:
            "Professional project loan advisory including DPR, CMA Data, feasibility study, loan documentation, and subsidy guidance.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "Project Finance Consulting",
        keywords: [
            "Project Loan Consultant Ahmedabad",
            "Project Finance Consultant",
            "DPR Preparation Chartered Accountant",
            "CMA Data for Loan",
            "Machinery Loan Consultant",
            "Business Expansion Loan Advisor",
            "MSME Project Loan",
            "Bank Loan Documentation Support",
            "Project Report for Bank Loan",
            "CA for Project Finance"
        ]
    };

    const otherServices = allServices.filter(s => s.href !== "/services/project-loan");

    const faqs = [
        {
            question: "What is a Project Loan?",
            answer: "A Project Loan is a long‑term loan taken for setting up a new business, manufacturing unit, factory, warehouse, hotel, hospital, or large commercial project. It generally covers land, building, plant & machinery, and working capital margin."
        },
        {
            question: "Who is eligible to apply for a Project Loan?",
            answer: "Project loans can be availed by proprietorships, partnership firms, LLPs, private limited companies, and manufacturing & service sector businesses. Eligibility depends on promoter background, project viability, capital contribution, and repayment capacity."
        },
        {
            question: "What expenses are covered under a Project Loan?",
            answer: "A project loan can cover land purchase or lease premium, factory/building construction, plant & machinery purchase, electrical installation & utilities, pre‑operative expenses, margin for working capital, and proper project structuring to keep maximum loan eligibility."
        },
        {
            question: "How much margin money is required for a Project Loan?",
            answer: "Generally, banks require 20% to 35% promoter contribution, depending on nature of project, industry risk, credit profile, and subsidy eligibility. We help clients optimize margin through subsidy planning and correct cost breakup."
        },
        {
            question: "What documents are required for a Project Loan?",
            answer: "Key documents include Detailed Project Report (DPR), KYC of promoters, last 3 years T & R financials (if existing business), net worth statement, land documents/lease agreement, machinery quotations, bank statements. Documentation varies from bank to bank."
        },
        {
            question: "What is a Detailed Project Report (DPR) and why is it important?",
            answer: "A DPR is the most critical document for project loan approval. It includes business model, cost of project, means of finance, profitability & cash flow projections, BSR & break‑even analysis. A poor DPR leads to rejection or delay; we prepare bank‑ready DPRs."
        },
        {
            question: "Can a startup or new business get a Project Loan?",
            answer: "Yes, even new businesses can get project loans if promoters have experience, project is viable, and capital structure is sound. In many cases, CGTMSE/government‑linked schemes can be leveraged."
        },
        {
            question: "What is the typical interest rate for Project Loans?",
            answer: "Interest rates usually range between 9% to 12%, depending on bank or NBFC, credit rating, nature of project, and security offered. We negotiate with multiple lenders to get best possible terms."
        },
        {
            question: "How long does project loan approval take?",
            answer: "On average 15–30 days if documentation is complete. Delay occurs mainly due to improper DPR or incomplete papers. We ensure faster approvals through structured filing and follow‑ups."
        },
        {
            question: "Is collateral mandatory for Project Loans?",
            answer: "In most cases, yes; collateral is required. However some loans can be partially collateral‑free and government guarantee schemes may apply. We analyze your case to reduce collateral burden where possible."
        },
        {
            question: "Can subsidies be linked with Project Loans?",
            answer: "Absolutely. Project loans can be combined with MSME subsidies, state industrial incentives, capital subsidy, interest subsidy, and central/sectoral grants. Proper planning before loan sanction is crucial to avoid rejection later."
        },
        {
            question: "Can I get a Project Loan for factory expansion?",
            answer: "Yes. Project loans are available for factory expansion, new production line, technology upgradation, relocation or modernization. Expansion loans require clear justification and projections."
        },
        {
            question: "What are common reasons for Project Loan rejection?",
            answer: "Common mistakes include incorrect project cost estimation, weak financial projections, poor credit history, improper land documents, and no subsidy planning. We focus on pre‑screening to avoid rejections."
        },
        {
            question: "Why should I take professional help for Project Loans?",
            answer: "Project loans are technical and compliance‑heavy. Professional assistance ensures higher approval chances, better interest rates, faster processing, maximum subsidy benefit, structured repayment plans, and right planning today to avoid cash‑flow stress tomorrow."
        },
        {
            question: "How can your firm help in Project Loan services?",
            answer: "We provide end‑to‑end project loan assistance, including DPR preparation, bank/ NBFC coordination, subsidy planning, documentation & follow‑ups, post‑sanction compliance and implementation. From idea to implementation, we stay with you."
        }
    ];

    return (
        <>
            <SEO
                title="Project Loan Consultant Services in Ahmedabad | Patel & Vaghasiya CA"
                description="Looking for a Project Loan Consultant in Ahmedabad? We prepare DPR, CMA data, feasibility study, loan documentation & subsidy guidance."
                url="https://yourwebsite.com/services/project-loan"
                image="https://yourwebsite.com/assets/project-loan-banner.jpg"
                keywords="Project Loan Consultant Ahmedabad, Project Finance Consultant, DPR Preparation Chartered Accountant, CMA Data for Loan, Machinery Loan Consultant, Business Expansion Loan Advisor, MSME Project Loan, Bank Loan Documentation Support, Project Report for Bank Loan, CA for Project Finance"
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
                        className="flex-1 space-y-4 sm:space-y-6 lg:w-2/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Project Loan Consultant Services in Ahmedabad
                        </h1>

                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            Get the Right Funding for Your Business Project
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Every business project needs strong financial planning. Whether you are expanding your factory,
                            setting up a new unit, buying machinery, upgrading technology, or starting a new venture — arranging
                            the correct <strong className="text-gray-100">Project Loan</strong> is the most important step.
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            At Patel & Vaghasiya, Chartered Accountants, we help businesses prepare proper project reports,
                            financial projections, and documentation so that banks can clearly understand your business
                            and approve your loan smoothly.
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Our service is <strong className="text-gray-100">ethical, transparent, and fully compliant with ICAI guidelines</strong>.
                            We do not guarantee loans. Instead, we provide professional advisory, financial planning,
                            documentation, and coordination to help you present your project strongly to lenders.
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
                    {/* WHY LOAN */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Why Businesses Need a Project Loan?
                        </h2>

                        <div className="glass-card p-10 space-y-6">
                            <p className="text-gray-700 text-lg">A project loan helps you finance:</p>

                            <motion.ul
                                className="space-y-3 text-gray-700 text-[17px]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                            >
                                {[
                                    "New manufacturing or service unit",
                                    "Expansion of existing plant",
                                    "Purchase of machinery",
                                    "Working capital for new project",
                                    "Technology upgradation",
                                    "Construction of building/factory",
                                    "Infrastructure & utility setup",
                                    "Purchase of commercial property",
                                    "Greenfield & brownfield projects",
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

                            <p className="text-gray-700 text-lg">A correct project loan improves cash flow, reduces financial stress, and helps your business grow faster.
                            </p>
                        </div>
                    </motion.section>

                    {/* ADVISORY SERVICES */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.1 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Our Project Loan Advisory Services
                        </h2>

                        <p className="text-gray-700 text-lg">We focus on delivering end-to-end consulting to reduce bank queries and improve approval chances.
                        </p>

                        <div className="glass-card p-10 space-y-10">
                            {[{
                                title: "Project Feasibility Study",
                                points: [
                                    "Understanding your business plan",
                                    "Analysing cost, revenue, profit & breakeven",
                                    "Suggesting the best financial structure",
                                ],
                            },
                            {
                                title: "Detailed Project Report (DPR)",
                                points: [
                                    "Business background",
                                    "Technical details",
                                    "Market viability",
                                    "Cost of project",
                                    "Means of finance",
                                    "Financial ratios",
                                    "Cash flow & projections",
                                    "Repayment capacity",
                                ],
                            },
                            {
                                title: "CMA Data Preparation",
                                points: [
                                    "Balance sheet",
                                    "Profit & loss",
                                    "Ratios",
                                    "Projections",
                                    "Fund flow & working capital cycle",
                                ],
                            },
                            {
                                title: "Loan Documentation",
                                points: [
                                    "KYC documents",
                                    "Financial statements",
                                    "Bank statements",
                                    "GST returns",
                                    "Net worth statements",
                                    "Property papers",
                                    "Machinery quotations",
                                ],
                            },
                            {
                                title: "Bank Coordination & Query Management",
                                points: [
                                    "Submitting file to banks/NBFCs",
                                    "Providing clarifications",
                                    "Helping respond to queries",
                                    "Supporting till sanction",
                                ],
                            },
                            {
                                title: "Subsidy & Government Scheme Guidance",
                                points: [
                                    "MSME Subsidy",
                                    "Interest Subsidy",
                                    "Capital Subsidy",
                                    "State & Central Government schemes",
                                    "(Note: Subsidy eligibility depends on government policy.)",
                                ],
                            }
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

                    {/* WHO CAN APPLY */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Who Can Apply for a Project Loan?</h2>

                        <div className="glass-card p-10">
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Manufacturers",
                                    "Traders",
                                    "Service businesses",
                                    "Startups",
                                    "Contractors",
                                    "MSMEs",
                                    "Proprietorship, Partnership, LLP, Pvt Ltd companies",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-md mt-2">If you are planning a new business or expansion, we help you present your project in the best professional manner.
                            </p>
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

                        <div className="glass-card p-10">
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Strong Banking Knowledge",
                                    "Chartered Accountant Prepared Reports",
                                    "Transparent & Ethical Approach",
                                    "Simple Language, Clear Documentation",
                                    "Support From Project Planning to Loan Processing",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <HiCheckCircle className="text-main text-xl" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-md mt-2">We believe in accuracy, honesty, and clarity, which helps lenders trust your proposal.
                            </p>
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

            {/* CTA SECTION BELOW FAQ */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16">
                <section className="bg-main-dark p-6 sm:p-8 md:p-10 rounded-xl shadow-md border border-bg-mainDark-100 flex flex-col md:flex-row items-center gap-6 md:gap-8">
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
                            alt="Project Guidance"
                            className="rounded-xl w-full h-auto"
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
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Start Your Project with the Right Guidance
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            If you are planning a new project or business expansion, let us help you prepare a strong financial plan and loan proposal.
                        </p>
                        <div className="mt-6">
                            <Link
                                href="/contact"
                                className="inline-block bg-main text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-bg-mainDark-600 transition"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </div>
        </>
    );
}
