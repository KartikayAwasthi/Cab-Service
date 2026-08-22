import type { Route } from "@/lib/types";

const commonIncludes = [
  "Pickup from your Rishikesh hotel/ashram",
  "Experienced driver familiar with the route",
  "Fuel, driver allowance and toll/parking as applicable",
  "AC vehicle (subject to weather/altitude conditions on hill routes)",
];

export const ROUTES: Route[] = [
  {
    id: "rishikesh-to-kedarnath",
    slug: "rishikesh-to-kedarnath-taxi",
    from: "Rishikesh",
    to: "Kedarnath",
    category: "char-dham",
    distanceKm: 215,
    durationHrs: "7–8 hrs drive to Sonprayag/Gaurikund, then trek",
    summary:
      "Taxi from Rishikesh to Sonprayag/Gaurikund for the Kedarnath Yatra, with onward trek, pony or helicopter options.",
    overview:
      "The road journey from Rishikesh to Kedarnath takes you via Devprayag, Rudraprayag and Guptkashi to Sonprayag or Gaurikund, the last motorable points. From there, pilgrims continue to the temple by trek, pony or helicopter (booked separately). This is one of the most popular Char Dham routes we operate, and drivers are experienced with the Yatra season's traffic and checkpoint procedures.",
    imageLabel: "Mountain road towards Kedarnath valley",
    highlights: [
      "Scenic drive along the Alaknanda and Mandakini valleys",
      "Stops at Devprayag (river confluence) and Guptkashi en route",
      "Drivers experienced with Yatra season road conditions",
      "Suitable for both group and family pilgrimage travel",
    ],
    includes: commonIncludes,
    travelTips: [
      "Char Dham registration/biometric is mandatory — carry ID proof",
      "Carry warm clothing even in summer months due to altitude",
      "Road conditions can change quickly during monsoon — build in buffer days",
      "Book well in advance during peak Yatra season (May–June, Sept–Oct)",
    ],
    recommendedVehicles: ["suv", "mpv", "tempo-traveller"],
    faqs: [
      {
        question: "Does the taxi go all the way to the Kedarnath temple?",
        answer:
          "No, vehicles go up to Sonprayag/Gaurikund. From there the temple is reached by trek, pony or helicopter, which are arranged separately.",
      },
      {
        question: "What is the best vehicle for this route?",
        answer:
          "Innova/Innova Crysta is most preferred for comfort on the hill drive. Larger groups often choose a Tempo Traveller, subject to availability.",
      },
    ],
    relatedRouteSlugs: [
      "rishikesh-to-badrinath-taxi",
      "rishikesh-to-yamunotri-taxi",
    ],
    featured: true,
  },
  {
    id: "rishikesh-to-badrinath",
    slug: "rishikesh-to-badrinath-taxi",
    from: "Rishikesh",
    to: "Badrinath",
    category: "char-dham",
    distanceKm: 295,
    durationHrs: "9–10 hrs",
    summary:
      "Direct road journey from Rishikesh to the Badrinath temple along the Alaknanda valley.",
    overview:
      "Unlike Kedarnath and Yamunotri, Badrinath is directly accessible by road, making it a long but straightforward single-day drive from Rishikesh via Devprayag, Rudraprayag, Karnaprayag, Chamoli and Joshimath. Many travellers choose to break the journey overnight at Joshimath or Pipalkoti.",
    imageLabel: "Road winding through the Alaknanda valley towards Badrinath",
    highlights: [
      "Drive through five of the Panch Prayag river confluences",
      "Passes Joshimath, gateway to Auli",
      "Direct temple access by road — no trek required",
      "Popular combined stop with Mana village, India's last village",
    ],
    includes: commonIncludes,
    travelTips: [
      "Consider an overnight halt at Joshimath to split the long drive",
      "Carry warm layers — Badrinath sits above 3,100 m",
      "Roads can be affected by landslides in monsoon — check conditions before travel",
    ],
    recommendedVehicles: ["suv", "mpv", "tempo-traveller"],
    faqs: [
      {
        question: "Can this be done as a single-day drive?",
        answer:
          "It is possible but long. Many travellers prefer breaking the journey with an overnight halt at Joshimath or Pipalkoti for comfort.",
      },
    ],
    relatedRouteSlugs: [
      "rishikesh-to-kedarnath-taxi",
      "rishikesh-to-gangotri-taxi",
    ],
    featured: true,
  },
  {
    id: "rishikesh-to-gangotri",
    slug: "rishikesh-to-gangotri-taxi",
    from: "Rishikesh",
    to: "Gangotri",
    category: "char-dham",
    distanceKm: 250,
    durationHrs: "8–9 hrs",
    summary:
      "Scenic drive from Rishikesh to Gangotri along the Bhagirathi river valley.",
    overview:
      "The route to Gangotri runs via Tehri, Uttarkashi and Harsil, following the Bhagirathi river for much of the way — widely considered one of the most beautiful drives in the region. The temple itself is directly accessible by road.",
    imageLabel: "Bhagirathi valley road towards Gangotri",
    highlights: [
      "Follows the Bhagirathi river through Uttarkashi and Harsil",
      "Direct road access to the temple",
      "Combine with Gaumukh trek (arranged separately) for the adventurous",
    ],
    includes: commonIncludes,
    travelTips: [
      "Uttarkashi makes a comfortable overnight halt if splitting the journey",
      "Inner Line Permit may apply for areas near Harsil — check current requirements",
      "Nights are cold even in summer — pack accordingly",
    ],
    recommendedVehicles: ["suv", "mpv"],
    faqs: [
      {
        question: "Is Gangotri reachable directly by road?",
        answer:
          "Yes, Gangotri temple is directly accessible by road, unlike Kedarnath and Yamunotri which require a trek from the last motorable point.",
      },
    ],
    relatedRouteSlugs: [
      "rishikesh-to-yamunotri-taxi",
      "rishikesh-to-badrinath-taxi",
    ],
  },
  {
    id: "rishikesh-to-yamunotri",
    slug: "rishikesh-to-yamunotri-taxi",
    from: "Rishikesh",
    to: "Yamunotri",
    category: "char-dham",
    distanceKm: 215,
    durationHrs: "7–8 hrs drive to Janki Chatti, then trek",
    summary:
      "Taxi from Rishikesh to Janki Chatti/Hanuman Chatti for the Yamunotri Yatra, followed by a short trek.",
    overview:
      "The drive to Yamunotri passes through Barkot before reaching Janki Chatti or Hanuman Chatti, the last motorable points. From there it's a shorter trek compared to Kedarnath, or a pony/palanquin option, up to the temple near the source of the river Yamuna.",
    imageLabel: "Road towards Janki Chatti near Yamunotri",
    highlights: [
      "Drive via Barkot, a popular overnight halt town",
      "Shorter trek compared to other Char Dham shrines",
      "Often combined with Gangotri as part of a Do Dham loop",
    ],
    includes: commonIncludes,
    travelTips: [
      "Trek to the temple from Janki Chatti is roughly 5–6 km",
      "Hot springs at Janki Chatti are worth a stop before the trek",
      "Carry cash — card facilities are limited near the trek base",
    ],
    recommendedVehicles: ["suv", "mpv", "tempo-traveller"],
    faqs: [
      {
        question: "How long is the trek from the road to the temple?",
        answer:
          "Roughly 5–6 km one way from Janki Chatti, shorter than the Kedarnath trek. Pony and palanquin options are available separately.",
      },
    ],
    relatedRouteSlugs: [
      "rishikesh-to-gangotri-taxi",
      "rishikesh-to-kedarnath-taxi",
    ],
  },
  {
    id: "rishikesh-to-haridwar",
    slug: "rishikesh-to-haridwar-taxi",
    from: "Rishikesh",
    to: "Haridwar",
    category: "railway",
    distanceKm: 25,
    durationHrs: "45 min – 1 hr",
    summary:
      "Quick transfer between Rishikesh and Haridwar, popular for railway station drops and Har Ki Pauri visits.",
    overview:
      "A short, frequently booked route connecting Rishikesh with Haridwar — used for railway station transfers, Har Ki Pauri Ganga Aarti visits, and as a stop for travellers arriving or departing by train from Haridwar Junction.",
    imageLabel: "Riverside road between Rishikesh and Haridwar",
    highlights: [
      "Ideal for Haridwar railway station pickup/drop",
      "Popular for evening Ganga Aarti visits at Har Ki Pauri",
      "Quick enough for a same-day return trip",
    ],
    includes: commonIncludes,
    travelTips: [
      "Evenings around Ganga Aarti time see heavier traffic near Har Ki Pauri",
      "Share your train number for station pickups so timing can be tracked",
    ],
    recommendedVehicles: ["sedan", "mpv"],
    faqs: [
      {
        question: "Can I book a one-way drop only to Haridwar station?",
        answer:
          "Yes, one-way drops to Haridwar railway station are one of our most common bookings on this route.",
      },
    ],
    relatedRouteSlugs: ["rishikesh-to-dehradun-taxi"],
    featured: true,
  },
  {
    id: "rishikesh-to-dehradun",
    slug: "rishikesh-to-dehradun-taxi",
    from: "Rishikesh",
    to: "Dehradun",
    category: "airport",
    distanceKm: 43,
    durationHrs: "1 – 1.5 hrs",
    summary:
      "Transfers between Rishikesh and Dehradun, including Jolly Grant Airport pickups and drops.",
    overview:
      "Connecting Rishikesh with Dehradun city and Jolly Grant Airport, this is one of our most requested transfer routes — used by travellers flying in or out, as well as those heading into Dehradun for shopping, business or onward travel.",
    imageLabel: "Highway approaching Dehradun from Rishikesh",
    highlights: [
      "Covers Jolly Grant Airport (DED) transfers",
      "Also serves Dehradun railway station and city drops",
      "Flight/train-time aware scheduling on request",
    ],
    includes: commonIncludes,
    travelTips: [
      "Share your flight/train number when booking for accurate pickup timing",
      "Airport traffic can build up during peak arrival hours — factor in buffer time",
    ],
    recommendedVehicles: ["sedan", "mpv", "suv"],
    faqs: [
      {
        question: "Do you cover Jolly Grant Airport pickups?",
        answer:
          "Yes, Jolly Grant Airport (DED) transfers to and from Rishikesh are one of our core services on this route.",
      },
    ],
    relatedRouteSlugs: ["rishikesh-to-haridwar-taxi", "rishikesh-to-mussoorie-taxi"],
    featured: true,
  },
  {
    id: "rishikesh-to-mussoorie",
    slug: "rishikesh-to-mussoorie-taxi",
    from: "Rishikesh",
    to: "Mussoorie",
    category: "outstation",
    distanceKm: 77,
    durationHrs: "2.5 – 3 hrs",
    summary:
      "Scenic hill drive from Rishikesh to the popular hill station of Mussoorie via Dehradun.",
    overview:
      "The drive to Mussoorie climbs steadily through pine forests after Dehradun, arriving at one of Uttarakhand's most popular hill stations. A favourite for weekend getaways, honeymoon trips and family holidays away from Rishikesh.",
    imageLabel: "Winding hill road up to Mussoorie",
    highlights: [
      "Popular weekend and honeymoon getaway route",
      "Passes through Dehradun before climbing to Mussoorie",
      "Can be combined with Dhanaulti for an extended hill trip",
    ],
    includes: commonIncludes,
    travelTips: [
      "Weekend traffic on the climb can add extra travel time — start early",
      "Evenings get cool year-round — pack a light jacket even in summer",
    ],
    recommendedVehicles: ["sedan", "mpv", "suv"],
    faqs: [
      {
        question: "Is a one-day round trip to Mussoorie possible?",
        answer:
          "Yes, a round trip in a single day is possible, though an overnight stay is recommended to enjoy Mussoorie without rushing.",
      },
    ],
    relatedRouteSlugs: ["rishikesh-to-dehradun-taxi"],
  },
];

export function getRouteBySlug(slug: string): Route | undefined {
  return ROUTES.find((r) => r.slug === slug);
}

export function getFeaturedRoutes(): Route[] {
  return ROUTES.filter((r) => r.featured);
}

export function getRelatedRoutes(route: Route): Route[] {
  return route.relatedRouteSlugs
    .map((slug) => getRouteBySlug(slug))
    .filter((r): r is Route => Boolean(r));
}
