// Centralized domain types. Phase 2 (backend) can implement these same
// shapes behind an API without touching component code.

export type VehicleCategoryId = "sedan" | "mpv" | "suv" | "tempo-traveller";

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  category: VehicleCategoryId;
  categoryLabel: string;
  passengers: string;
  luggage: string;
  ac: boolean;
  idealFor: string;
  description: string;
  features: string[];
  imageLabel: string;
  image?: string;
}

export type TripType = "one-way" | "round-trip" | "multi-day" | "local";

export interface TripTypeOption {
  id: TripType;
  label: string;
  description: string;
}

export type RouteCategory =
  | "char-dham"
  | "outstation"
  | "local"
  | "airport"
  | "railway";

export interface RouteFaq {
  question: string;
  answer: string;
}

export interface Route {
  id: string;
  slug: string;
  from: string;
  to: string;
  category: RouteCategory;
  distanceKm: number;
  durationHrs: string;
  summary: string;
  overview: string;
  imageLabel: string;
  highlights: string[];
  includes: string[];
  travelTips: string[];
  recommendedVehicles: VehicleCategoryId[];
  faqs: RouteFaq[];
  relatedRouteSlugs: string[];
  featured?: boolean;
}

export type DestinationCategory =
  | "near-rishikesh"
  | "spiritual"
  | "hill-station"
  | "adventure"
  | "char-dham"
  | "outstation";

export interface Destination {
  id: string;
  slug: string;
  name: string;
  categories: DestinationCategory[];
  distanceFromRishikesh: string;
  altitude?: string;
  bestTimeToVisit: string;
  summary: string;
  overview: string;
  highlights: string[];
  howToReach: string;
  imageLabel: string;
  featured?: boolean;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageLabel: string;
  icon: string;
  features: string[];
  faqs: ServiceFaq[];
  relatedRouteSlugs?: string[];
}

export interface CharDhamStop {
  id: string;
  slug: string;
  name: string;
  altitude: string;
  approxDistanceFromRishikesh: string;
  approxDurationFromRishikesh: string;
  description: string;
  imageLabel: string;
  image?: string;
  significance: string;
}

export interface CharDhamPackage {
  id: string;
  slug: string;
  name: string;
  stops: string[];
  approxDurationDays: string;
  summary: string;
}

export interface CharDhamItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface CharDhamStartingPoint {
  point: string;
  approxDistance: string;
  approxDuration: string;
  recommended?: boolean;
  note?: string;
}

export interface CharDhamCredential {
  label: string;
  value: string;
}

export type FaqCategory =
  | "vehicles"
  | "char-dham"
  | "airport"
  | "railway"
  | "booking"
  | "pricing"
  | "drivers";

export interface Faq {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: string;
  route: string;
}

export interface VehiclePricingRule {
  category: VehicleCategoryId;
  ratePerKm: number;
  driverAllowancePerDay: number;
  nightHaltCharge: number;
  minKmPerDay: number;
  baseFareLocal: number;
  baseKmLocal: number;
}

export interface TravelGuideBlock {
  type: "heading" | "paragraph" | "list";
  text?: string;
  items?: string[];
}

export interface TravelGuideArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTimeMinutes: number;
  publishedAt: string;
  imageLabel: string;
  tableOfContents: string[];
  content: TravelGuideBlock[];
  relatedSlugs: string[];
}

export interface FareEstimateInput {
  routeSlug?: string;
  distanceKm?: number;
  vehicleCategory: VehicleCategoryId;
  tripType: TripType;
  days?: number;
}

export interface FareEstimateResult {
  minFare: number;
  maxFare: number;
  breakdownNote: string;
}
