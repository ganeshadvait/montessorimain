//File :- src/app/news/data.ts

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // "Jan 26, 2026"
  lastUpdated?: string;
  image: string;
  tags?: string[];
  excerpt?: string;
  content: { type: "paragraph" | "hashtags"; text: string }[];
};

export const blogs: BlogPost[] = [
  {
    slug: "happy-republic-day-2026",
    title: "Happy Republic Day 2026",
    date: "Jan 26, 2026",
    lastUpdated: "Jan 26, 2026",
    image: "/blogs/General_post.png",
    tags: ["Happy Republic Day"],
    content: [
      {
        type: "paragraph",
        text: "Celebrating the spirit of unity, freedom, and the values of our great Constitution.",
      },
      {
        type: "paragraph",
        text: "May our young minds grow with pride, responsibility, and love for the nation.",
      },
      {
        type: "paragraph",
        text: "✨ Let us salute the architects of our Constitution and strive to build a brighter India together. ✨",
      },
      { type: "paragraph", text: "Jai Hind!" },
      {
        type: "hashtags",
        text: "#HappyRepublicDay #RepublicDayIndia #ProudToBeIndian #UnityInDiversity #MontessoriPride #FutureOfIndia #IndianConstitution #PatrioticVibes",
      },
    ],
  },
  {
    slug: "happy-vasantha-panchami",
    title: "Happy Vasantha Panchami",
    date: "Jan 23, 2026",
    lastUpdated: "Jan 23, 2026",
    image: "/blogs/General_post.png",
    tags: ["Vasantha Panchami"],
    content: [
      {
        type: "paragraph",
        text: "May the blessings of Goddess Saraswati fill our lives with wisdom, learning, and creativity on this auspicious day.",
      },
      {
        type: "hashtags",
        text: "#VasanthaPanchami #SaraswatiPuja #MontessoriPride",
      },
    ],
  },
  {
    slug: "happy-sankranthi-2026",
    title: "Happy Sankranthi! 2026",
    date: "Jan 15, 2026",
    lastUpdated: "Jan 15, 2026",
    image: "/blogs/General_post.png",
    tags: ["Sankranthi"],
    content: [
      {
        type: "paragraph",
        text: "Wishing all our students and parents a joyful Sankranthi filled with warmth, harvest, and happiness.",
      },
      { type: "hashtags", text: "#HappySankranthi #HarvestFestival #MontessoriPride" },
    ],
  },
  {
    slug: "happy-bhogi-2026",
    title: "Happy Bhogi! 2026",
    date: "Jan 14, 2026",
    lastUpdated: "Jan 14, 2026",
    image: "/blogs/General_post.png",
    tags: ["Bhogi"],
    content: [
      {
        type: "paragraph",
        text: "May the Bhogi fire burn away the old and welcome new beginnings, prosperity, and joy.",
      },
      { type: "hashtags", text: "#HappyBhogi #FestivalOfJoy #MontessoriPride" },
    ],
  },
  {
    slug: "happy-newyear-2026",
    title: "happy newyear 2026",
    date: "Jan 1, 2026",
    lastUpdated: "Jan 1, 2026",
    image: "/blogs/General_post.png",
    tags: ["New Year"],
    content: [
      {
        type: "paragraph",
        text: "Wishing all our students, parents, and staff a Happy New Year 2026! May this year bring new opportunities, learning, and growth.",
      },
      { type: "hashtags", text: "#HappyNewYear2026 #MontessoriPride" },
    ],
  },
  {
    slug: "merry-christmas-2025",
    title: "Merry Christmas 2025",
    date: "Dec 25, 2025",
    lastUpdated: "Dec 25, 2025",
    image: "/blogs/General_post.png",
    tags: ["Christmas"],
    content: [
      {
        type: "paragraph",
        text: "Wishing everyone a joyful Christmas filled with love, peace, and happiness.",
      },
      { type: "hashtags", text: "#MerryChristmas #MontessoriPride" },
    ],
  },
];

export const getBlog = (slug: string) => blogs.find((b) => b.slug === slug);

export const getRecentBlogs = (excludeSlug?: string, limit = 5) =>
  blogs.filter((b) => b.slug !== excludeSlug).slice(0, limit);
