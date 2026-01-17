'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

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

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categories?.some(cat => cat.title.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by category
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
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="grid gap-6 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="block"
              >
                <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                  {post.mainImage?.asset?.url && (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>

                    <div className="text-sm text-gray-600 mb-4">
                      {post.author?.name && (
                        <span className="font-medium">By {post.author.name}</span>
                      )}
                      {post.publishedAt && (
                        <span className="ml-2">• {formatDate(post.publishedAt)}</span>
                      )}
                    </div>

                    {post.categories && post.categories.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {post.categories.slice(0, 2).map((category) => (
                            <span
                              key={category._id}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {category.title}
                            </span>
                          ))}
                          {post.categories.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{post.categories.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <span className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-gray-600 text-center">No blog posts found.</p>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80">
          <div className="sticky top-8">
            {/* Search Bar */}
            <div className="bg-white border rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Search Posts</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title, author, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
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
            <div className="bg-white border rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === ''
                      ? 'bg-blue-100 text-blue-800 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => setSelectedCategory(category._id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category._id
                        ? 'bg-blue-100 text-blue-800 font-medium'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white border rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {posts.slice(0, 5).map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <h4 className="font-medium text-sm mb-1 line-clamp-2">
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