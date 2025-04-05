import { getBlogPosts } from "@/app/db/blog";
import { getWorkPosts } from "@/app/db/work";
import { getCataloguePosts } from "@/app/db/catalogue";
import { cache } from "react";

export interface Post {
  slug: string;
  content: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
}

export type ContentType = "blog" | "work" | "catalogue";

const getContentPosts = (type: ContentType) => {
  switch (type) {
    case "blog":
      return getBlogPosts();
    case "work":
      return getWorkPosts();
    case "catalogue":
      return getCataloguePosts();
    default:
      throw new Error(`Unknown content type: ${type}`);
  }
};

export const getPostBySlug = cache(
  async (type: ContentType, slug: string): Promise<Post | undefined> => {
    const posts = getContentPosts(type);
    return posts.find((post) => post.slug === slug);
  },
);

export function generateBasePath(type: ContentType): string {
  switch (type) {
    case "blog":
      return "/posts";
    case "work":
      return "/work";
    case "catalogue":
      return "/work/catalogue";
    default:
      throw new Error(`Unknown content type: ${type}`);
  }
}
