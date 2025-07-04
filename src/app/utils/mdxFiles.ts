import { MDXData, Metadata } from "@/types/mdxData";
import { parseFrontmatter } from "./parseFrontmatter";
import fs from "fs";
import path from "path";
import { cache } from "react";

export function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export function readMDXFile(filePath: string): {
  metadata: Metadata;
  content: string;
} {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

export const getMDXData = cache((dir: string): MDXData[] => {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
});
