import { ArenaChannel } from "@/types/arena";
import { baseUrl } from "@/lib/url";
import { ServiceException } from "@/lib/utils/error-handling";
import { ArenaServiceOptions } from "@/lib/types/service-responses";

/**
 * Are.na service for managing API operations
 */
export class ArenaService {
  private static readonly DEFAULT_PER_PAGE = 12;
  private static readonly DEFAULT_CACHE_REVALIDATE = 3600; // 1 hour
  private static readonly DEFAULT_TIMEOUT = 10000; // 10 seconds

  /**
   * Fetch arena channel data with pagination
   */
  static async getChannelData(
    slug: string,
    page: number = 1,
    perPage: number = this.DEFAULT_PER_PAGE,
    options: ArenaServiceOptions = {},
  ): Promise<ArenaChannel> {
    const {
      cacheRevalidate = this.DEFAULT_CACHE_REVALIDATE,
      timeout = this.DEFAULT_TIMEOUT,
    } = options;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const res = await fetch(
        `${baseUrl}/api/channel?slug=${slug}&page=${page}&perPage=${perPage}`,
        {
          next: { revalidate: cacheRevalidate },
          signal: controller.signal,
        },
      );

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new ServiceException(
          `Failed to fetch arena channel data for slug: ${slug}`,
          "ARENA_FETCH_ERROR",
          res.status,
        );
      }

      return res.json();
    } catch (error) {
      if (error instanceof ServiceException) {
        throw error;
      }

      if (error instanceof Error && error.name === "AbortError") {
        throw new ServiceException(
          `Request timeout while fetching arena channel: ${slug}`,
          "ARENA_TIMEOUT_ERROR",
          408,
        );
      }

      throw new ServiceException(
        `Unexpected error fetching arena channel: ${slug}`,
        "ARENA_UNKNOWN_ERROR",
      );
    }
  }
}
