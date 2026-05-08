import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
});

// Queries
export const getBlogPosts = async () => {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    author->{
      name,
      image
    },
    mainImage,
    tags
  }`;

  return sanityClient.fetch(query);
};

export const getBlogPostBySlug = async (slug: string) => {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    author->{
      name,
      image
    },
    mainImage,
    tags
  }`;

  return sanityClient.fetch(query, { slug });
};

export const getRelatedPosts = async (currentSlug: string, tags: string[]) => {
  const query = `*[_type == "blogPost" && slug.current != $slug && tags[] in $tags] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage
  }`;

  return sanityClient.fetch(query, { slug: currentSlug, tags });
};
