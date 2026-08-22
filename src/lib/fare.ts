import { getPricingRule } from "@/data/pricing";
import { getRouteBySlug } from "@/data/routes";
import type { FareEstimateInput, FareEstimateResult } from "@/lib/types";

const ESTIMATE_DISCLAIMER =
  "Estimated fare. Final fare depends on route, date, vehicle availability and trip requirements.";

/**
 * Frontend-only fare estimator. Produces a rough min–max range so the UI
 * never implies a fixed, guaranteed price. Designed to be swapped for a
 * real pricing API in Phase 2 without changing the call signature.
 */
export function calculateFare(input: FareEstimateInput): FareEstimateResult | null {
  const rule = getPricingRule(input.vehicleCategory);
  if (!rule) return null;

  const distanceKm =
    input.distanceKm ?? (input.routeSlug ? getRouteBySlug(input.routeSlug)?.distanceKm : undefined);

  if (input.tripType === "local") {
    const min = rule.baseFareLocal;
    const max = Math.round(rule.baseFareLocal * 1.25);
    return { minFare: min, maxFare: max, breakdownNote: ESTIMATE_DISCLAIMER };
  }

  if (!distanceKm) return null;

  if (input.tripType === "one-way") {
    const base = distanceKm * rule.ratePerKm + rule.driverAllowancePerDay;
    return {
      minFare: Math.round(base * 0.92),
      maxFare: Math.round(base * 1.12),
      breakdownNote: ESTIMATE_DISCLAIMER,
    };
  }

  if (input.tripType === "round-trip") {
    const runKm = Math.max(distanceKm * 2, rule.minKmPerDay);
    const base = runKm * rule.ratePerKm + rule.driverAllowancePerDay + rule.nightHaltCharge;
    return {
      minFare: Math.round(base * 0.92),
      maxFare: Math.round(base * 1.15),
      breakdownNote: ESTIMATE_DISCLAIMER,
    };
  }

  // multi-day
  const days = Math.max(input.days ?? 2, 1);
  const runKm = Math.max(distanceKm, rule.minKmPerDay) * days;
  const base =
    runKm * rule.ratePerKm + days * rule.driverAllowancePerDay + Math.max(days - 1, 0) * rule.nightHaltCharge;
  return {
    minFare: Math.round(base * 0.9),
    maxFare: Math.round(base * 1.15),
    breakdownNote: ESTIMATE_DISCLAIMER,
  };
}

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
