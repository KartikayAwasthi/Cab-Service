import type { Vehicle, VehicleCategoryId } from "@/lib/types";

export const VEHICLE_CATEGORIES: { id: VehicleCategoryId; label: string }[] = [
  { id: "sedan", label: "Sedan" },
  { id: "mpv", label: "MPV" },
  { id: "suv", label: "Innova / Premium" },
  { id: "tempo-traveller", label: "Tempo Traveller" },
];

export const VEHICLES: Vehicle[] = [
  {
    id: "dzire",
    slug: "dzire",
    name: "Maruti Dzire",
    category: "sedan",
    categoryLabel: "Sedan",
    passengers: "4+1 Passengers",
    luggage: "2 Bags",
    ac: true,
    idealFor: "Best for couples and small families",
    description:
      "A comfortable, fuel-efficient sedan suited to local runs, airport transfers and short outstation trips.",
    features: ["AC", "Music System", "Comfortable Seating", "Ample Boot Space"],
    imageLabel: "Maruti Dzire — white sedan",
    image: "/images/fleet-compact-sedan.png",
  },
  {
    id: "amaze",
    slug: "honda-amaze",
    name: "Honda Amaze",
    category: "sedan",
    categoryLabel: "Sedan",
    passengers: "4+1 Passengers",
    luggage: "2 Bags",
    ac: true,
    idealFor: "Best for couples and small families",
    description:
      "A smooth, well-maintained sedan alternative for city rides, station transfers and day trips.",
    features: ["AC", "Music System", "Comfortable Seating", "Ample Boot Space"],
    imageLabel: "Honda Amaze — sedan",
    image: "/images/fleet-compact-sedan.png",
  },
  {
    id: "ertiga",
    slug: "maruti-ertiga",
    name: "Maruti Ertiga",
    category: "mpv",
    categoryLabel: "MPV",
    passengers: "6+1 Passengers",
    luggage: "3–4 Bags",
    ac: true,
    idealFor: "Best for families and small groups",
    description:
      "A spacious MPV with three rows, ideal for family trips, sightseeing and short Char Dham legs.",
    features: ["AC", "3-Row Seating", "Extra Legroom", "Larger Boot"],
    imageLabel: "Maruti Ertiga — MPV",
    image: "/images/fleet-family-mpv.png",
  },
  {
    id: "rumion",
    slug: "maruti-rumion",
    name: "Maruti Rumion",
    category: "mpv",
    categoryLabel: "MPV",
    passengers: "6+1 Passengers",
    luggage: "3–4 Bags",
    ac: true,
    idealFor: "Best for families and small groups",
    description:
      "A modern, comfortable MPV offering a smooth ride for multi-day outstation and pilgrimage journeys.",
    features: ["AC", "3-Row Seating", "Extra Legroom", "Larger Boot"],
    imageLabel: "Maruti Rumion — MPV",
    image: "/images/fleet-family-mpv.png",
  },
  {
    id: "innova",
    slug: "innova-crysta",
    name: "Toyota Innova / Innova Crysta",
    category: "suv",
    categoryLabel: "Premium SUV",
    passengers: "6+1 / 7+1 Passengers",
    luggage: "4–5 Bags",
    ac: true,
    idealFor: "Best for Char Dham Yatra and long mountain journeys",
    description:
      "Uttarakhand's most trusted mountain vehicle — high ground clearance, a stable ride and reliable comfort on long Himalayan routes.",
    features: ["AC", "Captain Seats Available", "Superior Ride Comfort", "Mountain-Ready"],
    imageLabel: "Toyota Innova Crysta — premium SUV",
    image: "/images/fleet-premium-innova.png",
  },
  {
    id: "tempo-traveller",
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    category: "tempo-traveller",
    categoryLabel: "Tempo Traveller",
    passengers: "12 / 17 / 26 Passengers",
    luggage: "Large Group Luggage",
    ac: true,
    idealFor: "Best for group travel, family functions and pilgrimage groups",
    description:
      "A spacious, air-conditioned people-mover for larger groups travelling together on Char Dham Yatra or outstation tours.",
    features: ["AC", "Pushback Seating", "Large Luggage Capacity", "Ideal for Groups"],
    imageLabel: "Tempo Traveller — group vehicle",
    image: "/images/fleet-tempo-traveller.png",
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return VEHICLES.find((v) => v.slug === slug);
}

export function getVehiclesByCategory(category: VehicleCategoryId): Vehicle[] {
  return VEHICLES.filter((v) => v.category === category);
}
