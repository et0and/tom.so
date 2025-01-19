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
  title: "CV",
  description: "CV of Tom Hackshaw - Front-end Developer",
  openGraph: {
    title: "CV",
    description: "CV of Tom Hackshaw - Front-end Developer",
    images: [
      {
        url: "https://tom.so/api/og?title=CV of Tom Hackshaw",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function CV() {
  return (
    <>
      <h1 className="font-medium text-4xl pt-4">Tom Hackshaw</h1>
      <p className="text-muted-foreground">Upper Hutt, Wellington, Aotearoa</p>
      <p className="text-sm text-muted-foreground">
        <a className="link" href="tel:0211431725">
          0211431725
        </a>
      </p>
      <p className="text-sm text-muted-foreground">
        <a className="link" href="mailto:tom@tomhackshaw.com">
          tom@tomhackshaw.com
        </a>
      </p>
      <Separator className="my-4" />
      <p className="pb-4">
        I am a front-end developer specialising in web development and design,
        currently working at Wellington City Council. I love building
        responsive, accessible web applications using modern React frameworks
        such as Next.js and TypeScript.
      </p>

      <h2 className="text-2xl font-medium pt-4">Work Experience</h2>
      <Separator className="my-4" />

      <div className="mb-6">
        <h3 className="text-xl font-medium">
          Web Producer -{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="https://wellington.govt.nz" className="link">
                Wellington City Council
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="/wcc.png" />
                  <AvatarFallback>WCC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-semibold">
                    Wellington City Council
                  </p>
                  <p className="text-sm">
                    Wellington City Council is a territorial authority in New
                    Zealand, governing the city of Wellington, the
                    country&apos;s capital city and third-largest city by
                    population, behind Auckland and Christchurch. It consists of
                    the central historic town and certain additional areas
                    within the Wellington metropolitan area, extending as far
                    north as Linden and covering rural areas such as Mākara and
                    Ohariu.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-sm text-muted-foreground">
                      Joined July 2023
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </h3>
        <p className="text-sm text-muted-foreground">2023 - Present</p>
        <ul className="list-disc list-inside pl-5 mt-2 space-y-2">
          <li>
            Front-end development in an Nx monorepo environment, building and
            maintaining multiple web applications using primarily Next.js (App
            Router) and TypeScript
          </li>
          <li>
            Helped to develop the new{" "}
            <HoverCard>
              <HoverCardTrigger asChild>
                <a
                  href="https://services.wellington.govt.nz/property-search"
                  className="link"
                >
                  WCC property search system
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="/wcc.png" />
                    <AvatarFallback>WCC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">
                      Rapu Whare | Property Search
                    </p>
                    <p className="text-sm">
                      Find rates and valuation information held by Wellington
                      City Council, including aerial photos.
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>{" "}
            and the upcoming Building Consent Search, implementing a new
            responsive design and improving accessibility through define proper
            landmark regions, aria labels and correct heading order
          </li>
          <li>
            Utilise AWS (mostly EC2 and Fargate) and Pulumi IaC for deployment,
            following a Git feature branch workflow
          </li>
          <li>
            Implement analytics solutions using Google Analytics and Looker
            Studio to drive data-informed decisions, as well as share insights
            with key stakeholders
          </li>
          <li>
            Collaborate with UX designers to create and maintain component
            libraries and design systems in Figma and Storybook
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium">
          Design Teacher -{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="https://takapuna.school.nz" className="link">
                Takapuna Grammar School
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="/tgs.jpg" />
                  <AvatarFallback>TGS</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <p className="text-sm font-semibold">
                    Takapuna Grammar School
                  </p>
                  <p className="text-sm">
                    Takapuna Grammar School is a state coeducational secondary
                    school located in the suburb of Belmont on the North Shore
                    of Auckland, New Zealand. Established in 1927, the school
                    mainly serves the eponymous suburb of Takapuna and the
                    entire Devonport Peninsula.
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
        </h3>
        <p className="text-sm text-muted-foreground">2021 - 2023</p>
        <ul className="list-disc list-inside pl-5 mt-2 space-y-2">
          <li>
            Established and managed Te Wāhi Auaha, developing digital
            infrastructure including a CDN and virtual exhibition space
          </li>
          <li>
            Created and maintained a centralised learning hub using Next.js and
            Nextra
          </li>
          <li>
            Taught digital design using industry-standard tools including Adobe
            Creative Cloud and Figma
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-medium pt-4">Technical Skills</h2>
      <Separator className="my-4" />
      <ul className="list-disc list-inside pl-5 space-y-2">
        <li>Frontend: React, Next.js, TypeScript, HTML5, CSS3, Tailwind</li>
        <li>Tools: Git, AWS, Vercel, Pulumi, Nx, Turborepo</li>
        <li>Analytics: Google Analytics, Looker Studio</li>
        <li>Design: Figma, Adobe Creative Cloud</li>
      </ul>

      <Separator className="my-4" />

      <p className="pb-8">
        Find my open source contributions and project work on{" "}
        <a href="https://github.com/et0and" className="link">
          GitHub
        </a>
        .
      </p>
    </>
  );
}
