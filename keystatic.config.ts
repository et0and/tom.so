import { config, fields, collection } from "@keystatic/core";
import { inline, block } from "@keystatic/core/content-components";

// Common components used across all collections
const commonComponents = {
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
  ModelViewer: block({
    label: "3D Model Viewer",
    schema: {
      modelFile: fields.file({
        label: "3D Model File",
        directory: "public/assets/3d",
        publicPath: "/assets/3d",
      }),
    },
  }),
  ArenaCarousel: block({
    label: "Arena Carousel",
    schema: {
      channelSlug: fields.text({ label: "Channel slug" }),
    },
  }),
  Code: block({
    label: "Code Block",
    schema: {
      language: fields.select({
        label: "Language",
        options: [
          { label: "JavaScript", value: "javascript" },
          { label: "TypeScript", value: "typescript" },
          { label: "Python", value: "python" },
          { label: "HTML", value: "html" },
          { label: "CSS", value: "css" },
          { label: "Bash", value: "bash" },
        ],
        defaultValue: "javascript",
      }),
      code: fields.text({
        label: "Code",
        multiline: true,
      }),
    },
  }),
  InViewImagesGrid: block({
    label: "Arena grid",
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
  Carousel: block({
    label: "Image Carousel",
    schema: {
      images: fields.array(
        fields.image({
          label: "Image",
          directory: "public/carousel",
          publicPath: "/carousel",
        }),
        {
          label: "Carousel Images",
          itemLabel: (props) => props.value?.filename ?? "Image",
        },
      ),
    },
  }),
};

// Common schema used across all collections
const commonSchema = {
  title: fields.slug({
    name: { label: "Title", validation: { isRequired: true } },
  }),
  summary: fields.text({ label: "Summary", validation: { isRequired: true } }),
  publishedAt: fields.date({
    label: "Published date",
    validation: { isRequired: true },
  }),
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
    options: {
      image: {
        directory: "public",
        publicPath: "/",
      },
    },
    components: commonComponents,
  }),
}; // Helper function to create a collection with common configuration
const createCollection = (
  label: string,
  path:
    | `${string}/*`
    | `${string}/**`
    | `${string}/*/${string}`
    | `${string}/**/${string}`,
) =>
  collection({
    label,
    slugField: "title",
    path,
    format: { contentField: "content" },
    schema: commonSchema,
  });

export default config({
  storage: {
    kind: "github",
    repo: "et0and/tom.so",
  },
  ui: {
    brand: { name: "Tom Hackshaw" },
  },
  collections: {
    posts: createCollection("Posts", "(content)/posts/*"),
    works: createCollection("Works", "(content)/work/*"),
    catalogue: createCollection("Catalogue", "(content)/catalogue/*"),
  },
});
