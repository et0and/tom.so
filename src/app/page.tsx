import Banner from "@/components/ui/banner";
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
    <div className="items-center p-2">
      <Banner
        title="Website upgrade"
        message='This website is running on a new stack, and may contain a few bugs until these can be fixed. <a href="https://github.com/et0and/tom.so" class="underline hover:text-gray-300">More information</a>.'
        variant="warning"
      />
    </div>
  );
}
