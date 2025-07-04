"use server";

import { ContentType } from "@/types/contentType";
import { cache } from "react";
import { getContentPosts } from "./getPosts";
import { MDXData } from "@/types/mdxData";

export const getPostBySlug = cache(
  async (type: ContentType, slug: string): Promise<MDXData | undefined> => {
    const getPostsFunction = await getContentPosts(type);
    const posts = getPostsFunction();
    return posts.find((post) => post.slug === slug);
  },
);
