import { ContentType } from "@/types/contentType";
import { ContentService } from "@/lib/services/content";
import {
  ContentServiceOptions,
  PaginatedResponse,
} from "@/lib/types/service-responses";
import { MDXData } from "@/types/mdxData";

/**
 * Configuration for content fetching
 */
const POSTS_PER_PAGE = 10;

/**
 * Unified content fetcher for different content types
 */
export async function fetchPaginatedContent(
  contentType: ContentType,
  page: number,
  options?: ContentServiceOptions,
): Promise<PaginatedResponse<MDXData>> {
  return ContentService.getPaginatedPosts(
    contentType,
    page,
    POSTS_PER_PAGE,
    options,
  );
}

/**
 * Fetch all content for a specific type
 */
export async function fetchAllContent(
  contentType: ContentType,
  options?: ContentServiceOptions,
): Promise<MDXData[]> {
  return ContentService.getPosts(contentType, options)();
}

/**
 * Fetch single content item by slug
 */
export async function fetchContentBySlug(
  contentType: ContentType,
  slug: string,
): Promise<MDXData | undefined> {
  return ContentService.getPostBySlug(contentType, slug);
}
