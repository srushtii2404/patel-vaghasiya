import { getPosts } from '@/lib/sanity'
import type { Metadata } from 'next'
import HomeHero from "./HomeHero";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Testimonials from "./Testimonials";
import LatestBlogs from "./LatestBlogs";

export const metadata: Metadata = {
  title: "Best CA in Nikol Ahmedabad | Patel & Vaghasiya Chartered Accountants",
  description:
    "Looking for the best CA in Nikol Ahmedabad? Patel & Vaghasiya Chartered Accountants provide GST, income tax, company registration, audit, loans and subsidy advisory across Gujarat.",
  keywords: [
    "CA in Nikol",
    "Best CA in Ahmedabad",
    "Chartered Accountant in Nikol",
    "GST consultant in Ahmedabad",
    "tax consultant in Nikol",
    "CA firm in Ahmedabad Gujarat",
    "company registration CA Ahmedabad",
  ],
  alternates: {
    canonical: "https://pvassociates.in/",
  },
  openGraph: {
    title: "Best CA in Nikol Ahmedabad | Patel & Vaghasiya",
    description:
      "Chartered Accountants in Nikol, Ahmedabad offering expert GST, income tax, company registration, audit and loan/subsidy advisory services.",
    url: "https://pvassociates.in/",
    siteName: "Patel & Vaghasiya",
    type: "website",
  },
};

const Page = async () => {
  const posts = await getPosts()
  return (
    <>
      <HomeHero />
      <Home2 />
      <Home3 />
      <Testimonials />
      <LatestBlogs posts={posts} />
    </>
  );
};

export default Page;
