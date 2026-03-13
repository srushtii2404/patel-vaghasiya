import { getPost, getPosts } from '@/lib/sanity'

// ISR for individual post pages
export const revalidate = 60
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionContent,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ContactForm from '@/components/ContactForm'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  mainImage?: { asset: { url: string } }
  author?: { name: string; image?: { asset: { url: string } } }
  categories?: Array<{ _id: string; title: string }>
  body?: any
}

// Function to detect and parse FAQ content
function parseFAQs(text: string) {
  const faqs = []
  const lines = text.split('\n').map(line => line.trim())

  let i = 0

  // Skip to FAQ header
  while (i < lines.length && !lines[i].toLowerCase().includes('faq')) {
    i++
  }

  // Skip the FAQ header
  if (i < lines.length) i++

  // Parse Q&A pairs
  while (i < lines.length) {
    // Skip empty lines
    while (i < lines.length && !lines[i]) i++

    if (i >= lines.length) break

    // Find question (line ending with ?)
    let question = ''
    if (lines[i].endsWith('?')) {
      question = lines[i].replace(/^Q\d+\.\s*/, '').trim()
      i++
    } else {
      i++ // Skip non-question lines
      continue
    }

    // Find answer (collect lines until next question or end)
    let answer = ''
    while (i < lines.length) {
      if (!lines[i]) {
        i++ // Skip empty lines
        continue
      }

      if (lines[i].endsWith('?')) {
        // Next question found, stop collecting answer
        break
      }

      // Add to answer
      if (answer) answer += '\n'
      answer += lines[i]
      i++
    }

    // Add Q&A pair if both exist
    if (question && answer) {
      faqs.push({
        question: question,
        answer: answer.trim()
      })
    }
  }

  return faqs
}

// Function to check if text contains FAQ content
function isFAQContent(text: string) {
  const lowerText = text.toLowerCase().trim()

  // Check if it starts with FAQ header
  if (lowerText.startsWith('faq') || lowerText.startsWith('frequently asked questions')) {
    return true
  }

  // Check if it contains multiple questions (more than one line ending with ?)
  const lines = text.split('\n').map(line => line.trim())
  const questionLines = lines.filter(line => line.endsWith('?') && line.length > 5)

  // If there are multiple questions, it's likely FAQ content
  if (questionLines.length >= 2) {
    return true
  }

  // Check for Q1., Q2. pattern
  if (text.match(/Q\d+\./)) {
    return true
  }

  return false
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Patel & Vaghasiya Associates',
    }
  }

  // Extract description from body content
  const description = post.body?.[0]?.children?.[0]?.text?.substring(0, 160) ||
                     `Read ${post.title} on Patel & Vaghasiya Associates blog.`

  const imageUrl = post.mainImage?.asset?.url || '/og-default.jpg'

  return {
    metadataBase: new URL('https://www.pvassociates.in'),
    title: `${post.title} | Patel & Vaghasiya CA Blog`,
    description,
    keywords: [
      post.title,
      'Patel & Vaghasiya Chartered Accountants',
      'blog',
      'finance',
      'legal',
      'business',
      ...(post.categories?.map((cat: { _id: string; title: string }) => cat.title) || [])
    ].join(', '),
      authors: [{ name: post.author?.name || 'Patel & Vaghasiya Chartered Accountants' }],
    openGraph: {
      title: post.title,
      description,
      url: `/blog/${post.slug.current}`,
      siteName: 'Patel & Vaghasiya',
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [post.author?.name || 'Patel & Vaghasiya Associates'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      tags: post.categories?.map((cat: { _id: string; title: string }) => cat.title),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `/blog/${post.slug.current}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = post.body?.reduce((count: number, block: any) => {
    if (block._type === 'block' && block.children) {
      return count + block.children.reduce((blockCount: number, child: any) =>
        blockCount + (child.text?.split(' ').length || 0), 0)
    }
    return count
  }, 0) || 0

  const readingTime = Math.ceil(wordCount / 200)

  // Generate structured data for article
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.body?.[0]?.children?.[0]?.text?.substring(0, 160) || post.title,
    image: post.mainImage?.asset?.url,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Patel & Vaghasiya Associates',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Patel & Vaghasiya Chartered Accountants',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.pvassociates.in/assets/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.pvassociates.in/blog/${post.slug.current}`,
    },
    keywords: post.categories?.map((cat: { _id: string; title: string }) => cat.title).join(', '),
    articleSection: post.categories?.[0]?.title || 'General',
    wordCount: wordCount,
    timeRequired: `PT${readingTime}M`,
  }

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.pvassociates.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.pvassociates.in/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.pvassociates.in/blog/${post.slug.current}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      {/* Hero Section with Image Overlay */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0">
  <img
    src="/assets/group-people-working-team.jpg"
    alt="Professional Chartered Accountancy Services"
    className="w-full h-full object-cover"
  />

  {/* Transparent dark overlay */}
  <div className="absolute inset-0 bg-[#0d1321] opacity-75"></div>
</div>


        <div className="relative z-10 text-left text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6 max-w-2xl leading-relaxed">
            Understanding complex financial matters requires expertise and careful analysis.
            Our Chartered Accountants provide comprehensive guidance tailored to your specific business needs.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
      </section>

      {/* Main Content with Sticky Forms */}
      <div className="relative bg-gray-50">
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex gap-8">
            {/* Main Content - Left Side */}
            <div className="flex-1 max-w-3xl">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm text-gray-600 py-0 w-full">
            <li>
              <a href="/" className="hover:text-black transition-colors">Home</a>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <a href="/blog" className="hover:text-black transition-colors">Blog</a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-main font-bold" aria-current="page">
              {post.title.length > 85 ? post.title.substring(0, 85) + '...' : post.title}
            </li>
          </ol>
        </nav>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-8">
            {post.categories.map((category: { _id: string; title: string }) => (
              <p
                key={category._id}
                className="px-4 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-main rounded-lg text-sm font-bold hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-main hover:border-blue-300 shadow-sm flex items-center"
              >
                {category.title}
              </p>
            ))}
          </div>
        )}

        <article className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden relative z-20">
          <div className="p-8 md:p-12">
            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-main-dark leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600 border-b border-gray-100 pb-6">
                {post.author?.name && (
                  <div className="flex items-center gap-2">
                    {post.author.image?.asset?.url ? (
                      <img
                        src={post.author.image.asset.url}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {post.author.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span className="font-medium text-gray-900">{post.author.name}</span>
                  </div>
                )}
                {post.publishedAt && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                )}
                {readingTime > 0 && (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{readingTime} min read</span>
                  </div>
                )}
              </div>
            </header>

          {post.body && (
            <div className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-strong:font-semibold prose-em:text-gray-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-6 prose-blockquote:rounded-r-lg [&_ul]:list-disc [&_ul]:pl-8 [&_ul]:space-y-3 [&_ol]:list-decimal [&_ol]:pl-8 [&_ol]:space-y-3 [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-2">
              {(() => {
                const elements: React.ReactElement[] = []
                let currentList: { type: 'bullet' | 'number' | null, items: React.ReactElement[] } = { type: null, items: [] }
                let faqContent: string[] = []
                let isCollectingFAQ = false
                let hasRenderedFAQ = false

                const flushList = () => {
                  if (currentList.items.length > 0) {
                    if (currentList.type === 'bullet') {
                      elements.push(
                        <ul key={`list-${elements.length}`} className="mb-8 space-y-3 text-gray-700">
                          {currentList.items}
                        </ul>
                      )
                    } else if (currentList.type === 'number') {
                      elements.push(
                        <ol key={`list-${elements.length}`} className="mb-8 space-y-3 text-gray-700">
                          {currentList.items}
                        </ol>
                      )
                    }
                    currentList = { type: null, items: [] }
                  }
                }

                const renderFAQSection = () => {
                  if (faqContent.length > 0 && !hasRenderedFAQ) {
                    const combinedFAQText = faqContent.join('\n')
                    const faqs = parseFAQs(combinedFAQText)

                    if (faqs.length > 0) {
                      elements.push(
                        <div key={`faq-section`} className="my-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                          <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center">Frequently Asked Questions</h3>
                          <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, faqIndex) => (
                              <AccordionItem key={faqIndex} value={`faq-${faqIndex}`} className="rounded-xl overflow-hidden bg-white shadow-md border border-gray-200">
                                <AccordionTrigger
                                  className="flex justify-between items-center px-6 py-5 md:px-8 md:py-6 text-gray-800 font-semibold bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 rounded-xl text-left border-b border-gray-200"
                                >
                                  <span className="text-lg">{faq.question}</span>
                                </AccordionTrigger>
                                <AccordionContent
                                  className="px-6 py-5 md:px-8 md:py-6 text-gray-700 text-base leading-relaxed bg-white"
                                >
                                  {faq.answer.split('\n').map((line: string, lineIndex: number) => (
                                    <span key={lineIndex}>
                                      {line}
                                      {lineIndex < faq.answer.split('\n').length - 1 && <br />}
                                    </span>
                                  ))}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>
                      )
                      hasRenderedFAQ = true
                      isCollectingFAQ = false // Reset collection flag
                    }
                    faqContent = []
                  }
                }

                post.body.forEach((block: any, index: number) => {
                  if (block._type === 'block') {
                    const style = block.style || 'normal'
                    const listItem = block.listItem

                    // Handle list items
                    if (listItem) {
                      const children = block.children?.map((child: any) => {
                        let element = child.text

                        // Handle line breaks
                        if (element && element.includes('\n')) {
                          const lines = element.split('\n').map((line: string, lineIndex: number) => (
                            <span key={`${child._key}-line-${lineIndex}`}>
                              {lineIndex > 0 && <br />}
                              {line}
                            </span>
                          ))
                          element = <React.Fragment key={`${child._key}-lines`}>{lines}</React.Fragment>
                        }

                        // Apply marks (bold, italic, etc.)
                        if (child.marks && child.marks.includes('strong')) {
                          element = <strong key={child._key}>{element}</strong>
                        }
                        if (child.marks && child.marks.includes('em')) {
                          element = <em key={child._key}>{element}</em>
                        }

                        return element
                      })

                      if (currentList.type !== listItem) {
                        flushList()
                        currentList.type = listItem
                      }

                      currentList.items.push(
                        <li key={index} className="text-gray-700 leading-relaxed pl-2">
                          {children}
                        </li>
                      )
                      return
                    }

                    // Flush any pending list before adding non-list content
                    flushList()

                    // Handle regular text blocks
                    const children = block.children?.map((child: any) => {
                      let element = child.text

                      // Handle line breaks
                      if (element && element.includes('\n')) {
                        const lines = element.split('\n').map((line: string, lineIndex: number) => (
                          <span key={`${child._key}-line-${lineIndex}`}>
                            {lineIndex > 0 && <br />}
                            {line}
                          </span>
                        ))
                        element = <React.Fragment key={`${child._key}-lines`}>{lines}</React.Fragment>
                      }

                      // Apply marks (bold, italic, etc.)
                      if (child.marks && child.marks.includes('strong')) {
                        element = <strong key={child._key}>{element}</strong>
                      }
                      if (child.marks && child.marks.includes('em')) {
                        element = <em key={child._key}>{element}</em>
                      }

                      return element
                    })

                    // Check if this block contains FAQ content
                    const blockText = block.children?.map((child: any) => child.text).join('') || ''

                    // Start collecting FAQ content if we detect FAQ header or multiple questions
                    if (!isCollectingFAQ && isFAQContent(blockText)) {
                      isCollectingFAQ = true
                      faqContent.push(blockText)
                      return // Don't render this block yet, collect it for FAQ section
                    }

                    // Continue collecting FAQ content if we're already in FAQ mode
                    if (isCollectingFAQ) {
                      // Check if this might be the end of FAQ section (new section header or unrelated content)
                      const lowerBlockText = blockText.toLowerCase()
                      const isNewSection = lowerBlockText.includes('common mistakes') ||
                                         lowerBlockText.includes('important') ||
                                         lowerBlockText.includes('note') ||
                                         (lowerBlockText.length > 20 && !lowerBlockText.includes('?') && !lowerBlockText.includes('faq'))

                      if (isNewSection && faqContent.length > 0) {
                        // End FAQ collection and render it
                        renderFAQSection()
                        isCollectingFAQ = false
                      } else {
                        faqContent.push(blockText)
                        return // Continue collecting FAQ content
                      }
                    }

                    // Render any pending FAQ content before this block
                    renderFAQSection()

                    switch (style) {
                      case 'h1':
                        elements.push(<h1 key={index} className="text-4xl font-bold mb-8 mt-12 first:mt-0 text-gray-900 border-b-2 border-blue-200 pb-4">{children}</h1>)
                        break
                      case 'h2':
                        elements.push(<h2 key={index} className="text-3xl font-bold mb-6 mt-10 text-gray-900 flex items-center"><span className="mr-3 text-blue-600">📋</span>{children}</h2>)
                        break
                      case 'h3':
                        elements.push(<h3 key={index} className="text-2xl font-semibold mb-4 mt-8 text-gray-900">{children}</h3>)
                        break
                      case 'h4':
                        elements.push(<h4 key={index} className="text-xl font-semibold mb-3 mt-6 text-gray-900">{children}</h4>)
                        break
                      case 'blockquote':
                        elements.push(<blockquote key={index} className="border-l-4 border-blue-500 pl-8 italic my-8 text-gray-700 bg-blue-50 py-6 px-8 rounded-r-lg shadow-sm">{children}</blockquote>)
                        break
                      default:
                        elements.push(<p key={index} className="mb-6 leading-relaxed text-gray-700 text-lg">{children}</p>)
                        break
                    }
                  } else if (block._type === 'image') {
                    // Flush any pending list before adding image
                    flushList()
                    // Render any pending FAQ content before the image
                    renderFAQSection()

                    // Handle images in the body content
                    const imageUrl = block.asset?.url
                    const alt = block.alt || 'Blog image'
                    const caption = block.caption

                    elements.push(
                      <figure key={index} className="my-10">
                        <img
                          src={imageUrl}
                          alt={alt}
                          className="w-full h-auto rounded-2xl shadow-xl border border-gray-200"
                        />
                        {caption && (
                          <figcaption className="text-sm text-gray-600 mt-4 text-center italic bg-gray-50 px-4 py-2 rounded-lg">
                            {caption}
                          </figcaption>
                        )}
                      </figure>
                    )
                  }
                })

                // Flush any remaining list
                flushList()
                // Render any remaining FAQ content
                renderFAQSection()
                isCollectingFAQ = false // Reset FAQ collection flag

                return elements
              })()}
            </div>
          )}
          </div>
        </article>
            </div>

            {/* Sticky Contact Form - Right Side */}
            <div className="hidden lg:block flex-1 max-w-md">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200">
                  
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post: Post) => ({
    slug: post.slug.current,
  }))
}