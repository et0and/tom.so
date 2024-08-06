import { Metadata } from "next";
import { getWorkPosts } from "@/app/db/work";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Banner } from "@/components/ui/banner";

export const metadata: Metadata = {
  title: "Work",
  description: "Things I have made.",
};

export default function WorkPage() {
  let allWorks = getWorkPosts();

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
        {allWorks
          .sort((a, b) => {
            if (
              a.metadata.title.toLowerCase() < b.metadata.title.toLowerCase()
            ) {
              return -1;
            }
            if (
              a.metadata.title.toLowerCase() > b.metadata.title.toLowerCase()
            ) {
              return 1;
            }
            return 0;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col hover:text-blue-700 transition-colors duration-200 space-y-1 mb-4"
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
