import { ContentService } from "@/lib/services/content";
import { ContentType } from "@/types/contentType";
import { MDXData } from "@/types/mdxData";

// Re-export for backward compatibility
export const getPostBySlug = ContentService.getPostBySlug;
export const generateBasePath = ContentService.generateBasePath;
