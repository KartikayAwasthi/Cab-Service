import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Destination } from "@/lib/types";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-cream-50 shadow-sm ring-1 ring-charcoal-900/5 transition-shadow hover:shadow-lg"
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-110">
          <ImagePlaceholder
            label={destination.imageLabel}
            tone="himalaya"
            aspect="aspect-[4/3]"
            rounded="rounded-none"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-charcoal-900">{destination.name}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-charcoal-700/60">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {destination.distanceFromRishikesh}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal-700/75">
          {destination.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800">
          Explore
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
