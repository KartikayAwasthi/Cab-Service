import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { TRAVEL_GUIDE_ARTICLES } from "@/data/travelGuide";

export function TravelGuidePreview() {
  const articles = TRAVEL_GUIDE_ARTICLES.slice(0, 3);

  return (
    <section className="bg-cream-50 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Travel Guide"
            title="Plan Smarter with Local Notes"
            description="Editorial guides on Char Dham logistics, timing and Rishikesh sightseeing, written from local experience."
          />
          <Button href="/travel-guide" variant="ghost" className="hidden sm:inline-flex">
            Read the Guide
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {articles.map((article) => (
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
              <h3 className="mt-1.5 font-display text-lg font-semibold text-charcoal-900 group-hover:text-forest-800">
                {article.title}
              </h3>
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

        <div className="mt-10 sm:hidden">
          <Button href="/travel-guide" variant="ghost" className="w-full justify-center">
            Read the Guide
          </Button>
        </div>
      </Container>
    </section>
  );
}
