import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { RouteCard } from "@/components/route/RouteCard";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { ROUTES } from "@/data/routes";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Taxi Routes from Rishikesh",
  description:
    "Distance, duration and vehicle guidance for popular taxi routes from Rishikesh — Char Dham, Haridwar, Dehradun, Mussoorie and more.",
  path: "/routes",
});

const GROUPS: { title: string; categories: string[] }[] = [
  { title: "Char Dham Routes", categories: ["char-dham"] },
  { title: "Airport & Railway Transfers", categories: ["airport", "railway"] },
  { title: "Outstation Routes", categories: ["outstation", "local"] },
];

export default function RoutesPage() {
  return (
    <>
      <PageHero
        eyebrow="Routes"
        title="Taxi Routes from Rishikesh"
        description="Distance, drive time and vehicle guidance for our most-booked journeys."
        imageLabel="Map view of a Himalayan mountain road from Rishikesh"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Routes", href: "/routes" },
        ]}
      />

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container className="flex flex-col gap-16">
          {GROUPS.map((group) => {
            const routes = ROUTES.filter((r) => group.categories.includes(r.category));
            if (routes.length === 0) return null;
            return (
              <div key={group.title}>
                <h2 className="font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">
                  {group.title}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {routes.map((route) => (
                    <RouteCard key={route.id} route={route} />
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <InlineCTA />
    </>
  );
}
