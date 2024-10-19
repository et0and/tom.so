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

export function generateStaticParams() {
  return [{}];
}

export default function About() {
  return (
    <>
      <h1 className="font-medium text-4xl pt-4">About</h1>
      <Separator className="my-4" /> <p>Hi, I&apos;m Tom,</p>
      <p className="pb-4">
        I am a designer with a background in the arts and education. Presently I
        am working as a web producer and developer in Pōneke, Te
        Whanganui-a-Tara. Prior to this, I taught design, art and digital
        technology at Takapuna Grammar School, where I also worked on the
        development of{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="/work/te-wahi-auaha" className="link">
              Te Wāhi Auaha
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/twa.png" />
                <AvatarFallback>Te Wāhi</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">Te Wāhi Auaha</p>
                <p className="text-sm">
                  Te Wāhi Auaha is the school maker space at Takapuna Grammar
                  School.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    Joined January 2021
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        &nbsp;(a school maker space and innovation space).
      </p>
      <p className="pb-4">
        My experience in making learning more accessible and equitable across a
        range of students from different backgrounds and abilities built the
        foundation of my human-centered design practice.
      </p>
      <p className="pb-4">
        Previously I studied at the{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="https://elamartists.ac.nz" className="link">
              Elam School of Fine Arts
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/uoa.jpg" />
                <AvatarFallback>Elam</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">
                  Elam School of Fine Arts
                </p>
                <p className="text-sm">
                  The Elam School of Fine Arts, founded by John Edward Elam, is
                  part of the Faculty of Creative Arts and Industries at the
                  University of Auckland. It offered the first Bachelor of Fine
                  Arts programme in New Zealand starting in 1967.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    Joined March 2014
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        , where I also briefly taught the first and second year studio
        programme.
      </p>
      <p className="pb-4">
        Find me on{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="https://are.na/tom" className="link">
              are.na
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/arena.jpg" />
                <AvatarFallback>Are.na</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">Are.na</p>
                <p className="text-sm">
                  Are.na is an online social networking community and creative
                  research platform founded by Charles Broskoski, Daniel
                  Pianetti, Chris Barley, and Chris Sherron.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    Joined January 2018
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
              Read.cv
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/readcv.svg" />
                <AvatarFallback>Read.cv</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">Read.cv</p>
                <p className="text-sm">
                  Read.cv is a show, don&apos;t tell professional platform to
                  form beautiful profiles and make meaningful connections with
                  people and teams.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    Joined January 2023
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
              Merveilles
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/merveilles.png" />
                <AvatarFallback>Merveilles</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">Merveilles</p>
                <p className="text-sm">
                  Merveilles is a collective of forward-thinking individuals who
                  strive to better each other and their surroundings through
                  constant creation and play. This community project is aimed at
                  the establishment of new ways of speaking, seeing and
                  organizing. A warm welcome to any like-minded people who feel
                  these ideals resonate with them.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    Joined May 2019
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        . Sometimes, I am on IRC as @tomupom on Libera Chat and Rizon networks.
        You can also find me on{" "}
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="https://urbit.org" className="link">
              Urbit
            </a>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/urbit.webp" />
                <AvatarFallback>Urbit</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-semibold">Urbit</p>
                <p className="text-sm">
                  Urbit is a decentralized personal server platform based on
                  functional programming in a peer-to-peer network.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-sm text-muted-foreground">
                    Joined January 2019
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{" "}
        as ~worbur-dorneb.
      </p>
      <p className="pb-4">
        I have accounts on other popular social media sites, but rarely use
        them.
      </p>
      <h1 className="text-3xl pb-4">Acknowledgements</h1>
      <p className="pb-4">
        I would like to acknowledge Māori as tangata whenua and Te Tiriti o
        Waitangi partners in Aotearoa New Zealand. I pay my respects to the mana
        whenua who are the original and continued rightful stewards of the land.
      </p>
      <p className="pb-8">
        I would also like to acknowledge the many free and open source software
        that this website, along with many of my other projects, take advantage
        of. The full source code of this website can be found on my{" "}
        <a href="https://github.com/et0and/tom.so" className="link">
          GitHub
        </a>
        .
      </p>
    </>
  );
}
