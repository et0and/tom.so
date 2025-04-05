import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookshelf | Tom Hackshaw",
  description: "Books I want to read",
  openGraph: {
    title: "Bookshelf",
    description: "Books I want to read.",
    type: "website",
    images: [
      {
        url: "https://tom.so/api/og?title=Bookshelf",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookshelf | Tom Hackshaw",
    description: "Books I want to read.",
    images: [
      {
        url: "https://tom.so/api/og?title=Bookshelf",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function BookshelfLayout({
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
