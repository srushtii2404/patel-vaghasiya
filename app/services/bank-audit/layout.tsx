import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Bank Audit Services | Patel & Vaghasiya CA",
  description:
    "Professional bank audit services including statutory, concurrent, and forensic audits.",

  robots: {
    index: false,
    follow: true,
  },

  alternates: {
    canonical: "https://www.pvassociates.in/services/bank-audit",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

