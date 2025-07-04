"use server";

import { MDXData } from "@/types/mdxData";
import { getMDXData } from "../utils/mdxFiles";
import { cache } from "react";
import path from "path";

export const getCataloguePosts = cache((): MDXData[] => {
  return getMDXData(path.join(process.cwd(), "(content)", "catalogue"));
});

export async function getPaginatedCataloguePosts(
  page: number,
  postsPerPage: number,
): Promise<{
  posts: MDXData[];
  totalPages: number;
}> {
  const allPosts = getCataloguePosts();
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
