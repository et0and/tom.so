import type { Metadata, Viewport } from "next";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

export const viewport: Viewport = {
  themeColor: "white",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tom.so"),
  title: {
    default: "Tom Hackshaw",
    template: "%s | Tom Hackshaw",
  },
  description: "Tom Hackshaw is a design engineer from Pōneke, Aotearoa.",
  openGraph: {
    title: "Tom Hackshaw",
    description: "Tom Hackshaw is a design engineer from Pōneke, Aotearoa.",
    url: "https://tom.so",
    siteName: "Tom Hackshaw",
    locale: "en_NZ",
    type: "website",
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
    <ViewTransitions>
      <html
        lang="en"
        className={cx(
          "text-black bg-white",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <GoogleTagManager gtmId="GTM-5JMXBJBD" />
        <head>
          <meta
            name="msvalidate.01"
            content="0C22B5C633DBEB514739694102A8D398"
          />
          <meta property="og:image" content="/og.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content="/og.png" />
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
        <body className="antialiased w-full px-4 my-8 lg:mx-auto">
          <Navbar />
          <main id="main" className="min-h-screen flex flex-col">
            <div className="flex-grow flex tracking-tighter flex-col px-2 mx-auto md:px-0">
              <div className="flex-grow flex flex-col">
                <div className="max-w-3xl mx-auto px-4 md:px-0 pt-8 text-pretty">
                  {children}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
