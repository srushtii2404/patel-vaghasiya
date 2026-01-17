"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";

export default function UnsecuredLoanPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Unsecured Loan (CGTMSE) Consultant in Ahmedabad",
        description:
            "CGTMSE unsecured loan consultancy for MSMEs — collateral-free OD/CC, machinery finance, documentation and bank coordination.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "CGTMSE Unsecured Loan Consulting",
        keywords: [
            "Unsecured Loan Consultant Ahmedabad",
            "CGTMSE Loan Consultant",
            "Collateral Free Loan",
            "OD CC Loan Consultant",
            "Machinery Loan CGTMSE",
            "MSME Loan Advisor",
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
            question: "Who is eligible for CGTMSE unsecured loans?",
            answer: "Existing businesses (usually 2+ years), with proper GST & bank statements and consistent turnover are typically eligible.",
        },
        {
            question: "What types of loans are covered under CGTMSE?",
            answer: "CGTMSE covers collateral-free OD/CC (working capital), unsecured machinery loans and other term loans for MSMEs as per the scheme.",
        },
        {
            question: "How long does approval usually take?",
            answer: "Approval depends on bank and documentation; with correct files it often moves faster — typically within 7–21 working days.",
        },
    ];

    return (
        <>
            <SEO
                title="Unsecured Loan (CGTMSE) Consultant Services in Ahmedabad | Patel & Vaghasiya CA"
                description="Get collateral-free CGTMSE loans for Working Capital (OD/CC), Machinery, and Business Expansion. Expert CGTMSE consultants in Ahmedabad."
                url="https://yourwebsite.com/services/unsecured-loan"
                image="https://yourwebsite.com/assets/unsecured-loan-banner.jpg"
                keywords="Unsecured Loan Consultant Ahmedabad, CGTMSE Loan, OD/CC Loan, Machinery Loan CGTMSE"
                jsonLd={jsonLd}
            />

            {/* ---------------- HERO SECTION ---------------- */}
            <section className="relative bg-gradient-to-r from-[#134c78] to-[#398db8] rounded-4xl mx-2 py-20 overflow-hidden mt-28">
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

                <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-start gap-10 relative z-10">
                    {/* LEFT TEXT BLOCK */}
                    <motion.div
                        className="flex-1 space-y-6 lg:w-2/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Unsecured Loan (CGTMSE) Consultant Services
                        </h1>

                        <p className="text-2xl font-semibold text-gray-100">
                            Grow Your Business with Hassle-Free, Collateral-Free Funding
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Running a business for more than 2 years and looking to expand? Need additional working capital or want to purchase new machinery?
                            CGTMSE (Credit Guarantee Fund Trust for Micro & Small Enterprises) offers an excellent opportunity to get collateral-free loans —
                            and we help you secure them smoothly.
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            As professional CGTMSE Unsecured Loan Consultants, we assist MSMEs in obtaining the right funding for growth without pledging property or assets.
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
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex gap-10 py-20 section-bg">
                {/* LEFT CONTENT */}
                <div className="flex-1 space-y-16">

                    {/* WHY CGTMSE */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-extrabold gradient-heading">Why Choose CGTMSE Loan?</h2>

                        <div className="glass-card p-10 space-y-4">
                            <p className="text-gray-700 text-lg">
                                CGTMSE provides credit guarantee cover to banks and NBFCs, allowing them to offer loans without collateral to eligible MSMEs.
                                This scheme is ideal for businesses that are performing well but lack security to offer for loans.
                            </p>
                            <p className="text-gray-700 text-lg font-semibold">Best Suitable For:
                            </p>
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Existing Businesses with 2+ Years Track Record",
                                    "Working Capital (OD/CC Limit) Enhancement",
                                    "Unsecured Machinery Purchase Loan",
                                    "Business Expansion & Marketing Setup",
                                    "Manufacturing, Trading & Service Units",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
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
                        <h2 className="text-4xl font-extrabold gradient-heading">Our Unsecured Loan (CGTMSE) Consulting Services</h2>

                        <p className="text-gray-700 text-lg">We provide structured support to prepare a lender-friendly CGTMSE file and improve approval chances.</p>

                        <div className="glass-card p-10 space-y-10">
                            {[{
                                title: "CGTMSE Eligibility Assessment",
                                points: [
                                    "Evaluate business profile, financials & bank statements",
                                    "Assess maximum CGTMSE benefit",
                                    "Credit score & banking history review",
                                ],
                            },
                            {
                                title: "Documentation & File Preparation",
                                points: [
                                    "Projected financials",
                                    "CMA reports",
                                    "Bankable DPR (Project Report)",
                                    "CGTMSE compliance documentation",
                                    "Business performance justification",
                                ],
                            },
                            {
                                title: "OD / CC Limit Under CGTMSE",
                                points: [
                                    "Collateral-free Cash Credit or Overdraft facility",
                                    "Working capital based on turnover",
                                    "Quick approval for strong banking history",
                                ],
                            },
                            {
                                title: "Machinery Loan Under CGTMSE",
                                points: [
                                    "100% finance possible up to eligible limit",
                                    "Suitable for manufacturing & production units",
                                    "Faster approvals with correct documentation",
                                ],
                            },
                            {
                                title: "End-to-End Bank Coordination",
                                points: [
                                    "Bank discussions, follow-ups & query resolution",
                                    "Application submission & monitoring",
                                    "Support through sanction to disbursement",
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

                    {/* WHY TRUST US */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-extrabold gradient-heading">Why Businesses Trust Us?</h2>

                        <div className="glass-card p-10 space-y-8">

                            {[
                                {
                                    title: "Expertise in MSME Funding",
                                    desc: "Years of experience in unsecured loans, CGTMSE, OD/CC, and machinery finance."
                                },
                                {
                                    title: "Strong Banking Network",
                                    desc: "We coordinate with multiple banks to get you the best loan structure."
                                },
                                {
                                    title: "High Success Ratio",
                                    desc: "Well-designed proposals lead to faster sanctioning and maximum loan amount."
                                },
                                {
                                    title: "Transparent Process",
                                    desc: "No hidden charges. No false commitments."
                                },
                                {
                                    title: "Tailor-Made Solutions",
                                    desc: "We design loan solutions based on your exact business needs and financial strength."
                                }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-4"
                                >
                                    {/* FIXED PERFECT SQUARE NUMBER BOX */}
                                    <div
                                        className="
                        w-[55px] h-[55px]
                        flex items-center justify-center 
                        bg-main/10 text-main 
                        font-bold text-lg
                        rounded-xl shadow-sm
                        shrink-0
                    "
                                    >
                                        {idx + 1}
                                    </div>

                                    <div>
                                        <p className="font-semibold text-lg">{item.title}</p>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
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
                        <h2 className="text-4xl font-extrabold gradient-heading">Who Can Apply?</h2>
                        <div className="glass-card p-10">
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                            <p className="text-gray-700 text-lg my-3">Your business is eligible if:</p>

                                {[
                                    "You are in business for 2+ years",
                                    "Your turnover shows consistent growth",
                                    "GST returns & bank transactions are proper",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-gray-700 text-lg my-3">You need funding for:</p>

                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "OD/CC",
                                    "Machinery Purchase",
                                    "Business Expansion",
                                    "Inventory & Raw Material",
                                    "New Project Setup",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>


                        </div>
                    </motion.section>

                    {/* LOAN FEATURES */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-extrabold gradient-heading">Loan Range & Features</h2>

                        <div className="glass-card p-10 space-y-3 text-gray-700 text-[17px]">
                            <p>Loan Amount : <strong>Up to ₹10 crores</strong></p>
                            <p>Security : <strong>100% Unsecured</strong></p>
                            <p>Scheme Cover : <strong>CGTMSE Guarantee</strong></p>
                            <p>Interest Rate : As per bank policy</p>
                            <p>Tenure : <strong>3 – 7 years</strong></p>
                            <p>Processing Speed : Depends on documentation quality (we ensure faster movement)</p>
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
                            alt="CGTMSE Guidance"
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
                            Grow Faster With Collateral-Free Business Funding
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Whether you want to strengthen working capital, enhance OD/CC limit, or upgrade machinery — CGTMSE-backed unsecured loans are the ideal solution.
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
