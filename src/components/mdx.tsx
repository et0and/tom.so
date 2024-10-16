import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { clientComponents } from "./mdxComponents";
import { ComponentType, ReactNode } from "react";
import { ArenaCarousel } from "./ui/carousel/arena-carousel";
import { Banner } from "./ui/banner/banner";
import { InViewImagesGrid } from "./ui/in-view/in-view-images-grid";
import ModelViewer from "./ui/model-viewer/model-viewer";
import { Carousel } from "./ui/carousel/carousel";
import { YouTubeEmbed } from "@next/third-parties/google";
import ArenaWrapper from "./ui/arena-wrapper/arena-wrapper";

// Define a type for the components that matches MDXRemote's expectations
type MDXComponents = {
  [key: string]: ComponentType<any>;
};

// Create a function to convert our client components to the expected type
function convertComponents(components: typeof clientComponents): MDXComponents {
  const convertedComponents: MDXComponents = {};
  for (const [key, Component] of Object.entries(components)) {
    convertedComponents[key] = Component as ComponentType<any>;
  }
  return convertedComponents;
}

export function CustomMDX(props: MDXRemoteProps) {
  const convertedClientComponents = convertComponents(clientComponents);
  const convertedPropsComponents = props.components
    ? convertComponents(props.components as typeof clientComponents)
    : {};

  return (
    <MDXRemote
      {...props}
      components={{
        ...convertedClientComponents,
        ...convertedPropsComponents,
        ArenaCarousel: ArenaCarousel,
        Banner: Banner,
        InViewImagesGrid: InViewImagesGrid,
        ModelViewer: ModelViewer,
        Carousel: Carousel,
        YoutubeEmbed: YouTubeEmbed,
        Arena: ArenaWrapper,
      }}
    />
  );
}
