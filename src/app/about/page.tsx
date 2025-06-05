import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator/separator";
import { ProfileHoverCard } from "@/components/ui/profile-hover-card/profile-hover-card";
import { aboutPage } from "./strings";

export const metadata: Metadata = {
  title: "About",
  description: "About Tom Hackshaw.",
  openGraph: {
    title: "About",
    description: "About Tom Hackshaw",
    images: [
      {
        url: "https://tom.so/api/og?title=About Tom Hackshaw",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function About() {
  return (
    <>
      <h1 className="font-medium text-4xl pt-4">
        {aboutPage.t("about.heading")}
      </h1>
      <Separator className="my-4" />
      <p>{aboutPage.t("about.byline")}</p>
      <p className="pb-4">
        {aboutPage.t("about.intro")}
        <ProfileHoverCard
          href="/work/te-wahi-auaha"
          linkTitle={aboutPage.t("teWahi.title")}
          avatarSrc="/twa.png"
          avatarFallback={aboutPage.t("teWahi.title")}
          title={aboutPage.t("teWahi.title")}
          description={aboutPage.t("teWahi.description")}
          joinedDate={aboutPage.t("teWahi.joined")}
        />
        {aboutPage.t("about.makerSpace")}
      </p>
      <p className="pb-4">{aboutPage.t("about.experience")}</p>
      <p className="pb-4">
        {aboutPage.t("about.elam.prior")}
        <ProfileHoverCard
          href="https://elamartists.ac.nz"
          linkTitle={aboutPage.t("elam.title")}
          avatarSrc="/uoa.jpg"
          avatarFallback={aboutPage.t("elam.title")}
          title={aboutPage.t("elam.title")}
          description={aboutPage.t("elam.description")}
          joinedDate={aboutPage.t("elam.joined")}
        />
        {aboutPage.t("about.elam")}
      </p>
      <p className="pb-4">
        {aboutPage.t("about.findMe")}
        <ProfileHoverCard
          href="https://are.na/tom"
          linkTitle={aboutPage.t("arena.title")}
          avatarSrc="/arena.jpg"
          avatarFallback={aboutPage.t("arena.title")}
          title={aboutPage.t("arena.title")}
          description={aboutPage.t("arena.description")}
          joinedDate={aboutPage.t("arena.joined")}
        />
        ,{" "}
        <ProfileHoverCard
          href="https://read.cv/hackshaw"
          linkTitle={aboutPage.t("readcv.title")}
          avatarSrc="/readcv.svg"
          avatarFallback={aboutPage.t("readcv.title")}
          title={aboutPage.t("readcv.title")}
          description={aboutPage.t("readcv.description")}
          joinedDate={aboutPage.t("readcv.joined")}
        />
        , and{" "}
        <ProfileHoverCard
          href="https://merveilles.town/@tomupom"
          linkTitle={aboutPage.t("merveilles.title")}
          avatarSrc="/merveilles.png"
          avatarFallback={aboutPage.t("merveilles.title")}
          title={aboutPage.t("merveilles.title")}
          description={aboutPage.t("merveilles.description")}
          joinedDate={aboutPage.t("merveilles.joined")}
        />
        {aboutPage.t("about.irc")}{" "}
        <ProfileHoverCard
          href="https://urbit.org"
          linkTitle={aboutPage.t("urbit.title")}
          avatarSrc="/urbit.webp"
          avatarFallback={aboutPage.t("urbit.title")}
          title={aboutPage.t("urbit.title")}
          description={aboutPage.t("urbit.description")}
          joinedDate={aboutPage.t("urbit.joined")}
        />{" "}
        {aboutPage.t("about.urbitId")}
      </p>
      <p className="pb-4">{aboutPage.t("about.socialMedia")}</p>
      <h1 className="text-3xl pb-4">
        {aboutPage.t("about.acknowledgementsTitle")}
      </h1>
      <p className="pb-4">{aboutPage.t("about.maoriAcknowledgement")}</p>
      <p className="pb-8">
        {aboutPage.t("about.openSource")}
        <a href="https://github.com/et0and/tom.so" className="link">
          GitHub
        </a>
        .
      </p>
    </>
  );
}
