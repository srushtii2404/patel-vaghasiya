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

    const otherServices = allServices.filter(s => s.href !== "/services/gst-service");

    const faqs = [
        {
            question: "Who is required to take GST registration?",
            answer:
                "Any person whose aggregate turnover exceeds the prescribed limit (₹40 lakh for goods, ₹20 lakh for services – subject to state & exceptions) or who is engaged in inter‑state supply, e‑commerce, exports, or liable under reverse charge must take GST registration.",
        },
        {
            question: "Is GST registration mandatory for small businesses or startups?",
            answer:
                "Yes, GST registration is mandatory even if turnover is below threshold in cases like: interstate supplies, e‑commerce operators, service providers in certain states, reverse‑charge transactions, or taxpayer opting to register voluntarily. Voluntary registration helps obtain input tax credit and trade legally.",
        },
        {
            question: "What documents are required for GST registration?",
            answer:
                "Basic documents include PAN & Aadhaar of proprietor/partners/directors, address proof of business place, bank details (cancelled cheque/statement), and incorporation documents (for company/LLP). We handle end‑to‑end documentation & online filing.",
        },
        {
            question: "How long does GST registration take?",
            answer:
                "Normally 3–7 working days, subject to department verification of details or site visit. With proper documentation, delays and notices can be avoided.",
        },
        {
            question: "Can I take GST registration from my home address?",
            answer:
                "Yes. GST registration is allowed from residential premises, provided valid address proof is submitted and the activity is permissible from that location.",
        },
        {
            question: "Which GST returns are required to be filed?",
            answer:
                "Depending on your registrations, returns may include GSTR‑1 (outward supplies), GSTR‑3B (summary), GSTR‑2/2A (inward summary), GSTR‑7 (TDS), GSTR‑9/9C (annual return & audit), and various quarterly/annual statements.",
        },
        {
            question: "What happens if GST returns are not filed on time?",
            answer:
                "Late fees & interest apply, blocking of e‑way bill, GST notices & assessments, cancellation of GST registration, and regular compliance courts unnecessary litigation. We ensure timely filing to avoid penalties.",
        },
        {
            question: "Can GST returns be revised after filing?",
            answer:
                "GST returns cannot be revised directly, but errors can be corrected in subsequent returns. Provisional returns must be revised to avoid long‑term minimum issues.",
        },
        {
            question: "Is GST return filing required even if there is no business?",
            answer:
                "Yes. Nil returns must be filed even if there is no transaction during the period. Failure attracts penalties.",
        },
        {
            question: "Can I change my GST return filing frequency?",
            answer:
                "The normal frequency is monthly; however taxpayers can opt for Quarterly Returns (QRMP scheme) or Annual Payment as per turnover limits and scheme rules.",
        },
        {
            question: "What is Input Tax Credit (ITC)?",
            answer:
                "ITC allows a taxpayer to deduct GST paid on inputs against output tax on sales, reducing net tax liability. Proper invoice and payment through banking are prerequisites.",
        },
        {
            question: "Why does ITC get blocked or reduced?",
            answer:
                "Common reasons include supplier not filing return, invoice not reflected in GSTR‑2B, payment not made within 180 days, or mismatch/duplicate claims. We perform ITC reconciliation & corrective action.",
        },
        {
            question: "What types of GST notices are commonly issued?",
            answer:
                "Common notices include ASMT‑10/11/12 (verification), DRC‑01/07 (demand), GST audit notices (Section 65/66), scrutiny notices and ITC mismatch notices. We assist in drafting replies and representations.",
        },
        {
            question: "Can GST notices be replied online?",
            answer:
                "Yes. Most GST notices are replied through the GST portal, but replies must be legally and technically correct to avoid future disputes.",
        },
        {
            question: "What happens if a GST notice is ignored?",
            answer:
                "Ignoring GST notices can lead to GST demands, heavy tax demand with penalty, bank account attachment, or cancellation of GST registration. Timely professional response is critical.",
        },
        {
            question: "Do you handle GST appeals and assessments?",
            answer:
                "Yes, we provide complete support for GST scrutiny & assessment, appeals before appellate authority, demand order challenges, and departmental hearings & representations.",
        },
        {
            question: "Why should GST compliance be handled by a Chartered Accountant?",
            answer:
                "GST law is dynamic and technical. A CA ensures correct tax planning, maximises ITC utilisation, monitors notice compliance, provides strong representation in litigation, and maintains records for audits.",
        },
        {
            question: "Do you provide monthly GST compliance packages?",
            answer:
                "We offer customised monthly/quarterly GST compliance plans based on business size and transaction volume, including returns, reconciliation and advisory.",
        },
        {
            question: "Can you take over GST compliance from another consultant?",
            answer:
                "Absolutely. We handle data review, pending return filings, transfer issues, and ensure smooth transition without disruption.",
        },
        {
            question: "How can we get started with your GST services?",
            answer:
                "Simply contact us for a free preliminary GST review, and we will guide you on registration, compliance, and risk management.",
        },
    ];

    const gstServices = [
        {
            title: "GST Registration & Amendments",
            points: [
                "New Registration for Individuals, Firms, LLPs & Companies",
                "GST Amendments (Ex: Address, Mobile No, Gmail, Business Name, Partner / Director change etc)",
                "Regular, Composition & E-commerce Registration, CTP Registration.",
                "Complete Documentation & Application Support",
                "Handling GST Officer Queries",
                "Quick & Hassle-Free GSTIN Allotment",
                "TDS/TCS Compliance related to GST"
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
                url="https://pvassociates.in/services/gst-service"
                image="https://pvassociates.in/assets/gst-services-banner.jpg"
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
                            src="/assets/5124557.png"
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
