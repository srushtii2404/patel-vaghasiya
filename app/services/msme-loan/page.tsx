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

export default function MSMELoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "MSME Loan Consultant in Ahmedabad",
        description:
            "Professional MSME loan advisory including CGTMSE loans, working capital, machinery finance, and term loan documentation.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "MSME Loan Consulting",
        keywords: [
            "MSME Loan Consultant Ahmedabad",
            "CGTMSE Loan Consultant",
            "Working Capital Loan Consultant",
            "Machinery Loan Advisor",
            "Term Loan Consultant",
            "Unsecured Business Loan Ahmedabad",
            "CA for MSME Loan",
            "Collateral Free Loan CGTMSE",
        ],
    };

    const otherServices = allServices.filter(s => s.href !== "/services/msme-loan");

    const faqs = [
        {
            question: "What is an MSME loan?",
            answer:
                "An MSME loan is business finance provided to Micro, Small and Medium Enterprises for working capital, machinery purchase, expansion, or business growth. These loans are offered by banks, NBFCs, and government‑supported schemes.",
        },
        {
            question: "Who is eligible for an MSME loan?",
            answer:
                "Any business registered as a Proprietorship, Partnership, LLP, or Private Limited Company can apply, provided the business is operational, has valid Udyam (MSME) Registration, and maintains regular turnover and banking transactions (GST compliance where applicable).",
        },
        {
            question: "What types of MSME loans are available?",
            answer:
                "Common MSME loan options include: Working Capital Loan (OD / CC), Term Loan for machinery or expansion, Unsecured Business Loan, CGTMSE collateral‑free loan, Invoice / Bill Discounting, and Government‑subsidised MSME loans.",
        },
        {
            question: "What is the difference between secured and unsecured MSME loans?",
            answer:
                "Secured loans require collateral like property, machinery, or fixed deposits and usually offer lower interest rates. Unsecured loans have no collateral requirement but charge higher interest and may have stricter eligibility criteria.",
        },
        {
            question: "What is CGTMSE loan and how does it help MSMEs?",
            answer:
                "CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) allows collateral‑free loans up to ₹5 crore (most banks cap at ₹2 crore). It’s ideal for new and growing MSMEs with good financials but no property to offer as security.",
        },
        {
            question: "How much MSME loan amount can I get?",
            answer:
                "Loan amount depends on business turnover and profitability, bank statements, credit score (CIBIL), existing liabilities, and nature of business; typically MSME loans range from ₹5 lakh up to ₹5 crore or more.",
        },
        {
            question: "What documents are required for MSME loan?",
            answer:
                "Common documents include PAN & Aadhaar of proprietors/partners/directors, business registration documents, Udyam Registration, last 2–3 years ITR & financial statements, GST returns (if applicable), and bank statements (6–12 months).",
        },
        {
            question: "How long does MSME loan approval take?",
            answer:
                "Unsecured loans: 3–7 working days. Secured / CGTMSE loans: 15–30 days. Proper documentation and financial planning significantly reduce approval time.",
        },
        {
            question: "Is GST mandatory for all MSME loans?",
            answer:
                "GST is not mandatory for every MSME loan, but many banks impose it for higher limits. Good GST compliance helps in easier approval and improved limit.",
        },
        {
            question: "Will MSME loan affect my personal credit score?",
            answer:
                "Yes. Since most MSME loans require personal guarantee, timely repayments improve your CIBIL score while defaults can negatively impact it.",
        },
        {
            question: "Can I apply for MSME loan without income tax return?",
            answer:
                "Banks may provide loans without ITR, but interest rates are higher and amounts are limited. Having ITR and full financials is strongly recommended.",
        },
        {
            question: "Why should I take professional help for MSME loans?",
            answer:
                "Professional support helps with eligibility assessment, documentation, financial projections, bank/NBFC coordination, faster approval, better interest negotiation, and avoiding rejection or compliance issues.",
        },
        {
            question: "How can Patel & Vaghasiya help in MSME loans?",
            answer:
                "We assist with loan eligibility analysis, CMA data & project reports, bank/NBFC coordination, CGTMSE & government schemes support, working capital structuring, post‑sanction compliance, and end‑to‑end MSME loan assistance under one roof.",
        },
    ];

    return (
        <>
            <SEO
                title="MSME Loan Consultant Services in Ahmedabad | Patel & Vaghasiya CA"
                description="Looking for MSME Loan Consultant in Ahmedabad? We provide CGTMSE loan advisory, working capital, machinery loan, and business loan documentation support."
                url="https://yourwebsite.com/services/msme-loan"
                image="https://yourwebsite.com/assets/msme-loan-banner.jpg"
                keywords="MSME Loan Consultant Ahmedabad, CGTMSE Loan Advisor, Collateral Free Loan, Working Capital Loan, Machinery Loan"
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
                        className="flex-1 space-y-4 sm:space-y-6 lg:w-2/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            MSME Loan Consultant Services in Ahmedabad
                        </h1>

                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            Specialist in CGTMSE Collateral-Free Loans
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            At Patel & Vaghasiya, we help MSMEs secure the right funding at the right time —
                            with full transparency, compliance & ethical guidance.
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Whether you're starting a new unit, expanding capacity, buying machinery, or
                            improving working capital — our advisory ensures you select the best loan product
                            under the available Government schemes.
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

                    {/* Why MSME Loans Are Important */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Why MSME Loans Are Essential for Business Growth
                        </h2>
                        <div className="glass-card p-10 space-y-6">
                        <p className="text-gray-700 text-lg">Micro, Small, and Medium Enterprises (MSMEs) form the backbone of India’s economic development. Having timely access to finance enables businesses to:</p>

                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Boost working capital",
                                    "Purchase new machinery",
                                    "Expand production capacity",
                                    "Upgrade technology & infrastructure",
                                    "Improve cash flow & operations",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl" /> {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-gray-700 text-lg">
                                We guide you through documentation, projections, and lender coordination —
                                ensuring a smooth and compliant loan process.
                            </p>
                        </div>
                    </motion.section>

                    {/* MSME Advisory Services */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.1 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Our MSME Loan Advisory Services
                        </h2>

                        <p className="text-gray-700 text-lg">
                            We provide end-to-end MSME loan support across multiple categories:
                        </p>

                        <div className="glass-card p-10 space-y-10">

                            {[
                                {
                                    title: "CGTMSE Collateral-Free Loans",
                                    points: [
                                        "Eligibility assessment",
                                        "Preparing business projections",
                                        "Preparing CGTMSE-compliance documentation",
                                        "Coordinating with banks for the guarantee approval",
                                        "Ensuring proper file structuring to reduce delays",
                                    ],
                                },
                                {
                                    title: "Project Loan & Term Loan Advisory",
                                    points: [
                                        "For setting up new units, capacity expansion, or major capital investment",
                                        "Our services include DPR preparation, financial forecasting, and bank coordination",
                                    ],
                                },
                                {
                                    title: "Machinery Loan",
                                    points: [
                                        "Assistance in funding for new machinery purchase under various subsidy-linked schemes",],
                                },
                                {
                                    title: "Working Capital & CC / OD Limits",
                                    points: [
                                        "Support in preparing CMA data, stock statements, financial ratios, and bank negotiations.",
                                    ],
                                },
                                {
                                    title: "Unsecured Business Loans",
                                    points: [
                                        "Guidance for businesses looking for quick funding based on income and financial strength",
                                    ],
                                },
                                {
                                    title: "Mortgage / Secured Loans",
                                    points: [
                                        "Advisory for long-term secured financing at competitive interest rates",
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
                                        <h3 className="font-bold text-main-dark text-xl mb-2">
                                            {item.title}
                                        </h3>

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

                    {/* Why Choose Us as Your MSME Loan Consultant */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Why Choose Us as Your MSME Loan Consultant?
                        </h2>

                        <div className="glass-card p-10 space-y-10">

                            {/* ICAI Ethics Title + Description */}
                            <div>
                                <h3 className="text-xl font-bold text-main-dark flex items-center gap-2">
                                    <HiCheckCircle className="text-main text-2xl" />
                                    ICAI-Ethics Compliant Advisory
                                </h3>
                                <p className="text-gray-700 mt-2">
                                    We do not guarantee loan sanctions.
                                    We only offer professional consultancy based on
                                    eligibility, documentation accuracy, and financial discipline.
                                </p>
                            </div>

                            {/* Banking Network Title + Description */}
                            <div>
                                <h3 className="text-xl font-bold text-main-dark flex items-center gap-2">
                                    <HiCheckCircle className="text-main text-2xl" />
                                    Strong Banking Network & Experience
                                </h3>
                                <p className="text-gray-700 mt-2">
                                    We understand lender expectations, risk parameters, due diligence,
                                    and documentation standards—helping you prepare a lender-friendly file.
                                </p>
                            </div>

                            {/* Transparent Process */}
                            <div>
                                <h3 className="text-xl font-bold text-main-dark flex items-center gap-2">
                                    <HiCheckCircle className="text-main text-2xl" />
                                    Transparent & Professional Process
                                </h3>
                                <p className="text-gray-700 mt-2">
                                    No hidden charges. No false commitments.
                                    We follow a clear, structured process from assessment to disbursement.
                                </p>
                            </div>

                            {/* Customized Planning */}
                            <div>
                                <h3 className="text-xl font-bold text-main-dark flex items-center gap-2">
                                    <HiCheckCircle className="text-main text-2xl" />
                                    Customized Financial Planning
                                </h3>
                                <p className="text-gray-700 mt-2">
                                    Every business is unique.
                                    We create tailored financial projections and loan strategies based on your specific goals.
                                </p>
                            </div>

                        </div>
                    </motion.section>


                    {/* CGTMSE Loan – Key Benefits */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            CGTMSE Loan – Key Benefits
                        </h2>

                        <div className="glass-card p-10 space-y-8">

                            {/* Benefits List */}
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Collateral-Free Loan for eligible MSMEs",
                                    "Suitable for manufacturing, trading, and service businesses",
                                    "Ideal for new entrepreneurs without assets",
                                    "Encourages micro & early-stage enterprises",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Highlighted Note Section */}
                            <div className="bg-main/10 border border-main/20 p-6 rounded-xl">
                                <p className="text-main-dark font-medium text-lg leading-relaxed">
                                    At Patel & Vaghasiya, we prepare your CGTMSE loan file in a
                                    lender-friendly and scheme-compliant manner to improve the chances
                                    of approval and reduce unnecessary delays.
                                </p>
                            </div>

                        </div>
                    </motion.section>


                    {/* Process We Follow */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Process We Follow
                        </h2>

                        <div className="glass-card p-10 space-y-10">

                            {/* Steps List */}
                            <div className="space-y-6">
                                {[
                                    "Initial Discussion & Eligibility Check",
                                    "Business Plan / DPR Preparation",
                                    "CMA Data & Financial Projections",
                                    "Document Review & Compliance Check",
                                    "Bank Coordination & Follow-up",
                                    "CGTMSE Guarantee Advisory (if applicable)",
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center gap-4" // <-- Changed from items-start to items-center
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    >
                                        <div className="w-10 h-10 flex items-center justify-center bg-main/10 text-main font-bold rounded-full shadow-sm">
                                            {idx + 1}
                                        </div>
                                        <p className="text-gray-700 text-lg">{item}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Final Note */}
                            <p className="text-gray-700 text-md border-t pt-4">
                                We ensure your file is professionally presented, financially sound, and fully compliant with lender requirements.
                            </p>

                        </div>
                    </motion.section>




                    {/* Who Can Apply */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Who Can Avail Our Services?</h2>

                        <div className="glass-card p-10">
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Start-ups and new entrepreneurs",
                                    "Manufacturers",
                                    "Traders & wholesalers",
                                    "Service providers",
                                    "Small industries",
                                    "Family-run businesses",
                                    "Businesses planning expansion or modernization",
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
                            alt="MSME Guidance"
                            className="rounded-xl w-full h-auto"
                            width={400}
                            height={400}
                            priority
                        />
                    </motion.div>

                    {/* RIGHT CTA */}
                    <motion.div
                        className="flex-1 text-center md:text-left"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Get Expert MSME & CGTMSE Loan Assistance
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Planning to expand your business or need funding support?
                            Let us help you prepare compliant financials & strong loan documentation.
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
