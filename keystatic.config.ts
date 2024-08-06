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
      previewUrl: `/preview/start?branch={branch}&to=/posts/{slug}`,
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        summary: fields.text({ label: "Summary" }),
        publishedAt: fields.date({ label: "Published date" }),
        file: fields.file({
          label: "File",
          description: "Upload a file to link to this post",
          directory: "public/",
          publicPath: "/",
        }),
        comment: fields.text({
          label: "Comment",
          multiline: true,
        }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
    works: collection({
      label: "Works",
      slugField: "title",
      path: "work/*",
      previewUrl: `/preview/start?branch={branch}&to=/work/{slug}`,
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        summary: fields.text({ label: "Summary" }),
        publishedAt: fields.date({ label: "Published date" }),
        file: fields.file({
          label: "File",
          description: "Upload a file to link to this post",
          directory: "public/",
          publicPath: "/",
        }),
        comment: fields.text({
          label: "Comment",
          multiline: true,
        }),
        content: fields.mdx({ label: "Content" }),
      },
    }),
  },
});
