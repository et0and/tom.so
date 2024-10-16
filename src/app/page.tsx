import type { Metadata } from "next";
import TrailingImage from "@/components/ui/trailing-image/trailing-image";

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "https://tom.so/api/og?title=Design engineer from Pōneke, Aotearoa",
        width: 1200,
        height: 630,
        alt: "Tom Hackshaw",
      },
    ],
  },
};

export function generateStaticParams() {
  return [{}];
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow items-center justify-center transition grayscale hidden md:flex max-w-5xl">
        <TrailingImage />
      </div>
    </div>
  );
}
