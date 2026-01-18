'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: { asset: { url: string } }
  author?: { name: string }
  categories?: Array<{ _id: string; title: string }>
  body?: any
}

interface Category {
  _id: string
  title: string
  description?: string
}

export default function BlogClient({
  posts,
  categories
}: {
  posts: Post[]
  categories: Category[]
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  const filteredPosts = useMemo(() => {
    let filtered = posts

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categories?.some(cat => cat.title.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(post =>
        post.categories?.some(cat => cat._id === selectedCategory)
      )
    }

    return filtered
  }, [posts, searchQuery, selectedCategory])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <h1 className="text-4xl font-bold mb-8 text-left text-main-dark">Latest Blogs</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content - Blog Cards */}
        <div className="flex-1">
          <div className="grid gap-8 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group block"
              >
                <div className="bg-white p-3 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* Image with Zoom on Hover */}
                  <div className="relative overflow-hidden h-48">
                    {post.mainImage?.asset?.url ? (
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    {/* Title */}
                    <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-sky-800 transition-colors">
                      {post.title}
                    </h2>

                    {/* Thin Gray Line (exactly as you wanted) */}
                    <div className="w-full h-[1px] bg-gray-200 mb-4"></div>

                    {/* Author (left) + Date (right) */}
                    <div className="flex justify-between items-center text-sm text-main mt-auto">
                      {post.author?.name ? (
                        <span className="text-main font-bold">By {post.author.name}</span>
                      ) : (
                        <span className="text-main font-bold">Anonymous</span>
                      )}
                      {post.publishedAt && (
                        <span className="text-gray-500">{formatDate(post.publishedAt)}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-gray-600 text-center py-12 text-lg">
              No blog posts found matching your search.
            </p>
          )}
        </div>

        {/* Sidebar - Search + Categories + Recent Posts */}
        <div className="w-full lg:w-80">
          <div className="sticky top-8 space-y-8">
            {/* Search Bar */}
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Search Posts</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${selectedCategory === ''
                      ? 'bg-blue-50 text-main font-medium'
                      : 'hover:bg-gray-50 text-gray-700'
                    }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => setSelectedCategory(category._id)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all ${selectedCategory === category._id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'hover:bg-gray-50 text-gray-700'
                      }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white border rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-main-dark">Recent Posts</h3>
              <div className="space-y-4">
                {posts.slice(0, 5).map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <h4 className="font-medium text-sm mb-1 line-clamp-2 text-main">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {formatDate(post.publishedAt)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}