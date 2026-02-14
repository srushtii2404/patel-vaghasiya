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

export default function LogisticSubsidyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Gujarat Government Subsidy – Logistic Park, Mega Logistic Park & Integrated Warehousing Facility",
        description: "End-to-End Consulting for Eligibility, DPR, Approvals & Maximum Subsidy Claim for Logistic Parks, Mega Logistic Parks & Integrated Warehousing Facilities in Gujarat.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Ahmedabad, Gujarat",
        serviceType: "Government Subsidy Consulting",
        keywords: [
            "Gujarat Logistic Park Subsidy",
            "Mega Logistic Park Subsidy",
            "Integrated Warehousing Facility Subsidy",
            "Gujarat Infrastructure Subsidy",
            "Government Subsidy Consultant Gujarat",
            "DPR Preparation Gujarat",
            "Industrial Subsidy Gujarat",
            "Logistics Subsidy Consultant",
            "CA for Government Subsidy",
            "Subsidy Claim Support Gujarat",
        ],
    };

    const otherServices = allServices.filter(s => s.href !== "/services/logistic-subsidy");

    const faqs = [
        {
            question: "Who is eligible for Gujarat logistic park subsidies?",
            answer: "Developers, infrastructure companies, and logistics operators planning Logistic Parks, Mega Logistic Parks, or Integrated Warehousing Facilities in Gujarat.",
        },
        {
            question: "What are the benefits under the policy?",
            answer: "Capital subsidy, interest subsidy, stamp duty exemptions, infrastructure support, green infrastructure incentives, automation and cold-chain incentives depending on the type of facility.",
        },
        {
            question: "Do I need DPR and approvals?",
            answer: "Yes, submission of DPR, approved building plans, and compliance with environmental & fire safety norms is mandatory for subsidy claims.",
        },
    ];

    return (
        <>
            <SEO
                title="Gujarat Government Subsidy – Logistic Park, Mega Logistic Park & Integrated Warehousing Facility | Patel & Vaghasiya CA"
                description="End-to-End Consulting for Eligibility, DPR, Approvals & Maximum Subsidy Claim for Logistic Parks, Mega Logistic Parks & Integrated Warehousing Facilities in Gujarat."
                url="https://yourwebsite.com/services/logistic-subsidy"
                image="https://yourwebsite.com/assets/logistic-subsidy-banner.jpg"
                keywords="Gujarat Logistic Park Subsidy, Mega Logistic Park Subsidy, Integrated Warehousing Facility Subsidy, Gujarat Infrastructure Subsidy, Government Subsidy Consultant Gujarat, DPR Preparation Gujarat, Industrial Subsidy Gujarat, Logistics Subsidy Consultant, CA for Government Subsidy, Subsidy Claim Support Gujarat"
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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            Gujarat Government Subsidy – Logistic Park, Mega Logistic Park & Integrated Warehousing Facility
                        </h1>

                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            End-to-End Consulting for Eligibility, DPR, Approvals & Maximum Subsidy Claim
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Patel & Vaghasiya – Chartered Accountants specializes in helping developers, infrastructure companies and logistics operators secure government subsidies in Gujarat for Logistic Parks, Mega Logistic Parks, and Integrated Warehousing Facilities.
                        </p>

                        <p className="text-gray-100 leading-relaxed">
                            Our expert team handles the entire subsidy lifecycle — from project planning to final subsidy credit — ensuring you get every eligible benefit.
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
                    {/* POLICY SECTIONS */}
                    {[
                        {
                            title: "Logistic Park – Policy Overview",
                            description: "Logistic Parks serve as medium-scale logistics hubs offering warehousing, storage, and essential infrastructure like internal roads, utility networks, and common facilities.",
                            eligibility: [
                                "Minimum land & infrastructure as per policy",
                                "Warehouses, internal roads, parking, utilities",
                                "Mandatory common facilities",
                                "NA, Fire, Environment & Local authority approvals",
                            ],
                            terms: [
                                "Only new investments qualify",
                                "DPR submission is compulsory",
                                "Infrastructure development must meet minimum % completion",
                                "Physical verification by Government",
                            ],
                            benefits: [
                                "Capital Subsidy : 10%–20% of eligible fixed capital",
                                "Interest Subsidy : 5%–7% for 5–7 years",
                                "Stamp Duty : Up to 100% exemption",
                                "Infra Support : Roads, power, water, ICT, CCTV, admin building",
                            ],
                        },
                        {
                            title: "Mega Logistic Park – Policy Overview",
                            description: "Mega Logistic Parks are large-scale, multi-modal logistics hubs integrated with advanced automation, cold-chain zones, and technology-enabled systems.",
                            eligibility: [
                                "Large land area (e.g., 50+ acres subject to policy)",
                                "Multi-modal connectivity: highway, rail, or port",
                                "Modern warehouses, cold chain zone, automation systems",
                                "Advanced ICT: RFID, GPS, WMS, TMS",
                            ],
                            terms: [
                                "Mandatory green infrastructure: solar, rainwater harvesting",
                                "Disaster & fire management systems required",
                                "Eligibility for plant & machinery for automation, robotics & IoT",
                                "Strict evaluation of DPR & physical inspection",
                            ],
                            benefits: [
                                "Capital Subsidy: Highest among all logistics categories",
                                "Interest Subsidy: Up to 7% for 7 years",
                                "Stamp Duty: 100% exemption + higher registration reimbursement",
                                "Special Benefits:",
                                "Automation support",
                                "Cold-chain incentives",
                                "ICT infrastructure reimbursement",
                                "Manpower skill development support",
                            ],
                        },
                        {
                            title: "Integrated Warehousing Facility – Policy Overview",
                            description: "These facilities focus on storage, distribution, and value-added logistics operations and may include optional cold storage.",
                            eligibility: [
                                "Minimum warehousing construction area",
                                "PEB structures, loading docks, racking system",
                                "Roads, drainage, fire systems, parking",
                                "Optional cold-chain integration",
                            ],
                            terms: [
                                "Eligible investment: PEB, racking, forklifts, warehouse infra",
                                "DPR + approved building plans are compulsory",
                                "Minimum operational area utilization required",
                                "Fire & environmental compliance mandatory",
                            ],
                            benefits: [
                                "Capital Subsidy: For warehouse construction (higher for cold-storage)",
                                "Interest Subsidy: 5%–7%",
                                "Stamp Duty: Partial or full exemption",
                                "Additional Benefits:",
                                "Cold storage plant & machinery subsidy",
                                "Electricity duty exemption",
                                "Quality certification reimbursement",
                            ],
                        },
                    ].map((section, idx) => (
                        <motion.section
                            key={idx}
                            className="space-y-6"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">{section.title}</h2>
                            <p className="text-gray-700 text-lg">{section.description}</p>

                            {/* Eligibility */}
                            <div className="glass-card p-6">
                                <h3 className="text-2xl font-semibold mb-2">Eligibility</h3>
                                <ul className="list-none space-y-2">
                                    {section.eligibility.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 text-lg">
                                            <HiCheckCircle className="text-main text-xl" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="glass-card p-6">
                                <h3 className="text-2xl font-semibold mb-2">Terms & Conditions</h3>
                                <ul className="list-none space-y-2">
                                    {section.terms.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 text-lg">
                                            <HiCheckCircle className="text-main text-xl" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Benefits */}
                            <div className="glass-card p-6">
                                <h3 className="text-2xl font-semibold mb-2">Benefits</h3>
                                <ul className="list-none space-y-2">
                                    {section.benefits.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 text-lg">
                                            <HiCheckCircle className="text-main text-xl" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.section>
                    ))}


                    {/* COMPARISON CHART */}
                    <motion.section
                        className="space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">
                            Comparison – Logistic Park vs Mega Logistic Park vs Integrated Warehousing Facility
                        </h2>

                        <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
                            <table className="min-w-full bg-white border-collapse">
                                <thead className="bg-main-dark text-white">
                                    <tr>
                                        <th className="p-4 text-left font-semibold border border-gray-200">Category</th>
                                        <th className="p-4 text-left font-semibold border border-gray-200">Logistic Park</th>
                                        <th className="p-4 text-left font-semibold border border-gray-200">Mega Logistic Park</th>
                                        <th className="p-4 text-left font-semibold border border-gray-200">Integrated Warehousing Facility</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {[
                                        ["Project Scale", "Medium infrastructure project", "Large, multi-modal hub", "Warehouse-focused facility"],
                                        ["Land Requirement", "Moderate", "Highest (50+ acres typical)", "Based on storage capacity"],
                                        ["Connectivity Requirement", "Basic proximity to roads", "Mandatory multi-modal", "Standard industrial area"],
                                        ["Core Facilities", "Warehousing, utilities, roads", "Cold chain, automation, ICT, truck terminals", "Storage, loading docks, racking"],
                                        ["Technology Requirement", "Basic logistics tech", "High-tech: RFID, WMS, TMS, IoT", "Optional tech systems"],
                                        ["Cold Storage", "Optional", "Mandatory cold chain zone", "Optional (extra benefits)"],
                                        ["Eligible Investment", "Civil, infra, utilities", "Automation, robotics, cold chain, infra", "PEB, racks, forklifts, cold storage"],
                                        ["Capital Subsidy", "10%–20%", "Highest subsidy slab", "Moderate (higher for cold storage)"],
                                        ["Interest Subsidy", "5%–7% for 5–7 yrs", "Up to 7% for 7 yrs", "5%–7%"],
                                        ["Stamp Duty", "Up to 100%", "100% + higher registration support", "Full/partial exemption"],
                                        ["Infra Support", "Roads, power, utility", "Advanced tech & automation", "Warehouse infra"],
                                        ["Green Infra Support", "Available", "Maximum", "Available"],
                                        ["Best For", "Logistics developers", "Large corporates, 3PL leaders", "Warehousing, FMCG, pharma, retail"],
                                    ].map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                            {row.map((cell, cidx) => (
                                                <td key={cidx} className="p-4 text-gray-700 align-top border border-gray-200">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Choose Patel & Vaghasiya for Subsidy Consulting?</h2>
                        <div className="glass-card p-10">
                            <ul className="space-y-3 text-gray-700 text-[17px]">
                                {[
                                    "Experts in Gujarat Industrial & Logistics Subsidy Policies",
                                    "Experienced in DPR, financial modeling & investment structuring",
                                    "Full coordination with government authorities",
                                    "Documentation, application, verification & claim support",
                                    "Ensuring maximum subsidy realization for your project",
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <HiCheckCircle className="text-main text-xl" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 text-md mt-2">We ensure your project receives every eligible benefit under the Gujarat Government’s Infrastructure & Logistics Policies.			
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
                            alt="Logistic Park Subsidy Guidance"
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
                            Start Your Subsidy Process Today
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            If you're planning a Logistic Park, Mega Logistic Park, or Integrated Warehousing Facility, let us help you secure all government benefits with zero hassle.
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
