import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '2qaulu36',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset->{
          url
        }
      },
      author->{
        name,
        bio
      },
      categories[]->{
        _id,
        title
      },
      body
    }
  `)
  return posts
}

export async function getCategories() {
  const categories = await client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      description
    }
  `)
  return categories
}

export async function getPostsByCategory(categoryId: string) {
  const posts = await client.fetch(`
    *[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset->{
          url
        }
      },
      author->{
        name,
        bio
      },
      categories[]->{
        _id,
        title
      },
      body
    }
  `, { categoryId })
  return posts
}

export async function searchPosts(query: string) {
  const posts = await client.fetch(`
    *[_type == "post" && (title match $query || body[].children[].text match $query)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset->{
          url
        }
      },
      author->{
        name,
        bio
      },
      categories[]->{
        _id,
        title
      },
      body
    }
  `, { query: `*${query}*` })
  return posts
}

export async function getPost(slug: string) {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset->{
          url
        }
      },
      author->{
        name,
        image {
          asset->{
            url
          }
        },
        bio,
        qualifications,
        experience,
        specializations
      },
      categories[]->{
        _id,
        title
      },
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->{
            url
          }
        }
      }
    }`,
    { slug }
  )
  return post
}

export async function getTestimonials() {
  try {
    const testimonials = await client.fetch(`
      *[_type == "testimonial"] | order(_createdAt desc) {
        _id,
        name,
        designation,
        company,
        image {
          asset->{
            url
          }
        },
        rating,
        testimonial
      }
    `)
    return testimonials || []
  } catch (error) {
    console.error("Error in getTestimonials:", error)
    return []
  }
}