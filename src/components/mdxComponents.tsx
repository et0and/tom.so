"use client";
import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Banner, BannerProps } from "./ui/banner/banner";
import { YouTubeEmbed } from "@next/third-parties/google";
import { InViewImagesGrid } from "./ui/in-view/in-view-images-grid";
import { ArenaCarousel } from "./ui/carousel/arena-carousel";
import ArenaWrapper from "./ui/arena-wrapper/arena-wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel/carousel";

import dynamic from "next/dynamic";

interface TableProps {
  data: {
    headers: string[];
    rows: string[][];
  };
}

function Table({ data }: Readonly<TableProps>) {
  let headers = data.headers.map((header) => <th key={header}>{header}</th>);
  let rows = data.rows.map((row, rowIndex) => (
    <tr key={`row-${rowIndex}-${row.join("-")}`}>
      {row.map((cell, cellIndex) => (
        <td key={`cell-${rowIndex}-${cellIndex}-${cell}`}>{cell}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function UnorderedList(
  props: Readonly<React.HTMLAttributes<HTMLUListElement>>,
) {
  return <ul className="list-disc list-inside" {...props} />;
}

interface YoutubeProps {
  videoid: string;
  height?: number;
  params?: string;
}

function Youtube({ videoid, height = 400, params }: Readonly<YoutubeProps>) {
  return <YouTubeEmbed videoid={videoid} height={height} params={params} />;
}

interface IframeProps {
  src: string;
  title: string;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}

function Iframe({
  src,
  title,
  width = "100%",
  height = "590",
  style = {},
}: Readonly<IframeProps>) {
  return (
    <iframe
      src={src}
      title={title}
      width={width}
      height={height}
      style={{ border: "none", ...style }}
    />
  );
}

function CustomLink(
  props: Readonly<React.AnchorHTMLAttributes<HTMLAnchorElement>>,
) {
  let href = props.href;

  if (href?.startsWith("/")) {
    return (
      <Link href={href} {...props} aria-label={props.children?.toString()}>
        {props.children}
      </Link>
    );
  }

  if (href?.startsWith("#")) {
    return <a {...props} aria-label={props.children?.toString()} />;
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      aria-label={props.children?.toString()}
    />
  );
}
interface CalloutProps {
  emoji: string;
  children: ReactNode;
}

function Callout({ emoji, children }: Readonly<CalloutProps>) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{emoji}</div>
      <div className="w-full callout">{children}</div>
    </div>
  );
}

interface ProsCardProps {
  title: string;
  pros: string[];
}

function ProsCard({ title, pros }: ProsCardProps) {
  return (
    <div className="border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ConsCardProps {
  title: string;
  cons: string[];
}

function ConsCard({ title, cons }: ConsCardProps) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CodeProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: string;
  code?: string;
  language?: string;
}

function Code({
  children,
  code,
  language = "javascript",
  ...props
}: CodeProps) {
  const codeContent = code || children || "";

  return (
    <pre
      className="overflow-x-auto p-4 bg-gray-800 text-gray-100 rounded-lg my-6"
      {...props}
    >
      <code>{codeContent}</code>
    </pre>
  );
}
function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number) {
  return function Heading({ children }: { children: ReactNode }) {
    let slug = slugify(children?.toString() || "");
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };
}

export const clientComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  InViewImagesGrid: ({ channelSlug }: { channelSlug: string }) => (
    <InViewImagesGrid channelSlug={channelSlug} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return (
      <Image
        src={props.src || ""}
        alt={props.alt || ""}
        width={500}
        height={400}
        className="grayscale bg-stone-300"
      />
    );
  },
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  code: Code,
  Code: Code,
  Table,
  Arena: ArenaWrapper,
  ArenaCarousel: ({ channelSlug }: { channelSlug: string }) => (
    <ArenaCarousel channelSlug={channelSlug} />
  ),
  Youtube,
  Iframe,
  Banner: (props: BannerProps) => <Banner {...props} />,
  ul: UnorderedList,
  Carousel: ({ images }: { images: string[] }) => (
    <Carousel>
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              width={500}
              height={300}
              className="w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
