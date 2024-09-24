"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

interface ArenaBlock {
  image: {
    display: {
      url: string;
    };
  };
  title: string;
}

interface ArenaCarouselProps {
  channelSlug: string;
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
    </div>
  );
}

export function ArenaCarousel({ channelSlug }: ArenaCarouselProps) {
  const [images, setImages] = useState<Array<{ url: string; title: string }>>(
    [],
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/channel?slug=${channelSlug}`);
        const data = await response.json();
        const imageData = data.contents
          .filter((block: ArenaBlock) => block.image && block.image.display)
          .map((block: ArenaBlock) => ({
            url: block.image.display.url,
            title: block.title,
          }))
          .slice(0, 5);
        setImages(imageData);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [channelSlug]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto relative">
      <CarouselContent className="h-full flex items-center">
        {images.map((img, index) => (
          <CarouselItem
            key={index}
            className="h-full flex items-center justify-center"
          >
            <div className="py-4 h-full flex items-center justify-center">
              <Image
                src={img.url}
                unoptimized
                alt={img.title || `Image from Are.na channel ${channelSlug}`}
                className="max-w-full max-h-full w-auto h-auto object-contain shadow-lg grayscale"
                width={500}
                height={500}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
