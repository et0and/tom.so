"use server";

import { cache } from "react";
import { ContentType } from "@/types/contentType";
import { MDXData } from "@/types/mdxData";
import { getMDXData } from "@/lib/utils/mdx";
import { ServiceException } from "@/lib/utils/error-handling";
import { ContentServiceOptions, PaginatedResponse } from "@/lib/types/service-responses";
import path from "path";

/**
 * Content service for managing MDX content operations
 */
export class ContentService {
  private static getContentPath(contentType: ContentType): string {
    return path.join(process.cwd(), "(content)", contentType);
  }

  private static validateContentType(contentType: ContentType): void {
    const validTypes: ContentType[] = ["posts", "work", "catalogue"];
    if (!validTypes.includes(contentType)) {
      throw new ServiceException(
        `Invalid content type: ${contentType}. Valid types are: ${validTypes.join(", ")}`,
        'INVALID_CONTENT_TYPE',
      );
    }
  }

  private static validatePaginationParams(page: number, postsPerPage: number): void {
    if (page < 1) {
      throw new ServiceException('Page number must be greater than 0', 'INVALID_PAGE_NUMBER');
    }
    if (postsPerPage < 1 || postsPerPage > 100) {
      throw new ServiceException('Posts per page must be between 1 and 100', 'INVALID_POSTS_PER_PAGE');
    }
  }

  /**
   * Get all posts for a specific content type with caching
   */
  static getPosts = (contentType: ContentType, options: ContentServiceOptions = {}): (() => MDXData[]) =>
    cache((): MDXData[] => {
      this.validateContentType(contentType);
      
      try {
        const posts = getMDXData(this.getContentPath(contentType));
        
        // Apply sorting
        const { sortBy = 'publishedAt', sortOrder = 'desc' } = options;
        return posts.toSorted((a, b) => {
          let comparison = 0;
          
          if (sortBy === 'title') {
            comparison = a.metadata.title.localeCompare(b.metadata.title);
          } else if (sortBy === 'publishedAt') {
            comparison = new Date(a.metadata.publishedAt).getTime() - new Date(b.metadata.publishedAt).getTime();
          }
          
          return sortOrder === 'desc' ? -comparison : comparison;
        });
      } catch (error) {
        throw new ServiceException(
          `Failed to load content for type: ${contentType}`,
          'CONTENT_LOAD_ERROR',
        );
      }
    });

  /**
   * Get paginated posts for a content type
   */
  static async getPaginatedPosts(
    contentType: ContentType,
    page: number,
    postsPerPage: number,
    options: ContentServiceOptions = {},
  ): Promise<PaginatedResponse<MDXData>> {
    this.validateContentType(contentType);
    this.validatePaginationParams(page, postsPerPage);

    try {
      const allPosts = this.getPosts(contentType, options)();
      const totalItems = allPosts.length;
      const totalPages = Math.ceil(totalItems / postsPerPage);
      const startIndex = (page - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const items = allPosts.slice(startIndex, endIndex);

      return {
        items,
        totalPages,
        currentPage: page,
        totalItems,
      };
    } catch (error) {
      if (error instanceof ServiceException) {
        throw error;
      }
      throw new ServiceException(
        `Failed to get paginated posts for type: ${contentType}`,
        'PAGINATION_ERROR',
      );
    }
  }

  /**
   * Get a single post by slug
   */
  static getPostBySlug = cache(
    async (contentType: ContentType, slug: string): Promise<MDXData | undefined> => {
      this.validateContentType(contentType);
      
      if (!slug || slug.trim() === '') {
        throw new ServiceException('Slug cannot be empty', 'INVALID_SLUG');
      }

      try {
        const posts = this.getPosts(contentType)();
        return posts.find((post) => post.slug === slug);
      } catch (error) {
        if (error instanceof ServiceException) {
          throw error;
        }
        throw new ServiceException(
          `Failed to get post by slug: ${slug} for type: ${contentType}`,
          'POST_FETCH_ERROR',
        );
      }
    },
  );

  /**
   * Generate base path for content type
   */
  static generateBasePath(contentType: ContentType): string {
    this.validateContentType(contentType);
    
    switch (contentType) {
      case "posts":
        return "/posts";
      case "work":
        return "/work";
      case "catalogue":
        return "/work/catalogue";
      default:
        // This should never happen due to validation, but TypeScript requires it
        throw new ServiceException(`Unknown content type: ${contentType}`, 'UNKNOWN_CONTENT_TYPE');
    }
  }
}