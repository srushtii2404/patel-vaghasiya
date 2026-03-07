import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Internal Audit Services in Ahmedabad | Patel & Vaghasiya CA",
  description:
    "Internal Audit services to strengthen controls, reduce risk, enhance efficiency & ensure compliance.",
  alternates: {
    canonical: "https://pvassociates.in/services/internal-audit",
  },
  openGraph: {
    title: "Internal Audit Services in Ahmedabad | Patel & Vaghasiya CA",
    description:
      "Internal Audit services to strengthen controls, reduce risk, enhance efficiency & ensure compliance.",
    url: "https://pvassociates.in/services/internal-audit",
    siteName: "Patel & Vaghasiya",
    type: "website",
    images: [{ url: "/assets/internal-audit-banner.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Internal Audit Services in Ahmedabad | Patel & Vaghasiya CA",
    description:
      "Internal Audit services to strengthen controls, reduce risk, enhance efficiency & ensure compliance.",
    images: ["/assets/internal-audit-banner.jpg"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

