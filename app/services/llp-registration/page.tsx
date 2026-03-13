"use client";

import SEO from "@/components/SEO";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { HiCheckCircle, HiGlobe, HiShieldCheck, HiDocumentText, HiCurrencyDollar, HiUserGroup } from "react-icons/hi";
import { motion } from "framer-motion";
import Sidebar from "@/components/SidebarServices";
import FAQ from "@/components/FAQSection";
import { allServices } from "@/lib/services";

export default function LLPRegistrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "LLP Registration Services in India",
    description:
      "Professional LLP registration services in India. Limited Liability Partnership formation with expert guidance, complete documentation, and compliance support.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "India",
    serviceType: "LLP Registration Services",
    keywords: [
      "LLP Registration India",
      "Limited Liability Partnership",
      "LLP Formation",
      "LLP Incorporation",
      "Business Registration India",
      "MCA LLP Registration",
    ],
  };

  const otherServices = allServices.filter(s => s.href !== "/services/llp-registration");

  const llpTypes = [
    {
      title: "Domestic LLP",
      description: "For businesses operating within India with Indian partners. Perfect for local service providers and consulting firms.",
      features: ["Indian Partners Only", "Local Operations", "Simplified Compliance", "Tax Benefits"],
      icon: "🏢"
    },
    {
      title: "Foreign LLP",
      description: "For LLPs with foreign partners or foreign LLPs establishing business presence in India.",
      features: ["Foreign Investment", "International Partners", "FDI Compliance", "Global Operations"],
      icon: "🌍"
    },
    {
      title: "Professional LLP",
      description: "Specifically designed for professionals like Chartered Accountants, Company Secretaries, and Lawyers.",
      features: ["Professional Services", "Expertise Focus", "Regulatory Compliance", "Credibility"],
      icon: "👥"
    },
    {
      title: "Startup LLP",
      description: "For innovative business ventures seeking recognition under the Startup India initiative.",
      features: ["Startup Recognition", "Government Benefits", "Innovation Focus", "Growth Support"],
      icon: "✅"
    }
  ];

  const faqs = [
    {
      question: "What is an LLP (Limited Liability Partnership)?",
      answer: "An LLP is a business structure that combines the flexibility of a partnership with the limited liability benefit of a company. Partners are not personally liable for business losses beyond their agreed contribution."
    },
    {
      question: "Who should opt for LLP registration?",
      answer: "LLP is best suitable for professionals (CAs, CS, Lawyers, Consultants), small & medium businesses, family-run businesses, startups wanting low compliance with credibility, or if you want limited liability with minimal compliance."
    },
    {
      question: "What are the benefits of registering an LLP?",
      answer: "Key advantages include limited liability protection, no minimum capital requirement, lower compliance than Pvt Ltd, separate legal entity, no dividend distribution tax, and easy partner addition/removal."
    },
    {
      question: "How many partners are required to form an LLP?",
      answer: "Minimum 2 partners are required. There is no maximum limit on the number of partners."
    },
    {
      question: "Can NRIs or foreign nationals become partners in an LLP?",
      answer: "Yes. NRIs and foreign nationals can become partners in an LLP, subject to FEMA regulations and proper documentation."
    },
    {
      question: "Is an office address mandatory for LLP registration?",
      answer: "A registered office address in India is mandatory. It can be commercial property, owned property, rented property (with NOC), or utility bill & NOC from owner."
    },
    {
      question: "What documents are required for LLP registration?",
      answer: "Basic documents include PAN & Aadhaar of partners, address proof, passport (for NRI/foreign partners), office address proof, and DSC/DIN if needed."
    },
    {
      question: "How much time does LLP registration take?",
      answer: "Typically, 7–12 working days depending on document readiness, name approval, and government processing time."
    },
    {
      question: "What is the cost of LLP registration?",
      answer: "Cost depends on number of partners, capital contribution, and state government fees. We offer transparent, all-inclusive packages with no hidden charges."
    },
    {
      question: "Is GST registration mandatory for LLP?",
      answer: "GST is mandatory only if turnover exceeds the threshold limit or the LLP is engaged in inter-state supply or specific businesses. Otherwise, GST is not compulsory at incorporation stage."
    },
    {
      question: "Is audit compulsory for LLP?",
      answer: "Audit is required only if turnover exceeds ₹40 lakh or capital contribution exceeds ₹25 lakh. Otherwise, audit is not mandatory."
    },
    {
      question: "What are the annual compliances after LLP registration?",
      answer: "Major compliances include Form 11 (Statement of Accounts & Solvency), Form 8 (Annual Return), and income tax return. GST return if applicable."
    },
    {
      question: "Can LLP be converted into a Private Limited Company later?",
      answer: "Yes, LLP can be converted into a Private Limited Company if business grows and funding or expansion is required. LLP is better than proprietorship due to limited liability, separate legal identity, LLP offers legal recognition, banking & loan eligibility, and builds business credibility."
    },
    {
      question: "Can partners withdraw money from LLP?",
      answer: "Yes. Partners can withdraw remuneration, interest on capital, or share of profit as per LLP Agreement and tax provisions."
    },
    {
      question: "Do banks give loans to LLP?",
      answer: "Yes. LLPs are eligible for business loans, government schemes (like CGTMSE), and enjoy better approval chances with proper compliance."
    },
    {
      question: "What is LLP Agreement and why is it important?",
      answer: "LLP Agreement defines partner rights & duties, profit-sharing ratio, capital contribution, management roles, and other key terms. It is a mandatory legal document for LLP."
    },
    {
      question: "Can LLP name be changed later?",
      answer: "Yes. LLP name can be changed anytime by following MCA procedure and filing prescribed forms."
    },
    {
      question: "Is LLP suitable for startups?",
      answer: "Yes, especially bootstrapped startups that want low compliance, cost efficiency, professional image, and later the option to upgrade to Pvt Ltd if required."
    },
    {
      question: "Why choose us for LLP registration?",
      answer: "✔ End-to-end support ✔ Expert CA guidance ✔ Transparent pricing ✔ Compliance-oriented approach ✔ Post-registration support."
    }
  ];

  return (
    <>
      <SEO
        title="LLP Registration Services in India | Patel & Vaghasiya Associates"
        description="Professional LLP registration services in India. Limited Liability Partnership formation with expert guidance, complete documentation, and compliance support. Get your LLP registered today."
        url="https://www.pvassociates.in/services/llp-registration"
        keywords="LLP registration, Limited Liability Partnership, LLP formation India, business registration, MCA LLP registration, partnership firm registration"
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
              LLP Registration Services in India
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-gray-100">
              Start Your Professional Partnership with Limited Liability Protection
            </p>

            <p className="text-gray-100 leading-relaxed">
              Registering an LLP combines the flexibility of a partnership with the legal protection of a company.
              Perfect for professionals, startups, and service-based businesses seeking growth and credibility.
            </p>

            <p className="text-gray-100 leading-relaxed">
              At Patel & Vaghasiya, Chartered Accountants, we provide complete LLP registration services
              including name reservation, agreement drafting, DPIN/DSC, and MCA compliance support.
            </p>

            <p className="text-gray-100 leading-relaxed">
              Our service is <strong className="text-gray-100">fast, reliable, and fully compliant with LLP Act, 2008</strong>.
              We ensure smooth incorporation within 10-15 days with dedicated expert assistance.
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
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex gap-8">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Breadcrumb */}
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
                  <li className="text-gray-400">/</li>
                  <li><Link href="/services" className="hover:text-black transition-colors">Services</Link></li>
                  <li className="text-gray-400">/</li>
                  <li className="text-main font-bold">LLP Registration</li>
                </ol>
              </nav>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-8 md:p-12">
              {/* What is LLP */}
              <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">What is an LLP?</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      The full form of LLP is Limited Liability Partnership, a business structure that combines the flexibility of a partnership with the limited liability protection of a company. It offers a separate legal identity, meaning partners aren't personally liable for the firm's debts.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      LLPs are a preferred choice for startups and professionals who want shared management, minimal compliance, and legal protection without putting personal assets at risk.
                    </p>
                  </div>

              {/* Types of LLP Registration */}
              <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-8">Types of LLP Registration in India</h2>
                    <p className="text-gray-700 mb-6">
                      Before we get into how to incorporate an LLP, let's first know about the many options available to register as one. These forms of registration come in various types to accommodate different categories of businesses and operational needs:
                    </p>

                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-main/5 to-main-dark/5 p-6 rounded-xl border border-main/10">
                        <h3 className="text-xl font-bold text-main-dark mb-4">Domestic LLP</h3>
                        <p className="text-gray-600 mb-4">For businesses operating within India with Indian partners.</p>
                        <p className="text-gray-600 text-sm italic">Example: Two chartered accountants in Delhi forming an LLP to provide accounting services across India.</p>
                      </div>

                      <div className="bg-gradient-to-br from-main/5 to-main-dark/5 p-6 rounded-xl border border-main/10">
                        <h3 className="text-xl font-bold text-main-dark mb-4">Foreign LLP</h3>
                        <p className="text-gray-600 mb-4">For LLPs with foreign partners or foreign LLPs establishing a place of business in India.</p>
                        <p className="text-gray-600 text-sm italic">Example: A UK-based consulting firm establishing an LLP in India with both Indian and British partners.</p>
                      </div>

                      <div className="bg-gradient-to-br from-main/5 to-main-dark/5 p-6 rounded-xl border border-main/10">
                        <h3 className="text-xl font-bold text-main-dark mb-4">Professional LLP</h3>
                        <p className="text-gray-600 mb-4">For professionals such as chartered accountants, company secretaries, and lawyers, etc.</p>
                        <p className="text-gray-600 text-sm italic">Example: A group of architects forming an LLP to offer architectural design services.</p>
                      </div>

                      <div className="bg-gradient-to-br from-main/5 to-main-dark/5 p-6 rounded-xl border border-main/10">
                        <h3 className="text-xl font-bold text-main-dark mb-4">Startup LLP</h3>
                        <p className="text-gray-600 mb-4">For innovative business ventures seeking recognition under the Startup India initiative.</p>
                        <p className="text-gray-600 text-sm italic">Example: Three engineers forming an LLP to develop a new mobile application with innovative features.</p>
                      </div>

                      <div className="bg-gradient-to-br from-main/5 to-main-dark/5 p-6 rounded-xl border border-main/10">
                        <h3 className="text-xl font-bold text-main-dark mb-4">Small LLP</h3>
                        <p className="text-gray-600 mb-4">For businesses with lower turnover and capital contribution thresholds.</p>
                        <p className="text-gray-600 text-sm italic">Example: A small manufacturing business with a turnover of less than Rs. 40 lakhs forming an LLP.</p>
                      </div>

                      <div className="bg-gradient-to-br from-main/5 to-main-dark/5 p-6 rounded-xl border border-main/10">
                        <h3 className="text-xl font-bold text-main-dark mb-4">Conversion to LLP</h3>
                        <p className="text-gray-600 mb-4">For existing partnerships or private limited companies converting to the LLP structure.</p>
                        <p className="text-gray-600 text-sm italic">Example: An existing partnership firm dealing in textiles converting to an LLP structure for limited liability benefits.</p>
                      </div>

                      <div className="bg-gradient-to-br from-main/5 to-main-dark/5 p-6 rounded-xl border border-main/10">
                        <h3 className="text-xl font-bold text-main-dark mb-4">One Person LLP</h3>
                        <p className="text-gray-600 mb-4">A recent provision allows single-member LLPs for a limited period, specifically six months in certain cases.</p>
                        <p className="text-gray-600 text-sm italic">Example: A sole proprietor converting their business into an LLP under special provisions.</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mt-6 font-medium">
                      Every registered LLP receives a Certificate of Incorporation as official proof of registration.
                    </p>
                  </div>

              {/* Objectives */}
              <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Objectives of the LLP Registration in India</h2>
                    <p className="text-gray-700 mb-6">
                      The objective of registering an LLP is to establish a legal business entity that provides limited liability protection while maintaining operational flexibility.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Limited Liability Protection",
                          description: "Shield partners' assets from business liabilities.",
                        },
                        {
                          title: "Legal Entity Formation",
                          description: "Create a separate legal entity distinct from its partners.",
                        },
                        {
                          title: "Operational Flexibility",
                          description: "Enjoy the benefits of minimal compliance requirements compared to other companies.",
                        },
                        {
                          title: "Perpetual Succession",
                          description: "Ensure business continuity regardless of changes in partnership.",
                        },
                        {
                          title: "Tax Benefits",
                          description: "Avail of favorable tax treatment compared to private limited companies.",
                        },
                        {
                          title: "Business Credibility",
                          description: "Enhance reputation and credibility with clients, vendors, and financial institutions.",
                        },
                        {
                          title: "Capital Contribution Flexibility",
                          description: "Allow partners to contribute capital as agreed without minimum capital requirements.",
                        },
                        {
                          title: "Simplified Compliance",
                          description: "Benefit from fewer regulatory requirements compared to other companies.",
                        }
                      ].map((objective, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-main rounded-full"></div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-main-dark mb-2">{objective.title}</h3>
                            <p className="text-gray-600 text-sm">{objective.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

              {/* Laws and Rules */}
              <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Laws and Rules Governing LLP Registration in India</h2>
                    <p className="text-gray-700 mb-6">
                      LLP registration in India follows legal rules that ensure the proper setup and operation of these business entities.
                    </p>

                    <div className="space-y-4">
                      <div className="border-l-4 border-main pl-6">
                        <h3 className="font-bold text-main-dark mb-2">Limited Liability Partnership Act, 2008</h3>
                        <p className="text-gray-600">Provides the foundational legal framework for the formation, operation, and dissolution of LLPs in India, ensuring compliance with necessary legal formalities.</p>
                      </div>

                      <div className="border-l-4 border-main pl-6">
                        <h3 className="font-bold text-main-dark mb-2">Limited Liability Partnership Rules, 2009</h3>
                        <p className="text-gray-600">Details procedural aspects, including registration, conversion, and compliance requirements, offering clarity on the operational steps for LLPs.</p>
                      </div>

                      <div className="border-l-4 border-main pl-6">
                        <h3 className="font-bold text-main-dark mb-2">Companies Act, 2013 (for conversion)</h3>
                        <p className="text-gray-600">Contains provisions relating to the conversion of companies into LLPs, offering a legal pathway for businesses to transition from a company structure to an LLP.</p>
                      </div>

                      <div className="border-l-4 border-main pl-6">
                        <h3 className="font-bold text-main-dark mb-2">Foreign Exchange Management Act, 1999</h3>
                        <p className="text-gray-600">Regulates foreign investment in LLPs and the establishment of LLPs with foreign partners, ensuring proper compliance with foreign exchange policies.</p>
                      </div>

                      <div className="border-l-4 border-main pl-6">
                        <h3 className="font-bold text-main-dark mb-2">Income Tax Act, 1961</h3>
                        <p className="text-gray-600">Outlines the taxation framework applicable to LLPs, defining how LLPs are taxed and what deductions or exemptions they can claim under Indian tax laws.</p>
                      </div>
                    </div>
                  </div>

              {/* Eligibility Criteria */}
              <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Eligibility Criteria for LLP Registration Online</h2>
                    <p className="text-gray-700 mb-6">
                      Before learning about the LLP incorporation procedure, it's essential to know whether your business qualifies for it or not. Eligibility for registering an LLP depends on several factors as per the Limited Liability Partnership Act, 2008.
                    </p>

                    <div className="space-y-4">
                      {[
                        "Minimum partners - At least two partners are required to form an LLP (individuals or bodies corporate).",
                        "Designated Partners - Minimum two designated partners who are individuals, with at least one being a resident of India.",
                        "Residency Requirement - At least one designated partner must have resided in India for at least 182 days during the preceding year.",
                        "Age requirement - All partners and designated partners must be at least 18 years of age.",
                        "No maximum limit - There is no maximum limit on the number of partners in an LLP.",
                        "Digital Signature Certificate (DSC) - All designated partners must possess a valid DSC.",
                        "Director Identification Number (DIN) - All designated partners must have a valid DIN or DPIN.",
                        "Prohibited sectors - LLPs cannot be registered for non-profit activities or in sectors prohibited by the government."
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex-shrink-0 w-8 h-8 bg-main text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-yellow-700 text-sm">
                        Meeting these statutory and financial requirements necessitates proper LLP company registration in India to maintain compliance and avoid penalties.
                      </p>
                    </div>
                  </div>

              {/* Documents Required */}
              <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Documents Required for LLP Company Registration</h2>
                    <p className="text-gray-700 mb-6">
                      Before applying, it's essential to know the complete LLP incorporation checklist. An effective LLP registration requires proper documentation to establish the entity's legal foundation:
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-main-dark mb-4">1. For Partners</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• PAN cards of all partners: Required for identification.</li>
                          <li>• Identity proof: Aadhaar card, passport, or voter ID of all partners.</li>
                          <li>• Address proof: Utility bills, rental agreements, or bank statements.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-main-dark mb-4">2. For Designated Partners</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Photographs: Recent passport-sized photographs.</li>
                          <li>• Proof of residency in India: For at least one designated partner.</li>
                          <li>• Digital Signature Certificates: Valid DSCs for all designated partners.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-main-dark mb-4">3. For Business Address</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Proof of registered office: Utility bills, NOC from landlord, or rental agreement.</li>
                          <li>• Property ownership documents: If the premises are owned by partners.</li>
                          <li>• Consent letter: Authorization to use the address as the registered office.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-main-dark mb-4">4. Business-Related Documents</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• LLP Agreement: Detailing partnership terms, profit-sharing ratio, and management structure.</li>
                          <li>• Business plan or project report: For certain business activities.</li>
                          <li>• Professional certifications: For professional LLPs like CA or CS firms.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-main-dark mb-4">5. Financial Documents</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Capital contribution proof: Bank statements showing capital infusion.</li>
                          <li>• Statement of partners' capital contribution: Detailing each partner's investment.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-main-dark mb-4">6. For Converted Entities</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Previous Business Registration: Partnership deed or company incorporation certificate.</li>
                          <li>• Financial Obligations: Financial statements of the entity being converted.</li>
                          <li>• No-Objection Certificates: From creditors and relevant authorities.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-main-dark mb-4">7. Additional Documents</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• No-Objection Certificates: From regulatory bodies for certain businesses.</li>
                          <li>• Licenses: Pre-approvals required for specific sectors.</li>
                          <li>• Foreign investment approval: For LLPs with foreign partners.</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-main-dark mb-4">8. Forms</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li>• RUN-LLP: For name reservation.</li>
                          <li>• Form FiLLiP: For incorporation of the LLP.</li>
                          <li>• Form 3: For filing the LLP Agreement after incorporation.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-blue-700 text-sm">
                        Download LLP Incorporation Sample Documents & Forms. For a full checklist, read our complete guide on the documents required for LLP registration in India.
                      </p>
                    </div>
                  </div>

              {/* How to Register LLP */}
              <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">How to Register an LLP Online in India?</h2>
                    <p className="text-gray-700 mb-6">
                      Registering an effective LLP requires careful planning and execution. The following are the steps you must know:
                    </p>

                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">1</div>
                        <div>
                          <h3 className="text-xl font-bold text-main-dark mb-2">Obtain a Digital Signature Certificate (DSC)</h3>
                          <p className="text-gray-700">Getting a Digital Signature Certificate (DSC) is mandatory for all designated partners as they are required to sign electronic documents being submitted to the MCA portal. It acts as a digital key to authenticate the partner's identity online.</p>
                          <p className="text-gray-600 text-sm mt-2">DSCs can be obtained from licensed Certifying Authorities such as eMudhra, Sify, or NSDL.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">2</div>
                        <div>
                          <h3 className="text-xl font-bold text-main-dark mb-2">Apply for DPIN</h3>
                          <p className="text-gray-700">Every designated partner of an LLP must have a Designated Partner Identification Number (DPIN) for their official recognition. A DPIN can be obtained by filing the Form DIR-3, along with the PAN, photograph, and address proof through the MCA portal. The application is digitally signed using the applicant's DSC.</p>
                          <p className="text-gray-600 text-sm mt-2">Once the application is approved, the MCA generates a unique DPIN, which is valid for the entire tenure of the LLP.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">3</div>
                        <div>
                          <h3 className="text-xl font-bold text-main-dark mb-2">Reserve LLP Name</h3>
                          <p className="text-gray-700">Every LLP must have a unique name before incorporation, approved by the MCA. Name reservation is done through the RUN-LLP form. You can file up to six name options in order of your preference. The names must comply with MCA guidelines and not match existing LLPs, companies, or trademarks.</p>
                          <p className="text-gray-600 text-sm mt-2">You can check the company name availability for your LLP to avoid any conflict.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">4</div>
                        <div>
                          <h3 className="text-xl font-bold text-main-dark mb-2">File Incorporation Documents</h3>
                          <p className="text-gray-700">Submit Form FiLLiP (Form for Incorporation of Limited Liability Partnership) along with necessary documents, including the Subscriber sheet and consent of a Director (Form DIR-9). The Subscriber Sheet is signed by the first partners to confirm their agreement to form the LLP.</p>
                          <p className="text-gray-600 text-sm mt-2">It also shows the initial ownership structure of the firm.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">5</div>
                        <div>
                          <h3 className="text-xl font-bold text-main-dark mb-2">Submit LLP Agreement</h3>
                          <p className="text-gray-700">The LLP Agreement is a legal document that governs the internal functioning of the LLP. Draft and file a detailed LLP Agreement through Form 3 on the MCA portal within 30 days of incorporation. The agreement should outline partners' rights, duties, profit-sharing ratios, and other key terms.</p>
                          <p className="text-gray-600 text-sm mt-2">It ensures clarity among partners and serves as a reference for resolving disputes.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">6</div>
                        <div>
                          <h3 className="text-xl font-bold text-main-dark mb-2">Receive Certificate of Incorporation</h3>
                          <p className="text-gray-700">Upon successful verification, the Registrar issues a Certificate of Incorporation (COI). The certificate confirms the LLP's existence with its own LLP Identification Number (LLPIN), registered office address, and details of partners. With the COI, the LLP gains legal recognition to start its business in India.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">7</div>
                        <div>
                          <h3 className="text-xl font-bold text-main-dark mb-2">Post-Registration Compliances</h3>
                          <p className="text-gray-700">After incorporation, the LLP must comply with several post-registration formalities. It must obtain a PAN, TAN, open a bank account, register for GST (if applicable), and file Income Tax Return using ITR 5. Additionally, annual filings of Form 11 (Statement of Account & Solvency) and Form 8 (Annual Return) on the MCA portal are also mandatory.</p>
                          <p className="text-gray-600 text-sm mt-2">After the process is completed, you should apply for GST registration for your firm.</p>
                        </div>
                      </div>
                    </div>
                  </div>

              {/* LLP Registration Number & Certificate */}
              <div className="mb-12">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h2 className="text-3xl font-bold text-main-dark mb-6">Limited Liability Partnership Registration Number</h2>
                        <p className="text-gray-700 mb-4">
                          An LLP Registration Number, also known as the Limited Liability Partnership Identification Number (LLPIN), is a unique 7-digit alphanumeric code issued by the Registrar of Companies (ROC) upon incorporation. This number serves as the official identity of the LLP and is required for all filings and communications with the ROC. Once the applicant completes the registration process and submits the necessary documents, the ROC issues the Certificate of Incorporation containing the LLPIN as proof of registration.
                        </p>
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                          <p className="text-main-dark font-mono text-lg font-bold">Example of LLPIN: AAA-1234</p>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-3xl font-bold text-main-dark mb-6">LLP Incorporation Certificate</h2>
                        <p className="text-gray-700 mb-4">
                          An LLP Incorporation Certificate is the official document issued by the MCA that confirms the successful registration of a Limited Liability Partnership. It proves the LLP's legal existence, granting it a separate identity to operate, open a bank account, enter into contracts, and more. The certificate is essential for all legal, financial, and compliance-related activities and should be securely stored.
                        </p>
                        <p className="text-gray-700">
                          With the MCA's online system, obtaining this certificate is quick and convenient, and it can be downloaded easily using your registration details after approval.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-main-dark mb-4">How to Download the LLP Incorporation Certificate Online?</h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Visit the official Ministry of Corporate Affairs (MCA) portal: mca.gov.in.</li>
                        <li>Click on 'MCA Services' → 'LLP Services'.</li>
                        <li>Select 'View/Download LLP Incorporation Document.'</li>
                        <li>Enter your LLPIN (LLP Identification Number) and Date of Incorporation.</li>
                        <li>Complete the CAPTCHA and submit.</li>
                        <li>Your LLP Certificate of Incorporation will be available for download in PDF format.</li>
                      </ol>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-main-dark mb-4">How to Check LLP Registration Status Online?</h3>
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Go to the MCA website: mca.gov.in.</li>
                        <li>Click on 'MCA Services' → 'LLP Services' → 'Check LLP Name/Status'.</li>
                        <li>Enter your proposed LLP name or application number.</li>
                        <li>The status will display as Approved, Pending, Rejected, or Under Processing.</li>
                        <li>For any delays or issues, contact the Registrar of Companies (ROC) or your service provider.</li>
                      </ol>
                    </div>
                  </div>

                  {/* Time Required */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">How Much Time Does It Take to Register an LLP?</h2>
                    <p className="text-gray-700 mb-4">
                      Registering an LLP usually takes around 10 to 15 working days, depending on how quickly you submit documents, how soon the name is approved, and how efficiently the government processes the application.
                    </p>
                    <p className="text-gray-700 mb-6">
                      With professional assistance, the timeline can often be reduced through error-free and streamlined submission.
                    </p>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Day 1–2:</span>
                        <span className="text-gray-600">Apply for Digital Signature Certificates (DSC)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Day 3–5:</span>
                        <span className="text-gray-600">Name reservation via RUN-LLP</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Day 6–10:</span>
                        <span className="text-gray-600">Filing incorporation forms with MCA</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Day 11–15:</span>
                        <span className="text-gray-600">Certificate of Incorporation issued</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Characteristics */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-8">Key Characteristics of an LLP Registration</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Limited Liability Protection",
                          description: "Partners' liability is limited to their agreed contribution, protecting personal assets.",
                        },
                        {
                          title: "Separate Legal Entity",
                          description: "LLP exists as a distinct legal entity separate from its partners.",
                        },
                        {
                          title: "Perpetual Succession",
                          description: "LLP continues to exist regardless of changes in partnership.",
                        },
                        {
                          title: "Flexible Capital Contribution",
                          description: "No minimum capital requirement for LLP formation.",
                        },
                        {
                          title: "Internal Autonomy",
                          description: "LLP structure allows partners to organize internal operations as per mutual agreement.",
                        },
                        {
                          title: "Tax Transparency",
                          description: "Profits are taxed only at the LLP level without dividend distribution tax.",
                        },
                        {
                          title: "Ease of Compliance",
                          description: "Simpler regulatory requirements compared to companies.",
                        },
                        {
                          title: "Business Scalability",
                          description: "Allows an unlimited number of partners for business expansion.",
                        }
                      ].map((characteristic, index) => (
                        <div key={index} className="bg-gradient-to-br from-main/5 to-main-dark/5 p-6 rounded-xl border border-main/10">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-6 h-6 bg-main rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">{index + 1}</span>
                            </div>
                            <h3 className="text-lg font-bold text-main-dark">{characteristic.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{characteristic.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Why Choose LLP */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">Why Should You Register an LLP?</h2>
                    <p className="text-gray-700 mb-8">
                      Still wondering if registering an LLP is compulsory? Discover the key benefits of LLP registration in India, from legal protection to tax advantages and greater operational flexibility:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          title: "Limited Liability Protection",
                          description: "Shields partners' assets from business liabilities. Limits financial risk to the extent of the capital contribution made by each partner."
                        },
                        {
                          title: "Tax Benefits",
                          description: "Avoids double taxation applicable to companies. No dividend distribution tax on profit distribution to partners."
                        },
                        {
                          title: "Minimal Compliance Burden",
                          description: "Requires fewer statutory compliances compared to private limited companies. Audit requirements are only applicable when turnover exceeds Rs. 40 lakhs."
                        },
                        {
                          title: "Flexible Capital Structure",
                          description: "No minimum capital requirement for formation. Partners can contribute as per mutual agreement with easy capital restructuring."
                        },
                        {
                          title: "Business Continuity",
                          description: "Ensures perpetual succession regardless of changes in partnership. Business operations continue smoothly despite partners joining or leaving."
                        },
                        {
                          title: "Professional Credibility",
                          description: "Enhances business reputation in the market and with financial institutions. Provides a legitimate business structure for accessing credit facilities."
                        }
                      ].map((benefit, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <HiCheckCircle className="w-6 h-6 text-main" />
                            <h3 className="text-lg font-semibold text-main-dark">{benefit.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* LLP Registration Validity */}
                  <div className="mb-12">
                    <h2 className="text-3xl font-bold text-main-dark mb-6">LLP Registration Validity</h2>
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border border-green-100">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold text-green-800 mb-3">Certificate of Incorporation</h3>
                          <p className="text-green-700 text-sm">
                            Valid indefinitely if LLP complies with regulatory requirements including annual filings,
                            statutory registers maintenance, and agreement updates.
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
            <h2 className="text-3xl sm:text-4xl font-bold gradient-heading mb-6">
              Why Choose Patel & Vaghasiya Associates for Your LLP Registration in India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Registering an LLP in India involves following national laws and state-specific regulations.
              Patel & Vaghasiya Associates makes the process simple, fast, and fully compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pan-India Expertise",
                description: "We register LLPs across India. Our team ensures smooth compliance with the LLP Act, 2008 and MCA regulations.",
                icon: <HiGlobe className="w-8 h-8 text-main" />
              },
              {
                title: "State-Specific Compliance Support",
                description: "We manage local rules, such as stamp duty, Shops & Establishment registration, and state taxes, reducing the risk of errors in self-registration.",
                icon: <HiShieldCheck className="w-8 h-8 text-main" />
              },
              {
                title: "Timely Filings",
                description: "We track all deadlines for FiLLiP, DPIN, DSC, and annual filings. On-time submissions prevent penalties and keep your LLP legally secure.",
                icon: <HiCheckCircle className="w-8 h-8 text-main" />
              },
              {
                title: "End-to-End Assistance",
                description: "From name reservation and LLP agreement drafting to PAN/TAN, bank account setup, and statutory registrations, we handle the complete process.",
                icon: <HiDocumentText className="w-8 h-8 text-main" />
              },
              {
                title: "Transparent Process",
                description: "We offer clear pricing, assign a dedicated compliance expert, and provide professional support with no hidden charges.",
                icon: <HiCurrencyDollar className="w-8 h-8 text-main" />
              },
              {
                title: "Growth-Focused Approach",
                description: "We structure your LLP to attract investors and support long-term growth, helping you leverage business opportunities across India.",
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
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <section className="bg-main-dark p-10 rounded-xl shadow-md border border-bg-mainDark-100 flex flex-col md:flex-row items-center gap-8">
          <motion.div className="flex-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Image src="/assets/5124557.png" alt="LLP Registration Support" width={400} height={400} className="rounded-xl" />
          </motion.div>

          <motion.div className="flex-1 text-center md:text-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Register Your LLP?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're forming a professional LLP, startup LLP, or converting an existing partnership — our team guides you through every step.
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