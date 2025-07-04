import { Metadata } from "@/types/mdxData";

export function parseFrontmatter(fileContent: string): {
  metadata: Metadata;
  content: string;
} {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match?.[1] ?? "";
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof Metadata] = value;
  });

  if (!metadata.title || !metadata.publishedAt || !metadata.summary) {
    throw new Error("Invalid frontmatter: missing required fields");
  }

  return { metadata: metadata as Metadata, content };
}
