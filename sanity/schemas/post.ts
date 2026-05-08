import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Intro',
      type: 'text',
      rows: 3,
      description: 'Shown as the italic intro block below the title',
    }),
    defineField({
      name: 'readTime',
      title: 'Read time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                  },
                ],
              },
              {
                name: 'term',
                type: 'object',
                title: 'Technical term',
                fields: [
                  {
                    name: 'definition',
                    type: 'string',
                    title: 'Definition (optional)',
                  },
                ],
              },
            ],
          },
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Section Heading (H2)', value: 'h2' },
            { title: 'Sub-heading (H3)', value: 'h3' },
            { title: 'Callout', value: 'callout' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
        },
        {
          type: 'object',
          name: 'calloutBlock',
          title: 'Callout Box',
          fields: [
            { name: 'label', type: 'string', title: 'Label (e.g. "Key concept")' },
            { name: 'text', type: 'text', title: 'Text' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'text' },
          },
        },
        {
          type: 'object',
          name: 'comparisonBlock',
          title: 'Comparison Cards',
          fields: [
            {
              name: 'left',
              type: 'object',
              title: 'Left card',
              fields: [
                { name: 'label', type: 'string', title: 'Label' },
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'description', type: 'text', title: 'Description' },
                { name: 'isWinner', type: 'boolean', title: 'Highlight this card?' },
              ],
            },
            {
              name: 'right',
              type: 'object',
              title: 'Right card',
              fields: [
                { name: 'label', type: 'string', title: 'Label' },
                { name: 'title', type: 'string', title: 'Title' },
                { name: 'description', type: 'text', title: 'Description' },
                { name: 'isWinner', type: 'boolean', title: 'Highlight this card?' },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'constraintTable',
          title: 'Constraint Table',
          fields: [
            {
              name: 'rows',
              type: 'array',
              title: 'Rows',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'key', type: 'string', title: 'Key' },
                    { name: 'value', type: 'text', title: 'Value' },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'object',
          name: 'analogyBlock',
          title: 'Analogy / Pullquote',
          fields: [
            { name: 'lines', type: 'array', of: [{ type: 'text' }], title: 'Lines' },
          ],
        },
        {
          type: 'object',
          name: 'citationBlock',
          title: 'Citation',
          fields: [
            { name: 'label', type: 'string', title: 'Label (e.g. "Source")' },
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'linkText', type: 'string', title: 'Link text' },
          ],
        },
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections (for Table of Contents)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', type: 'string', title: 'Number (e.g. "01")' },
            { name: 'heading', type: 'string', title: 'Heading' },
            { name: 'anchor', type: 'string', title: 'Anchor ID (e.g. "origins")' },
          ],
          preview: {
            select: { title: 'heading', subtitle: 'anchor' },
          },
        },
      ],
      description: 'Used to build the sticky sidebar TOC. Keep in sync with your H2 headings.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
