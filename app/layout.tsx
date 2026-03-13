import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppInstagramFloat from "@/components/WhatsAppInstagramFloat";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pvassociates.in"),

  title: {
    default:
      "Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",
    template: "%s | Patel & Vaghasiya Chartered Accountants",
  },

  description:
    "Looking for the best CA in Nikol Ahmedabad? Patel & Vaghasiya Chartered Accountants offer GST, Taxation, Audit, Company Registration, Loans and Subsidy consulting services in Nikol, Ahmedabad, Gujarat.",

  keywords: [
    "CA in Nikol Ahmedabad",
    "Best CA in Nikol",
    "Chartered Accountant in Nikol",
    "CA firm in Nikol Gujarat",
    "GST consultant in Nikol",
    "Company registration in Nikol Ahmedabad",
    "Tax consultant in Nikol Ahmedabad",
  ],

  alternates: {
    canonical: "https://www.pvassociates.in/",
  },

  openGraph: {
    title:
      "Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",
    description:
      "Patel & Vaghasiya Chartered Accountants provide GST, Taxation, Audit, Company Registration and Financial advisory services in Nikol, Ahmedabad.",

    url: "https://www.pvassociates.in/",
    siteName: "Patel & Vaghasiya Chartered Accountants",

    images: [
      {
        url: "https://www.pvassociates.in/assets/logo.png",
        width: 800,
        height: 800,
        alt: "Patel & Vaghasiya Chartered Accountants",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",
    description:
      "Expert Chartered Accountant services in Nikol Ahmedabad including GST, Audit, Taxation and Company Registration.",
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
        {/* Local Business Structured Data */}
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
                "Chartered Accountant firm in Nikol Ahmedabad providing GST consulting, taxation, audit, company registration and financial advisory services.",

              telephone: "+91 9510990170",

              priceRange: "$$",

              areaServed: {
                "@type": "City",
                name: "Ahmedabad",
              },

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