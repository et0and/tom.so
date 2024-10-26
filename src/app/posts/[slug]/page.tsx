import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getBlogPosts } from "@/app/db/blog";
import { Separator } from "@/components/ui/separator/separator";
import { cache, Suspense } from "react";

interface PageParams {
  params: {
    slug: string;
  };
}

interface BlogPost {
  slug: string;
  content: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
}

const getPostBySlug = cache(
  async (slug: string): Promise<BlogPost | undefined> => {
    const posts = await getBlogPosts();
    return posts.find((post) => post.slug === slug);
  },
);

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata | undefined> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;
  const ogImage = `https://tom.so/api/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://tom.so/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function formatDate(date: string): string {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const timeDifference = Math.abs(currentDate.getTime() - targetDate.getTime());
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const fullDate = targetDate.toLocaleString("en-nz", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo} days ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo} weeks ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo} months ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo} years ago)`;
  }
}

function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <>
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              // ... existing code ...
            }),
          }}
        />
        <h1 className="title pt-4 font-medium text-2xl tracking-tighter max-w-[650px]">
          {post.metadata.title}
        </h1>
        <p className="text-md text-neutral-700 dark:text-neutral-200 tracking-tighter">
          {post.metadata.summary}
        </p>

        <div className="flex justify-between items-center mt-2 mb-6 text-sm max-w-[650px]">
          <p className="text-sm text-neutral-700 dark:text-neutral-200">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <Separator className="mt-4 mb-8" />
        <article className="prose prose-quoteless prose-neutral space-y-4 pb-8">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </>
  );
}

export default async function Blog({ params }: PageParams) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 dark:bg-gray-700 rounded"
              ></div>
            ))}
          </div>
        </div>
      }
    >
      <BlogPostContent post={post} />
    </Suspense>
  );
}
