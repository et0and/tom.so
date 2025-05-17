import { Separator } from "@/components/ui/separator/separator";
import type { Metadata } from "next";
import { accessibilityPageStrings } from "./strings";

export const metadata: Metadata = {
  title: accessibilityPageStrings.t("meta.title"),
  description: accessibilityPageStrings.t("meta.description"),
  openGraph: {
    title: accessibilityPageStrings.t("meta.og.title"),
    description: accessibilityPageStrings.t("meta.og.description"),
    images: [
      {
        url: accessibilityPageStrings.t("meta.og.image.url"),
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Accessibility() {
  const S = accessibilityPageStrings.Component; // Optional: for cleaner JSX
  return (
    <>
      <h1 className="font-medium text-4xl pt-4">
        {accessibilityPageStrings.t("page.heading")}
      </h1>
      <Separator className="my-4" />{" "}
      <p className="pb-4">
        {accessibilityPageStrings.t("page.commitment.paragraph")}
      </p>
      <p className="pb-4">
        {accessibilityPageStrings.t("page.activeWork.paragraph")}
      </p>
      <p className="pb-4">
        {accessibilityPageStrings.t("page.contact.paragraph.prefix")}
        <a
          href={accessibilityPageStrings.t("page.contact.emailLink.href")}
          className="link"
        >
          {accessibilityPageStrings.t("page.contact.emailLink.text")}
        </a>
        {accessibilityPageStrings.t("page.contact.paragraph.suffix")}
      </p>
      <p className="pb-4">
        {accessibilityPageStrings.t("page.currentSteps.paragraph")}
      </p>
      <p className="pb-4">
        {accessibilityPageStrings.t("page.tools.paragraph")}
      </p>
      <Separator className="my-4" />
      <h1 className="text-3xl pb-4">
        {accessibilityPageStrings.t("page.knownIssues.heading")}
      </h1>
      <ul className="pb-8 list-inside list-disc">
        <li>{accessibilityPageStrings.t("page.knownIssues.item1")}</li>
        <li>{accessibilityPageStrings.t("page.knownIssues.item2")}</li>
        <li>{accessibilityPageStrings.t("page.knownIssues.item3")}</li>
      </ul>
    </>
  );
}
