import { notFound } from "next/navigation";
import { PostContent } from "@/components/PostContent";
import { ContentType } from "@/types/contentType";
import { ContentService } from "@/lib/services/content";
import { generatePostMetadata } from "@/lib/utils/metadata";

/**
 * Factory functions for creating post pages with consistent behavior
 */

/**
 * Create metadata generator for post pages
 */
export function createPostPageMetadata(type: ContentType) {
  return async function generateMetadata({
    params,
  }: {
    params: { slug: string };
  }) {
    const post = await ContentService.getPostBySlug(type, params.slug);
    if (!post) return;

    const basePath = ContentService.generateBasePath(type);
    return generatePostMetadata(post, basePath);
  };
}

/**
 * Create static params generator for post pages
 */
export function createPostPageStaticParams(type: ContentType) {
  return async function generateStaticParams() {
    const posts = ContentService.getPosts(type)();

    return posts.map((post) => ({
      slug: post.slug,
    }));
  };
}

/**
 * Create post page component
 */
export function createPostPage(type: ContentType, datePrefix?: string) {
  return async function PostPage({ params }: { params: { slug: string } }) {
    const post = await ContentService.getPostBySlug(type, params.slug);

    if (!post) {
      notFound();
    }

    return <PostContent post={post} datePrefix={datePrefix} />;
  };
}