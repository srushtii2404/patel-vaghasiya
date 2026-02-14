"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle, HiOfficeBuilding, HiUserGroup, HiDocumentText, HiShieldCheck, HiGlobe, HiCurrencyDollar } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";

export default function CompanyRegistrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Company Registration Services in India",
    description:
      "Professional company registration services for Private Limited, LLP, OPC, and other business structures in India. Complete legal compliance and documentation support.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "India",
    serviceType: "Company Registration Services",
    keywords: [
      "Company Registration India",
      "Private Limited Company Registration",
      "LLP Registration",
      "OPC Registration",
      "Business Registration India",
      "MCA Company Registration",
    ],
  };

  const otherServices = [
    { name: "GST Registration", href: "/services/gst-service", icon: "📄" },
    { name: "MSME Registration", href: "/services/msme-loan", icon: "🏭" },
    { name: "Tax Advisory", href: "/services/itr-service", icon: "🧾" },
    { name: "Statutory Audit", href: "/services/statutory-service", icon: "📊" },
    { name: "Business Loan", href: "/services/secured-loan", icon: "💰" },
    { name: "Project Finance", href: "/services/project-loan", icon: "🏗️" },
  ];

  const companyTypes = [
    {
      title: "Private Limited Company",
      description: "Most popular structure offering limited liability and separate legal identity. Ideal for startups and growing businesses.",
      features: ["Limited Liability", "Separate Legal Entity", "Easy Fund Raising", "Perpetual Succession"],
      icon: <HiOfficeBuilding className="w-8 h-8 text-main" />
    },
    {
      title: "Limited Liability Partnership",
      description: "Combines partnership flexibility with limited liability protection. Perfect for professionals and service providers.",
      features: ["Limited Liability", "Flexible Management", "Low Compliance", "Tax Benefits"],
      icon: <HiUserGroup className="w-8 h-8 text-main" />
    },
    {
      title: "One Person Company",
      description: "Allows single entrepreneur to operate with limited liability. Merges benefits of Pvt Ltd and sole proprietorship.",
      features: ["Single Owner", "Limited Liability", "Separate Legal Entity", "Easy Compliance"],
      icon: <HiCheckCircle className="w-8 h-8 text-main" />
    },
    {
      title: "Public Limited Company",
      description: "For large businesses needing to raise capital from public. Offers unlimited growth potential.",
      features: ["Public Funding", "Limited Liability", "High Credibility", "Large Scale Operations"],
      icon: <HiGlobe className="w-8 h-8 text-main" />
    },
    {
      title: "Sole Proprietorship",
      description: "Simplest form of business ownership. Single owner manages everything with full personal liability.",
      features: ["Easy Setup", "Full Control", "Minimal Compliance", "Tax Simplicity"],
      icon: <HiShieldCheck className="w-8 h-8 text-main" />
    },
    {
      title: "Partnership Firm",
      description: "Two or more partners share profits, losses, and responsibilities. Traditional business structure.",
      features: ["Shared Responsibility", "Easy Formation", "Tax Flexibility", "Local Operations"],
      icon: <HiDocumentText className="w-8 h-8 text-main" />
    }
  ];

  const primeCompanies = [
    {
      type: "Private Limited Company",
      features: "Separate legal entity, higher credibility, easy to raise funds",
      liability: "Limited to shares held",
      idealFor: "Startups and growth-focused businesses",
      taxation: "Taxed as a company; corporate tax on profits; eligible for deductions and exemptions"
    },
    {
      type: "One Person Company (OPC)",
      features: "Owned by a single person, separate legal status, limited liability",
      liability: "Limited to investment",
      idealFor: "Solo entrepreneurs",
      taxation: "Taxed like a Private Limited Company; corporate tax on profits; simple compliance"
    },
    {
      type: "Limited Liability Partnership (LLP)",
      features: "Combines partnership flexibility with limited liability",
      liability: "Limited to the partner's contribution",
      idealFor: "Professionals and service firms",
      taxation: "Taxed as a partnership; profit taxed in the hands of LLP; no dividend distribution tax"
    },
    {
      type: "Partnership Firm",
      features: "Two or more owners share profits and responsibilities",
      liability: "Unlimited liability",
      idealFor: "Small businesses and services",
      taxation: "Taxed as a partnership; profits taxed at the firm level; partners taxed on their share of profits"
    },
    {
      type: "Sole Proprietorship",
      features: "Single owner manages business, easy setup, minimal compliance",
      liability: "Unlimited liability",
      idealFor: "Freelancers, traders, small shops",
      taxation: "Income taxed in the hands of the owner under personal income tax; simple filing"
    }
  ];

  const faqs = [
    {
      question: "Is there a minimum capital requirement for company registration in India?",
      answer: "No, there is no mandatory minimum capital requirement to register a company in India. Earlier, private limited companies were required to have a minimum paid-up capital of Rs. 1 lakh, but this requirement has been removed. Now, you can start a company with any amount of capital, depending on business needs."
    },
    {
      question: "How many days does it take to register a company in India?",
      answer: "Typically 7-15 working days depending on the company type and document submission. Private Limited Company takes about 10-14 days, while LLP takes 7-10 days."
    },
    {
      question: "Can a foreigner or NRI register a company in India?",
      answer: "Yes, foreigners and NRIs can register companies in India. They need to provide notarized documents, passport, and address proof. At least one director must be a resident Indian."
    },
    {
      question: "Can I register a company online through the MCA in India?",
      answer: "Yes, company registration in India is completely online through the Ministry of Corporate Affairs (MCA) portal. The SPICe+ form integrates name reservation, incorporation, and statutory registrations in a single application."
    },
    {
      question: "Is GST registration mandatory for new companies in India?",
      answer: "GST registration is mandatory if your turnover exceeds ₹40 lakhs (₹20 lakhs for special category states) or if you're involved in inter-state supplies. It's advisable to register early for input tax credits and compliance."
    },
    {
      question: "What is a Certificate of Incorporation in company registration?",
      answer: "A Certificate of Incorporation (CoI) is the official document issued by the Registrar of Companies (RoC) confirming your company's legal existence. It includes the Corporate Identification Number (CIN), company name, date of incorporation, and registered office address."
    },
    {
      question: "Can I use a virtual office address for company registration in India?",
      answer: "Yes, you can use a virtual office address, but it must be a valid registered office. You'll need to provide proof of address and ensure it complies with MCA regulations. The address must be within the state of registration."
    },
    {
      question: "What happens if a company does not comply with ROC filings in India?",
      answer: "Non-compliance with ROC filings can result in penalties, fines, or legal action. The company may face restrictions on banking operations, government contracts, or even removal from the register. Regular compliance is essential to maintain legal validity."
    },
    {
      question: "What is a company registration number?",
      answer: "A company registration number, also known as Corporate Identification Number (CIN), is a unique 21-digit alphanumeric code assigned by the Ministry of Corporate Affairs. It serves as the company's identification number for all legal and regulatory purposes."
    },
    {
      question: "Can a foreign national or NRI be a director in an Indian company?",
      answer: "Yes, foreign nationals and NRIs can be directors in Indian companies. They need to obtain a Director Identification Number (DIN) and provide apostilled documents including passport, address proof, and a notarized declaration of their residential status."
    },
    {
      question: "How do I open a current bank account for my company?",
      answer: "To open a corporate bank account, you'll need the Certificate of Incorporation, PAN/TAN, Memorandum and Articles of Association, director identities, and registered office proof. Most banks offer this service online with video KYC verification."
    },
    {
      question: "What are the corporate tax rates for companies in India?",
      answer: "Domestic companies are taxed at 25% (22% for new manufacturing companies). Foreign companies are taxed at 40%. Various deductions and exemptions are available under different schemes like Section 80C to 80U."
    },
    {
      question: "How do I verify if a company is registered in India?",
      answer: "You can verify company registration through the MCA website (www.mca.gov.in) using the company's CIN or name. The RoC maintains a public register of all registered companies with their incorporation details and current status."
    },
    {
      question: "What is the minimum and maximum number of shareholders allowed for company registration?",
      answer: "Private Limited Companies must have a minimum of 2 shareholders and maximum of 200. One Person Company (OPC) has only 1 shareholder. Public Limited Companies have no maximum limit but must have a minimum of 7 shareholders."
    },
    {
      question: "How can ownership of a private limited company be transferred?",
      answer: "Ownership transfer in Pvt Ltd companies requires board resolution, shareholder consent, and updation of share registers. For substantial transfers, valuation may be required. The transfer must comply with Companies Act, 2013 provisions."
    },
    {
      question: "What are the differences between a business name and a trade name?",
      answer: "A business name is the operating name under which you conduct business, while a trade name is a brand name used for marketing. Company registration provides the legal business name, while trade names can be registered separately under trademark laws."
    },
    {
      question: "What are the steps to appoint a statutory auditor?",
      answer: "Within 30 days of incorporation, the board must appoint a statutory auditor. The appointment is approved in a board meeting, and Form ADT-1 is filed with MCA. The auditor must be a Chartered Accountant with a valid certificate of practice."
    },
    {
      question: "What happens if my proposed company name is rejected?",
      answer: "If rejected, you can appeal within 15 days or apply for a new name. Common reasons for rejection include similarity with existing names, prohibited words, or non-compliance with naming guidelines. Use MCA's RUN service to check name availability first."
    },
    {
      question: "What are the tax implications associated with company registration?",
      answer: "Companies are subject to corporate tax (25%), TDS, advance tax, and MAT. They get deductions under Section 80C-80U. GST registration may be required based on turnover. Proper tax planning can significantly reduce the effective tax burden."
    },
    {
      question: "Which form is to be filed for filing the annual returns of a company?",
      answer: "Private Limited Companies file AOC-4 (financial statements) and MGT-7 (annual return) within 60 days of AGM. Small companies have extended timelines. Late filing attracts penalties starting from ₹200 per day."
    }
  ];

  return (
    <>
      <SEO
        title="Private Limited Company Registration in India | Patel & Vaghasiya"
        description="Expert Private Limited Company registration services in India. Complete legal compliance, documentation support, and fast-track incorporation under Companies Act, 2013."
        url="https://patelvaghasiyaassociates.com/services/company-registration"
        keywords="Private Limited Company Registration, Pvt Ltd Registration, Company Incorporation India, MCA Company Registration, Business Registration Ahmedabad"
        canonical="https://patelvaghasiyaassociates.com/services/company-registration"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...jsonLd,
            name: "Private Limited Company Registration Services in India",
            description: "Expert Private Limited Company registration services in India. Complete legal compliance, documentation support, and fast-track incorporation.",
            serviceType: "Private Limited Company Registration Services",
          }),
        }}
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
            className="flex-1 space-y-4 sm:space-y-6 lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Private Limited Company Registration Services
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-gray-100">
              Start Your Business with Professional Legal Structure
            </p>

            <p className="text-gray-100 leading-relaxed">
              Registering a Private Limited Company is the most popular choice for Indian entrepreneurs.
              Get a separate legal entity, limited liability protection, and access to funding opportunities.
            </p>

            <p className="text-gray-100 leading-relaxed">
              At Patel & Vaghasiya, Chartered Accountants, we provide end-to-end Pvt Ltd registration services
              including name approval, MoA/AoA drafting, DIN/DSC, and complete MCA compliance.
            </p>

            <p className="text-gray-100 leading-relaxed">
              Our service is <strong className="text-gray-100">fast, reliable, and fully compliant with Companies Act, 2013</strong>.
              We ensure smooth incorporation within 10-14 days with dedicated support throughout the process.
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

      {/* Main Content */}
      <div className="relative bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-6 sm:py-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
                  <li className="text-gray-400">/</li>
                  <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
                  <li className="text-gray-400">/</li>
                  <li className="text-main font-bold">Private Limited Company Registration</li>
                </ol>
              </nav>

                            <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                                <div className="p-8 md:p-12">

                  {/* Introduction */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">What is Company Registration in India?</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Company registration in India legally establishes a business under the applicable laws for its structure.
                      Depending on the structure, a business may gain a separate legal identity (such as Private Limited Companies, LLPs, or OPCs)
                      or operate as an extension of the owner (such as Sole Proprietorships and traditional Partnerships).
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Registered companies with a separate legal identity can:
                    </p>
                    <ul className="space-y-3 mb-6">
                      {[
                        "Enter into contracts",
                        "Hold property",
                        "Open bank accounts",
                        "Apply for licenses like GST, MSME, and FSSAI"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <HiCheckCircle className="w-5 h-5 text-main mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Registration also limits liability, protecting the personal assets of owners. It improves credibility with customers,
                      regulators, and investors. It also provides access to government schemes, such as Startup India and Make in India,
                      which offer tax benefits and funding opportunities.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <p className="text-blue-800 font-semibold mb-2">Market Statistics:</p>
                      <p className="text-blue-700">
                        As of January 31, 2025, over 28.05 lakh companies were registered in India. About 65% of these, 18.17 lakh companies,
                        remain active. Growth continues strongly, with May 2025 experiencing a 29% year-on-year rise in new registrations,
                        surpassing 20,700 new companies in a single month.
                      </p>
                    </div>
                  </div>

                  {/* Company Types */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-8">Different Types of Company Registration in India</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Choosing the right business structure is the first step in starting a company in India. Each type of registration
                      is governed by laws such as the Companies Act, 2013, or the Indian Partnership Act, 1932. Every format comes
                      with its own features, compliance needs, and benefits.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {[
                        {
                          title: "Private Limited Company",
                          description: "Most popular structure offering limited liability and separate legal identity. Ideal for startups and growing businesses.",
                          icon: <HiOfficeBuilding className="w-8 h-8 text-main" />
                        },
                        {
                          title: "Limited Liability Partnership",
                          description: "Combines partnership flexibility with limited liability protection. Perfect for professionals and service providers.",
                          icon: <HiUserGroup className="w-8 h-8 text-main" />
                        },
                        {
                          title: "One Person Company",
                          description: "Allows single entrepreneur to operate with limited liability. Merges benefits of Pvt Ltd and sole proprietorship.",
                          icon: <HiCheckCircle className="w-8 h-8 text-main" />
                        },
                        {
                          title: "Public Limited Company",
                          description: "For large businesses needing to raise capital from public. Offers unlimited growth potential.",
                          icon: <HiGlobe className="w-8 h-8 text-main" />
                        },
                        {
                          title: "Sole Proprietorship",
                          description: "Simplest form with single owner. Full control but unlimited liability.",
                          icon: <HiShieldCheck className="w-8 h-8 text-main" />
                        },
                        {
                          title: "Partnership Firm",
                          description: "Two or more partners share responsibilities and profits. Traditional business structure.",
                          icon: <HiDocumentText className="w-8 h-8 text-main" />
                        }
                      ].map((type, index) => (
                        <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100">
                          <div className="flex items-start gap-4 mb-4">
                            {type.icon}
                            <div>
                              <h3 className="text-xl font-bold text-main-dark mb-2">{type.title}</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Additional Types */}
                    <div className="space-y-4">
                      <div className="border-l-4 border-main pl-6">
                        <h4 className="text-lg font-semibold text-main-dark mb-2">Section 8 Company</h4>
                        <p className="text-gray-700 text-sm">For non-profit organizations formed under Companies Act, 2013. Used by NGOs, charities, and social enterprises.</p>
                      </div>
                      <div className="border-l-4 border-main pl-6">
                        <h4 className="text-lg font-semibold text-main-dark mb-2">Nidhi Company</h4>
                        <p className="text-gray-700 text-sm">For promoting savings habits and providing loans at reasonable rates within closed groups.</p>
                      </div>
                      <div className="border-l-4 border-main pl-6">
                        <h4 className="text-lg font-semibold text-main-dark mb-2">Producer Company</h4>
                        <p className="text-gray-700 text-sm">For farmers and producers to pool resources, process goods, and sell collectively.</p>
                      </div>
                      <div className="border-l-4 border-main pl-6">
                        <h4 className="text-lg font-semibold text-main-dark mb-2">Startup India</h4>
                        <p className="text-gray-700 text-sm">Government scheme offering tax exemptions, funding access, and reduced compliance for innovation-driven businesses.</p>
                      </div>
                    </div>
                  </div>

                  {/* Prime Companies Table */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-8">5 Prime Company Registrations in India</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-main text-white">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Company Type</th>
                            <th className="px-4 py-3 text-left font-semibold">Key Features</th>
                            <th className="px-4 py-3 text-left font-semibold">Liability</th>
                            <th className="px-4 py-3 text-left font-semibold">Ideal For</th>
                            <th className="px-4 py-3 text-left font-semibold">Taxation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              type: "Private Limited Company",
                              features: "Separate legal entity, higher credibility, easy to raise funds",
                              liability: "Limited to shares held",
                              idealFor: "Startups and growth-focused businesses",
                              taxation: "Taxed as a company; corporate tax on profits; eligible for deductions and exemptions"
                            },
                            {
                              type: "One Person Company (OPC)",
                              features: "Owned by a single person, separate legal status, limited liability",
                              liability: "Limited to investment",
                              idealFor: "Solo entrepreneurs",
                              taxation: "Taxed like a Private Limited Company; corporate tax on profits; simple compliance"
                            },
                            {
                              type: "Limited Liability Partnership (LLP)",
                              features: "Combines partnership flexibility with limited liability",
                              liability: "Limited to the partner's contribution",
                              idealFor: "Professionals and service firms",
                              taxation: "Taxed as a partnership; profit taxed in the hands of LLP; no dividend distribution tax"
                            },
                            {
                              type: "Partnership Firm",
                              features: "Two or more owners share profits and responsibilities",
                              liability: "Unlimited liability",
                              idealFor: "Small businesses and services",
                              taxation: "Taxed as a partnership; profits taxed at the firm level; partners taxed on their share of profits"
                            },
                            {
                              type: "Sole Proprietorship",
                              features: "Single owner manages business, easy setup, minimal compliance",
                              liability: "Unlimited liability",
                              idealFor: "Freelancers, traders, small shops",
                              taxation: "Income taxed in the hands of the owner under personal income tax; simple filing"
                            }
                          ].map((company, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="px-4 py-3 font-semibold text-main-dark">{company.type}</td>
                              <td className="px-4 py-3 text-gray-700">{company.features}</td>
                              <td className="px-4 py-3 text-gray-700">{company.liability}</td>
                              <td className="px-4 py-3 text-gray-700">{company.idealFor}</td>
                              <td className="px-4 py-3 text-gray-700 text-sm">{company.taxation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-sm text-gray-600 space-y-1">
                      <p><strong>Notes:</strong></p>
                      <p>• Partnership Firm registration is optional but advisable under the Partnership Act, 1932.</p>
                      <p>• A Sole Proprietorship is not registered with the MCA like companies or LLPs.</p>
                    </div>
                  </div>

                  {/* How to Choose */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">How to Choose the Right Business Structure in India</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-main-dark mb-4">Key Factors to Consider:</h3>
                        <ul className="space-y-3">
                          {[
                            "Compliance Requirements",
                            "Ownership Structure",
                            "Initial Investment",
                            "Growth Opportunities",
                            "Risk and Liability"
                          ].map((factor, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                              <HiCheckCircle className="w-5 h-5 text-main mt-0.5 flex-shrink-0" />
                              <span>{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-main-dark mb-4">Comparison:</h3>
                        <div className="space-y-4">
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2">Low Liability Structures</h4>
                            <p className="text-green-700 text-sm">Private Limited Company, OPC, LLP offer limited liability protection</p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-800 mb-2">High Growth Potential</h4>
                            <p className="text-blue-700 text-sm">Pvt Ltd and LLP attract investors and enable fundraising</p>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                            <h4 className="font-semibold text-orange-800 mb-2">Simple Operations</h4>
                            <p className="text-orange-700 text-sm">Sole Proprietorship and Partnership for easy management</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Eligibility Criteria */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Eligibility Criteria for Company Registration in India</h2>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                      <h3 className="text-xl font-semibold text-main-dark mb-4">Key Requirements:</h3>
                      <ul className="space-y-3">
                        {[
                          "At least one resident Indian director (lived in India for 182 days in previous year)",
                          "Valid DIN (Director Identification Number) and DSC (Digital Signature Certificate)",
                          "Minimum age of 18 years for directors and shareholders",
                          "Valid PAN, Aadhaar, and address proof (not older than 60 days)",
                          "Unique company name not matching existing registrations",
                          "Lawful business activity following Indian regulatory rules"
                        ].map((requirement, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <HiCheckCircle className="w-5 h-5 text-main mt-0.5 flex-shrink-0" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-blue-700 text-sm mt-4 italic">
                        Foreign nationals can also be directors/shareholders with notarized documents.
                      </p>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Checklist for Company Registration in India</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-main-dark mb-4">Pre-Incorporation Requirements</h3>
                        <ul className="space-y-2">
                          {[
                            "Choose a business structure (Pvt Ltd, LLP, or OPC)",
                            "Reserve a unique company name via MCA RUN service",
                            "Define business activity and draft MoA with clear objectives",
                            "Finalize authorized share capital and shareholding",
                            "Appoint resident Indian director (Section 149(3))",
                            "Collect KYC documents (PAN, Aadhaar, address proof, photos)"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                              <HiCheckCircle className="w-5 h-5 text-main mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-main-dark mb-4">Digital and Legal Setup</h3>
                        <ul className="space-y-2">
                          {[
                            "Apply for Digital Signature Certificate (DSC)",
                            "Obtain Director Identification Number (DIN)",
                            "Draft MoA (Memorandum of Association) and AoA (Articles of Association)",
                            "Set up registered office with proof of address"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                              <HiCheckCircle className="w-5 h-5 text-main mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-main-dark mb-4">Incorporation Process</h3>
                        <ul className="space-y-2">
                          {[
                            "Submit SPICe+ Form (Parts A & B) on MCA portal",
                            "Receive Certificate of Incorporation (CoI), PAN, and TAN",
                            "Open corporate bank account",
                            "Apply for GST registration if applicable"
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                              <HiCheckCircle className="w-5 h-5 text-main mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Documents Required */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Documents Required for Company Registration in India</h2>
                    <div className="space-y-6">
                      {[
                        {
                          type: "Private Limited Company",
                          docs: [
                            "PAN and Aadhaar of directors and shareholders",
                            "Address proof of directors and registered office",
                            "Passport-sized photographs of all directors and shareholders",
                            "MoA & AoA (Memorandum and Articles of Association)",
                            "Digital Signature Certificates (DSC) and Director Identification Numbers (DIN)"
                          ]
                        },
                        {
                          type: "One Person Company",
                          docs: [
                            "PAN and Aadhaar of the sole owner",
                            "Address proof of the owner and registered office",
                            "Passport-sized photograph of the owner",
                            "MoA & AoA",
                            "DSC and DIN of the owner"
                          ]
                        },
                        {
                          type: "Limited Liability Partnership",
                          docs: [
                            "PAN and Aadhaar of partners",
                            "Address proof of partners and registered office",
                            "Passport-sized photographs of partners",
                            "LLP Agreement signed by all partners",
                            "DSC for designated partners"
                          ]
                        }
                      ].map((company, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                          <h3 className="text-lg font-semibold text-main-dark mb-4">{company.type}</h3>
                          <ul className="space-y-2">
                            {company.docs.map((doc, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                                <HiDocumentText className="w-4 h-4 text-main mt-0.5 flex-shrink-0" />
                                <span>{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How to Secure Company Name */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">How to Secure Your Company Name?</h2>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
                      <ol className="space-y-4">
                        {[
                          "Reflect your business activity in the name",
                          "Avoid prohibited words under Emblems Act",
                          "Check uniqueness - name shouldn't match existing companies",
                          "Apply via SPICe+ Form on MCA portal (propose up to 2 names)",
                          "Wait for ROC approval",
                          "Note: Name reserved for 20 days",
                          "File SPICe+ Part B within 20 days to confirm registration",
                          "Restart process if deadline missed"
                        ].map((step, index) => (
                          <li key={index} className="flex items-start gap-3 text-purple-800">
                            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                      <p className="text-purple-700 text-sm mt-4 italic">
                        Use MCA's RUN (Reserve Unique Name) service to check availability before applying.
                      </p>
                    </div>
                  </div>

                  {/* Registration Process */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">How to Register a Company in India?</h2>
                    <div className="space-y-6">
                      {[
                        {
                          step: "Choose Business Structure",
                          description: "Select Pvt Ltd, LLP, OPC, or other structure based on requirements",
                          time: ""
                        },
                        {
                          step: "Obtain DIN & DSC",
                          description: "Director Identification Number and Digital Signature Certificate for directors",
                          time: "1 working day"
                        },
                        {
                          step: "Reserve Company Name",
                          description: "Check availability and reserve unique name via MCA RUN service",
                          time: "1-2 working days"
                        },
                        {
                          step: "Draft MoA & AoA",
                          description: "Memorandum and Articles of Association defining company framework",
                          time: ""
                        },
                        {
                          step: "File SPICe+ Form",
                          description: "Submit incorporation documents online with MCA",
                          time: ""
                        },
                        {
                          step: "Receive CoI",
                          description: "Get Certificate of Incorporation confirming legal existence",
                          time: "10-14 days"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex-shrink-0 w-8 h-8 bg-main text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-main-dark mb-2">{item.step}</h3>
                            <p className="text-gray-700 mb-2">{item.description}</p>
                            {item.time && (
                              <p className="text-sm text-gray-500">⏱️ Estimated time: {item.time}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* Registration Validity */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Company Registration Validity</h2>
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border border-green-100">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-green-800 mb-3">Certificate of Incorporation</h3>
                          <p className="text-green-700 text-sm">
                            Valid indefinitely if company complies with regulatory requirements including annual filings,
                            statutory registers maintenance, and AGM conduct.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-green-800 mb-3">Consequences of Non-Compliance</h3>
                          <p className="text-green-700 text-sm">
                            Penalties, fines, or removal from register can invalidate registration.
                            Regular compliance ensures continued legal validity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advantages */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Advantages of Company Incorporation in India</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Separate Legal Identity",
                          description: "Company exists as separate legal entity from owners"
                        },
                        {
                          title: "Limited Liability",
                          description: "Personal assets protected from business liabilities"
                        },
                        {
                          title: "Tax Benefits",
                          description: "Competitive corporate tax rates and deductions"
                        },
                        {
                          title: "Funding Opportunities",
                          description: "Access to investors, venture capital, and public markets"
                        },
                        {
                          title: "Perpetual Succession",
                          description: "Business continues even if owners change"
                        },
                        {
                          title: "Brand Credibility",
                          description: "Higher trust from customers and partners"
                        },
                        {
                          title: "Global Opportunities",
                          description: "Access to international markets and FDI"
                        },
                        {
                          title: "Professional Management",
                          description: "Structured management with appointed directors"
                        },
                        {
                          title: "Asset Protection",
                          description: "Company assets separate from personal assets"
                        }
                      ].map((advantage, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                          <div className="flex items-center gap-3 mb-3">
                            <HiCheckCircle className="w-6 h-6 text-main" />
                            <h3 className="text-lg font-semibold text-main-dark">{advantage.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{advantage.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certificate of Incorporation */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">What is a Company Registration Certificate?</h2>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                      <h3 className="text-xl font-semibold text-blue-800 mb-4">Certificate of Incorporation (CoI)</h3>
                      <p className="text-blue-700 mb-4">
                        A government-issued document that legally confirms your company's formation under the Companies Act, 2013.
                        Issued digitally by the Ministry of Corporate Affairs (MCA) after verification.
                      </p>
                      <p className="text-blue-700 font-medium mb-3">The certificate includes:</p>
                      <ul className="list-disc list-inside text-blue-700 space-y-1 mb-4">
                        <li>Company Name (as approved)</li>
                        <li>Corporate Identification Number (CIN)</li>
                        <li>Date of Incorporation</li>
                        <li>Registered Office Address</li>
                        <li>Company Type and Structure</li>
                      </ul>
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <p className="text-blue-800 text-sm font-medium">
                          Authorizes company to: Own assets, Open bank accounts, Apply for licenses, Sign contracts, Participate in tenders
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Post-Incorporation Compliance */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Post-Incorporation Compliances</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Annual Compliance",
                          items: [
                            "File annual returns (MGT-7, AOC-4)",
                            "Conduct statutory audits",
                            "Maintain statutory registers",
                            "Hold Annual General Meetings (AGM)",
                            "File income tax returns"
                          ]
                        },
                        {
                          title: "Accounting & Bookkeeping",
                          items: [
                            "Follow accounting standards",
                            "Maintain proper financial records",
                            "Ensure GST compliance",
                            "Deposit TDS on time",
                            "Prepare financial statements"
                          ]
                        },
                        {
                          title: "Corporate Governance",
                          items: [
                            "Hold board meetings regularly",
                            "Maintain minute books",
                            "Complete regulatory filings",
                            "Consult legal advisors",
                            "Follow corporate laws"
                          ]
                        },
                        {
                          title: "Employee Compliances",
                          items: [
                            "Register under EPF/ESIC",
                            "Maintain payroll records",
                            "Follow labor laws",
                            "Provide statutory benefits",
                            "Handle tax deductions"
                          ]
                        }
                      ].map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <h3 className="text-lg font-semibold text-main-dark mb-4">{category.title}</h3>
                          <ul className="space-y-2">
                            {category.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                <HiCheckCircle className="w-4 h-4 text-main mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Company Types */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-8">Types of Company Registration in India</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {companyTypes.map((type, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                          <div className="flex items-start gap-4 mb-4">
                            {type.icon}
                            <div>
                              <h3 className="text-xl font-bold text-main-dark mb-2">{type.title}</h3>
                              <p className="text-gray-600 text-sm leading-relaxed">{type.description}</p>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {type.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                <HiCheckCircle className="w-4 h-4 text-main flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Prime Companies Table */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-8">5 Prime Company Registrations in India</h2>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-main text-white">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold">Company Type</th>
                            <th className="px-4 py-3 text-left font-semibold">Key Features</th>
                            <th className="px-4 py-3 text-left font-semibold">Liability</th>
                            <th className="px-4 py-3 text-left font-semibold">Ideal For</th>
                            <th className="px-4 py-3 text-left font-semibold">Taxation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {primeCompanies.map((company, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                              <td className="px-4 py-3 font-semibold text-main-dark">{company.type}</td>
                              <td className="px-4 py-3 text-gray-700">{company.features}</td>
                              <td className="px-4 py-3 text-gray-700">{company.liability}</td>
                              <td className="px-4 py-3 text-gray-700">{company.idealFor}</td>
                              <td className="px-4 py-3 text-gray-700 text-sm">{company.taxation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* How to Choose */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">How to Choose the Right Business Structure</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-main-dark mb-4">Key Factors to Consider:</h3>
                        <ul className="space-y-3">
                          {[
                            "Number of owners/partners",
                            "Initial investment requirements",
                            "Growth and funding plans",
                            "Liability preferences",
                            "Compliance and maintenance costs"
                          ].map((factor, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                              <HiCheckCircle className="w-5 h-5 text-main mt-0.5 flex-shrink-0" />
                              <span>{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-main-dark mb-4">Business Structure Comparison:</h3>
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Private Limited Company</h4>
                            <p className="text-blue-700 text-sm">Best for startups and businesses seeking investment</p>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">Limited Liability Partnership</h4>
                            <p className="text-green-700 text-sm">Ideal for professionals and service businesses</p>
                          </div>
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-purple-800 mb-2">One Person Company</h4>
                            <p className="text-purple-700 text-sm">Perfect for solo entrepreneurs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Eligibility Criteria */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Eligibility Criteria for Company Registration</h2>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                      <h3 className="text-xl font-semibold text-main-dark mb-4">Key Requirements:</h3>
                      <ul className="space-y-3">
                        {[
                          "At least one resident Indian director (lived in India for 182 days in previous year)",
                          "Valid DIN (Director Identification Number) for all directors",
                          "Digital Signature Certificate (DSC) for electronic filing",
                          "Unique company name not matching existing registrations",
                          "Minimum age of 18 years for directors and shareholders",
                          "Valid identity and address proof documents"
                        ].map((requirement, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-700">
                            <HiCheckCircle className="w-5 h-5 text-main mt-0.5 flex-shrink-0" />
                            <span>{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Registration Process */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">How to Register a Company in India</h2>
                    <div className="space-y-6">
                      {[
                        {
                          step: "Choose Business Structure",
                          description: "Select Pvt Ltd, LLP, OPC, or other structure based on your requirements"
                        },
                        {
                          step: "Obtain DIN & DSC",
                          description: "Director Identification Number and Digital Signature Certificate for all directors"
                        },
                        {
                          step: "Reserve Company Name",
                          description: "Check availability and reserve unique name via MCA RUN service"
                        },
                        {
                          step: "File SPICe+ Form",
                          description: "Submit incorporation documents online with MCA"
                        },
                        {
                          step: "Receive Certificate",
                          description: "Get Certificate of Incorporation and other statutory documents"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-main text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-main-dark mb-2">{item.step}</h3>
                            <p className="text-gray-700">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Advantages */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Advantages of Company Incorporation</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Separate Legal Identity",
                          description: "Company exists as separate legal entity from owners"
                        },
                        {
                          title: "Limited Liability",
                          description: "Personal assets protected from business liabilities"
                        },
                        {
                          title: "Tax Benefits",
                          description: "Access to various tax deductions and exemptions"
                        },
                        {
                          title: "Funding Opportunities",
                          description: "Easier to attract investors and raise capital"
                        },
                        {
                          title: "Perpetual Succession",
                          description: "Business continues even if owners change"
                        },
                        {
                          title: "Brand Credibility",
                          description: "Higher trust from customers and partners"
                        }
                      ].map((advantage, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <HiCheckCircle className="w-6 h-6 text-main" />
                            <h3 className="text-lg font-semibold text-main-dark">{advantage.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{advantage.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Certificate of Incorporation */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Certificate of Incorporation</h2>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
                      <h3 className="text-xl font-semibold text-green-800 mb-4">What is a Company Registration Certificate?</h3>
                      <p className="text-green-700 mb-4">
                        A Certificate of Incorporation (CoI) is a government-issued document that legally confirms your company's formation under the Companies Act, 2013.
                      </p>
                      <p className="text-green-700 font-medium">The certificate includes:</p>
                      <ul className="list-disc list-inside text-green-700 space-y-1 mt-2">
                        <li>Company Name (as approved)</li>
                        <li>Corporate Identification Number (CIN)</li>
                        <li>Date of Incorporation</li>
                        <li>Registered Office Address</li>
                        <li>Company Type and Structure</li>
                      </ul>
                    </div>
                  </div>

                  {/* Post-Incorporation Compliance */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Post-Incorporation Compliance</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Annual Compliance",
                          items: ["File annual returns", "Conduct statutory audits", "Maintain statutory registers"]
                        },
                        {
                          title: "Tax Compliance",
                          items: ["File income tax returns", "GST compliance", "TDS compliance"]
                        },
                        {
                          title: "Corporate Governance",
                          items: ["Hold board meetings", "Maintain records", "File required documents"]
                        }
                      ].map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                          <h3 className="text-lg font-semibold text-main-dark mb-4">{category.title}</h3>
                          <ul className="space-y-2">
                            {category.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                <HiCheckCircle className="w-4 h-4 text-main mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-gradient-to-r from-main to-main-dark text-white p-8 rounded-2xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Register Your Private Limited Company?</h2>
                    <p className="mb-6 text-main-foreground">
                      Get expert assistance for Private Limited Company registration in India.
                      Complete documentation, DIN, DSC, and legal compliance support.
                    </p>
                    <Link
                      href="#contact"
                      className="bg-white text-main px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <HiDocumentText className="w-4 h-4" />
                      Start Pvt Ltd Registration
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block flex-1 max-w-md">
              <div className="sticky top-24 space-y-6">
                {/* Other Services */}
                <Sidebar services={otherServices} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ faqs={faqs} />

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-heading mb-6">
              Why Choose Patel & Vaghasiya Associates for Your Company Registration in India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Registering a company in India involves following national laws and state-specific regulations.
              Patel & Vaghasiya Associates makes the process simple, fast, and fully compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pan-India Expertise",
                description: "We register all company types, including Pvt Ltd, LLP, OPC, and Public Ltd, across India. Our team ensures smooth compliance with the Companies Act, 2013.",
                icon: <HiGlobe className="w-8 h-8 text-main" />
              },
              {
                title: "State-Specific Compliance Support",
                description: "We manage local rules, such as stamp duty, Shops & Establishment registration, and state taxes, reducing the risk of errors in self-registration.",
                icon: <HiShieldCheck className="w-8 h-8 text-main" />
              },
              {
                title: "Timely Filings",
                description: "We track all deadlines for SPICe+, DIN, DSC, and annual filings. On-time submissions prevent penalties and keep your company legally secure.",
                icon: <HiCheckCircle className="w-8 h-8 text-main" />
              },
              {
                title: "End-to-End Assistance",
                description: "From name approval and MOA/AOA drafting to PAN/TAN, bank account setup, and statutory registrations, we handle the complete process.",
                icon: <HiDocumentText className="w-8 h-8 text-main" />
              },
              {
                title: "Transparent Process",
                description: "We offer clear pricing, assign a dedicated compliance expert, and provide professional support with no hidden charges.",
                icon: <HiCurrencyDollar className="w-8 h-8 text-main" />
              },
              {
                title: "Growth-Focused Approach",
                description: "We structure your company to attract investors and support long-term growth, helping you leverage business opportunities across India.",
                icon: <HiUserGroup className="w-8 h-8 text-main" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-main-dark">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16">
        <section className="bg-main-dark p-6 sm:p-8 md:p-10 rounded-xl shadow-md border border-bg-mainDark-100 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <motion.div className="flex-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Image src="/assets/ipo-support.png" alt="Company Registration Support" width={400} height={400} className="rounded-xl w-full h-auto" />
          </motion.div>

          <motion.div className="flex-1 text-center md:text-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Register Your Company?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're starting a Private Limited Company, LLP, or OPC — our team guides you through every step of the registration process.
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
