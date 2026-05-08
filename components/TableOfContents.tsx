'use client'

import { useEffect, useState } from 'react'
import type { Section } from '@/lib/types'

export default function TableOfContents({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sectionEls = sections.map((s) => document.getElementById(s.anchor)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    sectionEls.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav className="toc">
      <div className="toc-label">In this article</div>
      {sections.map((s) => (
        <a
          key={s.anchor}
          href={`#${s.anchor}`}
          className={active === s.anchor ? 'active' : ''}
        >
          {s.heading}
        </a>
      ))}
    </nav>
  )
}
