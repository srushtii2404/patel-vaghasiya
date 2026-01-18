'use client'

import Link from 'next/link'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: { asset: { url: string } }
}

export default function LatestBlogs({ posts }: { posts: Post[] }) {
  const latestPosts = posts.slice(0, 3)

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-main-dark">
            Latest Blogs
          </h2>

          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            Insights, updates and articles to help you stay informed
          </p>

          {/* View All */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-5 
               text-main font-semibold text-sm
               hover:text-main-dark transition"
          >
            View all blogs
            <span className="text-base">→</span>
          </Link>
        </div>



        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              {post.mainImage?.asset?.url && (
                <div className="overflow-hidden">
                  <img
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-xs font-medium text-main bg-blue-50 px-3 py-1 rounded-full mb-4">
                  {formatDate(post.publishedAt)}
                </span>

                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-main transition">
                  {post.title}
                </h3>

                <p className="mt-4 text-sm font-medium text-main">
                  Read More →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
