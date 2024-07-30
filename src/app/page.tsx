import Banner from "@/components/ui/banner";
import type { Metadata } from "next";
import Image from "next/image";

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
      <div className="flex-grow items-center justify-center hidden md:flex">
        <Image
          src="/d.jpg"
          width={500}
          height={500}
          alt="Highly grainy photograph of a classroom that I used to teach in at Westlake Boys High School."
        />
      </div>
    </div>
  );
}
