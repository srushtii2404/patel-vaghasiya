"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";

export default function IPOAdvisoryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "IPO Advisory & Support Services in Ahmedabad",
        description:
            "End-to-end IPO advisory specializing in pre-IPO readiness, financial strengthening, compliance, valuation, DRHP drafting, governance and post-IPO support.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "IPO Advisory Services",
    };

    const otherServices = [
        { name: "Statutory Audit", href: "/services/statutory-audit", icon: "📊" },
        { name: "Internal Audit", href: "/services/internal-audit", icon: "🔍" },
        { name: "Tax Audit", href: "/services/tax-audit", icon: "🧾" },
        { name: "Company Registration", href: "/services/company-registration", icon: "🏢" },
        { name: "Valuation", href: "/services/business-valuation", icon: "💹" },
    ];

    const faqs = [
        {
            question: "What is Pre-IPO advisory?",
            answer:
                "Pre-IPO advisory prepares your company for listing by restructuring, financial strengthening, compliance cleanup, valuation and readiness for due diligence.",
        },
        {
            question: "Do you support SME IPO?",
            answer:
                "Yes, we specialize in SME IPOs including NSE EMERGE, BSE SME and Mainboard IPO.",
        },
        {
            question: "How long does IPO preparation take?",
            answer:
                "Generally 3–9 months depending on restructuring, financial restatement, compliance gaps and merchant banker processes.",
        },
    ];

    return (
        <>
            <SEO
                title="IPO Advisory & Support Services | Pre-IPO Consulting"
                description="End-to-end IPO advisory including pre-IPO readiness, restructuring, valuation, DRHP support, due diligence and post-IPO compliance."
                url="https://yourwebsite.com/services/ipo-advisory"
                image="/assets/ipo-banner.jpg"
                keywords="IPO Advisory, SME IPO, Mainboard IPO, Pre IPO Consulting, DRHP Drafting"
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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">IPO Advisory & Support Services</h1>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            Trusted Pre-IPO Partner for Fast-Growing Companies
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Taking your company public is one of the biggest milestones in your business journey. It demands strategic planning, strict regulatory compliance, accurate financial reporting, and seamless execution.
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            At Patel & Vaghasiya, Chartered Accountants, we provide end-to-end IPO Advisory and Support Services, with a special focus on Pre-IPO readiness—helping companies strengthen their financials, governance, structure, and documentation well before they enter the capital market.

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
                <div className="flex-1 space-y-12 sm:space-y-16">
                    {/* WHY CHOOSE US FOR IPO */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Choose Us for IPO Advisory?</h2>

                        <div className="glass-card p-10 space-y-4">
                            {[
                                "Expertise in SME & Mainboard IPO",
                                "Strong coordination with Merchant Bankers, Registrars & Exchanges",
                                "Comprehensive Pre-IPO support for compliance, restructuring & valuation",
                                "Practical, business-focused approach",
                                "Transparent process with continuous guidance",
                            ].map((item, idx) => (
                                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> {item}
                                </p>
                            ))}
                        </div>
                    </motion.section>

                    {/* CORE SERVICES */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Our Core Services</h2>

                        <div className="glass-card p-10 space-y-10">
                            {/* PRE IPO SERVICE */}
                            <motion.div className="step-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                                <div className="step-circle">1</div>
                                <div className="step-content">
                                    <h3 className="font-bold text-main-dark text-xl mb-2">
                                        Pre-IPO Advisory & Readiness (Our Specialised Service)
                                    </h3>

                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-lg text-main-dark">Corporate Structuring & Clean-Up</h4>
                                        {[
                                            "Restructuring shareholding pattern",
                                            "Conversion of company (if required)",
                                            "Capital structuring & promoter holdings planning",
                                            "ESOP structuring and advisory",
                                        ].map((p, i) => (
                                            <p key={i} className="flex items-start gap-3 text-gray-700">
                                                <HiCheckCircle className="text-main text-xl" /> {p}
                                            </p>
                                        ))}

                                        <h4 className="font-semibold text-lg text-main-dark mt-4">Financial Diagnostic & Strengthening</h4>
                                        {[
                                            "Review of past financials",
                                            "Identifying gaps in accounting & reporting",
                                            "Restatement of financial statements",
                                            "Ind AS conversion support",
                                            "Working capital optimisation guidance",
                                        ].map((p, i) => (
                                            <p key={i} className="flex items-start gap-3 text-gray-700">
                                                <HiCheckCircle className="text-main text-xl" /> {p}
                                            </p>
                                        ))}

                                        <h4 className="font-semibold text-lg text-main-dark mt-4">Compliance & Legal Readiness</h4>
                                        {[
                                            "ROC, Income Tax & GST compliance check",
                                            "Secretarial compliance verification",
                                            "Board processes improvement",
                                            "Drafting & updating company policies",
                                        ].map((p, i) => (
                                            <p key={i} className="flex items-start gap-3 text-gray-700">
                                                <HiCheckCircle className="text-main text-xl" /> {p}
                                            </p>
                                        ))}

                                        <h4 className="font-semibold text-lg text-main-dark mt-4">Due Diligence Preparation</h4>
                                        {[
                                            "Preparing for merchant banker, legal & financial due diligence",
                                            "Ensuring statutory registers, filings & documents are corrected",
                                            "Organising data room",
                                        ].map((p, i) => (
                                            <p key={i} className="flex items-start gap-3 text-gray-700">
                                                <HiCheckCircle className="text-main text-xl" /> {p}
                                            </p>
                                        ))}

                                        <h4 className="font-semibold text-lg text-main-dark mt-4">Business Valuation & Projections</h4>
                                        {[
                                            "Equity valuation support",
                                            "Detailed financial projections",
                                            "Ratio analysis & investment highlights preparation",
                                        ].map((p, i) => (
                                            <p key={i} className="flex items-start gap-3 text-gray-700">
                                                <HiCheckCircle className="text-main text-xl" /> {p}
                                            </p>
                                        ))}

                                        <h4 className="font-semibold text-lg text-main-dark mt-4">Branding & Investor Presentation</h4>
                                        {[
                                            "Drafting company profile",
                                            "Creating pitch deck & investment theme",
                                            "Highlighting strengths, business model & growth story",
                                        ].map((p, i) => (
                                            <p key={i} className="flex items-start gap-3 text-gray-700">
                                                <HiCheckCircle className="text-main text-xl" /> {p}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* IPO EXECUTION */}
                            <motion.div className="step-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                                <div className="step-circle">2</div>
                                <div className="step-content">
                                    <h3 className="font-bold text-main-dark text-xl mb-2">IPO Execution Support</h3>

                                    {[
                                        "Coordination with Merchant Banker, Legal Advisor, RTA & Exchanges",
                                        "Drafting and review of DRHP / Prospectus",
                                        "Ensuring compliance with SEBI guidelines",
                                        "Support during issue management & marketing",
                                        "Assistance during listing and post-listing follow-ups",
                                    ].map((p, i) => (
                                        <p key={i} className="flex items-start gap-3 text-gray-700">
                                            <HiCheckCircle className="text-main text-xl" /> {p}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* POST IPO */}
                            <motion.div className="step-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                                <div className="step-circle">3</div>
                                <div className="step-content">
                                    <h3 className="font-bold text-main-dark text-xl mb-2">Post-IPO Compliance & Support</h3>

                                    {[
                                        "Quarterly & annual listing compliances",
                                        "Corporate governance advisory",
                                        "Secretarial & statutory support",
                                        "Investor relations assistance",
                                        "Board reporting and financial review",
                                    ].map((p, i) => (
                                        <p key={i} className="flex items-start gap-3 text-gray-700">
                                            <HiCheckCircle className="text-main text-xl" /> {p}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* INDUSTRIES WE SERVE */}
                    <motion.section className="space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Industries We Serve</h2>

                        <div className="glass-card p-10 space-y-3">
                            {[
                                "Manufacturing",
                                "Trading & Distribution",
                                "Textiles & Chemicals",
                                "Infrastructure & Engineering",
                                "IT & Technology",
                                "Pharma & Healthcare",
                                "FMCG & Consumer Products",
                                "Service Sector Businesses",
                            ].map((service, idx) => (
                                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> {service}
                                </p>
                            ))}
                        </div>
                    </motion.section>

                    {/* WHY COMPANIES TRUST US */}
                    <motion.section className="space-y-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Companies Trust Us</h2>

                        <div className="glass-card p-10 space-y-3">
                            {[
                                "Practical, business-friendly advisory",
                                "End-to-end support from planning to listing",
                                "Experienced team of CA, CS, Valuers & Financial Advisors",
                                "Clear communication and continuous guidance",
                                "100% confidentiality and professional ethics",
                            ].map((item, idx) => (
                                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> {item}
                                </p>
                            ))}
                        </div>
                    </motion.section>
                </div>

                {/* SIDEBAR */}
                <Sidebar services={otherServices} />
            </div>

            {/* FAQ SECTION */}
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-0 bg-sky-50">
                <FAQ faqs={faqs} />
            </div>

            {/* CTA SECTION */}
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
                <section className="bg-main-dark p-10 rounded-xl shadow-md border border-bg-mainDark-100 flex flex-col md:flex-row items-center gap-8">
                    <motion.div className="flex-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <Image src="/assets/ipo-support.png" alt="IPO Advisory" width={400} height={400} className="rounded-xl" />
                    </motion.div>

                    <motion.div className="flex-1 text-center md:text-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <h2 className="text-4xl font-bold text-white mb-4">Ready to Take Your Company Public?</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Whether you're planning an SME or Mainboard IPO — our team supports you at every step.
                        </p>

                        <div className="mt-6">
                            <Link href="/contact" className="inline-block bg-main text-white font-semibold px-8 py-3 rounded-xl shadow hover:bg-bg-mainDark-600 transition">
                                Contact Us Today
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </div>
        </>
    );
}
