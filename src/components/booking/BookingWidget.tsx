"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { calculateFare, formatInr } from "@/lib/fare";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ROUTES } from "@/data/routes";
import { TRIP_TYPES } from "@/data/pricing";
import { VEHICLE_CATEGORIES } from "@/data/vehicles";
import type { TripType, VehicleCategoryId } from "@/lib/types";
import { Button } from "@/components/ui/Button";

const DESTINATIONS = Array.from(new Set(ROUTES.map((r) => r.to)));

const fieldClasses =
  "w-full rounded-xl border border-charcoal-900/10 bg-cream-50 px-3.5 py-3 text-sm text-charcoal-900 outline-none transition-colors focus:border-gold-500";
const labelClasses = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-charcoal-700/70";

export function BookingWidget({ className }: { className?: string }) {
  const [destination, setDestination] = useState<string>(DESTINATIONS[0]);
  const [travelDate, setTravelDate] = useState("");
  const [tripType, setTripType] = useState<TripType>("one-way");
  const [passengers, setPassengers] = useState("1-4");
  const [vehicle, setVehicle] = useState<VehicleCategoryId>("sedan");
  const [days, setDays] = useState(2);

  const route = useMemo(() => ROUTES.find((r) => r.to === destination), [destination]);

  const fare = useMemo(() => {
    return calculateFare({
      routeSlug: route?.slug,
      distanceKm: route?.distanceKm,
      vehicleCategory: vehicle,
      tripType,
      days,
    });
  }, [route, vehicle, tripType, days]);

  const tripLabel = TRIP_TYPES.find((t) => t.id === tripType)?.label ?? tripType;
  const vehicleLabel = VEHICLE_CATEGORIES.find((v) => v.id === vehicle)?.label ?? vehicle;

  const whatsappUrl = getWhatsAppUrl({
    route: `Rishikesh to ${destination}`,
    travelDate: travelDate || "Not specified",
    passengers,
    vehicle: vehicleLabel,
    tripType: tripLabel,
    estimatedFare: fare ? `${formatInr(fare.minFare)} – ${formatInr(fare.maxFare)}` : undefined,
  });

  return (
    <div
      className={cn(
        "rounded-3xl border border-charcoal-900/5 bg-cream-50 p-5 shadow-2xl shadow-charcoal-950/20 sm:p-7 lg:p-8",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-1">
          <label className={labelClasses} htmlFor="pickup">
            Pickup Location
          </label>
          <input id="pickup" className={fieldClasses} value="Rishikesh" readOnly />
        </div>

        <div className="lg:col-span-1">
          <label className={labelClasses} htmlFor="destination">
            Destination
          </label>
          <select
            id="destination"
            className={fieldClasses}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            {DESTINATIONS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-1">
          <label className={labelClasses} htmlFor="travel-date">
            Travel Date
          </label>
          <input
            id="travel-date"
            type="date"
            className={fieldClasses}
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />
        </div>

        <div className="lg:col-span-1">
          <label className={labelClasses} htmlFor="trip-type">
            Trip Type
          </label>
          <select
            id="trip-type"
            className={fieldClasses}
            value={tripType}
            onChange={(e) => setTripType(e.target.value as TripType)}
          >
            {TRIP_TYPES.map((t) => (
              <option key={t.id} value={t.id}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div className="lg:col-span-1">
          <label className={labelClasses} htmlFor="passengers">
            Passengers
          </label>
          <select
            id="passengers"
            className={fieldClasses}
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          >
            <option value="1-4">1–4</option>
            <option value="5-6">5–6</option>
            <option value="7-9">7–9</option>
            <option value="10+">10+ (Group)</option>
          </select>
        </div>

        <div className="lg:col-span-1">
          <label className={labelClasses} htmlFor="vehicle">
            Vehicle
          </label>
          <select
            id="vehicle"
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
      </div>

      {tripType === "multi-day" && (
        <div className="mt-4 max-w-[220px]">
          <label className={labelClasses} htmlFor="days">
            Number of Days
          </label>
          <input
            id="days"
            type="number"
            min={1}
            max={20}
            className={fieldClasses}
            value={days}
            onChange={(e) => setDays(Number(e.target.value) || 1)}
          />
        </div>
      )}

      <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-forest-950 px-5 py-5 sm:flex-row sm:items-center sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
            Estimated Fare
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-cream-50">
            {fare ? `${formatInr(fare.minFare)} – ${formatInr(fare.maxFare)}` : "Get a custom quote"}
          </p>
          <p className="mt-1.5 max-w-md text-xs leading-relaxed text-cream-100/60">
            Estimated fare. Final fare depends on route, date, vehicle availability and trip
            requirements.
          </p>
        </div>
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          className="w-full sm:w-auto"
        >
          Get Exact Quote on WhatsApp
        </Button>
      </div>
    </div>
  );
}
