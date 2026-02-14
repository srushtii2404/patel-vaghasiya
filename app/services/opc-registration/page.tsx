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

export default function OPCRegistrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "One Person Company Registration Services in India",
    description:
      "Professional One Person Company (OPC) registration services in India. Single entrepreneur company formation with limited liability protection and compliance support.",
    provider: {
      "@type": "Organization",
      name: "Patel & Vaghasiya, Chartered Accountants",
    },
    areaServed: "India",
    serviceType: "OPC Registration Services",
    keywords: [
      "OPC Registration India",
      "One Person Company",
      "OPC Formation",
      "OPC Incorporation",
      "Single Person Company",
      "MCA OPC Registration",
    ],
  };

  const otherServices = allServices.filter(s => s.href !== "/services/opc-registration");

  const opcTypes = [
    {
      title: "OPC Limited by Shares",
      description: "Liability limited to unpaid share value. Most popular option for entrepreneurs.",
      features: ["Limited Liability", "Share Capital", "Popular Choice", "Debt Protection"]
    },
    {
      title: "OPC Limited by Guarantee with Share Capital",
      description: "Combines shares with guarantee clause for flexible capital structure.",
      features: ["Share Capital", "Guarantee Clause", "Flexible Structure", "Liability Protection"]
    },
    {
      title: "OPC Limited by Guarantee without Share Capital",
      description: "Entity without shares, liability based on contribution guarantee.",
      features: ["No Share Capital", "Guarantee Based", "Simple Structure", "Limited Liability"]
    },
    {
      title: "Unlimited OPC with Share Capital",
      description: "Includes share capital but no liability protection - high risk option.",
      features: ["Share Capital", "Unlimited Liability", "High Risk", "Flexible Capital"]
    },
    {
      title: "Unlimited OPC without Share Capital",
      description: "Neither share capital nor liability protection - very high personal risk.",
      features: ["No Capital", "Unlimited Liability", "High Risk", "Minimal Structure"]
    }
  ];

  const faqs = [
    {
      question: "What is One Person Company (OPC) registration?",
      answer: "One Person Company (OPC) registration is the process by which a single individual can incorporate a private limited company with limited liability and a separate legal identity. The OPC structure combines the benefits of sole proprietorship with the features of a corporate entity."
    },
    {
      question: "Who is eligible to be a member of an OPC?",
      answer: "Any Indian citizen and resident who is at least 18 years old can form an OPC. The person must be both the shareholder and director, and must appoint a nominee for succession purposes."
    },
    {
      question: "What documents are required for OPC registration?",
      answer: "PAN Card, Aadhaar Card, identity proof, address proof, recent photographs, nominee consent, registered office proof, and business declaration documents are required."
    },
    {
      question: "Is registration of OPC compulsory?",
      answer: "OPC registration is not compulsory but highly recommended for entrepreneurs seeking limited liability protection, credibility, and access to funding opportunities."
    },
    {
      question: "Who cannot form an OPC?",
      answer: "Minors, non-residents, people disqualified by court orders, and individuals already serving as directors in more than 20 companies cannot form an OPC."
    },
    {
      question: "How is the registered office address determined for an OPC?",
      answer: "The registered office can be the owner's residence or a commercial property. It must be a valid address with proper proof of ownership or rental agreement."
    },
    {
      question: "What is the role of a nominee in an OPC?",
      answer: "A nominee is appointed to take over the OPC if the owner dies or becomes incapacitated. The nominee becomes the shareholder and manages the company temporarily."
    },
    {
      question: "What are the post-incorporation formalities for an OPC?",
      answer: "OPCs must file annual returns, maintain statutory registers, hold board meetings, obtain PAN/TAN, and comply with tax regulations."
    },
    {
      question: "What is the difference between an OPC and a sole proprietorship?",
      answer: "OPC provides limited liability and separate legal entity status, while sole proprietorship offers unlimited personal liability. OPC has more credibility and compliance requirements."
    },
    {
      question: "Can an NRI form an OPC in India?",
      answer: "No, only Indian residents can form an OPC. NRIs can form private limited companies but not OPCs."
    },
    {
      question: "How many OPCs can one person form?",
      answer: "One person can form only one OPC at a time. If they want to form another business, they must either dissolve the existing OPC or convert it to a private limited company."
    },
    {
      question: "What is the minimum capital requirement for One Person Company Registration?",
      answer: "There is no minimum capital requirement for OPC registration. The authorized capital can be any amount as decided by the owner."
    },
    {
      question: "Can an OPC have multiple directors?",
      answer: "No, an OPC can have only one director who is also the shareholder. However, additional directors can be appointed if the OPC converts to a private limited company."
    },
    {
      question: "How long does it take to register a One Person Company in India?",
      answer: "OPC registration typically takes 15-25 days, including name approval, document preparation, and certificate issuance by the Registrar of Companies."
    },
    {
      question: "Can I run my OPC from my home address?",
      answer: "Yes, you can use your home address as the registered office for an OPC, provided you have proper proof of address and it complies with local regulations."
    },
    {
      question: "Is it mandatory to appoint a nominee for One Person Company Registration?",
      answer: "Yes, appointing a nominee is mandatory for OPC registration. The nominee takes over management if the owner becomes incapacitated or passes away."
    },
    {
      question: "Can I choose any name for my One Person Company Registration?",
      answer: "No, the name must be unique, not similar to existing companies, and must end with 'One Person Company' or 'OPC Private Limited'. It must comply with MCA naming guidelines."
    },
    {
      question: "Do I need a physical office for One Person Company Registration?",
      answer: "A physical registered office address is required, but it can be your home address or a virtual office, as long as it meets legal requirements."
    },
    {
      question: "Are OPCs required to hold board meetings?",
      answer: "Yes, OPCs must hold at least two board meetings annually with proper minutes. The director acts as both chairman and member for these meetings."
    },
    {
      question: "Can an OPC issue shares to the public?",
      answer: "No, OPCs cannot issue shares to the public. Shares can only be held by the single member and nominee. OPCs cannot raise public capital."
    },
    {
      question: "Is GST registration mandatory after One Person Company Registration?",
      answer: "GST registration is mandatory if turnover exceeds ₹40 lakhs (₹20 lakhs for special category states) or if the OPC is involved in inter-state supplies."
    },
    {
      question: "Can an OPC distribute dividends?",
      answer: "Yes, OPCs can distribute dividends to shareholders, but dividend distribution tax may apply depending on the tax laws at the time of distribution."
    },
    {
      question: "What happens to an OPC if the member becomes incapacitated?",
      answer: "The nominee automatically takes over as the shareholder and director. The OPC continues to operate, and the nominee manages it until the original member recovers or a new arrangement is made."
    },
    {
      question: "When must an OPC convert to a private limited company?",
      answer: "An OPC must convert to a private limited company if its paid-up share capital exceeds ₹50 lakhs or if turnover exceeds ₹2 crores in any financial year."
    },
    {
      question: "Can I convert my existing sole proprietorship to an OPC?",
      answer: "Yes, existing sole proprietorships can be converted to OPCs, but the process involves forming a new OPC and transferring assets, which may have tax implications."
    },
    {
      question: "How can I close my OPC if I no longer wish to operate it?",
      answer: "OPCs can be closed through voluntary winding up or strike-off process by filing necessary forms with the MCA and settling all liabilities."
    },
    {
      question: "What happens if I fail to pay my OPC company registration fees?",
      answer: "Non-payment of registration fees can lead to penalties, and the application may be rejected. Outstanding fees may accumulate interest and affect future filings."
    }
  ];

  return (
    <>
      <SEO
        title="One Person Company Registration Services in India | Patel & Vaghasiya Associates"
        description="Professional One Person Company (OPC) registration services in India. Single entrepreneur company formation with limited liability protection and compliance support. Get your OPC registered today."
        url="https://yourwebsite.com/services/opc-registration"
        keywords="OPC registration, One Person Company, OPC formation India, single person company, MCA OPC registration, entrepreneur registration"
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
              One Person Company Registration Services in India
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-gray-100">
              Start Your Solo Business with Limited Liability Protection
            </p>

            <p className="text-gray-100 leading-relaxed">
              Registering an OPC combines the simplicity of sole proprietorship with the legal protection of a company.
              Perfect for single entrepreneurs seeking credibility, funding access, and limited liability protection.
            </p>

            <p className="text-gray-100 leading-relaxed">
              At Patel & Vaghasiya, Chartered Accountants, we provide complete OPC registration services
              including name reservation, nominee appointment, DSC/DIN, and MCA compliance support.
            </p>

            <p className="text-gray-100 leading-relaxed">
              Our service is <strong className="text-gray-100">fast, reliable, and fully compliant with Companies Act, 2013</strong>.
              We ensure smooth incorporation within 15-25 days with dedicated expert assistance.
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
                  <li className="text-main font-bold">OPC Registration</li>
                </ol>
              </nav>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="p-8 md:p-12">
              {/* What is OPC */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-dark mb-6">What is One Person Company Registration?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A One Person Company (OPC) is a business structure introduced under the Companies Act, 2013, that allows a single Indian citizen and resident to form a private limited company. It gives the sole owner full control while offering limited liability, separate legal status, and perpetual succession. OPCs must appoint a nominee who will take over if the owner is incapacitated or dies.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Combining the simplicity of a sole proprietorship with limited liability, an OPC has a single owner who acts as both shareholder and director, with a nominee appointed for succession. Initiated by a promoter, it is a separate legal entity that can own assets and enter into contracts.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With minimal compliance, no capital requirement, and professional credibility, an OPC supports growth and can convert into a private or public company if financial thresholds are exceeded.
                </p>
              </div>

              {/* Types of OPC */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-dark mb-8">Types of One Person Company in India</h2>
                <p className="text-gray-700 mb-6">
                  Planning to register a one-person company in India? Let's check out your options:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {opcTypes.map((type, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-main/5 to-main-dark/5 p-6 rounded-xl border border-main/10 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl">🏢</span>
                        <h3 className="text-xl font-bold text-main-dark">{type.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <ul className="space-y-2">
                        {type.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <HiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Characteristics */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-dark mb-6">Characteristics of a One Person Company in India</h2>
                <p className="text-gray-700 mb-6">
                  An OPC is designed to combine the simplicity of sole proprietorship with the benefits of a company structure. Key characteristics include:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Single Member Ownership: An OPC is formed and owned by a single individual who is both the shareholder and director, making it ideal for solo entrepreneurs.",
                    "Separate Legal Entity: The OPC is a distinct legal entity, separate from its owner, meaning the company can own assets and enter into contracts in its own name.",
                    "Limited Liability: The owner's liability is limited to the extent of their shareholding, protecting personal assets from business debts and liabilities.",
                    "Perpetual Succession: The company continues to exist even if the owner dies or becomes incapacitated, with a nominee stepping in automatically.",
                    "Nominee Requirement: A nominee must be appointed at the time of registration to take over in case the sole member can no longer manage the company.",
                    "Restricted Share Transfer: Shares cannot be freely transferred to outsiders; the sole member holds complete ownership until the company is converted into a private or public limited company."
                  ].map((characteristic, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-main text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{characteristic}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-dark mb-6">Benefits of One Person Company Registration</h2>
                <p className="text-gray-700 mb-8">
                  OPCs offer several advantages that make them an attractive choice for small business owners and startups:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Complete Control with Legal Protection",
                      description: "The sole owner has full control over decisions while enjoying limited liability protection, reducing personal financial risk."
                    },
                    {
                      title: "Simplified Compliance",
                      description: "OPCs have fewer regulatory requirements and annual compliance obligations compared to private limited companies, reducing administrative hassle and costs."
                    },
                    {
                      title: "Continuity and Stability",
                      description: "Perpetual succession ensures the company's uninterrupted existence, which builds trust with customers and investors."
                    },
                    {
                      title: "Easier Access to Funding",
                      description: "OPCs can raise capital through loans or investments, providing better opportunities to grow compared to sole proprietorships."
                    },
                    {
                      title: "Credibility and Trust",
                      description: "Being a registered company enhances the business's credibility with clients, vendors, and financial institutions."
                    },
                    {
                      title: "Tax Advantages",
                      description: "OPCs often benefit from corporate tax rates and can avail certain government incentives and subsidies meant for registered companies."
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <HiCheckCircle className="w-6 h-6 text-main" />
                        <h3 className="text-lg font-semibold text-main-dark">{benefit.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-dark mb-6">Documents Required for One Person Company Registration</h2>
                <p className="text-gray-700 mb-6">
                  The documents required for One Person Company registration include identity proof, address proof, and registered office proof, among others, which are as follows:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                    <thead className="bg-main text-white">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold">Category</th>
                        <th className="px-4 py-3 text-left font-semibold">Documents Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-main-dark">For Member/Director</td>
                        <td className="px-4 py-3 text-gray-700">
                          - PAN Card and Aadhaar Card (Identity proof)<br />
                          - Recent passport-sized photographs<br />
                          - Government-issued ID (Passport, Driving License, or Voter ID)<br />
                          - Proof of residence (Recent utility bills, bank statements)<br />
                          - Digital Signature Certificate (DSC)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-semibold text-main-dark">For Nominee</td>
                        <td className="px-4 py-3 text-gray-700">
                          - PAN Card and Aadhaar Card<br />
                          - Recent photographs<br />
                          - Signed consent letter to act as a nominee<br />
                          - Identity and address proof documents
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 font-semibold text-main-dark">For Registered Office</td>
                        <td className="px-4 py-3 text-gray-700">
                          - Proof of ownership or rental agreement<br />
                          - No-objection certificate (NOC) from the property owner if rented<br />
                          - Recent utility bills showing the address
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-3 font-semibold text-main-dark">Additional Requirements</td>
                        <td className="px-4 py-3 text-gray-700">
                          - Director Identification Number (DIN) (obtained during registration)<br />
                          - Declaration of intended business activities<br />
                          - Memorandum of Association (MOA)<br />
                          - Articles of Association (AOA)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-blue-700 text-sm">
                    Document Formats for OPC Registration (Download PDFs). For a full checklist, read our complete guide on documents required for OPC registration in India.
                  </p>
                </div>
              </div>

              {/* How to Register */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-dark mb-6">How to Register a One Person Company in India?</h2>
                <p className="text-gray-700 mb-6">
                  To register a One Person Company in India, file the required incorporation forms with the Ministry of Corporate Affairs along with the necessary documents and fees.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-main-dark mb-2">Name Reservation</h3>
                      <p className="text-gray-700">Your company name matters a lot while registering an OPC. Pick about six unique name options that represent your business well. Check if they're available using our company name check tool before proceeding. Remember, your name must end with "(OPC) Private Limited" to follow the rules.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-main-dark mb-2">Obtain DSC and DIN</h3>
                      <p className="text-gray-700">You'll need digital credentials for One Person Company Registration paperwork. Apply for a Digital Signature Certificate (DSC) through authorized agencies. Submit your ID and address proofs as required. Once you get your DSC, apply for a Director Identification Number (DIN) through the registration process.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-main-dark mb-2">Prepare and File Incorporation Documents</h3>
                      <p className="text-gray-700">Now comes the paperwork part of the OPC Registration. Draft your Memorandum of Association (MOA) describing your company's goals. Create Articles of Association (AOA) outlining your internal rules. Fill out Form INC-9 (First director declaration) and Form INC-3 (Nominee consent).</p>
                      <p className="text-gray-600 text-sm mt-2">Submit everything through the SPICe+ form on the MCA website. Double-check all details to avoid delays in your One Person Company Registration.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-main-dark mb-2">Pay Registration Fees</h3>
                      <p className="text-gray-700">You'll need to pay several fees for OPC Registration. Calculate the government fee based on your capital. Add state stamp duty according to local rules. Include professional fees if you're using registration services. All OPC registration fees must be paid to incorporate your OPC.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-main-dark mb-2">Verification and Certificate Issuance</h3>
                      <p className="text-gray-700">After submission, officials review your OPC Registration application carefully. The Registrar of Companies checks all documents for compliance with the law. If everything looks good, they issue your Certificate of Incorporation. This officially establishes your OPC with a unique Corporate Identity Number (CIN).</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-main text-white rounded-full flex items-center justify-center font-bold">6</div>
                    <div>
                      <h3 className="text-xl font-bold text-main-dark mb-2">Post-Registration Setup</h3>
                      <p className="text-gray-700">Once your OPC Registration is complete, set up essential business systems. Get company seals and letterheads with your registered name. Open a business bank account using your incorporation certificate. Apply for PAN, TAN, and GST registrations for tax purposes. Set up proper accounting and record-keeping systems.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* OPC Registration Number */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-dark mb-6">One Person Company Registration Number</h2>
                <p className="text-gray-700 mb-4">
                  The OPC Registration Number is a unique identifier assigned by the Registrar of Companies (ROC) upon successful incorporation. This number legally recognizes the OPC as a separate entity and must be used in all official and legal documents to ensure compliance and transparency.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Unique Identifier: The registration number is a distinct alphanumeric code specific to each OPC</li>
                      <li>• Legal Recognition: It signifies the company's legal existence under the Companies Act, 2013</li>
                      <li>• Format Details: Typically includes state code, year of incorporation, and a unique sequence</li>
                      <li>• Compliance Tracking: Authorities use this number to monitor filings and compliance</li>
                      <li>• Mandatory Usage: It must be quoted on all official correspondence and documents</li>
                      <li>• Post-Incorporation Issuance: Granted only after all documents are approved by the ROC</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-3">OPC Incorporation Certificate</h4>
                    <p className="text-green-700 text-sm mb-3">
                      An OPC Incorporation Certificate is the official legal document that certifies the incorporation of the company under the Companies Act, 2013. It acts as conclusive proof that the company has been legally formed and recognized by the ROC.
                    </p>
                    <p className="text-green-700 text-sm">
                      With the MCA's online system, obtaining this certificate is quick and convenient, and it can be downloaded easily using your registration details after approval.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-main-dark mb-4">How to Download the OPC Registration Certificate Online?</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Visit the official MCA website: mca.gov.in</li>
                    <li>Navigate to the 'MCA Services' section and select 'View Company/LLP Master Data' or 'Download Certificate.'</li>
                    <li>Enter the company name or registration number.</li>
                    <li>Complete the CAPTCHA and submit your request.</li>
                    <li>The registration certificate will be available to view and download in PDF format.</li>
                  </ol>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-main-dark mb-4">How to Check an OPC Registration Status Online?</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Go to the MCA portal or the Registrar of Companies' website.</li>
                    <li>Select 'Track Application Status' or 'View Company Status.'</li>
                    <li>Enter your application number or company registration number along with the date of filing.</li>
                    <li>View real-time updates on the status of your application.</li>
                    <li>For any issues, you can contact the ROC office for further assistance.</li>
                  </ol>
                </div>
              </div>

              {/* Time & Fees */}
              <div className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-main-dark mb-6">One Person Company Registration Time</h2>
                    <p className="text-gray-700 mb-4">
                      The total time required to register an OPC varies depending on document preparation and government processing, but it generally takes around two to four weeks.
                    </p>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Name Approval:</span>
                        <span className="text-gray-600">1 to 3 days</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Document Preparation:</span>
                        <span className="text-gray-600">2 to 4 days</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">MCA Filing:</span>
                        <span className="text-gray-600">7 to 10 days</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Verification & Approval:</span>
                        <span className="text-gray-600">5 to 7 days</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">Certificate Issuance:</span>
                        <span className="text-gray-600">1 to 2 days</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-main/10 rounded-lg border border-main/20">
                        <span className="font-bold text-main-dark">Total Time:</span>
                        <span className="font-bold text-main-dark">15 to 25 days</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Post-Incorporation Compliance */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-dark mb-6">Compliance After Registration of OPC</h2>
                <p className="text-gray-700 mb-6">
                  Once an OPC is registered, it must comply with several legal and regulatory requirements to maintain its active status. The company needs to file annual returns and financial statements with the Ministry of Corporate Affairs (MCA).
                </p>
                <p className="text-gray-700 mb-6">
                  Additionally, the OPC should hold regular board meetings and maintain statutory registers and records. Depending on the nature of the business, GST registration and other licenses may also be required to ensure full compliance.
                </p>

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
              Why Choose Patel & Vaghasiya Associates for One Person Company Registration?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Registering an OPC in India involves following national laws and state-specific regulations.
              Patel & Vaghasiya Associates makes the process simple, fast, and fully compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pan-India Expertise",
                description: "We register OPCs across India. Our team ensures smooth compliance with the Companies Act, 2013 and MCA regulations.",
                icon: <HiGlobe className="w-8 h-8 text-main" />
              },
              {
                title: "State-Specific Compliance Support",
                description: "We manage local rules, such as stamp duty, Shops & Establishment registration, and state taxes, reducing the risk of errors in self-registration.",
                icon: <HiShieldCheck className="w-8 h-8 text-main" />
              },
              {
                title: "Timely Filings",
                description: "We track all deadlines for SPICe+, DIN, DSC, and annual filings. On-time submissions prevent penalties and keep your OPC legally secure.",
                icon: <HiCheckCircle className="w-8 h-8 text-main" />
              },
              {
                title: "End-to-End Assistance",
                description: "From name reservation and MOA/AOA drafting to PAN/TAN, bank account setup, and statutory registrations, we handle the complete process.",
                icon: <HiDocumentText className="w-8 h-8 text-main" />
              },
              {
                title: "Transparent Process",
                description: "We offer clear pricing, assign a dedicated compliance expert, and provide professional support with no hidden charges.",
                icon: <HiCurrencyDollar className="w-8 h-8 text-main" />
              },
              {
                title: "Growth-Focused Approach",
                description: "We structure your OPC to attract investors and support long-term growth, helping you leverage business opportunities across India.",
                icon: <HiUserGroup className="w-8 h-8 text-main" />
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-main-dark">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        <section className="bg-main-dark p-10 rounded-xl shadow-md border border-bg-mainDark-100 flex flex-col md:flex-row items-center gap-8">
          <motion.div className="flex-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Image src="/assets/5124557.png" alt="OPC Registration Support" width={400} height={400} className="rounded-xl" />
          </motion.div>

          <motion.div className="flex-1 text-center md:text-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Register Your One Person Company?</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're a solo entrepreneur, freelancer, or startup founder — our team guides you through every step of OPC registration.
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
