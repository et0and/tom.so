import { CustomMDX } from "@/components/mdx";
import { Separator } from "@/components/ui/separator/separator";
import { formatDate } from "@/utils/dateFormatter";
import { Post } from "@/types/postType";

interface PostContentProps {
  post: Post;
  datePrefix?: string;
}

export function PostContent({
  post,
  datePrefix = "",
}: Readonly<PostContentProps>) {
  return (
    <section>
      <h1 className="title pt-4 font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <p className="text-md text-neutral-700 dark:text-neutral-200 tracking-tighter">
        {post.metadata.summary}
      </p>
      <Separator className="my-4" />
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-700 dark:text-neutral-200">
          {datePrefix} {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose prose-quoteless prose-neutral space-y-4 pb-8">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
