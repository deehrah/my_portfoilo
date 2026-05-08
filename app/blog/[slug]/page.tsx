import { client } from '@/lib/sanity'
import { postBySlugQuery, postsQuery } from '@/lib/queries'
import type { Post } from '@/lib/types'
import BlogPost from '@/components/BlogPost'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Generate static paths for all posts at build time
export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(postsQuery)
  return posts.map((post) => ({ slug: post.slug.current }))
}

// Optional: revalidate every 60 seconds (ISR)
export const revalidate = 60

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post: Post | null = await client.fetch(postBySlugQuery, {
    slug: params.slug,
  })

  if (!post) notFound()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
          ← Back to blog
        </Link>
      </nav>

      {/* Blog Post Component */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <BlogPost post={post} />
      </div>
    </main>
  )
}
