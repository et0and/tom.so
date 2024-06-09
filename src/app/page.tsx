import type { Metadata } from "next";

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
    <div className="flex flex-col items-center justify-between p-12"></div>
  );
}
