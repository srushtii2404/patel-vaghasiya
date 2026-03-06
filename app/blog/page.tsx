import { getPosts, getCategories } from '@/lib/sanity'
import { Metadata } from 'next'
import BlogClient from './BlogClient'

// Incremental Static Regeneration: revalidate every minute
export const revalidate = 60

export const metadata: Metadata = {
  title: 'CA Blog | Patel & Vaghasiya - GST, Taxation, Subsidy & Finance Insights',
  description:
    'CA blog by Patel & Vaghasiya, Chartered Accountants in Nikol, Ahmedabad. Read expert articles on GST, income tax, company law, government subsidies, MSME loans and business finance.',
  keywords:
    'CA blog, GST articles, income tax tips, subsidy schemes Gujarat, business finance blog, Patel Vaghasiya Chartered Accountants, CA in Nikol Ahmedabad',
  openGraph: {
    title: 'CA Blog | Patel & Vaghasiya Chartered Accountants',
    description:
      'Latest CA insights on GST, income tax, audits, subsidies and business finance from Patel & Vaghasiya in Nikol, Ahmedabad.',
    url: 'https://pvassociates.in/blog',
    siteName: 'Patel & Vaghasiya',
    type: 'website',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Patel & Vaghasiya Chartered Accountants Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CA Blog | Patel & Vaghasiya Chartered Accountants',
    description:
      'Expert CA insights on GST, income tax, audits, subsidies and business finance from Patel & Vaghasiya in Nikol, Ahmedabad.',
    images: ['/og-blog.jpg'],
  },
  alternates: {
    canonical: 'https://pvassociates.in/blog',
  },
}

export default async function BlogPage() {
  const posts = await getPosts()
  const categories = await getCategories()

  // Generate structured data for blog listing
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Patel & Vaghasiya Chartered Accountants Blog',
    description:
      'Latest CA updates and insights on GST, taxation, audit, subsidies and business finance from Patel & Vaghasiya Chartered Accountants in Nikol, Ahmedabad.',
    url: 'https://pvassociates.in/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Patel & Vaghasiya Chartered Accountants',
      url: 'https://pvassociates.in',
    },
    blogPost: posts.slice(0, 10).map((post: any) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://pvassociates.in/blog/${post.slug.current}`,
      datePublished: post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author?.name || 'Patel & Vaghasiya Associates',
      },
      image: post.mainImage?.asset?.url,
      description: post.body?.[0]?.children?.[0]?.text?.substring(0, 160) || post.title,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BlogClient posts={posts} categories={categories} />
    </>
  )
}