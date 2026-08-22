import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { RouteCard } from "@/components/route/RouteCard";
import { RouteFareCalculator } from "@/components/booking/RouteFareCalculator";
import { FaqBlock } from "@/components/faq/FaqBlock";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { ROUTES, getRouteBySlug, getRelatedRoutes } from "@/data/routes";
import { getVehiclesByCategory } from "@/data/vehicles";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return {};
  return buildPageMetadata({
    title: `${route.from} to ${route.to} Taxi`,
    description: route.summary,
    path: `/routes/${route.slug}`,
  });
}

export default async function RouteDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  const recommendedVehicles = route.recommendedVehicles.flatMap((c) => getVehiclesByCategory(c));
  const relatedRoutes = getRelatedRoutes(route);

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Routes", href: "/routes" },
    { name: `${route.from} to ${route.to}`, href: `/routes/${route.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Route"
        title={`${route.from} to ${route.to} Taxi`}
        description={route.summary}
        imageLabel={route.imageLabel}
        breadcrumbs={breadcrumbs}
        tone={route.category === "char-dham" ? "himalaya" : "forest"}
      />

      <section className="bg-cream-50 py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-4 text-sm font-medium text-charcoal-700/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {route.distanceKm} km
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {route.durationHrs}
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-charcoal-700/85 sm:text-lg">
              {route.overview}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-lg font-semibold text-charcoal-900">Highlights</h2>
                <ul className="mt-3 space-y-2.5">
                  {route.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-charcoal-700/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-lg font-semibold text-charcoal-900">Included</h2>
                <ul className="mt-3 space-y-2.5">
                  {route.includes.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-charcoal-700/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-sandstone-300/30 p-6">
              <h2 className="font-display text-lg font-semibold text-charcoal-900">Travel Tips</h2>
              <ul className="mt-3 space-y-2.5">
                {route.travelTips.map((tip) => (
                  <li key={tip} className="text-sm leading-relaxed text-charcoal-700/85">
                    • {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <RouteFareCalculator route={route} />
            </div>
          </div>
        </Container>
      </section>

      {recommendedVehicles.length > 0 && (
        <section className="bg-cream-100 py-16 sm:py-24">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">
              Recommended Vehicles
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recommendedVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <FaqBlock faqs={route.faqs} title={`${route.from} to ${route.to} — FAQs`} className="bg-cream-50 py-16 sm:py-24" />

      {relatedRoutes.length > 0 && (
        <section className="bg-forest-950 py-16 sm:py-24">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">
              Related Routes
            </h2>
          </Container>
          <div className="mt-8 overflow-x-auto pb-2 no-scrollbar">
            <div className="flex gap-5 px-5 sm:px-8 lg:px-12">
              {relatedRoutes.map((r) => (
                <RouteCard key={r.id} route={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <InlineCTA whatsappDetails={{ route: `${route.from} to ${route.to}` }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
    </>
  );
}
