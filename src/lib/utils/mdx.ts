import { MDXData, Metadata } from "@/types/mdxData";
import { parseFrontmatter } from "./frontmatter";
import fs from "fs";
import path from "path";
import { cache } from "react";

/**
 * MDX utility functions for file operations
 */

/**
 * Get all MDX files from a directory
 */
export function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

/**
 * Read and parse a single MDX file
 */
export function readMDXFile(filePath: string): {
  metadata: Metadata;
  content: string;
} {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

/**
 * Get all MDX data from a directory with caching
 */
export const getMDXData = cache((dir: string): MDXData[] => {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata,
      slug,
      content,
    };
  });
});