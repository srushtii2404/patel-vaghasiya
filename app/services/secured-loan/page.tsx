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

export default function SecuredLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Secured Loan Consultant in Ahmedabad",
        description: "Professional secured loan advisory including hybrid loans (Secured + CGTMSE), machinery finance, working capital, project finance, and bank coordination.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "Secured & Hybrid Loan Consulting",
        keywords: [
            "Secured Loan Consultant Ahmedabad",
            "Hybrid Loan Consultant",
            "CGTMSE Loan Advisory",
            "Project Loan Consultant",
            "Working Capital Loan",
            "Machinery Loan",
            "Bank Loan Documentation Support",
            "MSME Loan Expert",
        ]
    };

    const otherServices = allServices.filter(s => s.href !== "/services/secured-loan");

    const faqs = [
        {
            question: "What is a Secured Loan?",
            answer:
                "A secured loan is a loan where the borrower provides an asset such as property, machinery, fixed deposit, shares, or other collateral to the lender. Because security is provided, interest rates are lower and loan amounts are higher compared to unsecured loans.",
        },
        {
            question: "What assets can be used as security for a secured loan?",
            answer:
                "Commonly accepted securities include residential or commercial property, industrial land or factory building, machinery & plant, fixed deposits (FD), shares, mutual funds, or bonds (in some cases).",
        },
        {
            question: "Who is eligible to apply for a secured loan?",
            answer:
                "Secured loans are available to salaried individuals, self-employed professionals (CA, Doctor, Architect, etc.), proprietorships, partnerships, LLPs, Private Limited Companies, MSMEs, and manufacturers. Eligibility depends on income, repayment capacity, credit history, and value of security.",
        },
        {
            question: "What is the maximum loan amount I can get?",
            answer:
                "Loan amount usually ranges from 50% to 75% of the market value of the asset offered as security. The exact amount depends on the type of collateral, business turnover or income, credit score, and purpose of the loan.",
        },
        {
            question: "What are the interest rates on secured loans?",
            answer:
                "Interest rates are lower than unsecured loans and typically start from 8.5–12% per annum, depending on the nature of security, borrower profile, loan tenure, and bank or NBFC policies.",
        },
        {
            question: "What can a secured loan be used for?",
            answer:
                "Secured loans can be used for business expansion or working capital, machinery or equipment purchase, debt consolidation, construction or renovation, long-term funding needs, and personal or professional requirements (subject to lender terms).",
        },
        {
            question: "What is the tenure of a secured loan?",
            answer:
                "Tenure can range from 3 years to 20 years depending on the type of asset, borrower’s age & income. Longer tenure helps in lower EMIs and better cash flow management.",
        },
        {
            question: "Is CIBIL score important for a secured loan?",
            answer:
                "Although security is provided, lenders still check CIBIL score. A score above 650 improves approval chances and helps in getting better interest rates and terms.",
        },
        {
            question: "Can I get a secured loan even if my income is irregular?",
            answer:
                "Yes. For self-employed and business owners, lenders also consider bank statements, cash flow, turnover & GST returns. Proper financial structuring and documentation play a crucial role.",
        },
        {
            question: "How much time does it take to get a secured loan approved?",
            answer:
                "In-principle approval: 3–7 working days; final disbursement: 10–21 days. Timelines depend on property valuation, legal checks, and documents.",
        },
        {
            question: "Are there any processing fees or hidden charges?",
            answer:
                "Banks may charge a processing fee (0.5%–1.5%), legal & valuation charges, and stamp duty (if applicable). We ensure complete transparency and explain all charges upfront.",
        },
        {
            question: "Can I prepay or foreclose a secured loan?",
            answer:
                "Yes. Most lenders allow pre-payment or foreclosure, though some may charge a prepayment penalty, especially in fixed-rate loans.",
        },
        {
            question: "What documents are required for a secured loan?",
            answer:
                "Common documents include KYC (PAN, Aadhaar), income proof/financial statements, bank statements, property or asset documents, and business registration (if applicable). Exact list varies based on borrower profile.",
        },
        {
            question: "Why should I take secured loan assistance from a CA firm?",
            answer:
                "A CA-led advisory offers the right loan structure, lower interest rates & better terms, correct documentation, faster approvals, alignment with tax & compliance planning, and help with financial statement preparation to boost loan approval.",
        },
        {
            question: "How can Patel & Vaghasiya help in securing the best loan?",
            answer:
                "We assist with loan eligibility assessment, choosing the right bank/NBFC, documentation & financial presentation, negotiating interest rates, and end-to-end loan support till disbursement.",
        },
    ];

    return (
        <>
            <SEO
                title="Secured Loan Consultant Services in Ahmedabad | Patel & Vaghasiya CA"
                description="Looking for a Secured Loan Consultant in Ahmedabad? We provide hybrid loans, machinery finance, working capital, project loans, and bank coordination support."
                url="https://yourwebsite.com/services/secured-loan"
                image="https://yourwebsite.com/assets/secured-loan-banner.jpg"
                keywords="Secured Loan Consultant Ahmedabad, Hybrid Loan Consultant, CGTMSE Loan Advisory, Project Loan Consultant, Working Capital Loan, Machinery Loan, Bank Loan Documentation Support, MSME Loan Expert"
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
                            Secured Loan Consultant Services
                        </h1>

                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            Smart Funding Solutions for Business Growth, Machinery Purchase & Working Capital
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            At Patel & Vaghasiya – Financial & Secured Loan Consultants, we help businesses secure the right funding at the right time.
                            Whether you are expanding operations, purchasing machinery, or managing working capital, we provide end-to-end advisory and documentation support.
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Our expert team ensures structured financing, faster processing, and maximum eligible benefits for MSMEs, traders, manufacturers, service providers, and startups.
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

                    {/* WHY SECURED LOAN */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Choose a Secured Loan?</h2>

                        <div className="glass-card p-10 space-y-4">
                            <p className="text-gray-700 text-lg">
                                A secured loan helps you access higher limits, lower interest rates, and longer tenure by pledging an asset such as:
                            </p>

                            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                                {[
                                    "Residential / Commercial Property",
                                    "Industrial Shed or Plot",
                                    "Home Property",
                                    "Machinery",
                                    "Fixed Deposits",
                                    "Other Collateral Assets"
                                ].map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>

                            <p className="text-gray-700 text-lg">
                                Businesses prefer secured loans for:

                            </p>
                            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                                {[
                                    "Business Expansion",
                                    "Machinery & Equipment Purchase",
                                    "Working Capital Needs",
                                    "Project Finance",
                                    "OD/CC Limits",
                                    "Term Loans & Project Loans"
                                ].map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.section>

                    {/* HYBRID LOAN */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Hybrid Loan: Secured + CGTMSE</h2>
                        <p className="text-gray-700 text-lg">
                            Reduce Collateral Requirement. Increase Loan Eligibility.
                        </p>
                        <p className="text-gray-700 text-lg">We specialize in structuring HYBRID LOANS, where part of the loan is covered by collateral and the remaining part is backed by CGTMSE guarantee.
</p>
                        <div className="glass-card p-10 space-y-4">
                            <p className="text-gray-700 text-lg font-semibold">What is a Hybrid Loan?</p>
                            <p className="text-gray-700 text-lg">
                                A smart financing structure where a portion of the loan is secured by property or machinery, and the remaining portion is covered under CGTMSE (without collateral).
                            </p>
                            <p className="text-gray-700 text-lg font-semibold">Benefits of Hybrid Loan:</p>
                            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                                {[
                                    "Higher loan eligibility even with limited property value",
                                    "Lower margin requirement",
                                    "Ideal for New MSMEs & Growing Businesses",
                                    "Flexible terms approved by most leading banks",
                                    "Faster sanction due to blended security",
                                    "Perfect for Machinery Finance + Working Capital combo"
                                ].map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-lg font-semibold">Best Use Cases:</p>
                            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                                {[
                                    "Manufacturing units upgrading machinery",
                                    "Traders increasing turnover with working capital",
                                    "Startups lacking large collateral",
                                    "Businesses planning expansion projects"
                                ].map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-lg">We have helped numerous MSMEs in Ahmedabad & Gujarat secure hybrid loans with optimal structures.
</p>
                        </div>
                    </motion.section>

                    {/* OUR SERVICES */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Our Secured Loan Consulting Services</h2>

                        <div className="glass-card p-10 space-y-10">
                            {[
                                {
                                    title: "Loan Eligibility Assessment",
                                    points: [
                                        "Property valuation guidance",
                                        "Business financial analysis",
                                        "Loan amount planning",
                                        "Hybrid loan structuring",
                                    ],
                                },
                                {
                                    title: "Documentation & Application Support",
                                    points: [
                                        "CMA Data",
                                        "Project Report",
                                        "Financial Projections",
                                        "Net-worth & Collateral Statements",
                                        "CGTMSE Fee & Eligibility Planning",
                                    ],
                                },
                                {
                                    title: "Bank Coordination & Processing",
                                    points: [
                                        "Choosing best bank/NBFC",
                                        "Negotiating interest rates",
                                        "Follow-up for sanction",
                                        "Query resolution",
                                    ],
                                },
                                {
                                    title: "Post-Sanction Support",
                                    points: [
                                        "Documentation signing",
                                        "Mortgage process",
                                        "Disbursement guidance",
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

                    {/* WHY CHOOSE US */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Businesses Trust Us</h2>

                        <div className="glass-card p-10">
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "10+ years’ experience in Secured & MSME Finance",
                                    "Strong understanding of banking norms",
                                    "End-to-end loan execution",
                                    "100% transparent process",
                                    "Expert in Hybrid Loans (Secured + CGTMSE)",
                                    "High approval ratio with major banks",
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
                                                    alt="MSME Guidance"
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
                            Need Secured or Hybrid Loan Assistance?
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Whether you need a Secured Loan, Project Loan, Machinery Finance, Working Capital, or a Hybrid Loan — we help you get the best possible funding.
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
