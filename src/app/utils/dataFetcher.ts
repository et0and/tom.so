import { getPaginatedBlogPosts } from "@/app/db/blog";
import { getPaginatedWorkPosts } from "@/app/db/work";
import { getPaginatedCataloguePosts } from "@/app/db/catalogue";

const POSTS_PER_PAGE = 10;

export type ContentType = "blog" | "work" | "catalogue";

export async function fetchPaginatedContent(
  contentType: ContentType,
  page: number,
) {
  switch (contentType) {
    case "blog":
      return getPaginatedBlogPosts(page, POSTS_PER_PAGE);
    case "work":
      return getPaginatedWorkPosts(page, POSTS_PER_PAGE);
    case "catalogue":
      return getPaginatedCataloguePosts(page, POSTS_PER_PAGE);
    default:
      throw new Error(`Unknown content type: ${contentType}`);
  }
}
