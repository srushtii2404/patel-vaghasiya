import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Bank Audit Services in Ahmedabad | Patel & Vaghasiya CA",
  description:
    "Ensure accuracy, compliance & trust with our expert Bank Audit Services — statutory audits, concurrent audits, IS audits, credit & forensic audits for banks and financial institutions.",
  alternates: {
    canonical: "https://pvassociates.in/services/bank-audit",
  },
  openGraph: {
    title: "Bank Audit Services in Ahmedabad | Patel & Vaghasiya CA",
    description:
      "Ensure accuracy, compliance & trust with our expert Bank Audit Services — statutory audits, concurrent audits, IS audits, credit & forensic audits for banks and financial institutions.",
    url: "https://pvassociates.in/services/bank-audit",
    siteName: "Patel & Vaghasiya",
    type: "website",
    images: [
      {
        url: "/assets/bank-audit-banner.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank Audit Services in Ahmedabad | Patel & Vaghasiya CA",
    description:
      "Ensure accuracy, compliance & trust with our expert Bank Audit Services — statutory audits, concurrent audits, IS audits, credit & forensic audits for banks and financial institutions.",
    images: ["/assets/bank-audit-banner.jpg"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

