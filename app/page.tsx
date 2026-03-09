import { getPosts } from "@/lib/sanity";
import type { Metadata } from "next";

import HomeHero from "./HomeHero";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Testimonials from "./Testimonials";
import LatestBlogs from "./LatestBlogs";

export const metadata: Metadata = {
  title: "Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",
  description:
    "Patel & Vaghasiya Chartered Accountants in Nikol Ahmedabad providing GST filing, income tax return, company registration, audit, loan and subsidy consultancy services across Gujarat.",

  keywords: [
    "CA in Nikol Ahmedabad",
    "Best CA in Ahmedabad",
    "Chartered Accountant in Nikol",
    "GST consultant Ahmedabad",
    "Income tax consultant Ahmedabad",
    "Company registration CA Ahmedabad",
    "Audit firm in Ahmedabad",
    "Tax consultant in Nikol",
  ],

  alternates: {
    canonical: "https://pvassociates.in/",
  },

  openGraph: {
    title: "Best CA in Nikol Ahmedabad | Patel & Vaghasiya",
    description:
      "Expert Chartered Accountants offering GST, Income Tax, Company Registration, Audit and Loan/Subsidy consultancy services in Ahmedabad.",
    url: "https://pvassociates.in/",
    siteName: "Patel & Vaghasiya Associates",
    images: [
      {
        url: "https://pvassociates.in/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best CA in Nikol Ahmedabad",
    description:
      "GST, Income Tax, Company Registration and Audit services by Patel & Vaghasiya Chartered Accountants.",
    images: ["https://pvassociates.in/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.png",
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
              url: "https://pvassociates.in",
              logo: "https://pvassociates.in/logo.png",
              sameAs: [
                "https://www.linkedin.com/",
                "https://www.facebook.com/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Patel & Vaghasiya Chartered Accountants",
              image: "https://pvassociates.in/logo.png",
              "@id": "https://pvassociates.in",
              url: "https://pvassociates.in",
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