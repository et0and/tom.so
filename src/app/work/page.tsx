import { Metadata } from 'next'
import { getWorkPosts } from "@/app/db/work"
import Link from "next/link"
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Work",
  description: "Things I have made.",
}

export default function WorkPage() {
  let allWorks = getWorkPosts();

  return (
    <>
      <div className="w-full">
      <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          Work
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
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