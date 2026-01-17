"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function chunkArray<T>(arr: T[], n: number): T[][] {
  const cols: T[][] = Array.from({ length: n }, () => [] as T[]);
  arr.forEach((item, idx) => {
    cols[idx % n].push(item);
  });
  return cols;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const navItems = [
    {
      name: "Registration",
      items: [
        { name: "Private Limited Company Registration", link: "/services/company-registration" },
        { name: "Limited Liability Partnership (LLP) Registration", link: "/services/llp-registration" },
        { name: "One Person Company (OPC) Registration", link: "/services/opc-registration" },
        { name: "Partnership Firm Registration", link: "/services/partnership-registration" },
        { name: "Start-up India Registration", link: "/services/startup-india-registration" },
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
      items: [
        { name: "IPO Advisory & Support", link: "/services/ipo-service" }
      ]
    },
    { name: "About", link: "/about", items: null },
    { name: "Blogs", link: "/blog", items: null },
  ];

  const panelVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 6, scale: 0.98 },
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Logo"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800 relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.items && setHovered(item.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* MAIN MENU BUTTON */}
              {item.link ? (
                <Link
                  href={item.link}
                  className="relative px-1 py-1 transition-colors hover:text-mainDark"
                >
                  {item.name}

                  {/* UNDERLINE ANIMATION */}
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-0
                      bg-main transition-all duration-300
                      group-hover:w-full
                    "
                  ></span>
                </Link>
              ) : (
                <button
                  aria-haspopup={!!item.items}
                  aria-expanded={hovered === item.name}
                  className="relative px-1 py-1 transition-colors"
                >
                  {item.name}

                  {/* UNDERLINE ANIMATION */}
                  <span
                    className="
                      absolute left-0 -bottom-1 h-[2px] w-0
                      bg-main transition-all duration-300
                      group-hover:w-full
                    "
                  ></span>
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
                      absolute left-2/3 -translate-x-1/2 top-full mt-4
                      w-[calc(100vw-4rem)] max-w-[800px]
                      bg-white/95 backdrop-blur-md border border-gray-100
                      rounded-xl shadow-2xl p-6 z-50
                    "
                    onMouseEnter={() => setHovered(item.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <p className="text-sm font-semibold text-mainDark mb-4">
                      {item.name} Services
                    </p>

                    {/* Submenu grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {chunkArray(item.items, 2).map((col, ci) => (
                        <div key={ci} className="space-y-2">
                          {col.map((sub, si) => (
                            <Link
                              key={si}
                              href={sub.link}
                              className="flex items-center justify-between px-3 py-2 rounded-md text-sm text-gray-800 hover:text-mainDark hover:bg-gray-50 transition-all cursor-pointer group"
                            >
                              <span>{typeof sub === "string" ? sub : sub.name}</span>
                              <svg
                                className="h-4 w-4 text-gray-400 group-hover:text-mainDark transition-colors"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="mt-5 border-t border-gray-100 pt-4 flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        Need help? Talk to our expert team.
                      </p>
                      <Link href="/contact">
                      <Button
                        variant="outline"
                          className="bg-main text-white rounded-lg hover:scale-105 transition-transform"
                      >
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

        {/* Desktop CTA */}
        <Link href="/contact">
        <Button
          variant="outline"
            className="hidden md:flex bg-main text-white rounded-lg px-5 py-2 hover:scale-105 transition-transform"
        >
          Talk To Expert
        </Button>
        </Link>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="p-6 w-72">
              <nav className="flex flex-col gap-4">
                {navItems.map((it) => (
                  <div key={it.name}>
                    {it.link ? (
                      <Link
                        href={it.link}
                        className="font-semibold hover:text-mainDark transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {it.name}
                      </Link>
                    ) : (
                      <p className="font-semibold">{it.name}</p>
                    )}
                    {it.items && (
                      <div className="mt-2 ml-3 space-y-2 text-gray-600">
                        {it.items.map((s, i) => (
                          <Link
                            key={i}
                            href={s.link}
                            className="block text-sm hover:text-mainDark transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            {typeof s === "string" ? s : s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <Link href="/contact" onClick={() => setOpen(false)}>
                  <Button className="mt-6 border border-mainDark text-mainDark bg-transparent rounded-lg hover:scale-105 transition-transform">
                  Talk To Expert
                </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </header>
  );
}
