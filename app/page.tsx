import { getPosts } from "@/lib/sanity";
import type { Metadata } from "next";

import HomeHero from "./HomeHero";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Testimonials from "./Testimonials";
import LatestBlogs from "./LatestBlogs";

export const metadata: Metadata = {
  title:
    "Best CA in Ahmedabad | Top CA in Ahmedabad | Patel & Vaghasiya Chartered Accountants",

  description:
    "Patel & Vaghasiya Chartered Accountants – Best CA firm in Ahmedabad. Expert services in GST filing, Income Tax Return, Audit, Company Registration, Loan & Subsidy consultancy across Ahmedabad & Gujarat.",

  keywords: [
    "Best CA in Ahmedabad",
    "Top CA in Ahmedabad",
    "Best Chartered Accountant in Ahmedabad",
    "CA firm in Ahmedabad",
    "CA in Ahmedabad Gujarat",
    "Best CA in Nikol Ahmedabad",
    "GST consultant in Ahmedabad",
    "Income tax consultant Ahmedabad",
    "Company registration Ahmedabad",
    "Tax consultant in Ahmedabad",
  ],

  alternates: {
    canonical: "https://www.pvassociates.in/",
  },

  openGraph: {
    title:
      "Best CA in Ahmedabad | Top CA in Ahmedabad | Patel & Vaghasiya Chartered Accountants",

    description:
      "Trusted CA firm in Ahmedabad offering GST, Income Tax, Audit, Company Registration, Loan & Subsidy services. Serving Nikol & entire Ahmedabad Gujarat.",

    url: "https://www.pvassociates.in/",
    siteName: "Patel & Vaghasiya Chartered Accountants",

    images: [
      {
        url: "https://www.pvassociates.in/assets/logo.png",
        width: 1200,
        height: 630,
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
      "Expert Chartered Accountant services in Ahmedabad: GST filing, ITR, Audit, Company Registration & more by Patel & Vaghasiya.",
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
                "https://www.instagram.com/patel_vaghasiya_ca/",
                "https://www.facebook.com/share/1aUtwp3UPy/",
                "https://www.linkedin.com/in/ca-vishal-vaghasiya-67a89177/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Patel & Vaghasiya Chartered Accountants",
              image: "https://www.pvassociates.in/assets/logo.png",
              "@id": "https://www.pvassociates.in/",
              url: "https://www.pvassociates.in/",
              telephone: "+91 9510990170",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "401, Sunrise Business Center, Nr. Gurukul Circle",
                addressLocality: "Nikol",
                addressRegion: "Gujarat",
                postalCode: "382350",
                addressCountry: "IN",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Ahmedabad",
                },
                {
                  "@type": "City",
                  name: "Nikol",
                },
                {
                  "@type": "State",
                  name: "Gujarat",
                },
              ],
              priceRange: "₹₹",
              openingHours: "Mo-Fr 09:00-18:00",
            },
          ]),
        }}
      />

      {/* SEO Hidden Content */}
      <h1 className="hidden">
        Best CA in Ahmedabad – Patel & Vaghasiya Chartered Accountants
      </h1>

      <p className="hidden">
        Looking for the{" "}
        <a href="https://www.pvassociates.in/">best CA in Ahmedabad</a>? Patel &
        Vaghasiya Chartered Accountants provides expert services in GST filing,
        income tax return, audit, company registration, loan consultancy and
        subsidy consultancy services in Ahmedabad Gujarat. Also serving as top
        CA in Nikol Ahmedabad.
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