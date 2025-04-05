import {
  createPostPage,
  createPostPageMetadata,
  createPostPageStaticParams,
} from "@/app/utils/createPostPage";

export const generateMetadata = createPostPageMetadata("work");
export const generateStaticParams = createPostPageStaticParams("work");
export default createPostPage("work");
