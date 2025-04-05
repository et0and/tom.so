"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Suspense } from "react";

interface ArenaCarouselClientProps {
  images: Array<{ url: string; title: string }>;
  channelSlug: string;
}

export function ArenaCarouselClient({
  images,
  channelSlug,
}: Readonly<ArenaCarouselClientProps>) {
  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative">
      <CarouselContent className="h-full flex items-center">
        {images.map((img) => (
          <CarouselItem
            key={img.url}
            className="h-full flex items-center justify-center"
          >
            <div className="py-4 h-full flex items-center justify-center">
              <Suspense fallback={<div>Loading image...</div>}>
                <Image
                  src={img.url}
                  alt={img.title || `Image from Are.na channel ${channelSlug}`}
                  className="max-w-full max-h-full w-auto h-auto object-contain shadow-lg grayscale"
                  width={500}
                  height={500}
                />
              </Suspense>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
