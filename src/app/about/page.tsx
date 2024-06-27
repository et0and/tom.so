import Link from "next/link";
import type { Metadata } from "next";
import { CalendarDays } from "lucide-react"
 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export const metadata: Metadata = {
  title: "About",
  description: "About Tom Hackshaw.",
};

export default function About() {
  return (
    <>
      <h1 className="text-3xl pb-4">About</h1>
      <p>Hi, I&apos;m Tom,</p>
      <p className="pb-4">
        I am a designer with a background in the arts and education. Presently I
        am working as a web producer and developer in Pōneke, Te
        Whanganui-a-Tara. Prior to this, I taught design, art and digital
        technology at Takapuna Grammar School, where I also worked on the
        development of Te Wāhi Auaha (a school maker space and innovation
        space).
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
      <Link
          href="https://elamartists.ac.nz"
          className="underline hover:text-blue-700 transition-colors duration-200"
        >
          Elam School of Fine Arts
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/uoa.jpg" />
            <AvatarFallback>Elam</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium">Elam School of Fine Arts</p>
            <p className="text-sm">
            The Elam School of Fine Arts, founded by John Edward Elam, is part of the Faculty of Creative Arts and Industries at the University of Auckland. It offered the first Bachelor of Fine Arts programme in New Zealand starting in 1967.
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
    </HoverCard>, where I also briefly taught the first and second year studio programme.
      </p>
      <p className="pb-4">
        Find me on{" "}
      <HoverCard>
      <HoverCardTrigger asChild>
      <Link
          href="https://are.na/tom"
          className="underline hover:text-blue-700 transition-colors duration-200"
        >
          are.na
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/arena.jpg" />
            <AvatarFallback>Are.na</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium">Are.na</p>
            <p className="text-sm">
            Are.na is an online social networking community and creative research platform founded by Charles Broskoski, Daniel Pianetti, Chris Barley, and Chris Sherron.
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
      <Link
          href="https://read.cv/hackshaw"
          className="underline hover:text-blue-700 transition-colors duration-200"
        >
          Read.cv
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/readcv.svg" />
            <AvatarFallback>Read.cv</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium">Read.cv</p>
            <p className="text-sm">
            Read.cv is a show, don&apos;t tell professional platform to form beautiful profiles and make meaningful connections with people and teams.
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
      <Link
          href="https://merveilles.town/@tomupom"
          className="underline hover:text-blue-700 transition-colors duration-200"
        >
          Merveilles
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/merveilles.png" />
            <AvatarFallback>Merveilles</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium">Merveilles</p>
            <p className="text-sm">
            Merveilles is a collective of forward-thinking individuals who strive to better each other and their surroundings through constant creation and play. This community project is aimed at the establishment of new ways of speaking, seeing and organizing. A warm welcome to any like-minded people who feel these ideals resonate with them.
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
        You can also find me on Urbit as ~worbur-dorneb.
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
        of.
      </p>
    </>
  );
}
