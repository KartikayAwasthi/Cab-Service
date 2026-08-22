import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getFeaturedDestinations } from "@/data/destinations";

const SPAN_CLASSES = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
];

const TONES = ["forest", "sandstone", "himalaya", "charcoal", "gold", "forest"] as const;

export function DestinationsSection() {
  const destinations = getFeaturedDestinations();

  return (
    <section className="bg-charcoal-950 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Beyond Rishikesh"
            title="Explore Uttarakhand"
            description="Hill stations, sacred confluences and mountain viewpoints, all reachable by taxi from Rishikesh."
            tone="light"
          />
          <Button href="/destinations" variant="outline" className="hidden sm:inline-flex">
            All Destinations
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
          {destinations.map((dest, i) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className={`group relative overflow-hidden rounded-2xl ${SPAN_CLASSES[i % SPAN_CLASSES.length]}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                <ImagePlaceholder
                  label={dest.imageLabel}
                  tone={TONES[i % TONES.length]}
                  aspect="aspect-auto"
                  rounded="rounded-none"
                  className="h-full w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <h3 className="font-display text-xl font-semibold text-cream-50">{dest.name}</h3>
                  <p className="mt-1 text-xs font-medium text-cream-100/70">
                    {dest.distanceFromRishikesh}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-cream-50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button href="/destinations" variant="outline" className="w-full justify-center">
            All Destinations
          </Button>
        </div>
      </Container>
    </section>
  );
}
