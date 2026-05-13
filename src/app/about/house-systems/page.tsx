//File :- src/app/about/house-systems/page.tsx

import PageHero from "../../../../components/page-hero";
import HouseSection, {
  type HouseSectionProps,
} from "../../../../components/about/house-section";

const houses: HouseSectionProps[] = [
  {
    name: "HOUSE OF ACHIEVERS",
    description:
      "To instill in pupils the art of self – discipline, self – governance and team spirit we have constituted Four Houses. To promote healthy and competitive spirit among the school children we have Inter House competitions under the guidance of the Principal and House Mentors. The school children along with the teaching staff are given opportunity to participate in various activities through different houses.",
    features: ["All for one and one for all", "Steel Blue", "Team Spirit"],
    image: "/about/House System/ACHIEVERS.png",
    imageOnLeft: true,
    background: "#ffffff",
  },
  {
    name: "HOUSE OF CHALLENGERS",
    description:
      "Don’t wait until everything is just right, It will never be perfect, There will always be challenges, obstacles and, less than perfect Conditions. So what? Get started how with each step you take, You’ll know stranger & stranger, More and more skilled, more & more Self – confident and more & more successful.",
    features: ["Self confident", "Cadmium Yellow", "Captures attention"],
    image: "/about/House System/CHALLENGERS.png",
    imageOnLeft: false,
    background: "#f3ede4",
  },
  {
    name: "HOUSE OF RANGERS",
    description:
      "We’ve got pride: we’ve got fire, We are brave, we’ll reach higher, We are strong; and will Rock, Like the rising Sun, We’ll be number one, We are the Rangers, Stand, Tall & Firing With all the right, Here we come, to win your hearts.",
    features: [
      "Live for today and reach for tomorrow",
      "Lime Green",
      "Respect for the Planet",
    ],
    image: "/about/House System/RANGERS.png",
    imageOnLeft: true,
    background: "#ffffff",
  },
  {
    name: "HOUSE OF WARRIORS",
    description: (
      <>
        We&rsquo;re the Best, A Golden Chest, A Treasure Fest, Is on a Quest.
        <br />
        <br />
        If you&rsquo;re looking for the best. We&rsquo;re right here, we&rsquo;re the best!
      </>
    ),
    features: ["we think, we do, we win", "Coral Light Red", "Perseverance & Courage"],
    image: "/about/House System/WARRIORS.png",
    imageOnLeft: false,
    background: "#f3ede4",
  },
];

export default function HouseSystemsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "House System" },
        ]}
        title="House System"
      />

      {houses.map((house) => (
        <HouseSection key={house.name} {...house} />
      ))}
    </main>
  );
}
