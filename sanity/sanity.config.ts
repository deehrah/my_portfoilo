import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import post from './schemas/post'
import author from './schemas/author'
import category from './schemas/category'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Blog',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8bgabr7y',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [post, author, category],
  },
})
