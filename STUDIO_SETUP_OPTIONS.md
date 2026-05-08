# Sanity Studio Setup - Next Steps

Your Sanity CMS and Next.js blog infrastructure is complete. The schemas, components, and queries are ready. Now you need to populate your Sanity dataset with content.

## Quick Start: Create Your First Post

### Via Sanity Management Interface (Easiest)

1. **Go to:** https://manage.sanity.io/projects
2. **Select your project:** Find the one with ID `8bgabr7y`
3. **Select dataset:** `production`
4. Click the **"Open in dataset"** or vision interface button

### Creating a Blog Post

1. Click **+ Create**
2. Select **"Blog Post"** from the list
3. Fill in these fields:

   **Basic Info:**
   - **Title** - Your post title (required)
   - **Slug** - Auto-generates from title (required)
   - **Subtitle/Intro** - The italic intro text below the title
   - **Read time** - Estimated minutes (e.g., 8)
   - **Published at** - Today's date

   **Content:**
   - **Body** - Your article content using blocks (see below)
   - **Sections** - Array of sections for the sticky table of contents
     - Number: "01", "02", etc.
     - Heading: "Chapter Name"
     - Anchor: "chapter-name" (used for TOC links)

   **Metadata:**
   - **Author** - Select from author documents (create authors first)
   - **Categories** - Select category references (create categories first)

4. **Publish** when ready

## Creating Supporting Content

### Create an Author First

1. Click **+ Create**
2. Select **"Author"**
3. Fill in:
   - **Name** - Author name (required)
   - **Handle** - Username/social handle (required)
4. **Publish**

### Create Categories

1. Click **+ Create**
2. Select **"Category"**
3. Fill in:
   - **Title** - Category name (required)
   - **Slug** - Auto-generates from title
4. **Publish**

## Content Block Types Available

Your blog body supports these blocks:

### Standard Blocks
- **Text** - Normal paragraphs
- **H2** - Section headings (maps to table of contents)
- **H3** - Sub-headings
- **Callout** - Special text styling
- **Lists** - Bullet and numbered

### Formatting
- **Bold**, **Italic**, **Link**
- **Technical term** - Renders as green pill

### Custom Blocks (insert in editor)

- **Callout Box**
  - Label (e.g., "Key Concept")
  - Text content

- **Comparison Cards**
  - Left card: label, title, description, highlight option
  - Right card: label, title, description, highlight option

- **Constraint Table**
  - Rows with key-value pairs (e.g., Latency: "< 100ms")

- **Analogy / Pullquote**
  - Multi-line quoted text

- **Citation**
  - Label (e.g., "Source")
  - URL
  - Link text

## View Your Blog

Once you've created and published a post:

1. Start your dev server: `npm run dev`
2. Visit: `http://localhost:3000/blog`
3. Click on your post to view the full article

**ISR Cache:** Posts appear within 60 seconds of publishing (or immediately if you rebuild).

## Environment Variables

Your `.env.local` already has:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=8bgabr7y
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

These are used by:
- `lib/sanity.ts` - Sanity client configuration
- `lib/queries.ts` - GROQ query execution
- Blog pages for fetching and rendering posts

## Project Architecture

```
Sanity Studio (CMS)
    ↓
Dataset: production
    ├── Authors
    ├── Categories
    └── Posts (with rich content blocks)
    
        ↓
        
Next.js App
    ↓
lib/queries.ts (GROQ queries)
    ↓
Fetch posts via lib/sanity.ts client
    ↓
BlogPost component + PortableTextRenderer
    ↓
Render at /blog/[slug]
```

## Next Steps

1. ✅ **Schemas** - Already defined in `sanity/schemas/`
2. ✅ **Components** - Already created in `components/`
3. ✅ **Environment** - Already configured in `.env.local`
4. ⬜ **Create Authors** - Go to Sanity Studio and add authors
5. ⬜ **Create Categories** - Go to Sanity Studio and add categories
6. ⬜ **Write Posts** - Create your first blog post!

## Tips

- **Sections sync with H2 headings** - When you use H2 in your body, add a matching entry in Sections for the TOC
- **Auto-slugs** - Slugs auto-generate from title but can be manually edited
- **Rich editing** - The editor supports drag-drop, formatting, and block insertion
- **Drafts** - Save drafts before publishing
- **Revalidation** - Posts appear live within 60 seconds or on rebuild

**Q: Where do I create blog posts?**
- A: Either in the management interface (https://manage.sanity.io) or after deploying your studio.

**Q: Can I start without deploying?**
- A: Yes! Use the management interface immediately. No deployment needed.

## Recommended Path

1. **Use management interface now** to create test content
2. **Verify your blog works** at http://localhost:3002/blog
3. **Deploy studio later** with `sanity deploy` when you're ready
4. **Use studio dashboard** for ongoing content management

---

**Get started immediately**: https://manage.sanity.io/projects
