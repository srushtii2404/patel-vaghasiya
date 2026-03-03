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
            question: "What is a Logistics Park under Government subsidy schemes?",
            answer:
                "A Logistics Park is an integrated infrastructure facility that includes warehousing, transportation hubs, cold storage, container yards, and value-added logistics services. Government subsidy schemes aim to promote such parks to reduce logistics costs, improve supply chain efficiency, and boost Make‑in‑India & export growth.",
        },
        {
            question: "Are Government subsidies available for setting up Logistics Parks in India?",
            answer:
                "Yes. Both Central Government and State Governments offer subsidies for Logistics Parks under schemes related to Infrastructure Development, Industrial Promotion, MSME support, warehousing, and cold chain development.",
        },
        {
            question: "What types of Government subsidies are available for Logistics Park projects?",
            answer:
                "Subsidies may include capital investment subsidy, interest subsidy on term loans, stamp duty & registration fee exemption, electricity duty exemption or concessional rates, GST‑linked incentives (state‑specific), cold storage & warehousing specific grants (land & infrastructure support, incentive size, and project nature).",
        },
        {
            question: "Who is eligible to apply for Logistics Park subsidies?",
            answer:
                "Eligibility generally includes proprietorships, partnerships, LLPs or private limited companies undertaking new or expansion logistics projects. Applicants must meet minimum land area & investment thresholds (state‑specific) and maintain proper statutory registrations & compliances. Our team evaluates eligibility before application to avoid rejection.",
        },
        {
            question: "Is land ownership mandatory to claim subsidy?",
            answer:
                "Not always. Many states allow long‑term leasehold land (30 years or more). However, clear title or a registered lease deed is mandatory at the time of subsidy disbursement.",
        },
        {
            question: "Are subsidies available for warehouses and cold storage within Logistics Parks?",
            answer:
                "Yes. Warehouse, cold storage, temperature‑controlled logistics, agri‑logistics, and export‑oriented facilities often receive higher incentives under central and state schemes.",
        },
        {
            question: "What is the minimum investment required for subsidy eligibility?",
            answer:
                "Minimum investment varies by state and scheme. Typically small logistic parks require ₹5–10 crore; integrated/mega parks require ₹25–50 crore and above. We help structure projects to maximise subsidy eligibility.",
        },
        {
            question: "Can existing Logistics Parks claim Government subsidy?",
            answer:
                "Yes, in many cases. Expansion projects are eligible if they involve modernization, capacity enhancement, addition of cold storage, automation, or green logistics. Proper timing and documentation is critical.",
        },
        {
            question: "What is the subsidy application process for Logistics Parks?",
            answer:
                "The process usually includes: project feasibility & subsidy mapping; DPR (Detailed Project Report) preparation; pre‑approval/provisional registration; investment execution; post‑investment subsidy claim & inspection. Professional handling significantly improves approval chances.",
        },
        {
            question: "How long does it take to receive Logistics Park subsidy?",
            answer:
                "Timelines depend on scheme and state: approval 3–6 months, disbursement 6–18 months after investment. Early planning ensures no loss of subsidy due to deadline lapses.",
        },
        {
            question: "Are Logistics Park subsidies linked with bank or project loans?",
            answer:
                "Yes, most subsidies are credit‑linked, meaning they are tied to term loans. Subsidies help reduce project cost and EMI burden, and lenders accept them as part of project financing.",
        },
        {
            question: "Can Logistics Parks avail multiple subsidies together?",
            answer:
                "Yes, subject to scheme conditions (e.g., central + state incentives). Infrastructure + MSME + cold chain incentives can be combined. Expert planning is essential.",
        },
        {
            question: "Which states offer attractive subsidies for Logistics Parks?",
            answer:
                "States actively promoting logistics parks include Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Uttar Pradesh, Tamil Nadu and Telangana. Each state has different incentive structures and timelines.",
        },
        {
            question: "What documents are required for subsidy application?",
            answer:
                "Key documents include project report/DPR, land documents/lease deed, term loan sanction letter, company incorporation & statutory approvals, CA certificates & audited statements, utility & completion proofs. Missing documents often cause claim rejection or delay.",
        },
        {
            question: "Why should you take professional help for Logistics Park subsidy?",
            answer:
                "Because subsidy schemes are technical, time‑bound, and compliance‑heavy. Professional support ensures maximum eligible subsidy, proper documentation & compliance, faster approvals & disbursement, and zero risk of subsidy lapses.",
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
