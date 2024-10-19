import { Separator } from "@/components/ui/separator/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility policy of Tom Hackshaw's website",
  openGraph: {
    title: "Accessibility",
    description: "Accessibility policy of Tom Hackshaw's website",
    images: [
      {
        url: "https://tom.so/api/og?title=Accessibility policy of Tom Hackshaw's website",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export function generateStaticParams() {
  return [{}];
}

export default function Accessibility() {
  return (
    <>
      <h1 className="font-medium text-4xl pt-4">Accessibility</h1>
      <Separator className="my-4" />{" "}
      <p className="pb-4">
        I am committed to providing a website that is accessible to the widest
        possible audience in accordance with the New Zealand Web Accessibility
        standards and WCAG guidelines, and am committed to providing a positive
        experience to all users as I strive to promote accessibility and
        inclusion.
      </p>
      <p className="pb-4">
        I am actively working to increase accessibility and usability of my
        website to everyone. If you are using a screen reader or other auxiliary
        aid and are having problems using this website, please contact me.
        Whether you are using assistive technologies like a screen reader, a
        magnifier, voice recognition software, or captions for videos, my goal
        is to make your visit to this website a successful and enjoyable
        experience.
      </p>
      <p className="pb-4">
        If you have difficulty using or accessing any element of this website,
        please feel free to email me at{" "}
        <a href="mailto:access@tomhackshaw.com" className="link">
          access@tomhackshaw.com
        </a>{" "}
        and I will work with you to provide the information, item, or element
        you seek through a communication method that is accessible for you
        consistent with applicable law.
      </p>
      <p className="pb-4">
        I am currently taking a variety of steps and devoting resources to
        further enhance the accessibility of my website. Currently, I am working
        on implementing proper keyboard navigation with appropriate hover and
        focus state. After this I will be looking at colour contrast across the
        entire site to ensure this meets AA levels or higher.
      </p>
      <p className="pb-4">
        Using tools such as WAVE, NVDA, Axe and Lighthouse I am working towards
        greater accessibility of this website, and hope to work with an
        independent accessibility consultant sometime in the future to conduct a
        deeper audit.
      </p>
      <Separator className="my-4" />
      <h1 className="text-3xl pb-4">Known issues</h1>
      <ul className="pb-8 list-inside list-disc">
        <li>colour contrast is not AA level or higher in some areas</li>
        <li>improper ordering of headers on some pages</li>
        <li>
          use of technical language on some pages that could use plain language
        </li>
      </ul>
    </>
  );
}
