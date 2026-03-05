import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppInstagramFloat from "@/components/WhatsAppInstagramFloat";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Patel & Vaghasiya | Chartered Accountants",
  description:
    "Expert services in Company Registration, Loans, Subsidies, Taxation, Audit & more in Ahmedabad, Gujarat",
  keywords: [
    "chartered accountant ahmedabad",
    "CA near me",
    "best CA in Ahmedabad",
    "company registration",
    "GST consultant",
  ],

  metadataBase: new URL("https://pvassociates.in"),

  openGraph: {
    title: "Patel & Vaghasiya | Chartered Accountants",
    description:
      "Expert services in Company Registration, Loans, Subsidies, Taxation, Audit & more in Ahmedabad, Gujarat",
    url: "https://pvassociates.in",
    siteName: "Patel & Vaghasiya",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 800,
        alt: "Patel & Vaghasiya Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Patel & Vaghasiya | Chartered Accountants",
    description:
      "Expert services in Company Registration, Loans, Subsidies, Taxation, Audit & more in Ahmedabad, Gujarat",
    images: ["/assets/logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  generator: "Patel & Vaghasiya Website" as unknown as string,
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
              "@type": "LocalBusiness",
              name: "Patel & Vaghasiya",
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
                "https://www.facebook.com/",
                "https://www.instagram.com/patel_vaghasiya_ca/",
                "https://www.linkedin.com/",
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