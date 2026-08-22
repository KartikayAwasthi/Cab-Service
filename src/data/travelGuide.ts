import type { TravelGuideArticle } from "@/lib/types";

export const TRAVEL_GUIDE_ARTICLES: TravelGuideArticle[] = [
  {
    id: "char-dham-taxi-guide",
    slug: "char-dham-taxi-guide",
    title: "The Complete Char Dham Taxi Guide",
    excerpt:
      "Everything to plan a Char Dham Yatra by road from Rishikesh — route order, timing, registration and vehicle choice.",
    category: "Char Dham",
    readTimeMinutes: 7,
    publishedAt: "2026-03-01",
    imageLabel: "Mountain road winding towards a Char Dham shrine",
    tableOfContents: [
      "What is the Char Dham Yatra",
      "Choosing a route order",
      "Registration & documents",
      "Vehicle choice",
      "Do Dham vs Teen Dham vs Char Dham",
      "Best time to travel",
    ],
    content: [
      {
        type: "heading",
        text: "What is the Char Dham Yatra",
      },
      {
        type: "paragraph",
        text: "The Char Dham Yatra covers four Himalayan shrines in Uttarakhand — Yamunotri, Gangotri, Kedarnath and Badrinath. Most pilgrims start from Haridwar or Rishikesh, travelling by road between the four sites over 10–12 days for the full circuit.",
      },
      {
        type: "heading",
        text: "Choosing a route order",
      },
      {
        type: "paragraph",
        text: "The traditional order is Yamunotri, then Gangotri, then Kedarnath, then Badrinath — broadly moving from west to east across the Garhwal Himalayas, which minimises backtracking. Some travellers reverse this depending on where they start and how their itinerary connects.",
      },
      {
        type: "heading",
        text: "Registration & documents",
      },
      {
        type: "paragraph",
        text: "Char Dham registration and biometric verification are mandatory under current Uttarakhand government rules. Carry valid photo ID for every traveller, and complete registration ahead of your trip — we can guide you on the current process when you book.",
      },
      {
        type: "heading",
        text: "Vehicle choice",
      },
      {
        type: "list",
        items: [
          "Innova/Innova Crysta — most popular for comfort on long mountain drives",
          "Ertiga/Rumion — a lighter, more economical option for smaller families",
          "Tempo Traveller — best for larger groups travelling together",
        ],
      },
      {
        type: "heading",
        text: "Do Dham vs Teen Dham vs Char Dham",
      },
      {
        type: "paragraph",
        text: "Do Dham covers Kedarnath and Badrinath only, in roughly 6–7 days. Teen Dham adds Yamunotri for an 8–9 day trip. The full Char Dham circuit, including Gangotri, typically takes 10–12 days depending on halts and weather.",
      },
      {
        type: "heading",
        text: "Best time to travel",
      },
      {
        type: "paragraph",
        text: "The Yatra season generally runs from late April/May through November, with May–June and September–October considered the most comfortable months, avoiding both peak monsoon landslide risk and winter closures. Exact temple opening and closing dates change each year — always confirm current dates before booking.",
      },
    ],
    relatedSlugs: ["best-time-to-visit-kedarnath", "rishikesh-to-kedarnath-travel-guide"],
  },
  {
    id: "rishikesh-to-kedarnath-travel-guide",
    slug: "rishikesh-to-kedarnath-travel-guide",
    title: "Rishikesh to Kedarnath: A Complete Travel Guide",
    excerpt:
      "How to plan the road journey from Rishikesh to Kedarnath, including halts, trek options and what to pack.",
    category: "Char Dham",
    readTimeMinutes: 6,
    publishedAt: "2026-03-05",
    imageLabel: "Taxi on the road towards Sonprayag, Kedarnath valley",
    tableOfContents: [
      "The road journey",
      "Where the road ends",
      "Trek, pony or helicopter",
      "Suggested halts",
      "What to pack",
    ],
    content: [
      {
        type: "heading",
        text: "The road journey",
      },
      {
        type: "paragraph",
        text: "From Rishikesh, the route to Kedarnath runs via Devprayag, Rudraprayag and Guptkashi before reaching Sonprayag and Gaurikund — roughly 215 km and 7–8 hours of driving under normal conditions, longer during peak Yatra traffic.",
      },
      {
        type: "heading",
        text: "Where the road ends",
      },
      {
        type: "paragraph",
        text: "Gaurikund is the last point private vehicles can typically reach; from Sonprayag onward, movement is managed through shuttle and checkpoint systems during Yatra season. Your driver will know the current arrangement for the season.",
      },
      {
        type: "heading",
        text: "Trek, pony or helicopter",
      },
      {
        type: "paragraph",
        text: "The final stretch to the temple is roughly 16–18 km on foot from Gaurikund. Pony, palanquin and helicopter services are available as alternatives to trekking, booked separately through the relevant operators.",
      },
      {
        type: "heading",
        text: "Suggested halts",
      },
      {
        type: "paragraph",
        text: "Many travellers break the drive with an overnight halt at Guptkashi or Sonprayag rather than attempting the full drive and trek preparation in one day.",
      },
      {
        type: "heading",
        text: "What to pack",
      },
      {
        type: "list",
        items: [
          "Warm layers — temperatures drop sharply at altitude, even in summer",
          "Rain protection during monsoon-adjacent months",
          "Comfortable trekking shoes if walking to the temple",
          "Valid ID for Yatra registration checkpoints",
        ],
      },
    ],
    relatedSlugs: ["char-dham-taxi-guide", "best-time-to-visit-kedarnath"],
  },
  {
    id: "best-time-to-visit-kedarnath",
    slug: "best-time-to-visit-kedarnath",
    title: "Best Time to Visit Kedarnath",
    excerpt:
      "How to time a Kedarnath trip around the temple's opening season, weather and crowd levels.",
    category: "Char Dham",
    readTimeMinutes: 4,
    publishedAt: "2026-03-10",
    imageLabel: "Kedarnath temple in clear weather with mountain backdrop",
    tableOfContents: ["Temple season", "May–June", "July–August", "September–October"],
    content: [
      {
        type: "heading",
        text: "Temple season",
      },
      {
        type: "paragraph",
        text: "The Kedarnath temple typically opens around late April/early May and closes around Diwali in November, depending on weather each year — always confirm current-year dates before travelling.",
      },
      {
        type: "heading",
        text: "May–June",
      },
      {
        type: "paragraph",
        text: "The most popular window, with relatively stable weather and the temple newly open. Expect the heaviest crowds and book vehicles well ahead.",
      },
      {
        type: "heading",
        text: "July–August",
      },
      {
        type: "paragraph",
        text: "Monsoon season brings a real risk of landslides and road disruption on hill routes. Travel is possible but requires flexibility and close attention to weather advisories.",
      },
      {
        type: "heading",
        text: "September–October",
      },
      {
        type: "paragraph",
        text: "Post-monsoon months offer clearer skies and thinner crowds than the May–June peak, making this a favourite window for travellers who can be flexible with dates.",
      },
    ],
    relatedSlugs: ["char-dham-taxi-guide", "rishikesh-to-kedarnath-travel-guide"],
  },
  {
    id: "rishikesh-sightseeing-guide",
    slug: "rishikesh-sightseeing-guide",
    title: "Rishikesh Sightseeing Guide",
    excerpt:
      "A local's shortlist of what to see in and around Rishikesh, from ghats to viewpoints.",
    category: "Local",
    readTimeMinutes: 5,
    publishedAt: "2026-03-15",
    imageLabel: "Ganga ghat in Rishikesh at sunset",
    tableOfContents: [
      "Ram Jhula & Lakshman Jhula",
      "Ganga Aarti",
      "Beatles Ashram",
      "Adventure activities",
      "Day trips from Rishikesh",
    ],
    content: [
      {
        type: "heading",
        text: "Ram Jhula & Lakshman Jhula",
      },
      {
        type: "paragraph",
        text: "The two suspension bridges are the town's most recognisable landmarks, connecting ashram-lined streets on either bank of the Ganga — worth crossing on foot at least once during your stay.",
      },
      {
        type: "heading",
        text: "Ganga Aarti",
      },
      {
        type: "paragraph",
        text: "The evening Ganga Aarti at Triveni Ghat or Parmarth Niketan is one of the most atmospheric things to see in Rishikesh — arrive a little early to find a good spot along the ghat.",
      },
      {
        type: "heading",
        text: "Beatles Ashram",
      },
      {
        type: "paragraph",
        text: "The former Maharishi Mahesh Yogi ashram, where The Beatles famously stayed in 1968, is now open to visitors with preserved meditation huts and colourful graffiti art.",
      },
      {
        type: "heading",
        text: "Adventure activities",
      },
      {
        type: "list",
        items: [
          "White-water rafting on the Ganga (seasonal)",
          "Bungee jumping and cliff jumping near Mohanchatti",
          "Trekking towards nearby waterfalls",
        ],
      },
      {
        type: "heading",
        text: "Day trips from Rishikesh",
      },
      {
        type: "paragraph",
        text: "Haridwar, Devprayag and Tehri Lake are all comfortably reachable as half-day or full-day trips from Rishikesh — ask us about local taxi hire if you want to combine a few of these in one outing.",
      },
    ],
    relatedSlugs: ["char-dham-taxi-guide"],
  },
];

export function getTravelGuideArticleBySlug(slug: string): TravelGuideArticle | undefined {
  return TRAVEL_GUIDE_ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: TravelGuideArticle): TravelGuideArticle[] {
  return article.relatedSlugs
    .map((slug) => getTravelGuideArticleBySlug(slug))
    .filter((a): a is TravelGuideArticle => Boolean(a));
}
