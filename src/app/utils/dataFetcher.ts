import { getPaginatedPosts } from "../actions/getPaginatedPosts";
import { ContentType } from "@/types/contentType";

const POSTS_PER_PAGE = 10;

export async function fetchPaginatedContent(
  contentType: ContentType,
  page: number,
) {
  switch (contentType) {
    case "posts":
      return getPaginatedPosts(page, POSTS_PER_PAGE, contentType);
    case "work":
      return getPaginatedPosts(page, POSTS_PER_PAGE, contentType);
    case "catalogue":
      return getPaginatedPosts(page, POSTS_PER_PAGE, contentType);
    default:
      throw new Error(`Unknown content type: ${contentType}`);
  }
}
