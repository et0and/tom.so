import { Metadata } from "next";
import { getWorkPosts } from "@/app/db/work";
import Link from "next/link";
import { Separator } from "@/components/ui/separator/separator";
import { Banner } from "@/components/ui/banner/banner";

export const metadata: Metadata = {
  title: "Work",
  description: "Things I have made.",
};

interface WorkPost {
  slug: string;
  metadata: {
    title: string;
    summary: string;
  };
}

async function getStaticWorkPosts(): Promise<WorkPost[]> {
  const posts = await getWorkPosts();
  return posts.map(({ slug, metadata }) => ({
    slug,
    metadata: {
      title: metadata.title,
      summary: metadata.summary,
    },
  }));
}

export default async function WorkPage() {
  const allWorks = await getStaticWorkPosts();

  const sortedWorks = allWorks.sort((a, b) =>
    a.metadata.title
      .toLowerCase()
      .localeCompare(b.metadata.title.toLowerCase()),
  );

  return (
    <>
      <div className="w-full relative">
        <Banner
          title="Content migration"
          message="All previous work and experiments are currently being migrated onto this new website."
          variant="info"
        />

        <h1 className="font-medium text-4xl pt-4">Work</h1>
        <Separator className="my-4" />
        {sortedWorks.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-200 space-y-1 mb-4"
            href={`/work/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-2xl font-medium tracking-tighter">
                {post.metadata.title}
              </p>
              <p className="text-lg">{post.metadata.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
