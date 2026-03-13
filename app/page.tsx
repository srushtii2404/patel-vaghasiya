import { getPosts } from "@/lib/sanity";
import type { Metadata } from "next";

import HomeHero from "./HomeHero";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Testimonials from "./Testimonials";
import LatestBlogs from "./LatestBlogs";

export const metadata: Metadata = {
  title:
    "Best CA in Ahmedabad | Patel & Vaghasiya Chartered Accountants in Nikol",

  description:
    "Patel & Vaghasiya Chartered Accountants is a trusted CA firm in Nikol Ahmedabad offering GST filing, income tax return, company registration, audit, loan and subsidy consultancy services across Gujarat.",

  keywords: [
    "CA in Ahmedabad",
    "Best CA in Ahmedabad",
    "Chartered Accountant in Ahmedabad",
    "CA firm in Nikol Ahmedabad",
    "GST consultant Ahmedabad",
    "Income tax consultant Ahmedabad",
    "Company registration Ahmedabad",
    "Tax consultant Ahmedabad",
  ],

  alternates: {
    canonical: "https://www.pvassociates.in/",
  },

  openGraph: {
    title:
      "Best CA in Ahmedabad | Patel & Vaghasiya Chartered Accountants in Nikol",

    description:
      "Top Chartered Accountant firm in Ahmedabad offering GST, Income Tax, Company Registration, Audit and Loan/Subsidy consultancy services.",

    url: "https://www.pvassociates.in/",

    siteName: "Patel & Vaghasiya Chartered Accountants",

    images: [
      {
        url: "https://www.pvassociates.in/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Patel & Vaghasiya Chartered Accountants",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Best CA in Ahmedabad | Patel & Vaghasiya Chartered Accountants in Nikol",

    description:
      "Professional CA services in Ahmedabad including GST filing, income tax return, company registration, audit and financial consultancy.",

    images: ["https://www.pvassociates.in/assets/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const Page = async () => {
  const posts = await getPosts();

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Patel & Vaghasiya Chartered Accountants",
              url: "https://www.pvassociates.in",
              logo: "https://www.pvassociates.in/assets/logo.png",
              sameAs: [
                "https://www.linkedin.com/",
                "https://www.facebook.com/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Patel & Vaghasiya Chartered Accountants",
              image: "https://www.pvassociates.in/assets/logo.png",
              "@id": "https://www.pvassociates.in",
              url: "https://www.pvassociates.in",
              telephone: "+91XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nikol",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "382350",
                addressCountry: "IN",
              },
              areaServed: "Ahmedabad",
              priceRange: "₹₹",
            },
          ]),
        }}
      />

      <HomeHero />
      <Home2 />
      <Home3 />
      <Testimonials />
      <LatestBlogs posts={posts} />
    </>
  );
};

export default Page;