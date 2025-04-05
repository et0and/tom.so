import {
  createPostPage,
  createPostPageMetadata,
  createPostPageStaticParams,
} from "@/app/utils/createPostPage";

export const generateMetadata = createPostPageMetadata("catalogue");
export const generateStaticParams = createPostPageStaticParams("catalogue");
export default createPostPage("catalogue", "Made on");
