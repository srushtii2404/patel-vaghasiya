import { getPosts } from '@/lib/sanity'
import HomeHero from "./HomeHero";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Testimonials from "./Testimonials";
import LatestBlogs from "./LatestBlogs";

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
