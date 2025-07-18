/**
 * Common service response types and error handling
 */

export interface ServiceResponse<T> {
  data?: T;
  error?: ServiceError;
  success: boolean;
}

export interface ServiceError {
  message: string;
  code?: string;
  statusCode?: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
}

/**
 * Content service specific types
 */
export interface ContentServiceOptions {
  sortBy?: "title" | "publishedAt";
  sortOrder?: "asc" | "desc";
  includeUnpublished?: boolean;
}

/**
 * Arena service specific types
 */
export interface ArenaServiceOptions {
  cacheRevalidate?: number;
  timeout?: number;
}
