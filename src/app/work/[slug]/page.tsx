import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getWorkPosts } from "@/app/db/work";
import { Separator } from "@/components/ui/separator/separator";
import { cache, Suspense } from "react";

interface PageParams {
  params: {
    slug: string;
  };
}

interface WorkPost {
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
  async (slug: string): Promise<WorkPost | undefined> => {
    const posts = await getWorkPosts();
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
      url: `https://tom.so/work/${post.slug}`,
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
  const posts = await getWorkPosts();
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
function PostContent({ post }: { post: WorkPost }) {
  return (
    <>
      <h1 className="title pt-4 font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <p className="text-md text-neutral-700 dark:text-neutral-200 tracking-tighter">
        {post.metadata.summary}
      </p>
      <Separator className="my-4" />
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-700 dark:text-neutral-200">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose prose-quoteless prose-neutral space-y-4 pb-8">
        <CustomMDX source={post.content} />
      </article>
    </>
  );
}

function PostSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
      <div className="h-px bg-gray-200 w-full my-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
        ))}
      </div>
    </div>
  );
}

export default async function Work({ params }: PageParams) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `https://tom.so${post.metadata.image}`
                : `https://tom.so/og?title=${post.metadata.title}`,
              url: `https://tom.so/work/${post.slug}`,
              author: {
                "@type": "Person",
                name: "Tom Hackshaw",
              },
            }),
          }}
        />
        <Suspense fallback={<PostSkeleton />}>
          <PostContent post={post} />
        </Suspense>
      </section>
    </>
  );
}
