"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";

function chunkArray<T>(arr: T[], n: number): T[][] {
  const cols: T[][] = Array.from({ length: n }, () => [] as T[]);
  arr.forEach((item, idx) => cols[idx % n].push(item));
  return cols;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const navItems = [
    {
      name: "Registration",
      items: [
        { name: "Private Limited Company Registration", link: "/services/company-registration" },
        { name: "Limited Liability Partnership (LLP) Registration", link: "/services/llp-registration" },
        { name: "One Person Company (OPC) Registration", link: "/services/opc-registration" },
        { name: "Partnership Firm Registration", link: "/services/partnership-registration" },
        { name: "Start-up India Registration", link: "/services/startup-registration" },
      ],
    },
    {
      name: "Loans",
      items: [
        { name: "Project Loan", link: "/services/project-loan" },
        { name: "Machine Loan", link: "/services/machine-loan" },
        { name: "Working Capital Loan (OD / CC)", link: "/services/working-capital" },
        { name: "MSME Loan", link: "/services/msme-loan" },
        { name: "Secured Loan", link: "/services/secured-loan" },
        { name: "Unsecured Loan", link: "/services/unsecured-loan" },
      ],
    },
    {
      name: "Subsidy",
      items: [
        { name: "Government subsidy to MSME", link: "/services/msme-subsidy" },
        { name: "Government subsidy to Large or Thrust Sector", link: "/services/large-thrust-subsidy" },
        { name: "Government subsidy to Mega sector", link: "/services/mega-subsidy" },
        { name: "Government subsidy to IT / ITeS", link: "/services/it-subsidy" },
        { name: "Government subsidy to Logistic Park", link: "/services/logistic-subsidy" },
        { name: "Government subsidy to GCC", link: "/services/gcc-subsidy" },
      ],
    },
    {
      name: "Tax",
      items: [
        { name: "GST Registration, Return Filing & Litigation", link: "/services/gst-service" },
        { name: "ITR Filing, TDS & Litigation", link: "/services/itr-service" },
      ],
    },
    {
      name: "Audit",
      items: [
        { name: "Statutory Audit", link: "/services/statutory-service" },
        { name: "Tax Audit", link: "/services/tax-audit" },
        { name: "Internal Audit", link: "/services/internal-audit" },
        { name: "Bank Audit", link: "/services/bank-audit" },
      ],
    },
    {
      name: "IPO",
      items: [{ name: "IPO Advisory & Support", link: "/services/ipo-service" }],
    },
    { name: "About", link: "/about", items: null },
    { name: "Blogs", link: "/blog", items: null },
  ];

  const panelVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 6, scale: 0.98 },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 z-50">
          <Image
            src="/assets/logo.png"
            alt="Patel & Vaghasiya Logo"
            width={46}
            height={46}
            priority
            className="object-contain"
          />
          <div className="leading-tight">
            <span className="text-lg font-semibold">Patel & Vaghasiya</span>
            <p className="text-[11px] text-gray-600 tracking-wide">
              Chartered Accountants
            </p>
          </div>
        </Link>

        {/* Desktop Navigation - Visible only on lg screens (≥1024px) */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-800 relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.items && setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.link ? (
                <Link
                  href={item.link}
                  className="relative px-1 py-1 transition-colors hover:text-mainDark"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-main transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <button className="relative px-1 py-1 transition-colors hover:text-mainDark">
                  {item.name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-main transition-all duration-300 group-hover:w-full"></span>
                </button>
              )}

              {/* Mega Menu */}
              <AnimatePresence>
                {item.items && hovered === item.name && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={panelVariants}
                    transition={{ duration: 0.18 }}
                    className="
                      absolute left-1/2 -translate-x-1/2 top-full mt-4
                      w-[90vw] max-w-[780px]
                      bg-white/95 backdrop-blur-md border border-gray-100
                      rounded-xl shadow-2xl p-8 z-50
                    "
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <p className="text-base font-semibold text-mainDark mb-6">
                      {item.name} Services
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {item.items.map((sub, si) => (
                        <Link
                          key={si}
                          href={sub.link}
                          className="flex items-center justify-between px-4 py-3 rounded-lg text-sm text-gray-800 hover:text-mainDark hover:bg-gray-50 transition-all"
                        >
                          <span>{sub.name}</span>
                          <svg className="h-4 w-4 text-gray-400 group-hover:text-mainDark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-sm text-gray-600">Need help? Talk to our expert team.</p>
                      <Link href="/contact">
                        <Button className="bg-main text-white hover:bg-mainDark transition">
                          Talk To Expert
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Desktop CTA - Visible on lg and above */}
        <Link href="/contact" className="hidden lg:block">
          <Button className="bg-main text-white hover:bg-mainDark transition">
            Talk To Expert
          </Button>
        </Link>

        {/* Mobile Menu - Visible below lg (i.e. <1024px) */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] max-w-sm p-0 bg-white">
              <VisuallyHidden asChild>
                <DialogTitle>Mobile Navigation Menu</DialogTitle>
              </VisuallyHidden>

              <div className="flex flex-col h-full">
                {/* Logo Header */}
                <div className="flex items-center gap-3 p-6 border-b border-gray-100">
                  <Image src="/assets/logo.png" alt="Logo" width={48} height={48} className="object-contain" />
                  <div className="leading-tight">
                    <span className="text-base font-semibold">Patel & Vaghasiya</span>
                    <p className="text-xs text-gray-600">Chartered Accountants</p>
                  </div>
                </div>

                {/* Scrollable Nav */}
                <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 px-6 py-4">
                  {navItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 pb-2 mb-2 last:mb-0 last:border-none">
                      {item.link ? (
                        <Link
                          href={item.link}
                          className="block py-3 text-lg font-medium hover:text-main transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          className="flex items-center justify-between w-full py-3 text-lg font-medium hover:text-main transition-colors"
                          onClick={() => setExpanded(expanded === item.name ? null : item.name)}
                        >
                          <span>{item.name}</span>
                          {item.items && (
                            expanded === item.name ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )
                          )}
                        </button>
                      )}

                      <AnimatePresence>
                        {item.items && expanded === item.name && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={accordionVariants}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="py-3 space-y-4 pl-4">
                              {item.items.map((sub, i) => (
                                <Link
                                  key={i}
                                  href={sub.link}
                                  className="block text-base text-gray-700 hover:text-main transition-colors py-1"
                                  onClick={() => setOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>

                {/* CTA */}
                <div className="p-6 border-t border-gray-200 mt-auto">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <Button className="w-full bg-main hover:bg-mainDark text-white py-6 text-lg font-medium">
                      Talk To Expert
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}