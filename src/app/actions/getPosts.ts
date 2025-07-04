"use server";

import { MDXData } from "@/types/mdxData";
import { cache } from "react";
import { getMDXData } from "../utils/mdxFiles";
import path from "path";
import { ContentType } from "@/types/contentType";

export const getPosts = (contentType: string): (() => MDXData[]) =>
  cache((): MDXData[] => {
    return getMDXData(path.join(process.cwd(), "(content)", `${contentType}`));
  });

export const getContentPosts = async (type: ContentType) => {
  switch (type) {
    case "posts":
      return getPosts("posts");
    case "work":
      return getPosts("work");
    case "catalogue":
      return getPosts("catalogue");
    default:
      throw new Error(`Unknown content type: ${type}`);
  }
};
