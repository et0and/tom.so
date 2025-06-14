import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drawings | Tom Hackshaw",
  description: "Stuff I am working on",
  openGraph: {
    title: "Drawings",
    description: "Stuff I am working on",
    type: "website",
    images: [
      {
        url: "https://tom.so/api/og?title=Drawings",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drawings | Tom Hackshaw",
    description: "Stuff I am working on",
    images: [
      {
        url: "https://tom.so/api/og?title=Drawings",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function DrawingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-grow flex tracking-tighter flex-col px-2 mx-auto md:px-0">
      <div className="flex-grow flex flex-col">
        <div className="max-w-5xl mx-auto px-4 md:px-0 pt-8 text-pretty">
          {children}
        </div>
      </div>
    </div>
  );
}
