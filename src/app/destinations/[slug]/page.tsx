import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { DESTINATIONS, getDestinationBySlug } from "@/data/destinations";
import { ROUTES } from "@/data/routes";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return buildPageMetadata({
    title: destination.name,
    description: destination.summary,
    path: `/destinations/${destination.slug}`,
  });
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const relatedRoute = ROUTES.find((r) => r.to === destination.name);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: destination.name, href: `/destinations/${destination.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Destination"
        title={destination.name}
        description={destination.summary}
        imageLabel={destination.imageLabel}
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-cream-50 py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-base leading-relaxed text-charcoal-700/85 sm:text-lg">
              {destination.overview}
            </p>

            <h2 className="mt-8 font-display text-lg font-semibold text-charcoal-900">Highlights</h2>
            <ul className="mt-3 space-y-2.5">
              {destination.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-charcoal-700/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 font-display text-lg font-semibold text-charcoal-900">
              How to Reach
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-700/85">
              {destination.howToReach}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-charcoal-900/10 bg-cream-100 p-6">
              <dl className="space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-charcoal-900/10 pb-4">
                  <dt className="text-charcoal-700/60">Distance from Rishikesh</dt>
                  <dd className="font-semibold text-charcoal-900">
                    {destination.distanceFromRishikesh}
                  </dd>
                </div>
                {destination.altitude && (
                  <div className="flex items-center justify-between border-b border-charcoal-900/10 pb-4">
                    <dt className="text-charcoal-700/60">Altitude</dt>
                    <dd className="font-semibold text-charcoal-900">{destination.altitude}</dd>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <dt className="text-charcoal-700/60">Best Time to Visit</dt>
                  <dd className="font-semibold text-charcoal-900">{destination.bestTimeToVisit}</dd>
                </div>
              </dl>

              {relatedRoute ? (
                <Button href={`/routes/${relatedRoute.slug}`} className="mt-6 w-full justify-center">
                  View Taxi Route & Fare
                </Button>
              ) : (
                <Button href="/contact" className="mt-6 w-full justify-center">
                  Get a Taxi Quote
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      <InlineCTA whatsappDetails={{ route: `Rishikesh to ${destination.name}` }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
    </>
  );
}
