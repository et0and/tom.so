import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import "./globals.css";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "white",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tom.so"),
  title: {
    default: "Tom Hackshaw",
    template: "%s | Tom Hackshaw",
  },
  description: "Design engineer from Pōneke, Aotearoa.",
  openGraph: {
    title: "Tom Hackshaw",
    description: "Design engineer from Pōneke, Aotearoa.",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
        GeistMono.variable
      )}
    >
      <head></head>
      <body className="antialiased w-full px-4 my-8 lg:mx-auto">
        <main className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow flex tracking-tighter flex-col px-2 mx-auto md:px-0">
            <div className="flex-grow flex flex-col">
              <div className="max-w-3xl mx-auto px-4 md:px-0 pt-8 text-pretty">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
