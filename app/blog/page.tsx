import Link from 'next/link'
import { client } from '@/lib/sanity'
import { postsQuery } from '@/lib/queries'
import type { Post } from '@/lib/types'

export const revalidate = 60

export default async function BlogPage() {
  let posts: Post[] = []

  try {
    posts = await client.fetch(postsQuery)
  } catch (error) {
    console.error('Failed to fetch blog posts:', error)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 pt-40 pb-20 text-center overflow-hidden">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-400">
          Thoughts on web development, design, and building digital products.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post._id}
                className="pb-8 border-b border-gray-800 hover:border-gray-600 transition-colors"
              >
                <div className="group cursor-pointer">
                  <Link href={`/blog/${post.slug.current}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  {post.subtitle && (
                    <p className="text-lg text-gray-400 mb-4 italic">
                      {post.subtitle}
                    </p>
                  )}
                  <div className="text-sm text-gray-500 flex flex-wrap gap-2 items-center">
                    {post.publishedAt && (
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    )}
                    {post.publishedAt && post.readTime && <span>·</span>}
                    {post.readTime && <span>~{post.readTime} min read</span>}
                    {post.categories && post.categories.length > 0 && (
                      <>
                        <span>·</span>
                        <span className="space-x-2">
                          {post.categories.map((cat) => (
                            <span key={cat.title} className="inline-block px-2 py-1 bg-gray-900 rounded text-xs">
                              {cat.title}
                            </span>
                          ))}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
