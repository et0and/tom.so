import { StringsDict } from "@/app/utils/strings";

const phrases = {
  // Metadata
  "meta.title": "Accessibility",
  "meta.description": "Accessibility policy of Tom Hackshaw's website",
  "meta.og.title": "Accessibility",
  "meta.og.description": "Accessibility policy of Tom Hackshaw's website",
  "meta.og.image.url":
    "https://tom.so/api/og?title=Accessibility policy of Tom Hackshaw's website",

  // Page Content
  "page.heading": "Accessibility",
  "page.commitment.paragraph":
    "I am committed to providing a website that is accessible to the widest possible audience in accordance with the New Zealand Web Accessibility standards and WCAG guidelines, and am committed to providing a positive experience to all users as I strive to promote accessibility and inclusion.",
  "page.activeWork.paragraph":
    "I am actively working to increase accessibility and usability of my website to everyone. If you are using a screen reader or other auxiliary aid and are having problems using this website, please contact me. Whether you are using assistive technologies like a screen reader, a magnifier, voice recognition software, or captions for videos, my goal is to make your visit to this website a successful and enjoyable experience.",
  "page.contact.paragraph.prefix":
    "If you have difficulty using or accessing any element of this website, please feel free to email me at ",
  "page.contact.emailLink.text": "access@tomhackshaw.com",
  "page.contact.emailLink.href": "mailto:access@tomhackshaw.com",
  "page.contact.paragraph.suffix":
    " and I will work with you to provide the information, item, or element you seek through a communication method that is accessible for you consistent with applicable law.",
  "page.currentSteps.paragraph":
    "I am currently taking a variety of steps and devoting resources to further enhance the accessibility of my website. Currently, I am working on implementing proper keyboard navigation with appropriate hover and focus state. After this I will be looking at colour contrast across the entire site to ensure this meets AA levels or higher.",
  "page.tools.paragraph":
    "Using tools such as WAVE, NVDA, Axe and Lighthouse I am working towards greater accessibility of this website, and hope to work with an independent accessibility consultant sometime in the future to conduct a deeper audit.",
  "page.knownIssues.heading": "Known issues",
  "page.knownIssues.item1":
    "colour contrast is not AA level or higher in some areas",
  "page.knownIssues.item2": "improper ordering of headers on some pages",
  "page.knownIssues.item3":
    "use of technical language on some pages that could use plain language",
};

export const accessibilityPageStrings = StringsDict.from(phrases);
