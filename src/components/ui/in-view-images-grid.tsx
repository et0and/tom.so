"use client";
import { InView } from "./in-view";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ArenaBlock {
  image: {
    display: {
      url: string;
    };
  };
}

interface InViewImagesGridProps {
  channelSlug: string;
}

export function InViewImagesGrid({ channelSlug }: InViewImagesGridProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/channel?slug=${channelSlug}`);
        const data = await response.json();
        const imageUrls = data.contents
          .filter((block: ArenaBlock) => block.image && block.image.display)
          .map((block: ArenaBlock) => block.image.display.url)
          .slice(0, 7);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [channelSlug]);

  const skeletonItems = Array(7).fill(null);

  return (
    <div className="w-full overflow-auto py-2">
      <div className="flex items-end justify-center pb-4">
        <InView
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-2 gap-4 sm:columns-3">
            {loading
              ? skeletonItems.map((_, index) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    key={`skeleton-${index}`}
                    className="mb-4"
                  >
                    <div className="bg-slate-400 rounded-lg w-full h-48 animate-pulse" />
                  </motion.div>
                ))
              : images.map((imgSrc, index) => (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      },
                    }}
                    key={index}
                    className="mb-4"
                  >
                    <Image
                      src={imgSrc}
                      unoptimized
                      alt={`Image from Are.na channel ${channelSlug}, index:${index}`}
                      className="bg-slate-400 grayscale size-full rounded-lg object-contain"
                      width={500}
                      height={500}
                    />
                  </motion.div>
                ))}
          </div>
        </InView>
      </div>
    </div>
  );
}
