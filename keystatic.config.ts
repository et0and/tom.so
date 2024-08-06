import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: `et0and/tom.so`,
  },
  ui: {
    brand: { name: "Tom Hackshaw" },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        summary: fields.text({ label: "Summary" }),
        publishedAt: fields.date({ label: "Published date" }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
    works: collection({
      label: "Works",
      slugField: "title",
      path: "work/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        summary: fields.text({ label: "Summary" }),
        publishedAt: fields.date({ label: "Published date" }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },
});
