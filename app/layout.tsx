import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppInstagramFloat from "@/components/WhatsAppInstagramFloat";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pvassociates.in"),

  title: {
    default: "Best CA in Ahmedabad | Top CA in Ahmedabad",
    template: "%s | Patel & Vaghasiya Chartered Accountants",
  },

  description:
    "Patel & Vaghasiya Chartered Accountants is a leading CA firm in Ahmedabad & Nikol providing GST registration, GST return filing, income tax return filing, company registration, ROC filing, audit services, project loan consulting, MSME loan consulting and Gujarat government subsidy consulting across Ahmedabad, Gujarat.",

  keywords: [
    "Best CA in Ahmedabad",
    "Top CA in Ahmedabad",
    "Best Chartered Accountant in Ahmedabad",
    "CA firm in Ahmedabad",
    "Best CA in Nikol Ahmedabad",
    "Chartered Accountant in Nikol",

    "Company registration in Ahmedabad",
    "Private limited company registration Ahmedabad",
    "Startup company registration Ahmedabad",
    "LLP registration in Ahmedabad",
    "OPC company registration Ahmedabad",
    "Online company registration Ahmedabad",
    "Company incorporation services Ahmedabad",
    "Business registration consultant Ahmedabad",

    "GST registration consultant Ahmedabad",
    "GST registration in Ahmedabad",
    "GST return filing services Ahmedabad",
    "GST consultant Ahmedabad",
    "GST filing CA in Ahmedabad",
    "GST audit consultant Ahmedabad",
    "GST compliance services Ahmedabad",
    "Online GST registration Ahmedabad",

    "Income tax return filing Ahmedabad",
    "ITR filing consultant Ahmedabad",
    "Income tax consultant Ahmedabad",
    "Income tax notice reply consultant Ahmedabad",
    "Income tax litigation consultant Ahmedabad",

    "TDS return filing services Ahmedabad",
    "TDS consultant Ahmedabad",
    "TDS notice reply consultant Ahmedabad",

    "Project loan consultant Ahmedabad",
    "Working capital loan consultant Ahmedabad",
    "Business loan consultant Ahmedabad",
    "Project finance consultant Ahmedabad",
    "MSME loan consultant Ahmedabad",
    "Loan project report consultant Ahmedabad",
    "CGTMSE loan consultant Ahmedabad",

    "Gujarat government subsidy consultant Ahmedabad",
    "MSME subsidy consultant Gujarat",
    "Capital subsidy consultant Gujarat",
    "Interest subsidy consultant Gujarat",
    "Industrial subsidy consultant Gujarat",

    "ROC filing services Ahmedabad",
    "ROC compliance consultant Ahmedabad",
    "MCA filing consultant Ahmedabad",
    "Company annual filing consultant Ahmedabad",
    "LLP compliance consultant Ahmedabad",

    "Company audit services Ahmedabad",
    "Statutory audit consultant Ahmedabad",
    "Tax audit consultant Ahmedabad",
    "Internal audit consultant Ahmedabad",
    "Audit firm in Ahmedabad",
  ],

  alternates: {
    canonical: "https://www.pvassociates.in/",
  },

  openGraph: {
    title:
      "Best CA in Ahmedabad | Top CA in Ahmedabad | Patel & Vaghasiya Chartered Accountants",

    description:
      "Leading Chartered Accountant firm in Ahmedabad & Nikol offering GST, Income Tax, Company Registration, Loan Consulting, Audit and Government Subsidy services across Gujarat.",

    url: "https://www.pvassociates.in/",
    siteName: "Patel & Vaghasiya Chartered Accountants",

    images: [
      {
        url: "https://www.pvassociates.in/assets/logo.png",
        width: 800,
        height: 800,
        alt: "Patel & Vaghasiya Chartered Accountants - Best CA in Ahmedabad",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best CA in Ahmedabad | Top CA in Ahmedabad | Patel & Vaghasiya Chartered Accountants",
    description:
      "Expert CA services in Ahmedabad including GST filing, ITR filing, Audit, Company Registration, Loan Consulting and Financial Advisory.",
    images: ["https://www.pvassociates.in/assets/logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Patel & Vaghasiya Chartered Accountants",
              url: "https://www.pvassociates.in/",
              logo: "https://www.pvassociates.in/assets/logo.png",
              image: "https://www.pvassociates.in/assets/logo.png",

              description:
                "Patel & Vaghasiya Chartered Accountants is a trusted CA firm in Ahmedabad & Nikol providing GST consulting, income tax services, company registration, audit, loan consulting and government subsidy advisory.",

              telephone: "+91 9510990170",

              priceRange: "$$",

              areaServed: [
                { "@type": "City", name: "Ahmedabad" },
                { "@type": "City", name: "Nikol" },
                { "@type": "State", name: "Gujarat" },
              ],

              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "401, Sunrise Business Center, Nr. Gurukul Circle",
                addressLocality: "Nikol",
                addressRegion: "Gujarat",
                postalCode: "382350",
                addressCountry: "IN",
              },

              openingHours: "Mo-Fr 09:00-18:00",

              sameAs: [
                "https://www.instagram.com/patel_vaghasiya_ca/",
                "https://www.facebook.com/share/1aUtwp3UPy/",
                "https://www.linkedin.com/in/ca-vishal-vaghasiya-67a89177/",
              ],
            }),
          }}
        />
      </head>

      <body className="font-poppins antialiased">
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppInstagramFloat />
      </body>
    </html>
  );
}