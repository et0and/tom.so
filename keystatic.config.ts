import { config, fields, collection } from "@keystatic/core";
import { inline, block } from "@keystatic/core/content-components";

export default config({
  storage: {
    kind: "github",
    repo: "et0and/tom.so",
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
                    itemLabel: (props) => props.value?.filename || "Image",
                  },
                ),
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
          options: {
            image: {
              directory: "public",
              publicPath: "/",
            },
          },
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
                    itemLabel: (props) => props.value?.filename || "Image",
                  },
                ),
              },
            }),
          },
        }),
      },
    }),
    catalogue: collection({
      label: "Catalogue",
      slugField: "title",
      path: "catalogue/*",
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
          options: {
            image: {
              directory: "public",
              publicPath: "/",
            },
          },
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
                    itemLabel: (props) => props.value?.filename || "Image",
                  },
                ),
              },
            }),
          },
        }),
      },
    }),
  },
});
