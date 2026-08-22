import { Briefcase, Snowflake, Users } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import type { Vehicle } from "@/lib/types";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-charcoal-900/10 bg-cream-50">
      <ImagePlaceholder
        label={vehicle.imageLabel}
        src={vehicle.image}
        tone="sandstone"
        aspect="aspect-[4/3]"
        rounded="rounded-none"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
          {vehicle.categoryLabel}
        </p>
        <h3 className="mt-1 font-display text-xl font-semibold text-charcoal-900">{vehicle.name}</h3>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-medium text-charcoal-700/75">
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            {vehicle.passengers}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
            {vehicle.luggage}
          </span>
          {vehicle.ac && (
            <span className="flex items-center gap-1.5">
              <Snowflake className="h-3.5 w-3.5" aria-hidden="true" />
              AC
            </span>
          )}
        </div>

        <p className="mt-3 text-sm font-medium text-forest-800">{vehicle.idealFor}</p>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-700/75">{vehicle.description}</p>

        <div className="mt-auto pt-5">
          <WhatsAppButton
            details={{ vehicle: vehicle.name }}
            variant="secondary"
            label="Get Quote"
            className="w-full justify-center"
          />
        </div>
      </div>
    </div>
  );
}
