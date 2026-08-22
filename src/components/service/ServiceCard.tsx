import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ICON_MAP, DEFAULT_ICON } from "@/lib/icons";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = ICON_MAP[service.icon] ?? DEFAULT_ICON;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-charcoal-900 shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-out group-hover:scale-110">
          <ImagePlaceholder label={service.imageLabel} tone="forest" aspect="aspect-[4/3]" rounded="rounded-none" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent" />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/90 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-forest-900" aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-end p-5">
        <h3 className="font-display text-lg font-semibold text-cream-50">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-cream-100/70">{service.shortDescription}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400">
          Explore Service
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
