import type {
  CharDhamCredential,
  CharDhamItineraryDay,
  CharDhamPackage,
  CharDhamStartingPoint,
  CharDhamStop,
} from "@/lib/types";

export const CHAR_DHAM_STOPS: CharDhamStop[] = [
  {
    id: "kedarnath",
    slug: "kedarnath",
    name: "Kedarnath",
    altitude: "~3,583 m",
    approxDistanceFromRishikesh: "~215 km (drive to Sonprayag/Gaurikund, then trek)",
    approxDurationFromRishikesh: "~7–8 hrs drive + trek",
    description:
      "One of the twelve Jyotirlingas, set against a dramatic Himalayan backdrop. The road journey ends at Sonprayag/Gaurikund, followed by a trek (or pony/helicopter option) to the temple.",
    imageLabel: "Kedarnath temple against snow-capped peaks",
    image: "/images/kedarnath-temple.png",
    significance: "Jyotirlinga dedicated to Lord Shiva",
  },
  {
    id: "badrinath",
    slug: "badrinath",
    name: "Badrinath",
    altitude: "~3,133 m",
    approxDistanceFromRishikesh: "~295 km",
    approxDurationFromRishikesh: "~9–10 hrs drive",
    description:
      "Dedicated to Lord Vishnu, Badrinath sits in the Garhwal Himalayas along the Alaknanda river and is directly reachable by road.",
    imageLabel: "Badrinath temple beside the Alaknanda river",
    significance: "Vishnu shrine, part of the Char Dham and Chota Char Dham",
  },
  {
    id: "gangotri",
    slug: "gangotri",
    name: "Gangotri",
    altitude: "~3,100 m",
    approxDistanceFromRishikesh: "~250 km",
    approxDurationFromRishikesh: "~8–9 hrs drive",
    description:
      "The origin point of the sacred river Ganga, and one of the most scenic drives in the Garhwal Himalayas along the Bhagirathi valley.",
    imageLabel: "Gangotri temple beside the Bhagirathi river",
    significance: "Source shrine of the river Ganga",
  },
  {
    id: "yamunotri",
    slug: "yamunotri",
    name: "Yamunotri",
    altitude: "~3,293 m",
    approxDistanceFromRishikesh: "~215 km (drive to Janki Chatti, then trek)",
    approxDurationFromRishikesh: "~7–8 hrs drive + trek",
    description:
      "Source shrine of the river Yamuna, reached by road to Janki Chatti followed by a trek (or pony/palanquin option) to the temple.",
    imageLabel: "Yamunotri temple near the Yamuna source",
    significance: "Source shrine of the river Yamuna",
  },
];

export const CHAR_DHAM_PACKAGES: CharDhamPackage[] = [
  {
    id: "do-dham",
    slug: "do-dham-yatra",
    name: "Do Dham Yatra",
    stops: ["Kedarnath", "Badrinath"],
    approxDurationDays: "~6–7 days",
    summary:
      "Covers the two most-visited shrines, Kedarnath and Badrinath, in a shorter itinerary than the full Char Dham circuit.",
  },
  {
    id: "teen-dham",
    slug: "teen-dham-yatra",
    name: "Teen Dham Yatra",
    stops: ["Yamunotri", "Kedarnath", "Badrinath"],
    approxDurationDays: "~8–9 days",
    summary: "Adds Yamunotri to the Do Dham route for a fuller pilgrimage circuit.",
  },
  {
    id: "char-dham",
    slug: "char-dham-yatra",
    name: "Char Dham Yatra",
    stops: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    approxDurationDays: "~10–12 days",
    summary:
      "The complete circuit covering all four shrines — Yamunotri, Gangotri, Kedarnath and Badrinath.",
  },
];

export function getCharDhamStopBySlug(slug: string): CharDhamStop | undefined {
  return CHAR_DHAM_STOPS.find((s) => s.slug === slug);
}

// Rishikesh is this business's home base, so it's marked as the recommended
// starting point. Distances/durations are broad, commonly-cited ballpark
// figures for the full circuit (not a company-specific claim) — confirm
// exact routing at the time of booking.
export const CHAR_DHAM_STARTING_POINTS: CharDhamStartingPoint[] = [
  {
    point: "Rishikesh",
    approxDistance: "~1,550 km full circuit",
    approxDuration: "~10–12 days",
    recommended: true,
    note: "Our home base — easiest pickup, and the closest major town to all four dhams.",
  },
  {
    point: "Haridwar",
    approxDistance: "~1,580 km full circuit",
    approxDuration: "~10–12 days",
    note: "About an hour further out than Rishikesh; a common alternate pickup point.",
  },
  {
    point: "Dehradun",
    approxDistance: "~1,600 km full circuit",
    approxDuration: "~10–12 days",
    note: "Convenient if you're flying into Jolly Grant Airport.",
  },
  {
    point: "Delhi / NCR",
    approxDistance: "~2,050 km full circuit",
    approxDuration: "~12–13 days",
    note: "Adds roughly a day of extra driving each way versus starting from Rishikesh.",
  },
];

// Illustrative day-by-day plan for the full 4-dham circuit starting and
// ending in Rishikesh. Actual pacing depends on road conditions, darshan
// queues and weather — we confirm the exact plan when you book. Night
// driving in the hills is avoided for safety.
export const CHAR_DHAM_ITINERARY: CharDhamItineraryDay[] = [
  {
    day: 1,
    title: "Rishikesh → Barkot",
    description: "Drive towards Yamunotri base, overnight at Barkot.",
  },
  {
    day: 2,
    title: "Barkot → Yamunotri → Barkot",
    description: "Drive to Janki Chatti, trek (or pony/palanquin) to Yamunotri for darshan, return to Barkot.",
  },
  {
    day: 3,
    title: "Barkot → Uttarkashi",
    description: "Shorter drive day, visit Vishwanath Temple in Uttarkashi.",
  },
  {
    day: 4,
    title: "Uttarkashi → Gangotri → Uttarkashi",
    description: "Drive along the Bhagirathi valley to Gangotri for darshan, return to Uttarkashi.",
  },
  {
    day: 5,
    title: "Uttarkashi → Guptkashi",
    description: "Longer drive day towards the Kedarnath base.",
  },
  {
    day: 6,
    title: "Guptkashi → Sonprayag → Kedarnath",
    description: "Drive to Sonprayag/Gaurikund, then trek (or pony/helicopter option) up to Kedarnath.",
  },
  {
    day: 7,
    title: "Kedarnath darshan → Sonprayag → Guptkashi",
    description: "Morning darshan, trek back down and drive to Guptkashi for the night.",
  },
  {
    day: 8,
    title: "Guptkashi → Badrinath",
    description: "Drive via Joshimath to Badrinath.",
  },
  {
    day: 9,
    title: "Badrinath darshan & Mana village",
    description: "Darshan at Badrinath, optional visit to Mana — the last Indian village on this route.",
  },
  {
    day: 10,
    title: "Badrinath → Rudraprayag",
    description: "Start the return journey towards Rishikesh.",
  },
  {
    day: 11,
    title: "Rudraprayag → Rishikesh",
    description: "Final leg back to Rishikesh, trip concludes.",
  },
  {
    day: 12,
    title: "Buffer day",
    description: "Kept free for weather, darshan queues or an unhurried pace — common in peak season.",
  },
];

export const CHAR_DHAM_INCLUSIONS = [
  "Fuel for the full circuit",
  "Driver allowance for every day of the trip",
  "Applicable state permits and toll/parking charges",
  "Same vehicle and driver throughout, door-to-door from Rishikesh",
];

export const CHAR_DHAM_EXCLUSIONS = [
  "Hotel stays and meals",
  "Yatra registration/biometric fees (we can guide you on the process)",
  "Pony, palanquin or helicopter charges for the trek sections",
  "Side trips beyond the core circuit (e.g. Auli, Hemkund Sahib)",
  "Personal expenses and travel insurance",
];

// TODO: replace every placeholder value below with the business's real,
// verifiable credentials before launch — do not ship as fact until confirmed.
export const CHAR_DHAM_CREDENTIALS: CharDhamCredential[] = [
  { label: "Years of Mountain Driving Experience", value: "TODO" },
  { label: "Government / Tourism Registration", value: "TODO" },
  { label: "Char Dham Trips Completed", value: "TODO" },
  { label: "Customer Rating", value: "TODO" },
];
