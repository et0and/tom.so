"use server";

import { MDXData } from "@/types/mdxData";
import { getContentPosts } from "../actions/getPosts";
import { ContentType } from "@/types/contentType";

export async function getPaginatedPosts(
  page: number,
  postsPerPage: number,
  content: ContentType,
): Promise<{
  posts: MDXData[];
  totalPages: number;
}> {
  const getPostsFunction = await getContentPosts(content);
  const allPosts = getPostsFunction();

  const sortedPosts =
    content === "posts"
      ? allPosts.sort((a, b) => {
          const dateA = new Date(a.metadata.date || a.metadata.publishedAt);
          const dateB = new Date(b.metadata.date || b.metadata.publishedAt);
          return dateB.getTime() - dateA.getTime();
        })
      : allPosts.sort((a, b) =>
          a.metadata.title.localeCompare(b.metadata.title),
        );

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    totalPages,
  };
}
