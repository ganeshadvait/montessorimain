//File :- data/events.ts

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export type EventItem = {
  name: string;
  slug: string;
  date: string;
  location: string;
  image: string;
  body: string;
};

const raw: { name: string; date: string; location: string; image: string; body: string }[] = [
  {
    name: "Christmas Celebrations",
    date: "Dec 25, 2025",
    location: "MPS - Yellapur",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1600&q=80",
    body:
      "Join us for a festive Christmas Celebration filled with carols, performances, and joyous activities for all our students and families. The campus comes alive with twinkling lights, sweets, and a Santa visit for the little ones.",
  },
  {
    name: "Annual Day 2026 Celebrations",
    date: "Dec 6, 2025",
    location: "MPS - Yellapur",
    image:
      "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1600&q=80",
    body:
      "An evening of music, dance, and recognition. Students will showcase a year of creative work, academic achievements, and cultural performances — the highlight of the Montessori Prime calendar.",
  },
];

export const events: EventItem[] = raw.map((e) => ({
  ...e,
  slug: slugify(e.name),
}));

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}
