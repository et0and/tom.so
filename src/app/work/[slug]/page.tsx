import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CustomMDX } from "@/components/mdx";
import { getWorkPosts } from "@/app/db/work";
import { unstable_noStore as noStore } from "next/cache";
import { Separator } from "@/components/ui/separator/separator";
import { Skeleton } from "@/components/ui/skeleton/skeleton";
import { Suspense } from "react";

interface PageParams {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata | undefined> {
  let post = getWorkPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = post.metadata;
  let ogImage = `https://tom.so/api/og?title=${encodeURIComponent(title)}`;

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

function formatDate(date: string): string {
  noStore();
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
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

export default function Work({ params }: PageParams) {
  let post = getWorkPosts().find((post) => post.slug === params.slug);

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

        <Suspense fallback={<Skeleton className="h-4 w-[300px]" />}>
          <h1 className="title pt-4 font-medium text-2xl tracking-tighter max-w-[650px]">
            {post.metadata.title}
          </h1>
        </Suspense>
        <Suspense fallback={<Skeleton className="h-4 w-[300px]" />}>
          <p className="text-md text-neutral-700 dark:text-neutral-200 tracking-tighter">
            {post.metadata.summary}
          </p>
        </Suspense>
        <Separator className="my-4" />
        <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]"></div>
        <Suspense fallback={<Skeleton className="h-4 w-[300px]" />}>
          <article className="prose prose-quoteless prose-neutral space-y-4 pb-8">
            <CustomMDX source={post.content} />
          </article>
        </Suspense>
      </section>
    </>
  );
}
