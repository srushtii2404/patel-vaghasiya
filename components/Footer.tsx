"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="bg-[#0d1321] text-gray-300 pt-14 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP GRID */}
                <div
                    className="
                        grid grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-4 
                        gap-12
                    "
                >
                    {/* 1 — LOGO + ABOUT */}
                    <div>
                        <div className="flex items-center gap-3 mb-5">
                            <Image
                                src="/assets/logo.png"
                                alt="Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-white">
                                    Patel & Vaghasiya
                                </h2>
                                <p className="text-xs text-gray-400">Chartered Accountants</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed pr-6">
                            Your trusted partner in Audit, Taxation, Finance & Business Advisory.
                            Ensuring compliance, accuracy & business growth with expert guidance.
                        </p>

                        {/* Google Maps (External) */}
                        <div className="mt-6 group inline-block">
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent('401, Sunrise Business Center, Nr. Gurukul Circle, Nikol, Ahmedabad, Gujarat - 382350')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-main font-bold hover:text-white transition flex items-center gap-2"
                            >
                                Open on Google Maps

                                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                                    ➝
                                </span>
                            </a>
                        </div>


                        {/* Social Icons (External) */}
                        <div className="flex items-center gap-4 mt-3">
                            <a href="https://www.facebook.com/" target="_blank" className="text-gray-400 hover:text-white transition">
                                <i className="ri-facebook-fill text-xl"></i>
                            </a>

                            <a href="https://www.instagram.com/patel_vaghasiya_ca/" target="_blank" className="text-gray-400 hover:text-white transition">
                                <i className="ri-instagram-line text-xl"></i>
                            </a>

                            <a href="https://www.linkedin.com/" target="_blank" className="text-gray-400 hover:text-white transition">
                                <i className="ri-linkedin-fill text-xl"></i>
                            </a>
                        </div>

                        {/* About & Blog (Internal) */}
                        <ul className="mt-6 space-y-2 text-sm text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-white transition">About Us</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-white transition">Blog</Link>
                            </li>
                        </ul>

                        {/* Questions + Contact (Internal) */}
                        <div className="mt-7">
                            <p className="text-main font-bold text-sm">Have questions?</p>
                            <Link href="/contact" className=" hover:text-white transition text-sm text-gray-400">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* 2 — SERVICES COLUMN 1 */}
                    <div>
                        <h3 className="text-main font-semibold text-[16px] mb-3">
                            Registration Services
                        </h3>
                        <ul className="space-y-1.5 text-sm text-gray-400">
                            <li><Link href="/services/company-registration" className="hover:text-white">Private Limited Company Registration</Link></li>
                            <li><Link href="/services/opc-registration" className="hover:text-white">One Person Company (OPC) Registration</Link></li>
                            <li><Link href="/services/startup-registration" className="hover:text-white">Start-up India Registration</Link></li>
                            <li><Link href="/services/llp-registration" className="hover:text-white">Limited Liability Partnership (LLP) Registration</Link></li>
                            <li><Link href="/services/partnership-registration" className="hover:text-white">Partnership Firm Registration</Link></li>
                        </ul>

                        <h3 className="text-main font-semibold text-[16px] mb-3 mt-7">
                            Loans
                        </h3>
                        <ul className="space-y-1.5 text-sm text-gray-400">
                            <li><Link href="/services/project-loan" className="hover:text-white">Project Loan</Link></li>
                            <li><Link href="/services/machine-loan" className="hover:text-white">Machine Loan</Link></li>
                            <li><Link href="/services/working-capital" className="hover:text-white">Working Capital Loan (OD / CC)</Link></li>
                            <li><Link href="/services/msme-loan" className="hover:text-white">MSME Loan</Link></li>
                            <li><Link href="/services/secured-loan" className="hover:text-white">Secured Loan</Link></li>
                            <li><Link href="/services/unsecured-loan" className="hover:text-white">Unsecured Loan</Link></li>
                        </ul>
                    </div>

                    {/* 3 — SERVICES COLUMN 2 */}
                    <div>
                        <h3 className="text-main font-semibold text-[16px] mb-3">
                            Government Subsidy
                        </h3>
                        <ul className="space-y-1.5 text-sm text-gray-400">
                            <li><Link href="/services/msme-subsidy" className="hover:text-white">Government subsidy to MSME</Link></li>
                            <li><Link href="/services/large-thrust-subsidy" className="hover:text-white">Government subsidy to Large / Thrust Sector</Link></li>
                            <li><Link href="/services/mega-subsidy" className="hover:text-white">Government subsidy to Mega Sector</Link></li>
                            <li><Link href="/services/it-subsidy" className="hover:text-white">Government subsidy to IT / ITeS</Link></li>
                            <li><Link href="/services/logistic-subsidy" className="hover:text-white">Government subsidy to Logistic Park</Link></li>
                            <li><Link href="/services/gcc-subsidy" className="hover:text-white">Government subsidy to GCC</Link></li>
                        </ul>

                        <h3 className="text-main font-semibold text-[16px] mb-3 mt-7">
                            Tax Services
                        </h3>
                        <ul className="space-y-1.5 text-sm text-gray-400">
                            <li><Link href="/services/gst-service" className="hover:text-white">GST Registration, Return Filing & Litigation</Link></li>
                            <li><Link href="/services/itr-service" className="hover:text-white">ITR Filing, TDS & Litigation</Link></li>
                        </ul>

                        <h3 className="text-main font-semibold text-[16px] mb-3 mt-7">
                            Audit Services
                        </h3>
                        <ul className="space-y-1.5 text-sm text-gray-400">
                            <li><Link href="/services/statutory-service" className="hover:text-white">Statutory Audit</Link></li>
                            <li><Link href="/services/tax-audit" className="hover:text-white">Tax Audit</Link></li>
                            <li><Link href="/services/internal-audit" className="hover:text-white">Internal Audit</Link></li>
                            <li><Link href="/services/bank-audit" className="hover:text-white">Bank Audit</Link></li>
                        </ul>
                    </div>

                    {/* 4 — CONTACT */}
                    <div>
                        <h3 className="text-main font-semibold text-[16px] mb-3">
                            Contact Us
                        </h3>

                        <div className="space-y-3 text-sm text-gray-400">
                            <p className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-1 text-main" />
                                Ahmedabad, Gujarat
                            </p>

                            <a href="tel:+919510990170" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                                <div className="p-1 bg-main/20 rounded-full group-hover:bg-main/30 transition-colors duration-300">
                                    <Phone className="h-4 w-4 text-main group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="group-hover:text-white transition-colors duration-300">+91 95109 90170</span>
                            </a>

                            <a href="mailto:info@pvassociates.in" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                                <div className="p-1 bg-main/20 rounded-full group-hover:bg-main/30 transition-colors duration-300">
                                    <Mail className="h-4 w-4 text-main group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="group-hover:text-white transition-colors duration-300">info@pvassociates.in</span>
                            </a>
                        </div>

                        <Link href="/contact" className="block mt-6">
                            <Button className="w-full bg-main text-white rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
                            Talk To Expert
                        </Button>
                        </Link>

                        <h3 className="text-main font-semibold text-[16px] mb-3 mt-8">
                            IPO Advisory
                        </h3>
                        <p className="text-sm text-gray-400">
                            <Link href="/services/ipo-service" className="hover:text-white">
                                Expert IPO Advisory & Support for SME & Mainboard Listings.
                            </Link>
                        </p>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="mt-12 border-t border-gray-800 pt-5 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Patel & Vaghasiya Chartered Accountants.
                    All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
