import type { Post } from '@/lib/types'
import PortableTextRenderer from './PortableTextRenderer'
import TableOfContents from './TableOfContents'

export default function BlogPost({ post }: { post: Post }) {
  const { title, subtitle, readTime, categories, sections, body } = post

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero-label">
          <span>Technical deep-dive</span>
        </div>
        <h1>{title}</h1>
        <div className="hero-meta">
          <span>{subtitle ?? 'Networking Fundamentals'}</span>
          <span className="dot">·</span>
          <span>~{readTime ?? '8'} min read</span>
          {categories?.map((cat) => (
            <>
              <span className="dot" key={cat.title + '-dot'}>·</span>
              <span key={cat.title}>{cat.title}</span>
            </>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div className="layout">
        <article>
          {subtitle && <div className="intro-block">{subtitle}</div>}

          {/* Body content rendered from Sanity */}
          {body && <PortableTextRenderer value={body} />}
        </article>

        <aside>
          {sections && sections.length > 0 && (
            <TableOfContents sections={sections} />
          )}
        </aside>
      </div>
    </>
  )
}
