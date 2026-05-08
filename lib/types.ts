import type { PortableTextBlock } from '@portabletext/types'

export interface Category {
  title: string
  slug: { current: string }
}

export interface Author {
  name: string
  handle: string
}

export interface Section {
  number: string
  heading: string
  anchor: string
}

export interface Post {
  _id: string
  title: string
  subtitle?: string
  readTime?: number
  publishedAt?: string
  sections?: Section[]
  body?: PortableTextBlock[]
  categories?: Category[]
  author?: Author
  slug: { current: string }
}
