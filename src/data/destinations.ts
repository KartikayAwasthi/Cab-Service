import type { Destination } from "@/lib/types";

export const DESTINATIONS: Destination[] = [
  {
    id: "rishikesh",
    slug: "rishikesh",
    name: "Rishikesh",
    categories: ["near-rishikesh", "spiritual", "adventure"],
    distanceFromRishikesh: "Base city",
    bestTimeToVisit: "Sept–Nov and Feb–May",
    summary:
      "The Yoga Capital of the World — ghats, ashrams, suspension bridges and the Ganga flowing through the town.",
    overview:
      "Rishikesh sits where the Ganga leaves the Himalayas and enters the plains, and it shows in the town's mix of spiritual calm and adventure energy. Ram Jhula and Lakshman Jhula bridges, riverside ghats, yoga ashrams and the evening Ganga Aarti sit alongside rafting, bungee jumping and cliff-jumping operators along the same stretch of river.",
    highlights: [
      "Ram Jhula & Lakshman Jhula",
      "Evening Ganga Aarti at Triveni/Parmarth ghats",
      "White-water rafting on the Ganga",
      "Beatles Ashram (Chaurasi Kutia)",
    ],
    howToReach: "Base city — all our journeys start and end here.",
    imageLabel: "Ram Jhula suspension bridge over the Ganga at Rishikesh",
    featured: true,
  },
  {
    id: "haridwar",
    slug: "haridwar",
    name: "Haridwar",
    categories: ["near-rishikesh", "spiritual"],
    distanceFromRishikesh: "~25 km",
    bestTimeToVisit: "Year-round, especially Kartik Purnima and Kumbh years",
    summary:
      "One of the seven holiest cities in Hinduism, famous for Har Ki Pauri and the evening Ganga Aarti.",
    overview:
      "Haridwar is where the Ganga first touches the plains, and Har Ki Pauri ghat is its spiritual heart — thousands gather each evening for the Ganga Aarti. The town is also a major railway junction, making it a common arrival/departure point for pilgrims heading further into the hills.",
    highlights: [
      "Har Ki Pauri Ganga Aarti",
      "Mansa Devi & Chandi Devi temples (ropeway access)",
      "Haridwar railway junction",
    ],
    howToReach: "A short 45-minute to 1-hour drive from Rishikesh.",
    imageLabel: "Har Ki Pauri ghat lit up during evening Ganga Aarti",
    featured: true,
  },
  {
    id: "dehradun",
    slug: "dehradun",
    name: "Dehradun",
    categories: ["near-rishikesh"],
    distanceFromRishikesh: "~43 km",
    bestTimeToVisit: "Year-round",
    summary:
      "Uttarakhand's capital city, home to Jolly Grant Airport and a common gateway for onward hill travel.",
    overview:
      "Dehradun is the administrative capital of Uttarakhand and the region's main transport hub, with Jolly Grant Airport and a well-connected railway station. Most travellers pass through on their way to Rishikesh, Mussoorie or further into the mountains.",
    highlights: [
      "Jolly Grant Airport (DED)",
      "Robber's Cave (Guchhupani)",
      "Sahastradhara sulphur springs",
    ],
    howToReach: "About 1 to 1.5 hours by road from Rishikesh.",
    imageLabel: "City road in Dehradun with hills in the background",
    featured: true,
  },
  {
    id: "mussoorie",
    slug: "mussoorie",
    name: "Mussoorie",
    categories: ["hill-station", "outstation"],
    distanceFromRishikesh: "~77 km",
    altitude: "~2,005 m",
    bestTimeToVisit: "March–June and Sept–Nov",
    summary:
      "The 'Queen of the Hills' — colonial-era charm, pine forests and views over the Doon valley.",
    overview:
      "Mussoorie remains one of North India's most popular hill stations, with Mall Road's cafes and shops, viewpoints over the Doon valley and the Himalayan range beyond, and a cooler climate that makes it a favourite year-round escape from the plains.",
    highlights: ["Mall Road", "Kempty Falls", "Gun Hill viewpoint", "Camel's Back Road"],
    howToReach: "2.5–3 hours by road via Dehradun.",
    imageLabel: "Mall Road, Mussoorie, with pine-covered hills",
    featured: true,
  },
  {
    id: "dhanaulti",
    slug: "dhanaulti",
    name: "Dhanaulti",
    categories: ["hill-station"],
    distanceFromRishikesh: "~85 km",
    altitude: "~2,286 m",
    bestTimeToVisit: "March–June and Sept–Dec",
    summary:
      "A quieter, less crowded alternative to Mussoorie, wrapped in deodar and oak forest.",
    overview:
      "Dhanaulti offers what many visitors look for after Mussoorie's crowds — quiet forest walks, eco-parks and clear Himalayan views without the traffic. It's often combined with Mussoorie as an extended hill trip.",
    highlights: ["Eco Park", "Surkanda Devi Temple trek", "Dense deodar forests"],
    howToReach: "Around 3 hours by road, often combined with a Mussoorie visit.",
    imageLabel: "Forested hillside road near Dhanaulti",
  },
  {
    id: "devprayag",
    slug: "devprayag",
    name: "Devprayag",
    categories: ["near-rishikesh", "spiritual"],
    distanceFromRishikesh: "~70 km",
    bestTimeToVisit: "Year-round",
    summary:
      "The sacred confluence where the Alaknanda and Bhagirathi rivers meet to form the Ganga.",
    overview:
      "Devprayag is the first of the Panch Prayag (five sacred confluences) and marks the point where the river is officially named the Ganga. It's a common and worthwhile stop on the way to Badrinath, Kedarnath or Gangotri.",
    highlights: ["Alaknanda–Bhagirathi confluence", "Raghunath Temple"],
    howToReach: "About 2 hours by road; a natural stop en route to the Char Dham.",
    imageLabel: "River confluence at Devprayag",
  },
  {
    id: "tehri",
    slug: "tehri",
    name: "Tehri (New Tehri & Tehri Lake)",
    categories: ["near-rishikesh", "adventure"],
    distanceFromRishikesh: "~80 km",
    bestTimeToVisit: "Oct–March for the lake; year-round for the town",
    summary:
      "Home to Tehri Lake, one of India's largest reservoirs, known for water sports and camping.",
    overview:
      "Tehri Lake, formed by the Tehri Dam on the Bhagirathi river, has become a hub for water sports and lakeside camping, offering a very different kind of Uttarakhand experience from the mountain and pilgrimage routes.",
    highlights: ["Tehri Lake water sports", "Lakeside camping", "Tehri Dam viewpoint"],
    howToReach: "Roughly 2.5–3 hours by road from Rishikesh.",
    imageLabel: "Tehri Lake surrounded by hills",
  },
  {
    id: "auli",
    slug: "auli",
    name: "Auli",
    categories: ["hill-station", "adventure", "outstation"],
    distanceFromRishikesh: "~270 km",
    altitude: "~2,800 m",
    bestTimeToVisit: "Dec–Feb for snow, March–June for meadows",
    summary:
      "Uttarakhand's premier skiing destination, with sweeping views of Nanda Devi and the surrounding peaks.",
    overview:
      "Auli is best known for winter skiing on its wide meadows, and for uninterrupted views of Nanda Devi and other major Himalayan peaks. It's reached via Joshimath, making it easy to combine with a Badrinath trip.",
    highlights: ["Skiing (winter season)", "Auli ropeway", "Nanda Devi viewpoints"],
    howToReach: "About 8–9 hours by road via Joshimath.",
    imageLabel: "Snow-covered meadows at Auli with mountain views",
    featured: true,
  },
  {
    id: "chopta",
    slug: "chopta",
    name: "Chopta",
    categories: ["hill-station", "adventure"],
    distanceFromRishikesh: "~200 km",
    altitude: "~2,680 m",
    bestTimeToVisit: "March–June and Sept–Nov",
    summary:
      "The 'Mini Switzerland of Uttarakhand', a base for the Tungnath and Chandrashila treks.",
    overview:
      "Chopta is a small meadow settlement that has become a favourite base for trekkers heading to Tungnath (the world's highest Shiva temple) and onward to Chandrashila peak, with rhododendron forests and wide Himalayan views along the way.",
    highlights: ["Tungnath temple trek", "Chandrashila summit trek", "Deoria Tal nearby"],
    howToReach: "About 6–7 hours by road via Rudraprayag and Ukhimath.",
    imageLabel: "Meadow and forest trail near Chopta",
    featured: true,
  },
  {
    id: "lansdowne",
    slug: "lansdowne",
    name: "Lansdowne",
    categories: ["hill-station", "outstation"],
    distanceFromRishikesh: "~140 km",
    altitude: "~1,700 m",
    bestTimeToVisit: "March–June and Sept–Nov",
    summary:
      "A calm, uncrowded cantonment hill town known for pine forests and colonial architecture.",
    overview:
      "Lansdowne is maintained largely as a Garhwal Rifles cantonment town, which keeps development limited and the surroundings quiet. It's a good choice for travellers who want a peaceful hill escape away from the busier tourist circuits.",
    highlights: ["Tip n Top viewpoint", "Bhulla Lake", "War Memorial"],
    howToReach: "About 4–4.5 hours by road from Rishikesh.",
    imageLabel: "Pine forest trail in Lansdowne",
  },
  {
    id: "kedarnath",
    slug: "kedarnath",
    name: "Kedarnath",
    categories: ["char-dham", "spiritual"],
    distanceFromRishikesh: "~215 km + trek",
    altitude: "~3,583 m",
    bestTimeToVisit: "May–June and Sept–Oct (temple open ~Apr/May–Nov)",
    summary: "Jyotirlinga shrine dedicated to Lord Shiva, part of the Char Dham Yatra.",
    overview:
      "See our dedicated Char Dham page for full route, trek and travel details for Kedarnath.",
    highlights: ["Kedarnath Jyotirlinga temple", "Vasuki Tal trek nearby"],
    howToReach: "Drive to Sonprayag/Gaurikund, then trek, pony or helicopter.",
    imageLabel: "Kedarnath temple with snow peaks behind",
  },
  {
    id: "badrinath",
    slug: "badrinath",
    name: "Badrinath",
    categories: ["char-dham", "spiritual"],
    distanceFromRishikesh: "~295 km",
    altitude: "~3,133 m",
    bestTimeToVisit: "May–June and Sept–Oct (temple open ~Apr/May–Nov)",
    summary: "Vishnu shrine on the Alaknanda river, directly accessible by road.",
    overview:
      "See our dedicated Char Dham page for full route and travel details for Badrinath.",
    highlights: ["Badrinath temple", "Mana village", "Tapt Kund hot springs"],
    howToReach: "Direct road access via Joshimath.",
    imageLabel: "Badrinath temple and surrounding peaks",
  },
  {
    id: "gangotri",
    slug: "gangotri",
    name: "Gangotri",
    categories: ["char-dham", "spiritual"],
    distanceFromRishikesh: "~250 km",
    altitude: "~3,100 m",
    bestTimeToVisit: "May–June and Sept–Oct (temple open ~Apr/May–Nov)",
    summary: "Source shrine of the river Ganga, along the scenic Bhagirathi valley.",
    overview:
      "See our dedicated Char Dham page for full route and travel details for Gangotri.",
    highlights: ["Gangotri temple", "Bhagirathi valley drive", "Gaumukh trek (separately arranged)"],
    howToReach: "Direct road access via Uttarkashi and Harsil.",
    imageLabel: "Gangotri temple beside the Bhagirathi river",
  },
  {
    id: "yamunotri",
    slug: "yamunotri",
    name: "Yamunotri",
    categories: ["char-dham", "spiritual"],
    distanceFromRishikesh: "~215 km + trek",
    altitude: "~3,293 m",
    bestTimeToVisit: "May–June and Sept–Oct (temple open ~Apr/May–Nov)",
    summary: "Source shrine of the river Yamuna, reached via a short trek from Janki Chatti.",
    overview:
      "See our dedicated Char Dham page for full route, trek and travel details for Yamunotri.",
    highlights: ["Yamunotri temple", "Janki Chatti hot springs"],
    howToReach: "Drive to Janki Chatti, then a short trek.",
    imageLabel: "Trail towards Yamunotri temple",
  },
  {
    id: "joshimath",
    slug: "joshimath",
    name: "Joshimath",
    categories: ["char-dham", "hill-station"],
    distanceFromRishikesh: "~250 km",
    altitude: "~1,875 m",
    bestTimeToVisit: "Year-round",
    summary: "Gateway town to Badrinath and Auli, and a common overnight halt on the Char Dham circuit.",
    overview:
      "Joshimath sits at the junction of routes to Badrinath and Auli, and is where most Char Dham travellers break their journey overnight before continuing to Badrinath the next morning.",
    highlights: ["Gateway to Auli ropeway", "Narsingh Temple", "Overnight halt for Badrinath Yatra"],
    howToReach: "About 8–9 hours by road from Rishikesh.",
    imageLabel: "Joshimath town nestled in the mountains",
  },
  {
    id: "uttarkashi",
    slug: "uttarkashi",
    name: "Uttarkashi",
    categories: ["char-dham", "spiritual"],
    distanceFromRishikesh: "~150 km",
    altitude: "~1,352 m",
    bestTimeToVisit: "Year-round",
    summary: "A key halt town on the way to Gangotri and Yamunotri, on the banks of the Bhagirathi.",
    overview:
      "Uttarakhand's namesake town, Uttarkashi is a common overnight stop for travellers heading to Gangotri or looping between Gangotri and Yamunotri, with its own temples and river ghats worth a short visit.",
    highlights: ["Vishwanath Temple", "Bhagirathi riverfront", "Halt point for Gangotri/Yamunotri loop"],
    howToReach: "About 5–6 hours by road from Rishikesh.",
    imageLabel: "Bhagirathi river at Uttarkashi",
  },
  {
    id: "guptkashi",
    slug: "guptkashi",
    name: "Guptkashi",
    categories: ["char-dham", "spiritual"],
    distanceFromRishikesh: "~185 km",
    altitude: "~1,319 m",
    bestTimeToVisit: "Year-round",
    summary: "A common overnight halt on the way to Kedarnath, known for the Vishwanath Temple.",
    overview:
      "Guptkashi is often used as a stop-over point on the drive to Kedarnath, particularly for travellers who want to split the journey to Sonprayag/Gaurikund across two days.",
    highlights: ["Vishwanath Temple", "Ardhanarishwar Temple", "Halt point for Kedarnath Yatra"],
    howToReach: "About 6–7 hours by road from Rishikesh.",
    imageLabel: "Guptkashi town in the Mandakini valley",
  },
  {
    id: "sonprayag",
    slug: "sonprayag",
    name: "Sonprayag",
    categories: ["char-dham"],
    distanceFromRishikesh: "~205 km",
    altitude: "~1,829 m",
    bestTimeToVisit: "May–June and Sept–Oct (Yatra season)",
    summary: "The last major road point before Gaurikund, where the Kedarnath trek begins.",
    overview:
      "Sonprayag is the confluence of the Mandakini and Basuki rivers, and functions as a key checkpoint on the Kedarnath Yatra — most vehicles park here, with a short shuttle to Gaurikund where the trek to Kedarnath begins.",
    highlights: ["Mandakini–Basuki confluence", "Trek/shuttle point for Gaurikund"],
    howToReach: "About 7 hours by road from Rishikesh; the last stretch before the Kedarnath trek.",
    imageLabel: "River confluence at Sonprayag",
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return DESTINATIONS.filter((d) => d.featured);
}

export function getDestinationsByCategory(category: string): Destination[] {
  return DESTINATIONS.filter((d) => d.categories.includes(category as never));
}
