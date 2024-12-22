import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "@/components/ui/footer/footer";
import "./globals.css";
import { SkipLink } from "@/components/ui/skiplink/skiplink";

export const viewport: Viewport = {
  themeColor: "white",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tom.so"),
  title: {
    default: "Tom Hackshaw",
    template: "%s | Tom Hackshaw",
  },
  description: "Tom Hackshaw is a design engineer from Pōneke, Aotearoa",
  openGraph: {
    title: "Tom Hackshaw",
    description: "Tom Hackshaw is a design engineer from Pōneke, Aotearoa",
    url: "https://tom.so",
    siteName: "Tom Hackshaw",
    locale: "en_NZ",
    type: "website",
    images: [
      {
        url: "https://tom.so/api/og?title=Tom Hackshaw",
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Tom Hackshaw",
    card: "summary_large_image",
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <meta name="msvalidate.01" content="0C22B5C633DBEB514739694102A8D398" />
        <meta
          name="theme-color"
          content="rgb(28 25 23)"
          media="(prefers-color-scheme: dark)"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="Tom Hackshaw is a design engineer from Pōneke, Aotearoa."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed for Tom Hackshaw's blog"
          href="/rss.xml"
        />
      </head>
      <body className="antialiased w-full lg:mx-auto dark:bg-stone-900 dark:text-white">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50">
          <SkipLink />
        </div>
        <Navbar />
        <main id="main" className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
