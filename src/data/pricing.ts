import type { TripTypeOption, VehiclePricingRule } from "@/lib/types";

// Illustrative rate card used only to produce a rough, frontend-only fare
// range for the quote widget. These are NOT final prices — every quote
// screen must show the estimate disclaimer. Final fares are always
// confirmed by a human over WhatsApp/phone. Replace with real rates any
// time the business updates its pricing.
export const PRICING_RULES: VehiclePricingRule[] = [
  {
    category: "sedan",
    ratePerKm: 13,
    driverAllowancePerDay: 300,
    nightHaltCharge: 300,
    minKmPerDay: 250,
    baseFareLocal: 1500,
    baseKmLocal: 40,
  },
  {
    category: "mpv",
    ratePerKm: 16,
    driverAllowancePerDay: 350,
    nightHaltCharge: 350,
    minKmPerDay: 250,
    baseFareLocal: 1900,
    baseKmLocal: 40,
  },
  {
    category: "suv",
    ratePerKm: 20,
    driverAllowancePerDay: 400,
    nightHaltCharge: 400,
    minKmPerDay: 250,
    baseFareLocal: 2400,
    baseKmLocal: 40,
  },
  {
    category: "tempo-traveller",
    ratePerKm: 26,
    driverAllowancePerDay: 500,
    nightHaltCharge: 500,
    minKmPerDay: 250,
    baseFareLocal: 3800,
    baseKmLocal: 40,
  },
];

export const TRIP_TYPES: TripTypeOption[] = [
  {
    id: "one-way",
    label: "One Way",
    description: "Single drop, vehicle does not wait or return with you.",
  },
  {
    id: "round-trip",
    label: "Round Trip",
    description: "Vehicle takes you there and brings you back.",
  },
  {
    id: "multi-day",
    label: "Multi Day",
    description: "Vehicle stays with you across your entire journey.",
  },
  {
    id: "local",
    label: "Local / Sightseeing",
    description: "Half-day or full-day city and nearby sightseeing.",
  },
];

export function getPricingRule(category: string) {
  return PRICING_RULES.find((r) => r.category === category);
}
