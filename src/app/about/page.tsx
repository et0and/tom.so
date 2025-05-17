import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/card/hover-card";
import { Separator } from "@/components/ui/separator/separator";
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
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="/work/te-wahi-auaha" className="link">
              {aboutPage.t("teWahi.title")}
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/twa.png" />
                <AvatarFallback>{aboutPage.t("teWahi.title")}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">
                  {aboutPage.t("teWahi.title")}
                </p>
                <p className="text-sm">{aboutPage.t("teWahi.description")}</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    {aboutPage.t("teWahi.joined")}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        {aboutPage.t("about.makerSpace")}
      </p>
      <p className="pb-4">{aboutPage.t("about.experience")}</p>
      <p className="pb-4">
        {aboutPage.t("about.elam.prior")}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="https://elamartists.ac.nz" className="link">
              {aboutPage.t("elam.title")}
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/uoa.jpg" />
                <AvatarFallback>{aboutPage.t("elam.title")}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">
                  {aboutPage.t("elam.title")}
                </p>
                <p className="text-sm">{aboutPage.t("elam.description")}</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    {aboutPage.t("elam.joined")}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        {aboutPage.t("about.elam")}
      </p>
      <p className="pb-4">
        {aboutPage.t("about.findMe")}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="https://are.na/tom" className="link">
              {aboutPage.t("arena.title")}
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/arena.jpg" />
                <AvatarFallback>{aboutPage.t("arena.title")}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">
                  {aboutPage.t("arena.title")}
                </p>
                <p className="text-sm">{aboutPage.t("arena.description")}</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    {aboutPage.t("arena.joined")}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        ,{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="https://read.cv/hackshaw" className="link">
              {aboutPage.t("readcv.title")}
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/readcv.svg" />
                <AvatarFallback>{aboutPage.t("readcv.title")}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">
                  {aboutPage.t("readcv.title")}
                </p>
                <p className="text-sm">{aboutPage.t("readcv.description")}</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    {aboutPage.t("readcv.joined")}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        , and{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="https://merveilles.town/@tomupom" className="link">
              {aboutPage.t("merveilles.title")}
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/merveilles.png" />
                <AvatarFallback>
                  {aboutPage.t("merveilles.title")}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">
                  {aboutPage.t("merveilles.title")}
                </p>
                <p className="text-sm">
                  {aboutPage.t("merveilles.description")}
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    {aboutPage.t("merveilles.joined")}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        {aboutPage.t("about.irc")}{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="https://urbit.org" className="link">
              {aboutPage.t("urbit.title")}
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/urbit.webp" />
                <AvatarFallback>{aboutPage.t("urbit.title")}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">
                  {aboutPage.t("urbit.title")}
                </p>
                <p className="text-sm">{aboutPage.t("urbit.description")}</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    {aboutPage.t("urbit.joined")}
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
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
