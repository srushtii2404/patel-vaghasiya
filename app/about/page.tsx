"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiCheckCircle, HiOfficeBuilding, HiUserGroup, HiLightBulb, HiHeart } from "react-icons/hi";
import Link from "next/link";

export default function AboutUsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "About Us - Patel & Vaghasiya, Chartered Accountants",
        "description": "Leading Chartered Accountancy firm in Ahmedabad, Gujarat. Specializing in company registration, project finance, government subsidies, taxation, GST, and audit services.",
        "url": "https://pvassociates.in/about",
        "publisher": {
            "@type": "Organization",
            "name": "Patel & Vaghasiya, Chartered Accountants",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "addressCountry": "India"
            }
        },
        "about": [
            {
                "@type": "Organization",
                "name": "Patel & Vaghasiya, Chartered Accountants",
                "description": "Leading Chartered Accountancy firm based in Ahmedabad with strong professional presence across Gujarat",
                "foundingLocation": "Ahmedabad, Gujarat",
                "areaServed": "Gujarat"
            }
        ]
    };

    const services = [
        "Company Registration & Structuring",
        "Project Finance & Business Loans",
        "Government Subsidies & Incentives",
        "Taxation & GST Advisory",
        "Audit & Assurance Services",
        "Financial & Strategic Advisory"
    ];

    const whyChooseUs = [
        "Client-first advisory approach",
        "Strong domain expertise across industries",
        "Practical solutions, not just technical opinions",
        "Transparent, ethical, and responsive service",
        "Technology-driven and process-oriented",
        "Long-term partnership mindset"
    ];

    const kalpeshSpecializations = [
        "Direct Tax Compliance & Advisory",
        "Indirect Tax (GST) Compliance & Litigation Support",
        "Income Tax & GST Appeals",
        "Representation before Adjudicating and Appellate Authorities",
        "Strategic Tax Planning for Businesses and Promoters"
    ];

    const vishalSpecializations = [
        "Project Finance & Term Loan Structuring",
        "Working Capital Advisory & Banking Liaison",
        "Government Subsidy Advisory (State & Central Schemes)",
        "Financial Modeling, CMA Data & Project Reports",
        "Business Structuring & Growth Advisory"
    ];

    return (
        <>
            <SEO
                title="About Us - Patel & Vaghasiya | Best CA in Nikol Ahmedabad"
                description="About Patel & Vaghasiya, Chartered Accountants in Nikol, Ahmedabad. Expert in company registration, GST, tax planning, audit, project finance and government subsidies across Gujarat."
                url="https://pvassociates.in/about"
                image="https://pvassociates.in/assets/logo.png"
                keywords="CA in Nikol, Chartered Accountant in Ahmedabad, CA firm in Gujarat, tax consultant in Nikol, GST consultant Ahmedabad, best CA for company registration, CA for business loans and subsidies"
                jsonLd={jsonLd}
            />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden mt-16">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/assets/about.jpeg"
                        alt="Patel & Vaghasiya Chartered Accountants - Professional Team"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0d1321]/85 via-[#134c78]/80 to-[#0d1321]/85"></div>
                </div>

                {/* Animated background elements - only vertical movement */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        initial={{ y: 100, opacity: 0.3 }}
                        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-main/20 rounded-full blur-3xl"
                    />
                    <motion.div
                        initial={{ y: -100, opacity: 0.3 }}
                        animate={{ y: [0, 40, 0], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mainDark/20 rounded-full blur-4xl"
                    />
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 md:px-20 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                About <span className="block md:inline">Patel & Vaghasiya</span>
                            </h1>
                            <div className="w-24 h-1 bg-main mx-auto rounded-full"></div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl md:text-3xl font-semibold text-gray-100"
                        >
                            Chartered Accountants
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
                        >
                            A leading Chartered Accountancy firm based in Ahmedabad, with a strong professional presence across Gujarat.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                        >
                        </motion.div>
                    </motion.div>
                </div>

                {/* Decorative bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/30 to-transparent"></div>
            </section>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 section-bg">
                <div className="space-y-20">

                    {/* Company Overview */}
                    <motion.section
                        id="company-overview"
                        className="space-y-12"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <div className="text-center space-y-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="inline-block p-4 bg-gradient-to-br from-main/10 to-main/20 rounded-2xl shadow-lg mb-4"
                            >
                                <HiOfficeBuilding className="text-5xl text-main" />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-extrabold gradient-heading">
                                Patel & Vaghasiya, Chartered Accountants
                            </h2>
                            <div className="w-32 h-1 bg-gradient-to-r from-main to-mainDark mx-auto rounded-full"></div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                            <div className="lg:col-span-2 space-y-8">
                                <div className="glass-card p-8 md:p-10 space-y-6">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Patel & Vaghasiya is a leading Chartered Accountancy firm based in Ahmedabad, with a strong professional presence across Gujarat. We are known for our integrity, reliability, and forward-thinking approach to financial and regulatory advisory.
                                    </p>

                                    <div className="bg-gradient-to-br from-main/5 to-mainDark/5 p-6 rounded-2xl border border-main/10">
                                        <h3 className="text-2xl font-bold text-main-dark mb-6 flex items-center gap-3">
                                            <div className="w-8 h-8 bg-main rounded-lg flex items-center justify-center">
                                                <span className="text-white text-sm font-bold">✓</span>
                                            </div>
                                            Our Expertise
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-2">
                                            {services.map((service, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors"
                                                >
                                                    <HiCheckCircle className="text-main text-xl flex-shrink-0" />
                                                    <span className="text-gray-700 font-medium">{service}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6 h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    className="glass-card p-8 text-center flex-1 flex flex-col justify-center"
                                >
                                    <div className="text-4xl font-bold text-main mb-2">10+</div>
                                    <div className="text-gray-600 font-medium">Years of Excellence</div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className="glass-card p-8 text-center flex-1 flex flex-col justify-center"
                                >
                                    <div className="text-4xl font-bold text-main mb-2">500+</div>
                                    <div className="text-gray-600 font-medium">Happy Clients</div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="glass-card p-8 text-center flex-1 flex flex-col justify-center"
                                >
                                    <div className="text-4xl font-bold text-main mb-2">PAN</div>
                                    <div className="text-gray-600 font-medium">Gujarat Coverage</div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="glass-card p-8 md:p-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-main-dark">Our Purpose</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        To help businesses operate smarter, grow faster, and stay compliant with confidence.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-main-dark">Our Approach</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We combine technical excellence with practical business understanding and modern technology.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-6 space-y-4">
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Every business is different — in size, industry, ambition, and challenges. That's why we invest time in understanding your business model, risks, and growth plans before advising you.
                                </p>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    We take pride in simplifying complexity — whether it is navigating evolving tax laws, securing government incentives, structuring finances, or strengthening internal controls. We remove red tape, replace uncertainty with clarity, and enable business owners to focus on what truly matters: building strong systems and achieving sustainable growth.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Mission & Vision */}
                    <div className="relative">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-20 left-10 w-20 h-20 bg-main/5 rounded-full blur-xl"></div>
                            <div className="absolute bottom-20 right-10 w-32 h-32 bg-mainDark/5 rounded-full blur-xl"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            className="grid md:grid-cols-2 gap-12 items-stretch"
                        >
                            {/* Mission */}
                            <motion.section
                                className="space-y-6 flex flex-col h-full"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                <div className="text-center space-y-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, type: "spring" }}
                                        className="inline-block p-4 bg-gradient-to-br from-main/10 to-main/20 rounded-2xl shadow-lg"
                                    >
                                        <HiLightBulb className="text-4xl text-main" />
                                    </motion.div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold gradient-heading">Our Mission</h2>
                                    <div className="w-16 h-1 bg-main mx-auto rounded-full"></div>
                                </div>
                                <div className="glass-card p-8 md:p-10 relative overflow-hidden flex-1">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-main to-mainDark"></div>
                                    <div className="space-y-4">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            To simplify and strengthen our clients' businesses by expertly managing their accounts, finance, taxation, and regulatory compliance — enabling them to focus on building strong systems, driving growth, and creating long-term value.
                                        </p>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            We aim to deliver accurate, timely, and practical solutions that reduce risk, improve decision-making, and support sustainable business success.
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-main/5 rounded-full blur-lg"></div>
                                </div>
                            </motion.section>

                            {/* Vision */}
                            <motion.section
                                className="space-y-6 flex flex-col h-full"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="text-center space-y-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, type: "spring" }}
                                        className="inline-block p-4 bg-gradient-to-br from-mainDark/10 to-main/20 rounded-2xl shadow-lg"
                                    >
                                        <HiUserGroup className="text-4xl text-main" />
                                    </motion.div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold gradient-heading">Our Vision</h2>
                                    <div className="w-16 h-1 bg-main mx-auto rounded-full"></div>
                                </div>
                                <div className="glass-card p-8 md:p-10 relative overflow-hidden flex-1">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mainDark to-main"></div>
                                    <div className="space-y-4">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            To be a trusted growth partner for businesses by creating a collaborative ecosystem of skilled professionals who combine integrity, innovation, and insight — helping clients operate with confidence, scale efficiently, and succeed in a dynamic global economy.
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-16 h-16 bg-mainDark/5 rounded-full blur-lg"></div>
                                </div>
                            </motion.section>
                        </motion.div>
                    </div>

                    {/* Why Choose Us */}
                    <motion.section
                        className="space-y-8"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <div className="text-center space-y-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="inline-block p-4 bg-gradient-to-br from-main/10 to-main/20 rounded-2xl shadow-lg"
                            >
                                <HiHeart className="text-4xl text-main" />
                            </motion.div>
                            <h2 className="text-4xl font-extrabold gradient-heading">Why Patel & Vaghasiya</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-main to-mainDark mx-auto rounded-full"></div>
                        </div>

                        <div className="glass-card p-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                {whyChooseUs.map((reason, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.05 }}
                                        className="flex items-start gap-3"
                                    >
                                        <HiCheckCircle className="text-main text-xl mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 text-lg leading-relaxed">{reason}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="mt-8 p-6 bg-gradient-to-r from-main/10 to-mainDark/10 rounded-xl border-l-4 border-main"
                            >
                                <p className="text-gray-800 text-xl font-semibold italic">
                                    We don't just file returns, audit accounts, or prepare reports — we partner with you in your business journey.
                                </p>
                            </motion.div>
                        </div>
                    </motion.section>

                    {/* Tagline */}
                    <motion.section
                        className="text-center space-y-6"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <div className="glass-card p-8 max-w-4xl mx-auto">
                            <h2 className="text-4xl font-extrabold gradient-heading mb-4">Tagline</h2>
                            <p className="text-2xl font-bold text-main-dark">
                                "We manage your numbers. You grow your business."
                            </p>
                        </div>
                    </motion.section>

                    {/* Partner Profiles */}
                    <motion.section
                        className="space-y-16"
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="text-center space-y-4">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, type: "spring" }}
                                className="inline-block p-4 bg-gradient-to-br from-main/10 to-mainDark/10 rounded-2xl shadow-lg mb-4"
                            >
                                <HiUserGroup className="text-4xl text-main" />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-extrabold gradient-heading">Partner Profiles</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Meet the experienced Chartered Accountants behind Patel & Vaghasiya's success</p>
                            <div className="w-24 h-1 bg-gradient-to-r from-main to-mainDark mx-auto rounded-full"></div>
                        </div>

                        {/* CA Kalpesh Patel */}
                        <motion.div
                            className="glass-card p-8 md:p-12 relative overflow-hidden"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-main/5 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl"></div>
                            </div>

                            <div className="flex flex-col gap-8 relative z-10">
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                                    <div className="flex-shrink-0 text-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, type: "spring" }}
                                            className="bg-gradient-to-br from-main to-mainDark rounded-2xl w-32 h-32 lg:w-40 lg:h-40 mx-auto overflow-hidden shadow-2xl hover:shadow-main/30 transition-shadow duration-300"
                                        >
                                            <Image
                                                src="/assets/CA Kalpesh Patel photo.jpg"
                                                alt="CA Kalpesh Patel - Tax Advisor"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </div>

                                    <div className="flex-1 text-center lg:text-left flex flex-col justify-center h-32 lg:h-40 space-y-2">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-main-dark">CA Kalpesh Patel</h3>
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2">
                                            <p className="text-lg lg:text-xl font-semibold text-main">Tax Advisor</p>
                                            <span className="text-sm lg:text-base text-gray-500 font-medium">10+ Years Experience</span>
                                        </div>
                                        <p className="text-base lg:text-lg text-gray-600">Partner – Tax Advisory & Compliance</p>
                                    </div>
                                </div>

                                <div className="w-full space-y-4">
                                    <p className="text-gray-700 leading-relaxed text-lg py-3">
                                        With over 10 years of post-qualification professional experience, our Tax Advisor brings deep expertise across Direct Tax, Indirect Tax, Audit, and Regulatory Compliance. He has advised a wide range of businesses — from startups and MSMEs to large corporates — helping them navigate India's complex and evolving tax and compliance framework with confidence.
                                    </p>

                                    <div>
                                        <h4 className="text-xl font-semibold text-main-dark mb-3 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-main rounded-md flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">✓</span>
                                            </div>
                                            Core Areas of Specialization
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {kalpeshSpecializations.map((spec, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-main/5 transition-colors"
                                                >
                                                    <HiCheckCircle className="text-main text-lg mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700 font-medium">{spec}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.7 }}
                                        className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-main/20"
                                    >
                                        <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                                            "People don't care how much you know until they know how much you care."
                                        </blockquote>
                                        <p className="text-gray-600 mt-3 text-base">
                                            This philosophy reflects his commitment to building long-term relationships based on trust, responsiveness, and genuine concern for clients' success.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* CA Vishal Vaghasiya */}
                        <motion.div
                            className="glass-card p-8 md:p-12 relative overflow-hidden"
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-mainDark/5 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-500/5 rounded-full blur-xl"></div>
                            </div>

                            <div className="flex flex-col gap-8 relative z-10">
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-start">
                                    <div className="flex-shrink-0 text-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
                                            className="bg-gradient-to-br from-mainDark to-main rounded-2xl w-32 h-32 lg:w-40 lg:h-40 mx-auto overflow-hidden shadow-2xl hover:shadow-mainDark/30 transition-shadow duration-300"
                                        >
                                            <Image
                                                src="/assets/Vishal Vaghasiya_Photo.jpeg"
                                                alt="CA Vishal Vaghasiya - Business Advisory & Project Finance"
                                                width={160}
                                                height={160}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </div>

                                    <div className="flex-1 text-center lg:text-left flex flex-col justify-center h-32 lg:h-40 space-y-2">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-main-dark">CA Vishal Vaghasiya</h3>
                                        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2">
                                            <p className="text-lg lg:text-xl font-semibold text-main">Business Advisory & Project Finance</p>
                                            <span className="text-sm lg:text-base text-gray-500 font-medium">12+ Years Experience</span>
                                        </div>
                                        <p className="text-base lg:text-lg text-gray-600">Partner – Business Advisory, Project Finance & Government Subsidy</p>
                                    </div>
                                </div>

                                <div className="w-full space-y-4">
                                    <p className="text-gray-700 leading-relaxed text-lg py-3">
                                        CA Vishal Vaghasiya brings over 12 years of post-qualification professional experience in Project Finance, Government Subsidy Advisory, and Strategic Business Consulting. He has advised a diverse portfolio of clients across India and overseas, including startups, MSMEs, large corporates, and international business groups.
                                    </p>

                                    <div className="py-3">
                                        <h4 className="text-xl font-semibold text-main-dark mb-3 flex items-center gap-2">
                                            <div className="w-6 h-6 bg-main rounded-md flex items-center justify-center">
                                                <span className="text-white text-xs font-bold">✓</span>
                                            </div>
                                            Core Areas of Specialization
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {vishalSpecializations.map((spec, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, y: 30 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                                    className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-mainDark/5 transition-colors"
                                                >
                                                    <HiCheckCircle className="text-main text-lg mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700 font-medium">{spec}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <motion.p
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            className="text-gray-700 leading-relaxed mb-5"
                                        >
                                            He has successfully assisted clients in raising funds, optimizing capital structures, securing government incentives, and aligning financial strategies with long-term business goals. His experience working with national and international corporate groups provides him with a strong understanding of cross-border business dynamics, regulatory expectations, and global best practices.
                                        </motion.p>

                                        <motion.p
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.7 }}
                                            className="text-gray-700 leading-relaxed mb-5"
                                        >
                                            CA Vishal is known for his strategic mindset, solution-oriented approach, and strong execution capabilities. He does not view finance merely as a funding function, but as a critical enabler of sustainable growth, operational efficiency, and enterprise value creation.
                                        </motion.p>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-mainDark/20"
                                    >
                                        <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                                            "His philosophy is rooted in building long-term value for clients through clarity, integrity, and proactive advisory — enabling entrepreneurs to focus on what matters most: building strong systems and growing their businesses with confidence."
                                        </blockquote>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>

                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
                <motion.section
                    className="bg-main-dark p-12 rounded-2xl shadow-xl border border-mainDark/20 text-center"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Partner with Gujarat's Leading CA Firm?
                    </h2>
                    <p className="text-gray-300 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                        Let Patel & Vaghasiya be your trusted growth partner. We combine technical excellence with practical business understanding to help you operate smarter, grow faster, and stay compliant with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block bg-main text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Get Expert Consultation
                        </Link>
                        <Link
                            href="/services"
                            className="inline-block bg-white text-main-dark font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </motion.section>
            </div>
        </>
    );
}