import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { TRAVEL_GUIDE_ARTICLES } from "@/data/travelGuide";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Travel Guide",
  description:
    "Editorial guides on Char Dham logistics, timing and Rishikesh sightseeing, written from local travel experience.",
  path: "/travel-guide",
});

export default function TravelGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Travel Guide"
        title="Notes from the Road"
        description="Practical, editorial guides to help you plan Char Dham and Uttarakhand travel with confidence."
        imageLabel="Open notebook and camera beside a Himalayan road map"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Travel Guide", href: "/travel-guide" },
        ]}
      />

      <section className="bg-cream-50 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {TRAVEL_GUIDE_ARTICLES.map((article) => (
              <Link key={article.id} href={`/travel-guide/${article.slug}`} className="group">
                <ImagePlaceholder
                  label={article.imageLabel}
                  tone="sandstone"
                  aspect="aspect-[4/3]"
                  className="transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {article.category}
                </p>
                <h2 className="mt-1.5 font-display text-lg font-semibold text-charcoal-900 group-hover:text-forest-800">
                  {article.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal-700/75">
                  {article.excerpt}
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs font-medium text-charcoal-700/60">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.readTimeMinutes} min read
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <InlineCTA />
    </>
  );
}
