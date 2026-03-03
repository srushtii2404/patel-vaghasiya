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

export default function GCCSubsidyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Gujarat GCC Subsidy Consultant",
        description:
            "Helping companies set up Global Capability Centres in Gujarat with maximum subsidy benefits — eligibility, documentation, CAPEX & OPEX assistance, and compliance support.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "GCC Subsidy Consultancy",
        keywords: [
            "GCC Subsidy Gujarat",
            "GCC Policy 2025-30",
            "Global Capability Centre Gujarat",
            "CAPEX Subsidy GCC",
            "OPEX Subsidy GCC",
            "Employment Incentive GCC",
            "Interest Subsidy GCC",
            "EPF Reimbursement GCC",
            "Skill Development Subsidy",
            "GCC Consulting CA Ahmedabad"
        ],
    };

    const otherServices = allServices.filter(s => s.href !== "/services/gcc-subsidy");

    const faqs = [
        {
            question: "What is a Global Capability Centre (GCC)?",
            answer:
                "A Global Capability Center is a captive offshore unit set up by multinational companies to handle IT, R&D, finance, HR, analytics, engineering, legal, and shared services from India at optimized cost and high efficiency.",
        },
        {
            question: "Are Government subsidies available for GCC setup in India?",
            answer:
                "Yes. Both Central and State Governments offer multiple incentives to GCCs, including capital subsidies, employment‑linked incentives, IT/ITeS benefits, rental subsidies, and stamp duty exemptions, subject to eligibility.",
        },
        {
            question: "Which government schemes are applicable to GCCs?",
            answer:
                "GCCs can benefit from the state IT/ITeS policies, employment generation subsidy, capital investment subsidy, rent & power tariff subsidy, skill development subsidy, stamp duty & registration fee exemptions, and special incentives under GIFT City / SEZ / IT Parks.",
        },
        {
            question: "Is GCC considered IT/ITeS for subsidy purposes?",
            answer:
                "Yes. Most states classify GCCs under IT/ITeS / Knowledge‑Based Services, making them eligible for subsidies meant for IT, software, BPO, analytics, engineering, and R&D services.",
        },
        {
            question: "Which expenses are eligible for subsidy in GCC projects?",
            answer:
                "Eligible expenses include office setup & infrastructure cost, computers, servers & IT equipment, software & technology tools, employee cost (wages & benefits), lease rent & electricity charges, and training & skill development cost.",
        },
        {
            question: "Is there any employment‑linked incentive for GCCs?",
            answer:
                "Yes. Many states offer per‑employee incentives for local employment generation, especially for fresh graduates, women employees, and skilled professionals.",
        },
        {
            question: "Can foreign companies set up GCCs and claim subsidies?",
            answer:
                "Absolutely. 100% FDI is allowed under automatic route for IT/ITeS and GCC services. Foreign companies can set up a subsidiary, branch, or LLP and avail government incentives subject to compliance.",
        },
        {
            question: "Is minimum investment or employee strength required?",
            answer:
                "Yes. Most subsidy schemes require minimum capital investment, minimum number of employees, and operational commencement within a defined timeline. These thresholds vary state by state and policy.",
        },
        {
            question: "Are startup GCCs eligible for government subsidy?",
            answer:
                "Yes. Startup‑focused GCCs may get additional benefits such as higher subsidy percentages, relaxed eligibility norms, faster approvals, and special incentives under Startup policies.",
        },
        {
            question: "Is subsidy available for GCCs operating from rented premises?",
            answer:
                "Yes. Many states provide lease rent subsidy for GCCs operating from IT parks, SEZs, and approved commercial buildings.",
        },
        {
            question: "How much subsidy can a GCC expect?",
            answer:
                "Subsidy quantum depends on state policy: investment size, employee count, location (e.g., non‑metro/special zone) etc. In many cases, incentives can cover 20% to 50% of eligible costs over a defined period.",
        },
        {
            question: "Are GCC subsidies available in Gujarat?",
            answer:
                "Yes. Gujarat offers incentives under its IT/ITeS Policy including capital subsidy, employment incentives, power tariff subsidy, stamp duty exemption and special benefits in GIFT City.",
        },
        {
            question: "Is approval required before starting the GCC project?",
            answer:
                "Yes. For most subsidies, prior approval or project registration with the concerned department is mandatory. Late applications may lead to loss of eligibility.",
        },
        {
            question: "What compliances are required after availing GCC subsidy?",
            answer:
                "Compliances include periodic employment reporting, investment proof submission, audit reports, continued operations for lock‑in period, avoidance of misuse or premature closure.",
        },
        {
            question: "Can subsidy be rejected or cancelled?",
            answer:
                "Yes. Subsidies may be cancelled if false information is submitted, employment targets are not met, unit is closed before lock‑in period, or non‑compliance with policy conditions.",
        },
        {
            question: "How long does it take to receive GCC subsidy?",
            answer:
                "Typically, subsidy disbursement takes 6 to 18 months after submission of complete documents and verification by the authorities. Early planning ensures smoother process.",
        },
        {
            question: "Do GCCs get income tax or GST benefits?",
            answer:
                "While direct income tax exemptions are limited, GCCs may get IT / GST input credit benefits and export‑oriented service advantages. Reduced compliance burden under certain schemes also helps.",
        },
        {
            question: "Can existing or foreign companies convert into GCC and claim subsidy?",
            answer:
                "Yes. Existing Indian or foreign companies expanding into GCC operations can claim subsidies, provided fresh investment and employment criteria are met.",
        },
        {
            question: "What documents are required for GCC subsidy application?",
            answer:
                "Common documents include company incorporation documents, project report, investment & employee details, lease deed/ownership proof, invoices & payment proofs, chartered accountant certificates.",
        },
        {
            question: "How can a Chartered Accountant help in GCC subsidy planning?",
            answer:
                "A Chartered Accountant helps in eligibility evaluation, optimal structure planning, policy selection, application filing & follow‑up, compliance & audit support, and ensures maximum subsidy with minimum risk.",
        },
        {
            question: "Why choose professional assistance for GCC subsidy?",
            answer:
                "Government subsidies involve technical rules, timelines, and documentation. Professional support ensures zero missed deadlines, higher approval chances, faster disbursement and compliance peace of mind.",
        },
        {
            question: "How can we get started with GCC subsidy advisory?",
            answer:
                "You can start with a free eligibility assessment where we analyse your business model, investment plan, employment roadmap and location to recommend the best available government incentives.",
        },
    ];

    const subsidySteps = [
        {
            title: "Capital Subsidy (CAPEX Support)",
            points: [
                "Category I – GFCI < ₹250 Crore",
                "Up to 20% reimbursement on construction/fit-out/building infrastructure.",
                "Up to 30% reimbursement on computers, hardware, networking systems & software.",
                "Maximum CAPEX subsidy: ₹50 Crore.",
                "Category II – Mega GCC (GFCI ≥ ₹250 Crore or 500+ Employees)",
                "CAPEX subsidy up to ₹200 Crore.",
                "Higher flexibility with customized incentive packages.",
                "Note: Land cost is not included in GFCI.",
                "CAPEX subsidy is released in 20 equal quarterly instalments."
            ],
        },
        {
            title: "Operational Expense Subsidy (OPEX Assistance)",
            points: [
                "Applicable for 5 years from Commercial Operation / in-principle approval.",
                "Category I",
                "Up to 15% of eligible OPEX,",
                "Maximum ₹20 Crore per year (for 5 years).",
                "Bandwidth & cloud rental capped at 35% of eligible OPEX or ₹7 Crore per year.",
                "Category II – Mega GCC",
                "Up to 15% of eligible OPEX,",
                "Maximum ₹40 Crore per year (for 5 years).",
                "Bandwidth & cloud rental capped at 35% of eligible OPEX or ₹14 Crore per year.",
                "Eligible OPEX includes: Lease rent, bandwidth, cloud services, power charges, utilities, tech infrastructure expenditure etc.",
                "Lease rent reimbursement capped at ₹50/sq. ft per month."
            ],
        },
        {
            title: "Employment Generation Incentive (EGI)",
            points: [
                "One-time incentive for each new employee, retained for minimum 1 year:",
                "₹50,000 per new male employee",
                "₹60,000 per new female employee",
                "Only employees directly on payroll are eligible.",
                "Benefit can be claimed only once per employee."
            ],
        },
        {
            title: "Interest Subsidy on Term Loan",
            points: [
                "7% interest subsidy or actual interest, whichever is lower.",
                "Maximum ₹1 Crore per year, up to 5 years.",
                "Loan must be from an RBI-approved Indian financial institution (excluding NBFCs).",
                "Eligible loan capped at 70% of eligible GFCI."
            ],
        },
        {
            title: "Atmanirbhar Gujarat Rojgar Sahay (EPF Reimbursement)",
            points: [
                "For GCC units in Gujarat:",
                "100% EPF reimbursement for female employees",
                "75% EPF reimbursement for male employees",
                "Ceiling: 12% of basic salary + DA + retaining allowance",
                "Benefit for 5 years"
            ],
        },
        {
            title: "Electricity Duty Reimbursement",
            points: [
                "100% reimbursement for 5 years from Commercial Operations or in-principle approval (whichever is later)."
            ],
        },
        {
            title: "Skill Development & Certification Support",
            points: [
                "Up to 80% reimbursement of global certifications",
                "Maximum ₹10 Lakh, up to 5 certifications during policy period",
                "Skill enhancement reimbursement up to ₹50,000 per individual"
            ],
        },
    ];


    return (
        <>
            <SEO
                title="GCC Subsidy Consultant in Gujarat | Patel & Vaghasiya CA"
                description="Unlock up to ₹200 Crore subsidy for setting up Global Capability Centres in Gujarat — end-to-end consultancy for CAPEX, OPEX, employment & skill incentives."
                url="https://yourwebsite.com/services/gcc-subsidy"
                image="https://yourwebsite.com/assets/gcc-subsidy-banner.jpg"
                keywords="GCC Subsidy Gujarat, GCC Policy 2025-30, Global Capability Centre Gujarat, CAPEX Subsidy GCC, OPEX Subsidy GCC, Employment Incentive GCC, Interest Subsidy GCC, EPF Reimbursement GCC, Skill Development Subsidy, GCC Consulting CA Ahmedabad"
                jsonLd={jsonLd}
            />

            {/* HERO SECTION */}
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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Gujarat Government Subsidy to GCC (Global Capability Centres)
                        </h1>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            Unlock Up to ₹200 Crore Subsidy for Setting Up GCC in Gujarat — Policy 2025-30
                        </p>
                        <p className="text-gray-100 leading-relaxed">
                            Gujarat is emerging as a global powerhouse for Global Capability Centres (GCCs) in IT, BFSI, Engineering, R&D, AI/ML, KPO/BPO and digital transformation services.
                        </p>
                        <p className="text-gray-100 leading-relaxed">
                            At Patel & Vaghasiya, Chartered Accountants, we help businesses identify eligibility, prepare documentation, and secure the maximum subsidy — end-to-end.
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

            {/* MAIN CONTENT */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-6 lg:gap-10 py-12 sm:py-16 md:py-20 section-bg">
                <div className="flex-1 space-y-12 sm:space-y-16">
                    {/* POLICY PERIOD */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Policy Period</h2>
                        <div className="glass-card p-10 space-y-3">
                            <p className="text-gray-700 text-lg">
                                The Gujarat GCC Policy is effective from <strong>11 February 2025</strong> to <strong>31 March 2030</strong>. Any GCC commencing investment or operations within this period is eligible for benefits.
                            </p>
                        </div>
                    </motion.section>

                    {/* SUBSIDY STEPS */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.1 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Major Subsidies & Financial Assistance under GCC Policy 2025-30
                        </h2>

                        <div className="glass-card p-10 space-y-10">
                            {[
                                {
                                    title: "Capital Subsidy (CAPEX Support)",
                                    points: [
                                        <>
                                            <strong>Category I – GFCI &lt; ₹250 Crore</strong>
                                            <ul className="list-disc list-inside ml-5 mt-1">
                                                <li>Up to 20% reimbursement on construction/fit-out/building infrastructure.</li>
                                                <li>Up to 30% reimbursement on computers, hardware, networking systems & software.</li>
                                                <li>Maximum CAPEX subsidy: ₹50 Crore.</li>
                                            </ul>
                                        </>,
                                        <>
                                            <strong>Category II – Mega GCC (GFCI ≥ ₹250 Crore or 500+ Employees)</strong>
                                            <ul className="list-disc list-inside ml-5 mt-1">
                                                <li>CAPEX subsidy up to ₹200 Crore.</li>
                                                <li>Higher flexibility with customized incentive packages.</li>
                                            </ul>
                                            <p className="mt-1">Note: Land cost is not included in GFCI. CAPEX subsidy is released in 20 equal quarterly instalments.</p>
                                        </>
                                    ],
                                },
                                {
                                    title: "Operational Expense Subsidy (OPEX Assistance)",
                                    points: [
                                        <p>Applicable for 5 years from Commercial Operation / in-principle approval.</p>,
                                        <>
                                            <strong>Category I</strong>
                                            <ul className="list-disc list-inside ml-5 mt-1">
                                                <li>Up to 15% of eligible OPEX, Maximum ₹20 Crore per year (for 5 years).</li>
                                                <li>Bandwidth & cloud rental capped at 35% of eligible OPEX or ₹7 Crore per year.</li>
                                            </ul>
                                        </>,
                                        <>
                                            <strong>Category II – Mega GCC</strong>
                                            <ul className="list-disc list-inside ml-5 mt-1">
                                                <li>Up to 15% of eligible OPEX, Maximum ₹40 Crore per year (for 5 years).</li>
                                                <li>Bandwidth & cloud rental capped at 35% of eligible OPEX or ₹14 Crore per year.</li>
                                                <li>Eligible OPEX includes: Lease rent, bandwidth, cloud services, power charges, utilities, tech infrastructure expenditure etc.</li>
                                                <li>Lease rent reimbursement capped at ₹50/sq. ft per month.</li>
                                            </ul>
                                        </>
                                    ],
                                },
                                {
                                    title: "Employment Generation Incentive (EGI)",
                                    points: [
                                        <>
                                            One-time incentive for each new employee, retained for minimum 1 year:
                                            <ul className="list-disc list-inside ml-5 mt-1">
                                                <li>₹50,000 per new male employee</li>
                                                <li>₹60,000 per new female employee</li>
                                            </ul>
                                            <p>Only employees directly on payroll are eligible. Benefit can be claimed only once per employee.</p>
                                        </>,
                                    ],
                                },
                                {
                                    title: "Interest Subsidy on Term Loan",
                                    points: [
                                        <ul className="list-disc list-inside ml-5 mt-1">
                                            <li>7% interest subsidy or actual interest, whichever is lower.</li>
                                            <li>Maximum ₹1 Crore per year, up to 5 years.</li>
                                            <li>Loan must be from an RBI-approved Indian financial institution (excluding NBFCs).</li>
                                            <li>Eligible loan capped at 70% of eligible GFCI.</li>
                                        </ul>,
                                    ],
                                },
                                {
                                    title: "Atmanirbhar Gujarat Rojgar Sahay (EPF Reimbursement)",
                                    points: [
                                        <>
                                            For GCC units in Gujarat:
                                            <ul className="list-disc list-inside ml-5 mt-1">
                                                <li>100% EPF reimbursement for female employees</li>
                                                <li>75% EPF reimbursement for male employees</li>
                                                <li>Ceiling: 12% of basic salary + DA + retaining allowance</li>
                                                <li>Benefit for 5 years</li>
                                            </ul>
                                        </>,
                                    ],
                                },
                                {
                                    title: "Electricity Duty Reimbursement",
                                    points: [
                                        <p>100% reimbursement for 5 years from Commercial Operations or in-principle approval (whichever is later).</p>,
                                    ],
                                },
                                {
                                    title: "Skill Development & Certification Support",
                                    points: [
                                        <ul className="list-disc list-inside ml-5 mt-1">
                                            <li>Up to 80% reimbursement of global certifications</li>
                                            <li>Maximum ₹10 Lakh, up to 5 certifications during policy period</li>
                                            <li>Skill enhancement reimbursement up to ₹50,000 per individual</li>
                                        </ul>,
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
                                        <div className="space-y-2 text-gray-700 text-[17px]">
                                            {item.points.map((p, idx) => (
                                                <div key={idx}>{p}</div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>




                    {/* ELIGIBILITY */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Eligibility Criteria</h2>

                        <div className="glass-card p-10">
                            <p className="text-gray-700 text-md mb-2">To qualify under the GCC Policy 2025-30:
                            </p>
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Unit must be a Global Capability Centre in IT/ITES/KPO/BPO/R&D/Engineering/Analytics/AI-ML",
                                    "Set up operations in Gujarat (owned or leased premises)",
                                    "Create direct employment as per policy guidelines",
                                    "Invest in eligible GFCI components (building, fit-outs, hardware, IT infra etc.)",
                                    "Obtain approvals during operative policy period",
                                    "Cannot claim same benefit under any other Gujarat State policy",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        {/* Manual check symbol */}
                                        <span className="text-main font-bold mt-[1px]">✔</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.section>

                    {/* 📜 Key Terms & Conditions */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Key Terms & Conditions
                        </h2>

                        <div className="glass-card p-10 space-y-8">
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "CAPEX support excludes land cost.",
                                    "Construction cost considered at ₹3,000/sq. ft and 60 sq. ft per employee for eligibility",
                                    "OPEX assistance valid for 5 years only.",
                                    "Subsidy disbursement is generally quarterly.",
                                    "Employee-based incentives can be claimed only once per employee.",
                                    "Commercial operations must begin within policy period to claim benefits.",
                                    "Units may still avail Central Government incentives.",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        {/* Manual check symbol */}
                                        <span className="text-main font-bold mt-[1px]">✔</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.section>


                    {/* HOW WE HELP */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">How We Help – End-to-End GCC Subsidy Consulting</h2>
                        <div className="glass-card p-10">
                            <p className="mb-2">At Patel & Vaghasiya, Chartered Accountants, we offer:</p>
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Eligibility Analysis",
                                    "Project Report / DPR preparation",
                                    "Documentation & compliance support",
                                    "Filing of subsidy application on government portal",
                                    "Coordination with departments",
                                    "Follow-up until sanction & disbursement",
                                    "Post-approval compliance & periodic reporting",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <HiCheckCircle className="text-main text-xl" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-2">We ensure your GCC receives maximum possible subsidy under Gujarat’s lucrative scheme.
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
                            alt="GCC Subsidy Guidance"
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
                            Start Your GCC in Gujarat With Maximum Government Benefits
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Whether setting up a new GCC or expanding an existing one in Gujarat, we provide complete consultancy to secure subsidies up to ₹200 Crore.
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
