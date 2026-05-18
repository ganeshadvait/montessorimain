//File :- data/galleries.ts

const HOST = "https://www.montessorijnprime.com";
const APP_BASE = `${HOST}/montessori/prime`;

function asset(path: string): string {
  if (!path) return `${APP_BASE}/assets/img/gallery/defaultcoverimage.jpg`;
  if (path.startsWith("http")) return path;
  if (path.startsWith("assets/")) return `${APP_BASE}/${path}`;
  // /file_source/* paths are served from the host root, NOT the /montessori/prime app base
  if (path.startsWith("/file_source/")) return `${HOST}${path}`;
  // Local public/ paths — serve as-is.
  if (path.startsWith("/new-gallery-images/") || path.startsWith("/gallery-images/")) return path;
  return `${APP_BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}

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

export type Gallery = {
  name: string;
  slug: string;
  cover: string;
  count: number;
  createdOn: string;
  hasSubgalleries: boolean;
};

const raw: { name: string; cover: string; count: number; createdOn: string; hasSub?: boolean }[] = [
  { name: "New Gallery", cover: "/new-gallery-images/1.jpg", count: 52, createdOn: "18/05/2026 12:00:00 PM", hasSub: true },
  { name: "AY 2025-26 Gallery", cover: "/file_source/Gallery/AY 2025-26 Gallery/1.jpg", count: 96, createdOn: "18/09/2025 08:40:10 AM", hasSub: true },
  { name: "Exploring Math Through Fun", cover: "assets/img/gallery/defaultcoverimage.jpg", count: 1, createdOn: "27/08/2025 12:46:52 PM", hasSub: true },
  { name: "Academic Year 2024-25 Gallery", cover: "/file_source/Gallery/Academic Year 2024-25 Gallery/(14).jpg", count: 109, createdOn: "24/04/2025 12:50:05 PM", hasSub: true },
  { name: "Euphoria-2025 Kodada", cover: "/file_source/Gallery/Euphoria-2025 Kodada/(54).jpeg", count: 60, createdOn: "17/04/2025 10:52:40 AM", hasSub: true },
  { name: "Diwali Celebrations 2024", cover: "/file_source/Gallery/Diwali Celebrations 2024/(54).jpg", count: 57, createdOn: "31/10/2024 11:30:56 AM" },
  { name: "Diwali Pre-Celebrations 2024", cover: "/file_source/Gallery/Diwali Pre-Celebrations 2024/(26).jpg", count: 26, createdOn: "31/10/2024 11:13:43 AM" },
  { name: "Show and Tell", cover: "/file_source/Gallery/Show and Tell/(18).jpg", count: 21, createdOn: "30/10/2024 10:55:57 AM" },
  { name: "Balloon Experiments", cover: "/file_source/Gallery/Balloon Experiments/IMG-20241016-WA0004.jpg", count: 8, createdOn: "18/10/2024 05:34:42 PM" },
  { name: "Dussehra Pre Celebrations", cover: "/file_source/Gallery/Dussehra Pre Celebrations/95.jpg", count: 94, createdOn: "18/10/2024 05:34:26 PM" },
  { name: "Campus Tour -2024", cover: "/file_source/Gallery/Campus Tour -2024/WhatsApp Image 2023-09-13 at 9.40.59 AM.jpeg", count: 4, createdOn: "18/10/2024 04:05:46 PM" },
  { name: "2024 Pongal and Sankranthi Celebrations", cover: "/file_source/Gallery/2024 Pongal and Sankranthi Celebrations/(83).jpg", count: 96, createdOn: "18/10/2024 04:05:03 PM" },
  { name: "2024 Pongal and Sankranthi Celebrations gal2", cover: "/file_source/Gallery/2024 Pongal and Sankranthi Celebrations gal2/(1).jpg", count: 1, createdOn: "18/10/2024 04:05:02 PM" },
  { name: "AWARD CEREMONY FOR HOSTELITES OF THE MONTH - 2024", cover: "/file_source/Gallery/AWARD CEREMONY FOR HOSTELITES OF THE MONTH - 2024/WhatsApp Image 2024-01-11 at 7.06.55 AM.jpeg", count: 20, createdOn: "18/10/2024 04:05:02 PM" },
  { name: "Elysium Annual Day Celebrations - 2024", cover: "/file_source/Gallery/Elysium Annual Day Celebrations - 2024/_G3C2037.jpg", count: 84, createdOn: "18/10/2024 04:05:02 PM" },
  { name: "Holi Celebrations - 2024", cover: "/file_source/Gallery/Holi Celebrations - 2024/DSC_1066.jpg", count: 60, createdOn: "18/10/2024 04:05:02 PM" },
  { name: "Pongal & Sankranthi Celebrations -2024", cover: "/file_source/Gallery/Pongal & Sankranthi Celebrations -2024/(8).jpg", count: 50, createdOn: "18/10/2024 04:05:02 PM" },
  { name: "PTM -2024", cover: "/file_source/Gallery/PTM -2024/(9).jpg", count: 77, createdOn: "18/10/2024 04:05:01 PM" },
  { name: "Republic Day -2024", cover: "/file_source/Gallery/Republic Day -2024/(86).jpg", count: 87, createdOn: "18/10/2024 04:05:01 PM" },
  { name: "Summer Camp 2024", cover: "assets/img/gallery/defaultcoverimage.jpg", count: 14, createdOn: "18/10/2024 04:05:01 PM", hasSub: true },
  { name: "T HUB-2024", cover: "/file_source/Gallery/T HUB-2024/IMG_5476.jpg", count: 66, createdOn: "18/10/2024 04:04:58 PM" },
  { name: "Telangana formation day 2024", cover: "/file_source/Gallery/Telangana formation day 2024/IMG_4512.JPG", count: 10, createdOn: "18/10/2024 04:04:58 PM" },
  { name: "August 15th - 2023", cover: "/file_source/Gallery/August 15th - 2023/15 August MPS 2023 (98).jpg", count: 113, createdOn: "18/10/2024 03:57:18 PM" },
  { name: "Basket Ball - 2023", cover: "/file_source/Gallery/Basket Ball - 2023/IMG_20230625_170301.jpg", count: 25, createdOn: "18/10/2024 03:57:18 PM" },
  { name: "Bathukamma and Dussehra - 2023", cover: "/file_source/Gallery/Bathukamma and Dussehra - 2023/WhatsApp Image 2023-10-11 at 11.46.47 AM (1).jpeg", count: 71, createdOn: "18/10/2024 03:57:18 PM" },
  { name: "Childrens Day - 2023", cover: "/file_source/Gallery/Childrens Day - 2023/(9).jpg", count: 88, createdOn: "18/10/2024 03:57:17 PM" },
  { name: "Christmas Day - 2023", cover: "/file_source/Gallery/Christmas Day - 2023/WhatsApp Image 2023-12-23 at 7.34.21 PM (1).jpeg", count: 61, createdOn: "18/10/2024 03:57:17 PM" },
  { name: "Diwali Celebrations 2023", cover: "/file_source/Gallery/Diwali Celebrations 2023/VideoCapture_20231114-063354.jpg", count: 19, createdOn: "18/10/2024 03:57:17 PM" },
  { name: "Diwali Pre-Celebrations 2023", cover: "/file_source/Gallery/Diwali Pre-Celebrations 2023/(9).jpg", count: 79, createdOn: "18/10/2024 03:57:16 PM" },
  { name: "Drawing Competition - 2023", cover: "/file_source/Gallery/Drawing Competition - 2023/Drawing Competition MPS (8).jpg", count: 50, createdOn: "18/10/2024 03:57:16 PM" },
  { name: "Ganesh Chaturthi - 2023", cover: "/file_source/Gallery/Ganesh Chaturthi - 2023/Ganesh Chaturthi MPS (9).jpg", count: 45, createdOn: "18/10/2024 03:57:16 PM" },
  { name: "Ganesh Idols by Students - 2023", cover: "/file_source/Gallery/Ganesh Idols by Students - 2023/DSC_7696.jpg", count: 72, createdOn: "18/10/2024 03:57:16 PM" },
  { name: "Graduation Day -2023", cover: "/file_source/Gallery/Graduation Day -2023/DSC_3489.jpg", count: 50, createdOn: "18/10/2024 03:57:16 PM" },
  { name: "International Yoga Day - 2023", cover: "/file_source/Gallery/International Yoga Day - 2023/DSC_4471.jpg", count: 31, createdOn: "18/10/2024 03:57:15 PM" },
  { name: "Investiture Ceremony - 2023", cover: "/file_source/Gallery/Investiture Ceremony - 2023/Investiture ceremony MPS (9).jpg", count: 31, createdOn: "18/10/2024 03:57:15 PM" },
  { name: "Jan 26th- Republic Day -2023", cover: "/file_source/Gallery/Jan 26th- Republic Day -2023/IMG_9722.jpg", count: 49, createdOn: "18/10/2024 03:57:15 PM" },
  { name: "Krishnashtami Celebrations - 2023", cover: "/file_source/Gallery/Krishnashtami Celebrations - 2023/Krishnashtami MPS (7).jpg", count: 19, createdOn: "18/10/2024 03:57:15 PM" },
  { name: "Mathematics Day-2023", cover: "/file_source/Gallery/Mathematics Day-2023/(97).jpg", count: 127, createdOn: "18/10/2024 03:57:15 PM" },
  { name: "NEW YEAR - 2023", cover: "/file_source/Gallery/NEW YEAR - 2023/IMG_7344 - Copy.jpg", count: 36, createdOn: "18/10/2024 03:57:14 PM" },
  { name: "Onam Celebrations - 2023", cover: "/file_source/Gallery/Onam Celebrations - 2023/MPS Onam (8).jpg", count: 30, createdOn: "18/10/2024 03:57:14 PM" },
  { name: "Playing Cricket - 2023", cover: "/file_source/Gallery/Playing Cricket - 2023/DSC_9231.jpg", count: 50, createdOn: "18/10/2024 03:57:14 PM" },
  { name: "PONGAL CELEBRATIONS -2023", cover: "/file_source/Gallery/PONGAL CELEBRATIONS -2023/IMG_8219.jpg", count: 87, createdOn: "18/10/2024 03:57:14 PM" },
  { name: "PTI -2023", cover: "/file_source/Gallery/PTI -2023/PTI MPS (6).jpg", count: 56, createdOn: "18/10/2024 03:57:14 PM" },
  { name: "Red Colour Day Celebrations - 2023", cover: "/file_source/Gallery/Red Colour Day Celebrations - 2023/DSC_5482.jpg", count: 18, createdOn: "18/10/2024 03:57:13 PM" },
  { name: "School General Elections - 2023", cover: "/file_source/Gallery/School General Elections - 2023/IMG_5558.JPG", count: 98, createdOn: "18/10/2024 03:57:13 PM" },
  { name: "School Opening Day 2023-24", cover: "/file_source/Gallery/School Opening Day 2023-24/IMG_3015.jpg", count: 41, createdOn: "18/10/2024 03:57:13 PM" },
  { name: "Spell Bee Competition - 2023", cover: "/file_source/Gallery/Spell Bee Competition - 2023/2365487 (8).jpeg", count: 28, createdOn: "18/10/2024 03:57:13 PM" },
  { name: "Sports Day - 2023", cover: "/file_source/Gallery/Sports Day - 2023/Sports day MPS (9).jpg", count: 71, createdOn: "18/10/2024 03:57:13 PM" },
  { name: "Sports Day - 2023 Dec", cover: "/file_source/Gallery/Sports Day - 2023 Dec/(99).jpg", count: 146, createdOn: "18/10/2024 03:57:12 PM" },
  { name: "Swimming-2023", cover: "/file_source/Gallery/Swimming-2023/138678345279 (5).jpeg", count: 16, createdOn: "18/10/2024 03:57:12 PM" },
  { name: "Teachers Day - 2023", cover: "/file_source/Gallery/Teachers Day - 2023/Teachersday MPS (98).jpg", count: 99, createdOn: "18/10/2024 03:57:12 PM" },
  { name: "Telangana Formation Day - 2023", cover: "/file_source/Gallery/Telangana Formation Day - 2023/DSC_4168.jpg", count: 20, createdOn: "18/10/2024 03:57:12 PM" },
  { name: "VaraLaxmi Vratham Pooja - 2023", cover: "/file_source/Gallery/VaraLaxmi Vratham Pooja - 2023/Varalaxmi Vratham Pooja -MPS (8).jpg", count: 43, createdOn: "18/10/2024 03:57:12 PM" },
  { name: "Annual Day(PRAGYAN) 1st - 2023", cover: "/file_source/Gallery/Annual Day(PRAGYAN) 1st - 2023/3 (8).jpg", count: 154, createdOn: "18/10/2024 03:57:11 PM" },
  { name: "WONDERLA TRIP - JAN 2023", cover: "/file_source/Gallery/WONDERLA TRIP - JAN 2023/IMG_7854.jpg", count: 57, createdOn: "18/10/2024 03:57:11 PM" },
  { name: "Youtube Channel Launching Day - Dec 2022", cover: "/file_source/Gallery/Youtube Channel Launching Day - Dec 2022/DSC04107.jpg", count: 14, createdOn: "18/10/2024 03:47:05 PM" },
  { name: "Community Helpers", cover: "/file_source/Gallery/Community Helpers/DSC_8976.jpg", count: 28, createdOn: "18/10/2024 03:41:18 PM" },
  { name: "Basket Ball  -2022", cover: "/file_source/Gallery/Basket Ball  -2022/IMG_5996.jpg", count: 28, createdOn: "18/10/2024 03:30:51 PM" },
  { name: "CHILDRENS DAY - 2022", cover: "/file_source/Gallery/CHILDRENS DAY - 2022/SPG06815.jpg", count: 69, createdOn: "18/10/2024 03:30:51 PM" },
  { name: "CHIRSTMAS -2022", cover: "/file_source/Gallery/CHIRSTMAS -2022/IMG_6274.jpg", count: 33, createdOn: "18/10/2024 03:30:51 PM" },
  { name: "Cricket Playing - 2022", cover: "/file_source/Gallery/Cricket Playing - 2022/IMG_7107.jpg", count: 18, createdOn: "18/10/2024 03:30:51 PM" },
  { name: "FANCY DRESS COMPETITION -2022", cover: "/file_source/Gallery/FANCY DRESS COMPETITION -2022/1 (8).jpg", count: 34, createdOn: "18/10/2024 03:30:51 PM" },
  { name: "HORSE RIDE - Training 2022", cover: "/file_source/Gallery/HORSE RIDE - Training 2022/IPIC5648 - Copy.jpg", count: 9, createdOn: "18/10/2024 03:30:51 PM" },
  { name: "KTPP - Bupalapally Trip -2022", cover: "/file_source/Gallery/KTPP - Bupalapally Trip -2022/SPG01923.jpg", count: 22, createdOn: "18/10/2024 03:30:51 PM" },
  { name: "August 15th -2022", cover: "/file_source/Gallery/August 15th -2022/331A5090.jpg", count: 21, createdOn: "18/10/2024 03:30:50 PM" },
  { name: "MPIS FIELD TRIP EDITED -2022", cover: "/file_source/Gallery/MPIS FIELD TRIP EDITED -2022/IMG_5041.jpg", count: 9, createdOn: "18/10/2024 03:30:50 PM" },
  { name: "MPIS ZOO TRIP EDITED - 2022", cover: "/file_source/Gallery/MPIS ZOO TRIP EDITED - 2022/IMG_5320 - Copy.jpg", count: 10, createdOn: "18/10/2024 03:30:50 PM" },
  { name: "Parents Teacher 2022", cover: "/file_source/Gallery/Parents Teacher 2022/IMG_4883.jpg", count: 32, createdOn: "18/10/2024 03:30:50 PM" },
  { name: "Police Station Visit- 2022", cover: "/file_source/Gallery/Police Station Visit- 2022/IMG_5664 - Copy.jpg", count: 24, createdOn: "18/10/2024 03:30:50 PM" },
  { name: "SCHOOL OPEN Day -2022", cover: "/file_source/Gallery/SCHOOL OPEN Day -2022/DB9A3716.jpg", count: 54, createdOn: "18/10/2024 03:30:50 PM" },
  { name: "SOCIAL QUIZ ACTIVITY 2022", cover: "/file_source/Gallery/SOCIAL QUIZ ACTIVITY 2022/IMG_5093.jpg", count: 9, createdOn: "18/10/2024 03:30:50 PM" },
  { name: "Warangal Fort TRIP 2022", cover: "/file_source/Gallery/Warangal Fort TRIP 2022/1_(9).jpg", count: 12, createdOn: "18/10/2024 03:30:50 PM" },
  { name: "Math Lab", cover: "/file_source/Gallery/Math Lab/235735873654 (14).jpeg", count: 15, createdOn: "28/09/2024 09:28:44 AM" },
  { name: "Ganesh Chaturthi Celebrations", cover: "/file_source/Gallery/Ganesh Chaturthi Celebrations/(1).jpg", count: 275, createdOn: "21/09/2024 08:14:19 AM" },
  { name: "Eco- Friendly Ganesh", cover: "/file_source/Gallery/Eco- Friendly Ganesh/.00 (1).jpeg", count: 17, createdOn: "21/09/2024 08:14:06 AM" },
  { name: "15th August", cover: "/file_source/Gallery/15th August/_G3C3148.jpg", count: 56, createdOn: "21/09/2024 08:14:00 AM" },
  { name: "Kargil Vijay Diwas", cover: "/file_source/Gallery/Kargil Vijay Diwas/1.jpg", count: 27, createdOn: "21/09/2024 08:13:50 AM" },
  { name: "Swimming Competition", cover: "/file_source/Gallery/Swimming Competition/(12).jpeg", count: 13, createdOn: "21/09/2024 08:13:43 AM" },
  { name: "National Cadet Corps", cover: "/file_source/Gallery/National Cadet Corps/(1).JPG", count: 12, createdOn: "21/09/2024 08:13:35 AM" },
  { name: "Freindship Day", cover: "/file_source/Gallery/Freindship Day/WhatsApp Image 2024-08-03 at 5.31.37 PM.jpeg", count: 7, createdOn: "21/09/2024 08:13:24 AM" },
  { name: "Farm Trips", cover: "/file_source/Gallery/Farm Trips/DSC_0212.jpg", count: 34, createdOn: "21/09/2024 08:13:18 AM" },
  { name: "Caligraphy", cover: "/file_source/Gallery/Caligraphy/WhatsApp Image 2024-07-31 at 6.36.07 PM.jpeg", count: 11, createdOn: "21/09/2024 08:13:10 AM" },
  { name: "Drawing Competition", cover: "/file_source/Gallery/Drawing Competition/DSC_0279.jpg", count: 72, createdOn: "21/09/2024 08:13:05 AM" },
  { name: "Election", cover: "/file_source/Gallery/Election/(13).jpeg", count: 77, createdOn: "21/09/2024 08:12:57 AM" },
  { name: "Hiroshima Day", cover: "/file_source/Gallery/Hiroshima Day/WhatsApp Image 2024-08-07 at 5.59.47 AM (1).jpeg", count: 4, createdOn: "21/09/2024 08:12:46 AM" },
  { name: "PTM", cover: "/file_source/Gallery/PTM/DSC_0211.JPG", count: 31, createdOn: "21/09/2024 08:12:39 AM" },
  { name: "Investitor ceremony", cover: "/file_source/Gallery/Investitor ceremony/DSC_0146.JPG", count: 64, createdOn: "21/09/2024 08:12:33 AM" },
];

export const galleries: Gallery[] = raw.map((r) => ({
  name: r.name,
  slug: slugify(r.name),
  cover: encodeURI(asset(r.cover)),
  count: r.count,
  createdOn: r.createdOn,
  hasSubgalleries: !!r.hasSub,
}));

export function getGalleryBySlug(slug: string): Gallery | undefined {
  return galleries.find((g) => g.slug === slug);
}
