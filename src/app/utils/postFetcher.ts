import { cache } from "react";
import { getContentPosts } from "../actions/getPosts";
import { ContentType } from "@/types/contentType";
import { MDXData } from "@/types/mdxData";

export const getPostBySlug = cache(
  async (type: ContentType, slug: string): Promise<MDXData | undefined> => {
    const getPostsFunction = await getContentPosts(type);
    const posts = getPostsFunction();
    return posts.find((post) => post.slug === slug);
  },
);

export function generateBasePath(type: ContentType): string {
  switch (type) {
    case "posts":
      return "/posts";
    case "work":
      return "/work";
    case "catalogue":
      return "/work/catalogue";
    default:
      throw new Error(`Unknown content type: ${type}`);
  }
}
