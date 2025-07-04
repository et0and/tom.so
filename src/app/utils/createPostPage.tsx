import { notFound } from "next/navigation";
import { PostContent } from "@/components/PostContent";
import { generateBasePath } from "./postFetcher";
import { ContentType } from "@/types/contentType";
import { generatePostMetadata } from "./metadataGenerator";
import { getContentPosts } from "../actions/getPosts";
import { getPostBySlug } from "../actions/getPostsBySlug";

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
    const getPostsFunction = await getContentPosts(type);
    const posts = getPostsFunction();

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

    return <PostContent post={post} datePrefix={datePrefix} />;
  };
}
