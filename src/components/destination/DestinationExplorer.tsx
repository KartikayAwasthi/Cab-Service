"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { DESTINATIONS } from "@/data/destinations";
import type { DestinationCategory } from "@/lib/types";
import { DestinationCard } from "@/components/destination/DestinationCard";

const CATEGORIES: { id: DestinationCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "near-rishikesh", label: "Near Rishikesh" },
  { id: "spiritual", label: "Spiritual" },
  { id: "hill-station", label: "Hill Stations" },
  { id: "adventure", label: "Adventure" },
  { id: "char-dham", label: "Char Dham" },
  { id: "outstation", label: "Popular Outstation" },
];

export function DestinationExplorer() {
  const [active, setActive] = useState<DestinationCategory | "all">("all");

  const destinations = useMemo(() => {
    if (active === "all") return DESTINATIONS;
    return DESTINATIONS.filter((d) => d.categories.includes(active));
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Destination categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === cat.id
                ? "border-forest-900 bg-forest-900 text-cream-50"
                : "border-charcoal-900/15 text-charcoal-700 hover:border-forest-700"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}
