import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RouteCard } from "@/components/route/RouteCard";
import { ROUTES } from "@/data/routes";

export function PopularRoutes() {
  return (
    <section className="bg-forest-950 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Where We Go"
            title="Popular Routes from Rishikesh"
            description="Frequently booked journeys, from a quick Haridwar transfer to the long Char Dham drives."
            tone="light"
          />
          <Button href="/routes" variant="outline" className="hidden sm:inline-flex">
            All Routes
          </Button>
        </div>
      </Container>

      <div className="mt-12 overflow-x-auto pb-4 no-scrollbar">
        <div className="flex snap-x snap-mandatory gap-5 px-5 sm:px-8 lg:px-12">
          {ROUTES.map((route) => (
            <RouteCard key={route.id} route={route} />
          ))}
          <div className="w-1 shrink-0" aria-hidden="true" />
        </div>
      </div>

      <Container className="mt-8 sm:hidden">
        <Button href="/routes" variant="outline" className="w-full justify-center">
          All Routes
        </Button>
      </Container>
    </section>
  );
}
