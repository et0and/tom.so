import Link from "next/link";
import { getWorkPosts } from "@/app/db/work";

export const metadata = {
  title: "Work",
  description: "Things I have made.",
};

export default function WorkPage() {
  let allWorks = getWorkPosts();

  return (
    <>
      <div className="w-full items-center">
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
