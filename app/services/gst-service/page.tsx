"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";

export default function GSTServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "GST Registration, Return Filing & Litigation Services in Gujarat",
        description:
            "End-to-end GST services in Gujarat including registration, return filing, ITC reconciliation, and litigation handling for businesses and MSMEs.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Gujarat",
        serviceType: "GST Compliance & Litigation Services",
        keywords: [
            "GST Registration Gujarat",
            "GST Return Filing Ahmedabad",
            "GST Litigation Services",
            "MSME GST Compliance",
            "GST E-commerce Filing",
            "GST Notices Handling",
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
            question: "What is included in GST registration services?",
            answer:
                "New GST registration, amendment of details, composition scheme registration, e-commerce GST & TCS compliance for platforms like Amazon, Flipkart, Meesho.",
        },
        {
            question: "How often should GST returns be filed?",
            answer:
                "GSTR-1 monthly/quarterly, GSTR-3B monthly, GSTR-9/9C annually. We also handle ITC reconciliation, e-invoicing, and reverse charge compliance.",
        },
        {
            question: "Can you help with GST notices and audits?",
            answer:
                "Yes, we provide end-to-end support for notices like ASMT-10/11/12, DRC-01/07, audit & scrutiny notices, ITC mismatches, cancellations, revocations, and appeal filing.",
        },
    ];

    const gstServices = [
        {
            title: "GST Registration & Amendments",
            points: [
                "New GST Registration (Individual / Partnership / Pvt Ltd / LLP)",
                "GST Amendment (address, mobile, email, partner/director change)",
                "Composition Scheme Registration",
                "E-commerce GST & TCS compliance",
            ],
        },
        {
            title: "GST Return Filing",
            points: [
                "GSTR-1 (Sales) & GSTR-3B (Summary)",
                "GSTR-9 / 9C (Annual Return & Audit)",
                "ITC Reconciliation & Vendor Mismatch",
                "E-Invoicing & E-Way Bill Compliance",
                "Reverse Charge Mechanism (RCM) & LUT Filing for exporters",
            ],
        },
        {
            title: "GST Litigation & Notices Handling",
            points: [
                "GST ASMT-10, 11, 12 replies",
                "DRC-01, DRC-07, demand notices",
                "GST Audit Notice (Section 65/66)",
                "Scrutiny notices & ITC mismatch",
                "Cancellation, revocation & appeal filing",
            ],
        },
    ];

    return (
        <>
            <SEO
                title="GST Registration, Return Filing & Litigation Services in Gujarat | Patel & Vaghasiya CA"
                description="End-to-end GST services in Gujarat including registration, return filing, ITC reconciliation, and litigation handling for businesses and MSMEs."
                url="https://yourwebsite.com/services/gst-services"
                image="https://yourwebsite.com/assets/gst-services-banner.jpg"
                keywords="GST Registration Gujarat, GST Return Filing Ahmedabad, GST Litigation Services, MSME GST Compliance, GST E-commerce Filing, GST Notices Handling"
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
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Gujarat’s Trusted GST Registration, Return Filing & Litigation Service Provider
                        </h1>
                        <p className="text-2xl font-semibold text-gray-100">
                            Fast | Accurate | Compliance-Focused | Affordable
                        </p>
                        <p className="text-gray-100 leading-relaxed">
                            Managing GST compliance in India can be complex — but with the right partner, it becomes simple, smooth, and stress-free.
                        </p>
                        <p className="text-gray-100 leading-relaxed">
                            We provide end-to-end GST services across Gujarat, including Ahmedabad, Surat, Rajkot, Vadodara, Gandhinagar, Bhavnagar, and other cities — ensuring your business remains 100% compliant without penalties or last-minute rush.
                        </p>
                        <p className="text-gray-100 leading-relaxed">
                            Whether you are a startup, trader, manufacturer, service provider, e-commerce seller or MSME, we help you with complete GST guidance from registration to litigation.
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
                <div className="flex-1 space-y-16">
                    {/* SERVICES SECTIONS */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.1 }}
                    >
                        <h2 className="text-4xl font-extrabold gradient-heading">
                            Our GST Services
                        </h2>

                        <div className="glass-card p-10 space-y-10">
                            {gstServices.map((item, i) => (
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
                                        <ul className="space-y-2 list-disc list-inside text-gray-700 text-[17px]">
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
                    {/* WHY CHOOSE US */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-extrabold gradient-heading">Why Choose Us?</h2>
                        <div className="glass-card p-10 space-y-5 text-gray-700 text-[17px]">
                            {[
                                {
                                    title: "GST Experts with Years of Experience",
                                    description: "Handled 500+ GST registrations & 10,000+ returns across Gujarat."
                                },
                                {
                                    title: "Transparent & Affordable Pricing",
                                    description: "No hidden costs. No unnecessary services."
                                },
                                {
                                    title: "Dedicated Relationship Manager",
                                    description: "One point of contact for all GST-related work."
                                },
                                {
                                    title: "Time-Saving & Error-Free Compliance",
                                    description: "We use advanced tools for reconciliation, tracking, and timely filing."
                                },
                                {
                                    title: "PAN Gujarat Service Coverage",
                                    description: "Available for onsite and online support."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <HiCheckCircle className="text-main text-xl mt-1" />
                                    <div>
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-gray-600 mt-1">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>


                    {/* WHO WE SERVE */}
                    <motion.section
                        className="space-y-6 mt-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-extrabold gradient-heading">Who We Serve</h2>
                        <div className="glass-card p-10">
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Manufacturers & Traders",
                                    "Builders & Real Estate Developers",
                                    "Transporters & Logistics Firms",
                                    "Professionals (CA, CS, Architect, Consultant)",
                                    "E-Commerce Sellers",
                                    "Pharma, Chemical & Textile MSMEs",
                                    "Restaurants & Hospitality",
                                    "Startups & Small Businesses",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.section>

                    {/* PROCESS SECTION */}
<motion.section
    className="space-y-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.1 }}
>
    <h2 className="text-4xl font-extrabold gradient-heading">
        Our Process
    </h2>

    <div className="glass-card p-10 space-y-6">
        {[
            {
                title: "Consultation",
                description: "Understand your business & compliance requirement."
            },
            {
                title: "Documentation",
                description: "Collect required documents & prepare application/returns."
            },
            {
                title: "Filing",
                description: "Timely and accurate filing of GST returns or registration."
            },
            {
                title: "Compliance Tracking",
                description: "Regular updates, reminders, and ITC reconciliation."
            },
            {
                title: "Litigation Support",
                description: "If any notice arises — we manage end-to-end."
            }
        ].map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
                <span className="text-main font-bold text-xl mt-1">{idx + 1}.</span>
                <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="text-gray-700 mt-1">{step.description}</p>
                </div>
            </div>
        ))}
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

            {/* CTA */}
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
                            src="/assets/gst-services.png"
                            alt="GST Services"
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
                            Get Expert GST Support Today
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Stay compliant. Save money. Avoid penalties. Let our professional GST experts handle everything for you.
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
