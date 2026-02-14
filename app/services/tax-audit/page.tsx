"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";

export default function TaxAuditPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Tax Audit Services in Ahmedabad",
        description:
            "Professional Tax Audit Services under Section 44AB ensuring compliance, accuracy, and financial transparency for businesses and professionals.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "Tax Audit Services",
        keywords: [
            "Tax Audit Services Ahmedabad",
            "Section 44AB Audit",
            "IT Audit",
            "Tax Compliance",
            "Professional Tax Audit",
            "Business Tax Audit",
            "MSME Tax Audit",
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
    ];

    const faqs = [
        {
            question: "Who requires a Tax Audit?",
            answer:
                "Businesses with turnover above ₹1 crore, Professionals with gross receipts above ₹50 lakh, and those under presumptive taxation declaring profits below prescribed thresholds.",
        },
        {
            question: "What documents are needed for a Tax Audit?",
            answer:
                "Books of accounts, bank statements, GST & TDS returns, fixed asset details, loan statements, inventory details, agreements, invoices, vouchers, and previous year ITR & audit reports.",
        },
        {
            question: "What is the timeline for completing a Tax Audit?",
            answer:
                "Tax Audit must be completed and reports filed before the statutory deadline of the Income Tax Department, usually 30th September of the assessment year.",
        },
    ];

    return (
        <>
            <SEO
                title="Tax Audit Services in Ahmedabad | Patel & Vaghasiya CA"
                description="Accurate, compliant & stress-free Tax Audit Services under Section 44AB for businesses and professionals."
                url="https://yourwebsite.com/services/tax-audit"
                image="https://yourwebsite.com/assets/tax-audit-banner.jpg"
                keywords="Tax Audit Services Ahmedabad, Section 44AB Audit, IT Audit, Tax Compliance, Professional Tax Audit, Business Tax Audit, MSME Tax Audit"
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
                        className="flex-1 space-y-6 lg:w-2/3"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Tax Audit Services – Accurate, Compliant & Stress-Free

                        </h1>
                        <p className="text-gray-100 leading-relaxed">
                            At Patel & Vaghasiya, Chartered Accountants, we ensure your business stays fully compliant with Income Tax laws under Section 44AB. Our team helps you avoid penalties, reduce tax risks, and maintain complete financial transparency—so you can focus on growing your business confidently.
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

                    {/* WHY TAX AUDIT */}
                    <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl sm:text-3xl sm:text-4xl font-extrabold gradient-heading">Why Tax Audit Is Important</h2>

                        <div className="glass-card p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
                            <p>A Tax Audit is not just a statutory requirement—it is a powerful business tool. It helps:
                            </p>
                            {[
                                "Validate correctness of your books of accounts",
                                "Ensure accurate reporting of income, expenses, and deductions",
                                "Reduce chances of tax scrutiny, notices, and penalties",
                                "Strengthen financial discipline and internal control",
                                "Build trust with banks, investors, and stakeholders",
                            ].map((item, idx) => (
                                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> {item}
                                </p>
                            ))}
                        </div>
                    </motion.section>

                    {/* WHO REQUIRES A TAX AUDIT */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Who Requires a Tax Audit?
                        </h2>

                        <div className="glass-card p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">

                            {/* 1) Businesses */}
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-main-dark">1) Businesses</h3>
                                <p className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> Turnover above ₹1 crore
                                </p>
                                <p className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> Turnover up to ₹10 crore, if cash receipts/payments exceed 5%
                                </p>
                            </div>

                            {/* 2) Professionals */}
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-main-dark">2) Professionals</h3>
                                <p className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> Gross receipts above ₹50 lakh
                                </p>
                            </div>

                            {/* 3) Presumptive Taxation */}
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-main-dark">3) Presumptive Taxation</h3>
                                <p className="text-gray-700 text-lg font-medium">Tax Audit applies if:</p>
                                <p className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> Business under 44AD declares profit below 6%/8%
                                </p>
                                <p className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> Professional under 44ADA declares profit below 50%
                                </p>
                            </div>

                        </div>
                    </motion.section>


                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Our Tax Audit Services Include</h2>

                        <div className="glass-card p-10 space-y-5">

                            {/* Review of Books of Accounts */}
                            <div>
                                <h3 className="flex items-center gap-3 text-2xl font-semibold text-main mb-1">
                                    <HiCheckCircle className="text-main text-xl" /> Review of Books of Accounts
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    Thorough verification of ledgers, vouchers, bank statements, and financial statements.
                                </p>
                            </div>

                            {/* Compliance Check */}
                            <div>
                                <h3 className="flex items-center gap-3 text-2xl font-semibold text-main mb-1">
                                    <HiCheckCircle className="text-main text-xl" /> Compliance Check
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    Ensuring your business complies with all applicable provisions of the Income Tax Act.
                                </p>
                            </div>

                            {/* Tax Audit Report */}
                            <div>
                                <h3 className="flex items-center gap-3 text-2xl font-semibold text-main mb-1">
                                    <HiCheckCircle className="text-main text-xl" /> Tax Audit Report (Form 3CA/3CB & 3CD)
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    Complete preparation and filing of statutory reports with 100% accuracy.
                                </p>
                            </div>

                            {/* Depreciation & Allowance Verification */}
                            <div>
                                <h3 className="flex items-center gap-3 text-2xl font-semibold text-main mb-1">
                                    <HiCheckCircle className="text-main text-xl" /> Depreciation & Allowance Verification
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    Correct calculation of depreciation, disallowances, and deductions.
                                </p>
                            </div>

                            {/* GST–TDS–Payroll Cross Matching */}
                            <div>
                                <h3 className="flex items-center gap-3 text-2xl font-semibold text-main mb-1">
                                    <HiCheckCircle className="text-main text-xl" /> GST–TDS–Payroll Cross Matching
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    Identify mismatches and prevent future scrutiny or penalties.
                                </p>
                            </div>

                            {/* Risk Assessment & Advisory */}
                            <div>
                                <h3 className="flex items-center gap-3 text-2xl font-semibold text-main mb-1">
                                    <HiCheckCircle className="text-main text-xl" /> Risk Assessment & Advisory
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    Highlight critical issues and guide you with corrective actions.
                                </p>
                            </div>

                            {/* Post-Audit Support */}
                            <div>
                                <h3 className="flex items-center gap-3 text-2xl font-semibold text-main mb-1">
                                    <HiCheckCircle className="text-main text-xl" /> Post-Audit Support
                                </h3>
                                <p className="text-gray-700 text-lg">
                                    Assistance during assessments, notices, and further clarifications.
                                </p>
                            </div>

                        </div>
                    </motion.section>


                    {/* WHY CHOOSE US */}
                    <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Choose Us?</h2>
                        <div className="glass-card p-10 space-y-4">
                            <p>At Patel & Vaghasiya, Chartered Accountants, we combine expertise with professionalism, giving you a seamless tax audit experience.
</p>
                            {[
                                "Experienced Tax Audit Specialists",
                                "Zero-error approach",
                                "Quick turnaround time",
                                "Confidential & secure data handling",
                                "Advisory for future tax planning",
                                "Support for MSMEs, SMEs, Startups & Large Enterprises",
                            ].map((item, idx) => (
                                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> {item}
                                </p>
                            ))}
                        </div>
                    </motion.section>

                    {/* INDUSTRIES */}
                    <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Industries We Serve</h2>
                        <div className="glass-card p-10 space-y-4">
                            <p>We have extensive experience across sectors:
</p>
                            {[
                                "Manufacturing",
                                "Trading",
                                "Logistics & Transport",
                                "Construction",
                                "IT & Startups",
                                "Service Providers",
                                "Real Estate",
                                "Hospitals & Clinics",
                                "Cooperative Societies",
                                "Trusts & NGOs",
                            ].map((item, idx) => (
                                <p key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                                    <HiCheckCircle className="text-main text-xl" /> {item}
                                </p>
                            ))}
                        </div>
                    </motion.section>

                    {/* DOCUMENTS REQUIRED */}
                    <motion.section className="space-y-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Documents Required for Tax Audit</h2>
                        <div className="glass-card p-10 space-y-4">
                            <p>We make the process simple—just keep the following ready:
</p>
                            {[
                                "Books of accounts (Final accounts & ledgers)",
                                "Bank statements",
                                "GST returns",
                                "TDS returns",
                                "Fixed asset details",
                                "Loan statements",
                                "Inventory details",
                                "Agreements, invoices, vouchers",
                                "Previous year ITR & audit reports",
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
                            alt="Tax Audit"
                            className="rounded-xl w-full h-auto"
                            width={400}
                            height={400}
                            priority
                        />
                    </motion.div>
                    <motion.div className="flex-1 text-center md:text-left" initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get Stress-Free Tax Audit Support</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">Avoid penalties, stay compliant, and ensure your financials are audit-ready with our expert team.</p>
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
