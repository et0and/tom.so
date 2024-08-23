import type { Metadata } from "next";
import Image from "next/image";
import TrailingImage from "@/components/ui/trailing-image";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tom Hackshaw",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow items-center justify-center transition grayscale hidden md:flex">
        <TrailingImage />
      </div>
    </div>
  );
}
