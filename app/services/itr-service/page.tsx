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

export default function ITRServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "ITR Filing, TDS & Income Tax Litigation Services in Gujarat",
        description:
            "End-to-end ITR filing, TDS compliance, and Income Tax litigation services for individuals, businesses, and corporate entities in Gujarat.",
        provider: {
            "@type": "Organization",
            name: "Patel & Vaghasiya, Chartered Accountants",
        },
        areaServed: "Gujarat",
        serviceType: "ITR Filing, TDS & Litigation Services",
        keywords: [
            "ITR Filing Gujarat",
            "TDS Compliance Ahmedabad",
            "Income Tax Litigation Services",
            "ITR Filing for Individuals",
            "Corporate Tax Services",
        ],
    };

    const otherServices = allServices.filter(s => s.href !== "/services/itr-service");

    const faqs = [
        {
            question: "Who is required to take GST registration?",
            answer:
                "Any individual, business, or professional whose income exceeds the basic exemption limit, or who has filed GST returns, done high-value transactions, taken loans, or wants to claim refund, must file ITR.",
        },
        {
            question: "What happens if I do not file my ITR on time?",
            answer:
                "Late filing may result in penalties up to ₹5,000, interest on tax payable, loss of carry‑forward of losses, difficulty in bank loans, visas & tenders. Timely filing protects your financial credibility.",
        },
        {
            question: "Can you help in filing ITR for salaried, business & professionals?",
            answer:
                "Yes. We handle all types of ITRs, including salaried individuals, business owners & professionals, partnership firms, LLPs & companies, capital gains, stock market & crypto income.",
        },
        {
            question: "I received an Income Tax Notice. Should I worry?",
            answer:
                "No. Most notices are routine or mismatch‑based. Our experts analyse the notice, prepare proper replies, and handle the matter professionally to avoid penalties and stress.",
        },
        {
            question: "Can you revise or correct an already filed ITR?",
            answer:
                "Yes. If there is any mistake, omission, or mismatch, we can file Revised Return or Rectification within allowed timelines.",
        },
        {
            question: "Who is required to deduct TDS?",
            answer:
                "Businesses, professionals, companies, LLPs, and even individuals (in certain cases) must deduct TDS on salary, rent, contractor payments, professional fees, interest, commission, purchase of goods, etc.",
        },
        {
            question: "What are the due dates for TDS return filing?",
            answer:
                "TDS returns are filed quarterly, and delays can attract late fee of ₹200 per day, penalty & interest, and notices from the Income Tax Department. Regular TDS compliance avoids unnecessary litigation.",
        },
        {
            question: "What if TDS is deducted but not reflected in 26AS?",
            answer:
                "This usually happens due to wrong PAN, PAN not linked to Aadhaar, or non‑filing of GSTR returns. We identify, correct, and follow up to ensure credit is reflected properly.",
        },
        {
            question: "Do you handle TDS notices & defaults?",
            answer:
                "Yes. We assist in TDS default notices, short deduction/non‑deduction cases, late filing fee & interest calculations, and preparation of replies & correction statements.",
        },
        {
            question: "What types of Income Tax notices do you handle?",
            answer:
                "We handle notices under Section 139(9) – Defective return, Section 143(1) – Intimation/mismatch, Section 142(1) – Scrutiny query, Section 148 – Reassessment, penalty & demand notices.",
        },
        {
            question: "Can you represent us before Income Tax authorities?",
            answer:
                "Yes. We provide complete end-to-end litigation support, including drafting replies, online submissions, hearing representation, appeal filing & follow-ups.",
        },
        {
            question: "I have old pending tax matters. Can they be resolved now?",
            answer:
                "Yes. Even old or ignored notices can be handled with proper strategy. Early action helps reduce penalties and future complications.",
        },
        {
            question: "Why should I take professional help instead of filing myself?",
            answer:
                "Because wrong filing or incorrect replies can lead to heavy tax demand, penalties & prosecution, long-term litigation. A professional ensures accuracy, compliance & peace of mind.",
        },
        {
            question: "How do you ensure confidentiality and accuracy?",
            answer:
                "We follow proper documentation checks, secure data handling, expert review before filing, and transparent communication. Your data and case are handled with utmost confidentiality and responsibility.",
        },
        {
            question: "How can we get started with your services?",
            answer:
                "Simply contact us with your documents. We will review your case, suggest the best tax-efficient solution, and handle compliance end-to-end.",
        },
    ];

    const itrServices = [
        {
            mainTitle: "Income Tax Return (ITR) Filing",
            tagline: "Fast, Error-Free & Tax Optimised",
            description: "Filing accurate returns is the first step to a compliant financial life. We help you file all categories of ITRs:",
            points: [
                "ITR-1, ITR-2, ITR-3 for salaried/individuals",
                "ITR-4 for presumptive taxation",
                "ITR-5 for partnership firms & LLPs",
                "ITR-6 for companies",
                "ITR-7 for trusts & NGOs",
            ],
            whatYouGet: [
                "Accurate computation of income",
                "Maximum eligible deductions & exemptions",
                "Review of Form 26AS, AIS, TIS & GST turnover",
                "Capital gain analysis",
                "Filing before due dates",
                "Post-filing compliance support",
            ],
        },
        {
            mainTitle: "TDS & TCS Compliance Management",
            tagline: "Avoid Penalties. Stay Fully Compliant.",
            description: "TDS compliance is critical for every business. Even a small error can result in high penalties or notices. Our Services:",
            points: [
                "Monthly TDS calculation",
                "Deduction entries & challan payments",
                "Quarterly TDS/TCS return filing",
                "Form 16 & Form 16A generation",
                "Correction returns & default rectification",
                "Guidance on disallowances u/s 40(a)(ia)",
                "Lower TDS / NIL TDS certificate application",
            ],
            whatYouGet: ["We ensure that your TDS returns are accurate, timely and penalty-free."],
        },
        {
            mainTitle: "Specialised Income Tax Litigation & Notice Reply Services",
            tagline: "Expert Defence. Strong Representation.",
            description: "Income Tax notices can be stressful—and many times issued due to data mismatches, technical errors or departmental scrutiny. Our litigation team prepares strong, data-backed responses to protect your interests. Types of Notices We Handle:",
            points: [
                "Section 143(1) Intimation",
                "Section 139(9) Defective Return Notice",
                "Section 142(1) Inquiry Before Assessment",
                "Section 143(2) Scrutiny Assessments",
                "Section 148 / 148A Reassessment Notices",
                "Section 133(6) Information Requests",
                "AIS / TIS Mismatch Queries",
                "Demand Reduction / Refund Issues",
            ],
            whatYouGet: [],
        },
    ];


    return (
        <>
            <SEO
                title="ITR Filing, TDS & Income Tax Litigation Services in Gujarat | Patel & Vaghasiya CA"
                description="End-to-end ITR filing, TDS compliance, and Income Tax litigation services for individuals, businesses, and corporate entities in Gujarat."
                url="https://www.pvassociates.in/services/itr-service"
                image="https://www.pvassociates.in/assets/itr-services-banner.jpg"
                keywords="ITR Filing Gujarat, TDS Compliance Ahmedabad, Income Tax Litigation Services, ITR Filing for Individuals, Corporate Tax Services"
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
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            ITR Filing, TDS & Income Tax Litigation Services
                        </h1>
                        <p className="text-xl sm:text-2xl font-semibold text-gray-100">
                            Accurate | Compliant | Defensible
                        </p>
                        <p className="text-gray-100 leading-relaxed">
                            At Patel & Vaghasiya, Chartered Accountants, we simplify your tax journey—from routine filings to complex litigation. Whether you're an individual, business owner, or corporate entity, our expert team ensures your ITR filing, TDS compliance, and Income Tax litigation matters are handled with precision and complete confidentiality.

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
                    {/* ITR SERVICES BOXES */}
                    <motion.section className="space-y-8" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.1 }}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Our Services</h2>
                        <div className="glass-card p-10 space-y-10">
                            {itrServices.map((item, i) => (
                                <motion.div key={i} className="step-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}>
                                    <div className="step-circle">{i + 1}</div>
                                    <div className="step-content w-full">
                                        <h3 className="font-bold text-main-dark text-xl mb-1">{item.mainTitle}</h3>
                                        {item.tagline && <p className="text-main font-semibold mb-2">{item.tagline}</p>}
                                        {item.description && <p className="text-gray-700 mb-3">{item.description}</p>}
                                        <ul className="space-y-2 list-disc list-inside text-gray-700 text-[17px]">
                                            {item.points.map((p, idx) => <li key={idx}>{p}</li>)}
                                        </ul>
                                        {item.whatYouGet.length > 0 && (
                                            <div className="mt-3">
                                                <p className="font-semibold text-main mb-1">What You Get:</p>
                                                <ul className="list-disc list-inside text-gray-700 space-y-1">
                                                    {item.whatYouGet.map((w, idx) => <li key={idx}>{w}</li>)}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* ---------------- LITIGATION SUPPORT SECTION ---------------- */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Specialized Litigation Support Services</h2>
                        <div className="glass-card p-10 space-y-6 text-gray-700 text-[17px]">
                            {[
                                {
                                    title: "1. Notice Analysis & Strategy",
                                    description: "We carefully review your notice, identify potential risk areas, and create a detailed action plan to address each concern effectively."
                                },
                                {
                                    title: "2. Drafting Expert Reply Submissions",
                                    description: "Every reply is prepared with precise legal references, IT Act provisions, and proper documentation to ensure the strongest defense."
                                },
                                {
                                    title: "3. Representation Before Tax Authorities",
                                    description: "We represent you professionally before:\n- Assessing Officer (AO)\n- Income Tax Department\n- Commissioner of Income Tax (Appeals) – CIT(A)\n- NFAC portal submissions"
                                },
                                {
                                    title: "4. Appeal Drafting & Filing",
                                    description: "Expertly drafted appeals under income tax law, supported by case laws, financial analysis, and structured arguments."
                                },
                                {
                                    title: "5. Demand Reconciliation & Rectification",
                                    description: "Handling adjustment of incorrect demands, filing rectifications under Section 154, and ensuring timely follow-ups for refunds."
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="space-y-1">
                                    <h3 className="text-xl font-semibold text-main-dark">{item.title}</h3>
                                    {item.description.split("\n").map((line, i) => (
                                        <p key={i} className="text-gray-600">{line}</p>
                                    ))}
                                </div>
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
                        <h2 className="text-3xl sm:text-4xl font-extrabold gradient-heading">Why Choose Us?</h2>
                        <p className="text-xl font-semibold italic mb-4">Your Trusted Tax Partner</p>
                        <div className="glass-card p-10 space-y-5 text-gray-700 text-[17px]">
                            {[
                                "100% compliance-focused approach",
                                "Experienced CA team for litigation matters",
                                "Strategic tax planning",
                                "Transparent and ethical service",
                                "Personalised support for individuals & businesses",
                                "End-to-end digital process",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <HiCheckCircle className="text-main text-xl mt-1" />
                                    <p className="text-gray-700">{item}</p>
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
                            src="/assets/5124557.png"
                            alt="ITR Services"
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
                            Get Expert Tax Support Today
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Stay compliant. Save money. Avoid penalties. Let our professional tax experts handle everything for you.
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
