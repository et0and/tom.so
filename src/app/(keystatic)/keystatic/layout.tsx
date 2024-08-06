import { Metadata } from "next";
import KeystaticApp from "./keystatic";

export const metadata: Metadata = {
  metadataBase: new URL("https://tom.so"),
  title: {
    default: "Admin",
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

export default function Layout() {
  return <KeystaticApp />;
}
