import Link from "next/link";
import { ArrowRight, Clock, MoveRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Route } from "@/lib/types";

export function RouteCard({ route }: { route: Route }) {
  return (
    <Link
      href={`/routes/${route.slug}`}
      className="group relative flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-cream-50 shadow-lg shadow-charcoal-950/10 sm:w-[320px]"
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-110">
          <ImagePlaceholder label={route.imageLabel} tone="himalaya" aspect="aspect-[4/3]" rounded="rounded-none" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 font-display text-lg font-semibold text-charcoal-900">
          {route.from}
          <MoveRight className="h-4 w-4 text-gold-500" aria-hidden="true" />
          {route.to}
        </div>
        <div className="mt-2 flex items-center gap-3 text-xs font-medium text-charcoal-700/60">
          <span>{route.distanceKm} km</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {route.durationHrs}
          </span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-charcoal-700/75">
          {route.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-800">
          Explore Journey
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
