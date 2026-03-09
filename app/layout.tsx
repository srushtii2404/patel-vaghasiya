import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppInstagramFloat from "@/components/WhatsAppInstagramFloat";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",
  description:
    "Looking for the best CA in Nikol Ahmedabad? Patel & Vaghasiya offers expert services in Company Registration, GST, Taxation, Audit, Loans & Subsidies in Nikol, Ahmedabad, Gujarat.",

  keywords: [
    "CA in Nikol",
    "Best CA in Nikol Ahmedabad",
    "Chartered Accountant in Nikol",
    "CA firm in Nikol Gujarat",
    "GST consultant in Nikol",
    "Company registration in Nikol",
    "Tax consultant in Nikol Ahmedabad",
  ],

  metadataBase: new URL("https://pvassociates.in"),

  alternates: {
    canonical: "https://pvassociates.in/",
  },

  openGraph: {
    title:
      "Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",
    description:
      "Top Chartered Accountant in Nikol offering GST, Taxation, Audit & Company Registration services in Ahmedabad.",
    url: "https://pvassociates.in",
    siteName: "Patel & Vaghasiya",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 800,
        alt: "Best CA in Nikol Ahmedabad",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",
    description:
      "Expert CA services in Nikol Ahmedabad for GST, Taxation, Audit & Company Registration.",
    images: ["/assets/logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Patel & Vaghasiya - Chartered Accountant in Nikol Ahmedabad",
              description:
                "Chartered accountants offering company registration, loans, subsidies, taxation, audit and advisory services in Ahmedabad",
              url: "https://pvassociates.in",
              telephone: "+91 95109 90170",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "401, Sunrise Business Center, Nr. Gurukul Circle",
                addressLocality: "Nikol",
                addressRegion: "Gujarat",
                postalCode: "382350",
                addressCountry: "IN",
              },
              openingHours: ["Mo-Fr 09:00-18:00"],
              sameAs: [
                "https://www.instagram.com/patel_vaghasiya_ca/",
                "https://www.facebook.com/share/1aUtwp3UPy/",
                "https://www.linkedin.com/in/ca-vishal-vaghasiya-67a89177/",
                "https://www.justdial.com/jd-business?source=2&wap=2&wkwebview=1&rootvc=1&city=Ahmedabad&area=Nikol%20Gam&fullpage=1&nh=1&hide_header=1&nd=1&ln=en&ver=1.0&docid=079PXX79.XX79.230609114404.B4X5",
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