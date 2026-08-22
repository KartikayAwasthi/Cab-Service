import type { Service } from "@/lib/types";

export const SERVICES: Service[] = [
  {
    id: "taxi-service-rishikesh",
    slug: "taxi-service-rishikesh",
    title: "Local Taxi Service in Rishikesh",
    shortDescription:
      "On-demand taxis for local travel across Rishikesh — ghats, ashrams, markets and nearby viewpoints.",
    longDescription:
      "Whether you need a quick ride across town or a car for a full day of local sightseeing, our Rishikesh taxi service covers the whole town and its surrounding areas. Cars are available for point-to-point drops as well as hourly/full-day hire, with drivers who know the local roads, ghats and ashram routes well.",
    imageLabel: "Taxi parked near Ganga ghat, Rishikesh",
    icon: "MapPin",
    features: [
      "Point-to-point local drops",
      "Half-day and full-day local hire",
      "Drivers familiar with Rishikesh routes",
      "AC vehicles in sedan, MPV and SUV options",
    ],
    faqs: [
      {
        question: "Can I book a taxi for just a few hours in Rishikesh?",
        answer:
          "Yes, local hire is available for a few hours or a full day, ideal for visiting ghats, temples and nearby markets at your own pace.",
      },
      {
        question: "Do you provide taxis for early morning or late night rides?",
        answer:
          "Yes, local taxis can be arranged for early morning and late night travel — share your timing when you message us so we can confirm availability.",
      },
    ],
  },
  {
    id: "airport-taxi-rishikesh",
    slug: "airport-taxi-rishikesh",
    title: "Airport Taxi — Rishikesh to Jolly Grant",
    shortDescription:
      "Reliable pickup and drop between Rishikesh and Dehradun's Jolly Grant Airport (DED).",
    longDescription:
      "Land in Dehradun and get a comfortable, on-time transfer straight to your hotel or ashram in Rishikesh, or start your journey to the airport without the stress of finding transport at the last minute. Drivers track flight timing and adjust pickup accordingly wherever possible.",
    imageLabel: "Car on the road near Jolly Grant Airport, Dehradun",
    icon: "Plane",
    features: [
      "Rishikesh ↔ Jolly Grant Airport (DED) transfers",
      "Flight-time aware pickups",
      "Meet & greet on arrival",
      "Sedan, MPV and SUV options",
    ],
    faqs: [
      {
        question: "How early should I book an airport transfer?",
        answer:
          "We recommend booking at least a day in advance, though we try our best to accommodate short-notice requests depending on vehicle availability.",
      },
      {
        question: "What happens if my flight is delayed?",
        answer:
          "Share your flight number when booking — drivers monitor timing and adjust pickup where possible. For major delays, message us on WhatsApp to reconfirm.",
      },
    ],
    relatedRouteSlugs: ["rishikesh-to-dehradun-taxi"],
  },
  {
    id: "railway-station-taxi-rishikesh",
    slug: "railway-station-taxi-rishikesh",
    title: "Railway Station Taxi",
    shortDescription:
      "Pickup and drop from Rishikesh, Haridwar and Dehradun railway stations.",
    longDescription:
      "Get a taxi waiting for you at Rishikesh, Haridwar or Dehradun railway station, or book a transfer to catch your train on time. This is one of our most requested services for pilgrims and travellers arriving by rail into the region.",
    imageLabel: "Taxi outside a railway station in Uttarakhand",
    icon: "TrainFront",
    features: [
      "Rishikesh, Haridwar & Dehradun station transfers",
      "Train-time aware scheduling",
      "Help with luggage and onward journey planning",
      "Group vehicles available for families",
    ],
    faqs: [
      {
        question: "Do you pick up from Haridwar railway station too?",
        answer:
          "Yes — pickups from Haridwar and Dehradun stations are available in addition to Rishikesh, since many pilgrims and travellers arrive through these stations.",
      },
    ],
    relatedRouteSlugs: ["rishikesh-to-haridwar-taxi"],
  },
  {
    id: "outstation-taxi-rishikesh",
    slug: "outstation-taxi-rishikesh",
    title: "Outstation Taxi from Rishikesh",
    shortDescription:
      "Comfortable long-distance taxis to hill stations and towns across Uttarakhand.",
    longDescription:
      "For trips beyond Rishikesh — to Mussoorie, Dhanaulti, Auli, Lansdowne, Nainital or other Uttarakhand destinations — our outstation taxis are set up for long mountain drives with experienced drivers and well-maintained vehicles.",
    imageLabel: "Car on a mountain highway in Uttarakhand",
    icon: "Route",
    features: [
      "One-way and round-trip outstation options",
      "Experienced hill-driving drivers",
      "Sedan, MPV, SUV and Tempo Traveller choices",
      "Flexible stops for sightseeing en route",
    ],
    faqs: [
      {
        question: "Can the driver stop for sightseeing on the way?",
        answer:
          "Yes, reasonable stops for photos, food and short sightseeing can usually be accommodated — just let the driver know your plan in advance.",
      },
    ],
  },
  {
    id: "char-dham-taxi-rishikesh",
    slug: "char-dham-taxi-rishikesh",
    title: "Char Dham Taxi Service",
    shortDescription:
      "Dedicated taxis and packages for Kedarnath, Badrinath, Gangotri and Yamunotri Yatra.",
    longDescription:
      "The Char Dham Yatra involves long mountain drives, changing weather and unpredictable road conditions. Our Char Dham taxi service is built around this reality — vehicles suited to hill roads, drivers experienced on Yatra routes, and flexible multi-day itineraries for Do Dham, Teen Dham or the full Char Dham circuit.",
    imageLabel: "Mountain road towards a Char Dham shrine",
    icon: "Mountain",
    features: [
      "Kedarnath, Badrinath, Gangotri & Yamunotri taxi",
      "Do Dham / Teen Dham / Char Dham packages",
      "Innova, MPV and Tempo Traveller options",
      "Drivers experienced on Yatra routes",
    ],
    faqs: [
      {
        question: "Which vehicle is best for Char Dham Yatra?",
        answer:
          "Innova/Innova Crysta is the most popular choice for its comfort on mountain roads. Larger groups often prefer a Tempo Traveller — subject to availability and route conditions.",
      },
    ],
    relatedRouteSlugs: [
      "rishikesh-to-kedarnath-taxi",
      "rishikesh-to-badrinath-taxi",
      "rishikesh-to-gangotri-taxi",
      "rishikesh-to-yamunotri-taxi",
    ],
  },
  {
    id: "tempo-traveller-rishikesh",
    slug: "tempo-traveller-rishikesh",
    title: "Tempo Traveller Rental",
    shortDescription:
      "Spacious group vehicles for families, pilgrimage groups and travel parties.",
    longDescription:
      "When you're travelling as a larger group — a family function, a pilgrimage group or a college trip — a Tempo Traveller keeps everyone together in one comfortable, air-conditioned vehicle instead of splitting across multiple cars.",
    imageLabel: "Tempo Traveller parked before a mountain journey",
    icon: "Users",
    features: [
      "12 / 17 / 26 seater options",
      "AC pushback seating",
      "Ideal for Char Dham groups and family trips",
      "Large luggage capacity",
    ],
    faqs: [
      {
        question: "How many people can travel in a Tempo Traveller?",
        answer:
          "Configurations are typically available in 12, 17 and 26 seater options depending on availability — share your group size and we'll suggest the right fit.",
      },
    ],
  },
  {
    id: "multi-day-cab-rishikesh",
    slug: "multi-day-cab-rishikesh",
    title: "Multi-Day Cab Booking",
    shortDescription:
      "Keep the same vehicle and driver with you across your entire multi-day itinerary.",
    longDescription:
      "For travellers who want the flexibility of having their own vehicle throughout a trip — moving between towns, visiting multiple destinations, or following a custom itinerary — our multi-day cab bookings keep the same car and driver with you for the full journey.",
    imageLabel: "Car parked beside a scenic Himalayan valley",
    icon: "CalendarRange",
    features: [
      "Same vehicle & driver for your full trip",
      "Custom multi-destination itineraries",
      "Suits Char Dham, hill-station and family tours",
      "Flexible daily running/km limits",
    ],
    faqs: [
      {
        question: "Is the driver available for the entire multi-day trip?",
        answer:
          "Yes, the same driver typically stays with your vehicle throughout the trip, subject to standard daily driving and rest requirements on hill routes.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
