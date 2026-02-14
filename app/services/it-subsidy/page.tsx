"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";

export default function ITSubsidyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "GovernmentService",
        name: "Gujarat IT / ITeS Subsidy Consultant Services",
        description:
            "End-to-end consultancy for Gujarat IT/ITeS Incentive Policy (2022–27) — CAPEX, OPEX, employment incentives, interest subsidy, EPF refund, co-working subsidy and more.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Gujarat, India",
        serviceType: "IT/ITeS Subsidy Consultancy",
        keywords: [
            "Gujarat IT Subsidy",
            "ITeS Incentive Policy 2022-27",
            "IT Subsidy Consultant Ahmedabad",
            "CAPEX subsidy Gujarat",
            "OPEX subsidy Gujarat",
            "Employment incentive Gujarat",
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
            question: "Who is eligible for Gujarat IT/ITeS subsidies?",
            answer:
                "New IT/ITeS units set up after 7 Feb 2022 with minimum 10 employees, and expansion units that meet the employee increase criteria are the primary eligible categories. Specific eligibility varies by incentive type.",
        },
        {
            question: "What is the CAPEX subsidy limit?",
            answer:
                "CAPEX support can be up to 25% of total investment, capped at ₹50 crore, paid in quarterly installments (usually over 20 quarters).",
        },
        {
            question: "How does employment incentive work?",
            answer:
                "On hiring and retaining local employees for 1 year, companies can claim 50% of 1 month CTC (capped) — different caps apply for male and female employees. The benefit is tracked digitally via Aadhaar.",
        },
    ];

    return (
        <>
            <SEO
                title="Gujarat Government Subsidy for IT / ITeS – Consultant Services | Patel & Vaghasiya CA"
                description="Get expert help to claim Gujarat IT/ITeS subsidies (CAPEX, OPEX, employment incentives, interest subsidy, EPF refund, co-working subsidy, upskilling & more)."
                url="https://yourwebsite.com/services/it-subsidy"
                image="https://yourwebsite.com/assets/it-subsidy-banner.jpg"
                keywords="Gujarat IT Subsidy, ITeS Incentive Policy, IT Subsidy Consultant Ahmedabad, CAPEX OPEX subsidy Gujarat"
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
                            Gujarat Government Subsidy for IT / ITeS – Consultant Services
                        </h1>

                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            Expert Support to Help You Get Maximum Benefits Under the IT/ITeS Policy 2022–27
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            The Government of Gujarat has launched one of India’s most attractive subsidy schemes to promote IT & ITeS companies,
                            startups, and tech-led businesses. If you plan to start or expand your IT business in Gujarat, you can access substantial
                            financial support — and we help you apply and get approvals in the simplest, fastest way.
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Our consulting team provides end-to-end support from eligibility checks to post-approval compliance.
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
                    {/* WHO CAN BENEFIT */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Who Can Benefit?</h2>

                        <div className="glass-card p-10 space-y-4">
                            <p className="text-gray-700 text-lg">
                                Simple explanation of eligibility for new and expansion IT/ITeS units.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">New Unit</h3>
                                    <ul className="list-disc ml-6 text-gray-700">
                                        <li>Start operations in Gujarat after 7 Feb 2022</li>
                                        <li>Minimum 10 employees on payroll</li>
                                        <li>Companies relocating to Gujarat are eligible</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Expansion Unit</h3>
                                    <ul className="list-disc ml-6 text-gray-700">
                                        <li>Existing unit in Gujarat with minimum 10 employees</li>
                                        <li>Increase employee count by 50% of last 1-year average</li>
                                        <li>Clarifications for incremental support may apply</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* BENEFITS */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.1 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Key Incentives & Benefits
                        </h2>

                        <div className="glass-card p-10 space-y-8">
                            {[
                                {
                                    title: "CAPEX Support (Setup Cost Subsidy)",
                                    description:
                                        "Get up to 25% of your total investment back — maximum ₹50 crore. Paid in 20 quarterly installments.",
                                    subpoints: [
                                        "Construction of office building (capped at ₹3,000 per sq. ft., calculated at 60 sq. ft. per employee)",
                                        "Computers, servers, software & networking",
                                        "Furniture, AC, electrification & office equipment",
                                        "Stamp duty + registration fees for office/land",
                                        "Equipment for captive renewable energy (solar/wind)",
                                    ],
                                },
                                {
                                    title: "OPEX Support (Running Cost Subsidy)",
                                    description:
                                        "Get up to 15% of eligible annual expenses — up to ₹20 crore per year, for 5 years.",
                                    subpoints: [
                                        "Office rent (up to ₹50 per sq. ft.)",
                                        "Internet/Bandwidth bills (GST valid)",
                                        "Cloud hosting charges (AWS, Azure, Google etc.)",
                                        "Power tariff expenditure",
                                        "Patent filing fees (up to ₹5 lakh per patent — max 10 patents/year)",
                                        "(For expansion units, support is expected only on incremental expenses → awaiting clarification.)",
                                    ],
                                },
                                {
                                    title: "Employment Generation Incentive (Salary Support)",
                                    description:
                                        "For every new local employee you hire and retain for 1 year:",
                                    subpoints: [
                                        "Male employee: 50% of 1 month CTC (up to ₹50,000)",
                                        "Female employee: 50% of 1 month CTC (up to ₹60,000)",
                                        "This benefit is one-time per employee across entire Gujarat and is tracked using Aadhaar.",
                                    ],
                                },
                                {
                                    title: "Interest Subsidy",
                                    description:
                                        "7% interest subsidy on term loan, for 5 years. Maximum ₹1 crore per year. Loan must be used for building construction, computers, software, networking equipment, and other fixed assets. (Clarification awaited on loan for office purchase.)",
                                },
                                {
                                    title: "Atmanirbhar Gujarat Rojgar Sahay (EPF Refund)",
                                    description:
                                        "EPF employer contribution reimbursed for 5 years: 100% for female employees, 75% for male employees, capped at 12% of Basic + DA + Retaining allowance.",
                                },
                                {
                                    title: "Electricity Duty Incentive",
                                    description:
                                        "Entire electricity duty refunded for 5 years. Approx benefit: ₹2 per unit.",
                                },
                                {
                                    title: "Co-working Space Subsidy",
                                    description:
                                        "If you start in a government-approved co-working IT space:",
                                    subpoints: [
                                        "Years 1–2: 50% of seat rent (up to ₹10,000/seat/month)",
                                        "Years 3–5: 25% of seat rent (up to ₹5,000/seat/month)",
                                        "Perfect for startups & small tech companies.",
                                    ],
                                },
                                {
                                    title: "Upskilling Benefit for IT Talent",
                                    description:
                                        "Government reimburses part of course fees for globally recognized ICT courses: Up to ₹50,000 per course or 50% of fee, whichever is lower. For students & working professionals in Gujarat. Paid directly under DBT mode.",
                                },
                                {
                                    title: "Mega Project Benefits (Special Category)",
                                    description:
                                        "Bigger incentives for companies with investment above ₹250 crore OR direct employment of 2,000 IT employees. (Customized incentives available.)",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="step-item flex gap-6 items-start">
                                    {/* Gradient Number Circle */}
                                    <div className="step-circle">{idx + 1}</div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-700 mb-2">{item.description}</p>
                                        {item.subpoints && (
                                            <ul className="list-disc ml-6 text-gray-700">
                                                {item.subpoints.map((sp, i) => (
                                                    <li key={i}>{sp}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>




                    {/* ELIGIBLE BUSINESSES */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Eligible IT / ITeS Businesses</h2>

                        <div className="glass-card p-10">
                            <p className="text-gray-700 text-lg mb-2">You can apply if your business is related to:
                            </p>
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Software development",
                                    "Web / App / ERP development",
                                    "IT consulting",
                                    "IT-enabled services",
                                    "BPO / KPO / Call center",
                                    "Digital marketing",
                                    "Cloud services / Data processing",
                                    "AI / ML / Automation services",
                                    "Fintech / SaaS",
                                    "Tech-based startups",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Our Professional Consultancy Services</h2>

                        <div className="glass-card p-10">
                            <p className="text-gray-700 text-lg mb-2">We offer complete end-to-end subsidy support:
                            </p>
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Eligibility checking",
                                    "Project planning & investment structuring",
                                    "Document checklist & preparation",
                                    "Project Report / DPR preparation",
                                    "Online application filing",
                                    "Coordination with government departments",
                                    "Follow-up until final approval",
                                    "Post-approval compliance support",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <HiCheckCircle className="text-main text-xl mt-1" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-lg mt-2">We ensure maximum subsidy and smooth approval.

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
                                    "Deep expertise in Gujarat IT/ITeS Policy",
                                    "Simple, no-jargon guidance",
                                    "Fast processing & dedicated team",
                                    "Strong background in government subsidies",
                                    "Transparent and professional approach",
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
                            alt="IT Subsidy Guidance"
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
                            Ready to Claim Your IT / ITeS Subsidy in Gujarat?
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Whether you are a startup, MNC, SME, or growing IT company, this scheme can significantly reduce your setup cost, running cost, and hiring cost.
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
