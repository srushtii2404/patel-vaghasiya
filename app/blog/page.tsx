import { getPosts, getCategories } from '@/lib/sanity'
import { Metadata } from 'next'
import BlogClient from './BlogClient'

// Incremental Static Regeneration: revalidate every minute
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog | Patel & Vaghasiya Associates - Latest Updates & Insights',
  description: 'Stay updated with the latest news, insights, and expert advice from Patel & Vaghasiya Associates. Read our comprehensive blog posts on finance, legal, and business topics.',
  keywords: 'blog, finance, legal advice, business insights, Patel Vaghasiya Associates',
  openGraph: {
    title: 'Blog | Patel & Vaghasiya Associates',
    description: 'Stay updated with the latest news, insights, and expert advice from Patel & Vaghasiya Associates.',
    url: 'https://patelvaghasiyaassociates.com/blog',
    siteName: 'Patel & Vaghasiya Associates',
    type: 'website',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Patel & Vaghasiya Associates Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Patel & Vaghasiya Associates',
    description: 'Stay updated with the latest news, insights, and expert advice from Patel & Vaghasiya Associates.',
    images: ['/og-blog.jpg'],
  },
  alternates: {
    canonical: 'https://patelvaghasiyaassociates.com/blog',
  },
}

export default async function BlogPage() {
  const posts = await getPosts()
  const categories = await getCategories()

  // Generate structured data for blog listing
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Patel & Vaghasiya Associates Blog',
    description: 'Latest updates and insights from Patel & Vaghasiya Associates',
    url: 'https://patelvaghasiyaassociates.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Patel & Vaghasiya Associates',
      url: 'https://patelvaghasiyaassociates.com',
    },
    blogPost: posts.slice(0, 10).map((post: any) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://patelvaghasiyaassociates.com/blog/${post.slug.current}`,
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