import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PostContent } from "@/components/PostContent";
import { ContentType, getPostBySlug, generateBasePath } from "./postFetcher";
import { generatePostMetadata } from "./metadataGenerator";
import { getBlogPosts } from "../db/blog";
import { getCataloguePosts } from "../db/catalogue";
import { getWorkPosts } from "../db/work";

export function createPostPageMetadata(type: ContentType) {
  return async function generateMetadata({
    params,
  }: {
    params: { slug: string };
  }) {
    const post = await getPostBySlug(type, params.slug);
    if (!post) return;

    const basePath = generateBasePath(type);
    return generatePostMetadata(post, basePath);
  };
}

export function createPostPageStaticParams(type: ContentType) {
  return async function generateStaticParams() {
    let posts;

    switch (type) {
      case "blog":
        posts = getBlogPosts();
        break;
      case "work":
        posts = getWorkPosts();
        break;
      case "catalogue":
        posts = getCataloguePosts();
        break;
      default:
        throw new Error(`Woops, unknown content type: ${type}`);
    }

    return posts.map((post) => ({
      slug: post.slug,
    }));
  };
}

export function createPostPage(type: ContentType, datePrefix?: string) {
  return async function PostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(type, params.slug);

    if (!post) {
      notFound();
    }

    return (
      <Suspense fallback={<div className="w-full">Loading content...</div>}>
        <PostContent post={post} datePrefix={datePrefix} />
      </Suspense>
    );
  };
}
