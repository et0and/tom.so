import type { Metadata } from "next";
import Image from "next/image";

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

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <div className="flex items-center justify-center transition grayscale flex max-w-5xl mx-auto px-4 py-16">
        <Image
          src="/scribs.svg"
          width={500}
          height={500}
          alt="Snippet from my diary"
          className="mt-8"
        />
      </div>
    </div>
  );
}
