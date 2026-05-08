import { groq } from 'next-sanity'

// All posts for the blog index
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    subtitle,
    readTime,
    publishedAt,
    "categories": categories[]->{ title, slug },
    "author": author->{ name, handle },
  }
`

// Single post by slug — full content
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    readTime,
    publishedAt,
    sections,
    body,
    "categories": categories[]->{ title, slug },
    "author": author->{ name, handle },
  }
`
