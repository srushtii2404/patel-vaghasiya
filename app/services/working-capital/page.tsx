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

export default function WorkingCapitalPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Working Capital (OD / CC) Loan Consultant in Ahmedabad",
        description:
            "Working capital (OD/CC) loan consultancy for manufacturers, traders, contractors and service providers — eligibility, CMA data, documentation, CGTMSE support, renewal & enhancement.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "Working Capital (OD/CC) Loan Consultancy",
        keywords: [
            "working capital loan consultant in ahmedabad",
            "OD CC loan consultant",
            "CMA data preparation Ahmedabad",
            "collateral free working capital loan",
            "CGTMSE loan for MSME",
            "cash credit limit consultant",
            "overdraft limit for business",
            "working capital finance Gujarat"
        ],
    };

    const otherServices = allServices.filter(s => s.href !== "/services/working-capital");

    const faqs = [
        {
            question: "What is a Working Capital Loan?",
            answer:
                "A short-term finance facility provided to businesses to manage daily operational expenses like raw material purchases, salaries, rent, electricity, GST payments, etc., without disturbing long-term funds.",
        },
        {
            question: "What is the difference between OD (Overdraft) and CC (Cash Credit)?",
            answer:
                "Overdraft is linked to your current account with interest charged only on the amount utilized. Cash Credit is usually against stock & receivables, ideal for manufacturing and trading businesses; both are revolving limits and renew annually.",
        },
        {
            question: "Who is eligible for a Working Capital Loan?",
            answer:
                "Proprietorships, Partnership Firms, LLPs, Private Limited Companies, Manufacturers, Traders & Service Providers. Eligibility depends on turnover, profitability, banking discipline, and stock/debtor position.",
        },
        {
            question: "Why is Working Capital finance important for a business?",
            answer:
                "Without sufficient working capital, cash flow gets blocked, payments to suppliers get delayed, business growth slows down, and credit rating deteriorates. A proper OD/CC facility ensures smooth operations and uninterrupted growth.",
        },
        {
            question: "How is Working Capital Limit calculated by banks?",
            answer:
                "Banks generally assess limits based on the turnover method, operating cycle, stock & receivables, CMA data & projections, and banking transactions; proper factoring by a CA increases approval chances and limit.",
        },
        {
            question: "What documents are required for OD / CC loan?",
            answer:
                "Common documents include last 2-3 years ITR & financial statements, GST returns, bank statements, stock & debtor statements, CMA data & projections, KYC documents; exact requirement may vary bank-to-bank.",
        },
        {
            question: "Is collateral required for Working Capital Loan?",
            answer:
                "Up to certain limits it can be collateral-free (under government schemes); higher limits may require property, plant & machinery, or other collateral security along with prior evaluation and structured proposals.",
        },
        {
            question: "What is the interest rate on OD / CC facility?",
            answer:
                "Rates depend on credit score & banking history, business financial strength, collateral offered, and bank & scheme selected; interest is charged only on the utilized amount, not on the full sanctioned limit.",
        },
        {
            question: "Can a new business get a Working Capital Loan?",
            answer:
                "Yes, based on promoter background, capital infusion, business model & projections, existing banking relationship and proper project report & financial planning, which play a key role.",
        },
        {
            question: "How long does it take to get OD / CC sanctioned?",
            answer:
                "Typically file preparation: 3-5 working days; bank processing: 7-15 working days; timelines depend on document readiness and bank response.",
        },
        {
            question: "Can I increase my existing OD / CC limit?",
            answer:
                "Enhancement is possible if turnover has increased, profitability improved, account conduct is regular and stock & debtors have grown; we assist in limit enhancement & restructuring.",
        },
        {
            question: "What happens if Working Capital is not managed properly?",
            answer:
                "Poor management may lead to over-utilisation of limits, penal interest, account becoming irregular (SMA/NPA risk), difficulty in future loan approvals; professional monitoring avoids these risks.",
        },
        {
            question: "How can a Chartered Accountant help in OD / CC loan?",
            answer:
                "A CA assists with cost assessment of working capital needs, CMA preparation & projections, selecting right bank & scheme, improving approval chances & limits, negotiating interest & terms; strong numbers lead to faster sanction.",
        },
        {
            question: "Is GST compliance important for Working Capital loan assistance?",
            answer:
                "Yes, banks heavily rely on GST returns consistency, turnover matching with books and compliance rating; proper GST compliance improves creditworthiness.",
        },
        {
            question: "Why choose us for Working Capital Loan assistance?",
            answer:
                "We provide end-to-end support, proper financial planning, bank-ready documentation, faster approvals, post-sanction compliance guidance; we don’t just apply for loans, we structure them for approval.",
        },
    ];

    return (
        <>
            <SEO
                title="Working Capital (OD / CC) Loan Consultant in Ahmedabad | Patel & Vaghasiya CA"
                description="Fast, hassle-free OD/CC & working capital consultancy for manufacturers, traders, contractors and MSMEs — CMA data, documentation, CGTMSE help, renewals & enhancements."
                url="https://yourwebsite.com/services/working-capital"
                image="https://yourwebsite.com/assets/working-capital-banner.jpg"
                keywords="working capital loan consultant in ahmedabad, OD CC loan consultant, CMA data preparation Ahmedabad, collateral free working capital loan, CGTMSE loan for MSME, cash credit limit consultant, overdraft limit for business, working capital finance Gujarat"
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
                    {/* LEFT TEXT BLOCK */}
                    <motion.div
                        className="flex-1 space-y-6 lg:w-2/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-4xl font-bold text-white">
                            Working Capital (OD / CC) Loan Consultant in Ahmedabad
                        </h1>

                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            Fast, Hassle-Free Finance for Your Daily Business Needs
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            At Patel & Vaghasiya, Chartered Accountants, we understand that working capital is the lifeline of any business. Whether you are a manufacturer, trader, wholesaler, contractor, or service provider—your day-to-day operations need a steady flow of funds.
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Our Working Capital (OD/CC) Loan Consultancy helps businesses get the right limit at the right time with the right bank… without running from branch to branch.
                        </p>

                        <p className="text-gray-100 leading-relaxed font-semibold">
                            We help you get:
                        </p>
                        <ul className="text-gray-100 list-disc pl-6 space-y-2">
                            <li>Cash Credit (CC Limit)</li>
                            <li>Overdraft (OD Limit)</li>
                            <li>Working Capital Term Loan (WCTL)</li>
                            <li>CGTMSE-backed collateral free OD/CC for MSMEs</li>
                            <li>Renewal & enhancement of existing limits</li>
                        </ul>
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
                    {/* WHY WORKING CAPITAL */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Why Working Capital Loan Is Important?
                        </h2>

                        <div className="glass-card p-10 space-y-6">
                            <p className="text-gray-700 text-lg">A properly structured OD/CC limit helps you in:</p>

                            <motion.ul
                                className="space-y-3 text-gray-700 text-[17px]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                            >
                                {[
                                    "Purchasing raw materials on time",
                                    "Managing stock levels",
                                    "Settling supplier payments",
                                    "Maintaining healthy cash flow",
                                    "Handling seasonal fluctuations",
                                    "Getting higher credit score & banking relationship",
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
                        </div>
                    </motion.section>

                    {/* SERVICES */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.1 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Our Services for OD/CC Loan
                        </h2>

                        <p className="text-gray-700 text-lg">We handle every step to make your working capital limit bank-friendly and quick to process.</p>

                        <div className="glass-card p-10 space-y-10">
                            {[{
                                title: "1. Eligibility Check & Loan Planning",
                                points: [
                                    "We analyze your financials and projections to recommend the best working capital limit.",
                                ],
                            },
                            {
                                title: "2. Preparing CMA Data & Projections",
                                points: [
                                    "CMA Data (Form I to VII)",
                                    "Profitability projections",
                                    "Fund flow & cash flow",
                                    "Ratio analysis",
                                    "Stock statements & DP structure",
                                    "Projected balance sheet & P&L",
                                ],
                            },
                            {
                                title: "3. Documentation & Compliance Support",
                                points: [
                                    "KYC & business documents",
                                    "Financial statements",
                                    "GST returns",
                                    "Stock/creditor/debtor details",
                                    "Bank statements	",
                                    "Property/collateral details (if applicable)",
                                    "We ensure your file meets RBI and bank policy norms.					"
                                ],
                            },
                            {
                                title: "4. End-to-End Bank Coordination",
                                points: [
                                    "Query replies",
                                    "valuation & legal follow-up",
                                    "Sanction letter negotiations",
                                    "Limit setup in bank",
                                    "Renewal & enhancement support",
                                    "You focus on business. We take care of paperwork.					",
                                ],
                            },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="step-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.12 }}
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

                    {/* CGTMSE Working Capital Loan Section */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            CGTMSE Working Capital Loan (Collateral-Free OD/CC)
                        </h2>

                        <p className="text-lg text-gray-700">
                            Special benefit for MSME businesses — get working capital limits without any property collateral under the CGTMSE scheme.
                        </p>

                        <div className="glass-card p-10 space-y-6">

                            {/* Key Benefits */}
                            <h3 className="text-2xl font-bold text-main">Key Benefits</h3>
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "No property security required",
                                    "Limits up to ₹10 crore (as per scheme)",
                                    "Coverage available for OD/CC & Term Loan",
                                    "Lower margin requirement",
                                    "Suitable for manufacturers, traders, service providers",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <HiCheckCircle className="text-main text-xl" /> {item}
                                    </li>
                                ))}
                            </ul>

                            {/* We Help You With */}
                            <h3 className="text-2xl font-bold text-main pt-4">We Help You With</h3>
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "CGTMSE eligibility check",
                                    "CGT fee calculation",
                                    "CGTMSE documentation",
                                    "Bank coordination for CGTMSE approval",
                                    "Structuring file to fit scheme criteria",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <HiCheckCircle className="text-main text-xl" /> {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-gray-700 text-md pt-4">
                                This is ideal for new businesses, small manufacturers, traders, and growing MSMEs who need funds but don’t have collateral.
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
                            <p className="text-gray-700 text-md mb-4">Because we understand both finance and compliance.						</p>
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Chartered Accountant-led consultancy",
                                    "Expertise in CMA data & financial statements",
                                    "Experience with all major banks & NBFCs",
                                    "Fast processing with minimum documentation",
                                    "Personalized support for Ahmedabad & Gujarat businesses",
                                    "Highest approval ratio due to accurate file preparation",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <HiCheckCircle className="text-main text-xl" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-md mt-4">We provide clear, compliant, and presentable files — banks make lending decisions; we ensure your file is strong.</p>
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Who Can Apply for Working Capital Loan?</h2>

                        <div className="glass-card p-10">
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Manufacturers",
                                    "Traders (wholesale/retail)",
                                    "Contractors",
                                    "Transporters",
                                    "Job workers",
                                    "Service providers",
                                    "Startups under MSME scheme",
                                    "Growing businesses seeking expansion",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl mt-1" /> {item}
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
                            alt="Working Capital Guidance"
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
                            Want smooth operations & stable cash flow?
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Contact Patel & Vaghasiya, Chartered Accountants — your trusted partner for Working Capital (OD/CC) & CGTMSE Loan Consultancy in Ahmedabad.
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
