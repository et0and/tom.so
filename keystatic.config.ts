import { config, fields, collection } from "@keystatic/core";
import { inline, block } from "@keystatic/core/content-components";

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
        content: fields.mdx({
          label: "Content",
          components: {
            Banner: inline({
              label: "Banner",
              schema: {
                variant: fields.select({
                  label: "Types",
                  options: [
                    { label: "Info", value: "info" },
                    { label: "Maintenance", value: "maintenance" },
                    { label: "error", value: "error" },
                  ],
                  defaultValue: "info",
                }),
                title: fields.text({ label: "Title" }),
                message: fields.text({ label: "Message" }),
                linkName: fields.text({ label: "Link name" }),
                linkUrl: fields.text({ label: "Link URL" }),
              },
            }),
            Arena: block({
              label: "Arena",
              schema: {
                channelSlug: fields.text({ label: "Channel slug" }),
              },
            }),
            YoutubeEmbed: block({
              label: "Youtube",
              schema: {
                channelSlug: fields.text({ label: "Video ID" }),
              },
            }),
          },
        }),
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
        content: fields.mdx({
          label: "Content",
          components: {
            Banner: inline({
              label: "Banner",
              schema: {
                variant: fields.select({
                  label: "Types",
                  options: [
                    { label: "Info", value: "info" },
                    { label: "Maintenance", value: "maintenance" },
                    { label: "error", value: "error" },
                  ],
                  defaultValue: "info",
                }),
                title: fields.text({ label: "Title" }),
                message: fields.text({ label: "Message" }),
                linkName: fields.text({ label: "Link name" }),
                linkUrl: fields.text({ label: "Link URL" }),
              },
            }),
            Arena: block({
              label: "Arena",
              schema: {
                channelSlug: fields.text({ label: "Channel slug" }),
              },
            }),
            YoutubeEmbed: block({
              label: "Youtube",
              schema: {
                channelSlug: fields.text({ label: "Video ID" }),
              },
            }),
          },
        }),
      },
    }),
  },
});
