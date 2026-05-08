'use client'

import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'

// ─── Custom block components ───────────────────────────────────────────────

function CalloutBlock({ value }: { value: { label: string; text: string } }) {
  return (
    <div className="callout">
      <div className="callout-label">{value.label}</div>
      <p>{value.text}</p>
    </div>
  )
}

function ComparisonBlock({ value }: { value: any }) {
  const { left, right } = value
  return (
    <div className="comparison">
      {[left, right].map((card, i) => (
        <div key={i} className={`comp-card${card.isWinner ? ' winner' : ''}`}>
          <div className={`comp-label ${card.isWinner ? 'smart' : 'dumb'}`}>{card.label}</div>
          <div className="comp-title">{card.title}</div>
          <div className="comp-desc">{card.description}</div>
        </div>
      ))}
    </div>
  )
}

function ConstraintTable({ value }: { value: { rows: { key: string; value: string }[] } }) {
  return (
    <div className="constraint-list">
      {value.rows.map((row, i) => (
        <div key={i} className="constraint-row">
          <div className="constraint-key">{row.key}</div>
          <div className="constraint-val">{row.value}</div>
        </div>
      ))}
    </div>
  )
}

function AnalogyBlock({ value }: { value: { lines: string[] } }) {
  return (
    <div className="analogy">
      {value.lines.map((line, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: line }} />
      ))}
    </div>
  )
}

function CitationBlock({ value }: { value: { label: string; url: string; linkText: string } }) {
  return (
    <div className="citation">
      {value.label}:{' '}
      <a href={value.url} target="_blank" rel="noopener noreferrer">
        {value.linkText}
      </a>
    </div>
  )
}

// ─── Portable Text component map ───────────────────────────────────────────

const components = {
  types: {
    calloutBlock: CalloutBlock,
    comparisonBlock: ComparisonBlock,
    constraintTable: ConstraintTable,
    analogyBlock: AnalogyBlock,
    citationBlock: CitationBlock,
  },
  marks: {
    term: ({ children }: any) => <span className="term">{children}</span>,
    link: ({ value, children }: any) => (
      <a href={value?.href} target={value?.blank ? '_blank' : '_self'} rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="section-h2">{children}</h2>
    ),
    h3: ({ children }: any) => <h3>{children}</h3>,
    normal: ({ children }: any) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="reasons-list">{children}</ul>,
    number: ({ children }: any) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
  },
}

export default function PortableTextRenderer({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />
}
