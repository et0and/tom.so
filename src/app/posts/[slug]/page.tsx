import {
  createPostPage,
  createPostPageMetadata,
  createPostPageStaticParams,
} from "@/app/utils/createPostPage";

export const generateMetadata = createPostPageMetadata("posts");
export const generateStaticParams = createPostPageStaticParams("posts");
export default createPostPage("posts");
