"use client";

import { useMemo, useState } from "react";
import { calculateFare, formatInr } from "@/lib/fare";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { TRIP_TYPES } from "@/data/pricing";
import { VEHICLE_CATEGORIES } from "@/data/vehicles";
import type { Route, TripType, VehicleCategoryId } from "@/lib/types";
import { Button } from "@/components/ui/Button";

const fieldClasses =
  "w-full rounded-xl border border-charcoal-900/10 bg-cream-50 px-3.5 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:border-gold-500";
const labelClasses = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700/70";

export function RouteFareCalculator({ route }: { route: Route }) {
  const [vehicle, setVehicle] = useState<VehicleCategoryId>(route.recommendedVehicles[0] ?? "sedan");
  const [tripType, setTripType] = useState<TripType>(
    route.category === "char-dham" ? "round-trip" : "one-way"
  );
  const [days, setDays] = useState(route.category === "char-dham" ? 7 : 2);

  const fare = useMemo(
    () =>
      calculateFare({
        distanceKm: route.distanceKm,
        vehicleCategory: vehicle,
        tripType,
        days,
      }),
    [route.distanceKm, vehicle, tripType, days]
  );

  const tripLabel = TRIP_TYPES.find((t) => t.id === tripType)?.label ?? tripType;
  const vehicleLabel = VEHICLE_CATEGORIES.find((v) => v.id === vehicle)?.label ?? vehicle;

  const whatsappUrl = getWhatsAppUrl({
    route: `${route.from} to ${route.to}`,
    vehicle: vehicleLabel,
    tripType: tripLabel,
    estimatedFare: fare ? `${formatInr(fare.minFare)} – ${formatInr(fare.maxFare)}` : undefined,
  });

  return (
    <div className="rounded-2xl border border-charcoal-900/10 bg-cream-100 p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">Fare Estimate</p>
      <h3 className="mt-1.5 font-display text-xl font-semibold text-charcoal-900">
        {route.from} → {route.to}
      </h3>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div>
          <label className={labelClasses} htmlFor="rf-vehicle">
            Vehicle
          </label>
          <select
            id="rf-vehicle"
            className={fieldClasses}
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value as VehicleCategoryId)}
          >
            {VEHICLE_CATEGORIES.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="rf-trip">
            Trip Type
          </label>
          <select
            id="rf-trip"
            className={fieldClasses}
            value={tripType}
            onChange={(e) => setTripType(e.target.value as TripType)}
          >
            {TRIP_TYPES.filter((t) => t.id !== "local").map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        {tripType === "multi-day" && (
          <div className="col-span-2">
            <label className={labelClasses} htmlFor="rf-days">
              Number of Days
            </label>
            <input
              id="rf-days"
              type="number"
              min={1}
              max={20}
              className={fieldClasses}
              value={days}
              onChange={(e) => setDays(Number(e.target.value) || 1)}
            />
          </div>
        )}
      </div>

      <div className="mt-6 border-t border-charcoal-900/10 pt-5">
        <p className="font-display text-2xl font-semibold text-forest-900">
          {fare ? `${formatInr(fare.minFare)} – ${formatInr(fare.maxFare)}` : "Contact us for a quote"}
        </p>
        <p className="mt-1.5 text-xs leading-relaxed text-charcoal-700/60">
          Estimated fare. Final fare depends on route, date, vehicle availability and trip
          requirements.
        </p>
        <Button href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-4 w-full justify-center">
          Get Exact Quote on WhatsApp
        </Button>
      </div>
    </div>
  );
}
