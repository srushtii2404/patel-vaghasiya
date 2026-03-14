import { getPosts } from "@/lib/sanity";
import type { Metadata } from "next";

import HomeHero from "./HomeHero";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Testimonials from "./Testimonials";
import LatestBlogs from "./LatestBlogs";

export const metadata: Metadata = {
  title:
    "Best CA in Ahmedabad | Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",

  description:
    "Looking for the best CA in Nikol Ahmedabad? Patel & Vaghasiya Chartered Accountants provide GST filing, income tax return, audit, company registration, loans and subsidy consultancy services in Ahmedabad.",

  keywords: [
    "Best CA in Ahmedabad",
    "Best CA in Nikol Ahmedabad",
    "CA in Nikol Ahmedabad",
    "Chartered Accountant in Nikol",
    "CA firm in Nikol Ahmedabad",
    "GST consultant in Nikol",
    "Income tax consultant Nikol Ahmedabad",
    "Company registration in Nikol Ahmedabad",
  ],

  alternates: {
    canonical: "https://www.pvassociates.in/",
  },

  openGraph: {
    title:
      "Best CA in Ahmedabad | Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",

    description:
      "Patel & Vaghasiya Chartered Accountants offer GST, Taxation, Audit, Company Registration and financial consultancy services in Nikol Ahmedabad.",

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
      "Best CA in Ahmedabad | Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",
    description:
      "Expert CA services in Nikol Ahmedabad including GST filing, income tax return, company registration and audit services.",
    images: ["https://www.pvassociates.in/assets/logo.png"],
  },
};

const Page = async () => {
  const posts = await getPosts();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Patel & Vaghasiya Chartered Accountants",
              url: "https://www.pvassociates.in/",
              logo: "https://www.pvassociates.in/assets/logo.png",
              sameAs: [
                "https://www.linkedin.com/",
                "https://www.facebook.com/",
                "https://www.instagram.com/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Patel & Vaghasiya Chartered Accountants",
              image: "https://www.pvassociates.in/assets/logo.png",
              "@id": "https://www.pvassociates.in/",
              url: "https://www.pvassociates.in/",
              telephone: "+91XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Nikol",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "382350",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "City",
                name: "Ahmedabad",
              },
              priceRange: "₹₹",
            },
          ]),
        }}
      />

      {/* SEO Hidden Content (Google ranking boost) */}
      <h1 className="hidden">
        Best CA in Ahmedabad – Patel & Vaghasiya Chartered Accountants
      </h1>

      <p className="hidden">
        Looking for the <a href="https://www.pvassociates.in/">best CA in Nikol
        Ahmedabad</a>? Patel & Vaghasiya Chartered Accountants provides expert
        services in GST filing, income tax return, audit, company registration,
        loan consultancy and subsidy consultancy services in Ahmedabad Gujarat.
      </p>

      <HomeHero />
      <Home2 />
      <Home3 />
      <Testimonials />
      <LatestBlogs posts={posts} />
    </>
  );
};

export default Page;