import {
  createPostPage,
  createPostPageMetadata,
  createPostPageStaticParams,
} from "@/app/utils/createPostPage";

export const generateMetadata = createPostPageMetadata("blog");
export const generateStaticParams = createPostPageStaticParams("blog");
export default createPostPage("blog");
