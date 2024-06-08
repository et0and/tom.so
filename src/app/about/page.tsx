import Link from "next/link";
import type { Metadata } from "next";

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
        foundation of my human-centered design practice. Anything I make or work
        on is guided by{''} <Link href="/values" className="underline hover:text-blue-700">a few key values</Link>.
      </p>
      <p className="pb-4">
        Previously I studied at the{''} <Link href="https://elamartists.ac.nz" className="underline hover:text-blue-700">Elam School of Fine Arts</Link>, where I also briefly taught the first and second year studio programme.
      </p>
      <p className="pb-4">
        Find me on are.na, Read.cv, Merveilles. Sometimes, I am on IRC as
        @tomupom on Libera Chat and Rizon networks. You can also find me on
        Urbit as ~worbur-dorneb.
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
      <p className="pb-4">
        I would also like to acknowledge the many free and open source software
        that this website, along with many of my other projects, take advantage
        of. For a full look at the different libraries and packages used to
        power this website, take a look at the GitHub repo.
      </p>
    </>
  );
}
