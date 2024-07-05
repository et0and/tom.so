import { Metadata } from 'next'
import { getWorkPosts } from "@/app/db/work"
import WorkTable from "@/components/ui/WorkTable"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const metadata: Metadata = {
  title: "Work",
  description: "Things I have made.",
}

export default function WorkPage() {
  const allWorks = getWorkPosts().map(post => ({
    title: post.metadata.title,
    summary: post.metadata.summary,
    date: post.metadata.publishedAt || 'N/A',
    slug: post.slug,
  }))

  return (
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
      <h1 className="font-medium text-4xl mb-4 py-4">Work</h1>
      <WorkTable works={allWorks} />
    </div>
  )
}