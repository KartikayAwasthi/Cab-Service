import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { RouteCard } from "@/components/route/RouteCard";
import { FaqBlock } from "@/components/faq/FaqBlock";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { ICON_MAP, DEFAULT_ICON } from "@/lib/icons";
import { getServiceBySlug, SERVICES } from "@/data/services";
import { getRouteBySlug } from "@/data/routes";
import { buildPageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildPageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = ICON_MAP[service.icon] ?? DEFAULT_ICON;
  const relatedRoutes = (service.relatedRouteSlugs ?? [])
    .map((slug) => getRouteBySlug(slug))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.shortDescription}
        imageLabel={service.imageLabel}
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-cream-50 py-16 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-900/10">
              <Icon className="h-6 w-6 text-forest-800" aria-hidden="true" />
            </div>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-700/85 sm:text-lg">
              {service.longDescription}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-charcoal-900/10 bg-cream-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                What&rsquo;s Included
              </p>
              <ul className="mt-4 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-charcoal-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-700" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {relatedRoutes.length > 0 && (
        <section className="bg-forest-950 py-16 sm:py-24">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-cream-50 sm:text-3xl">
              Related Routes
            </h2>
          </Container>
          <div className="mt-8 overflow-x-auto pb-2 no-scrollbar">
            <div className="flex gap-5 px-5 sm:px-8 lg:px-12">
              {relatedRoutes.map((route) => (
                <RouteCard key={route.id} route={route} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqBlock faqs={service.faqs} title={`${service.title} — FAQs`} />

      <InlineCTA whatsappDetails={{ service: service.title }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)) }}
      />
    </>
  );
}
