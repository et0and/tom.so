"use server";

import { MDXData } from "@/types/mdxData";
import { getPosts } from "../actions/getPosts";

export async function getPaginatedWorkPosts(
  page: number,
  postsPerPage: number,
): Promise<{
  posts: MDXData[];
  totalPages: number;
}> {
  const allPosts = getPosts("work")();
  const sortedPosts = allPosts.toSorted((a, b) =>
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
