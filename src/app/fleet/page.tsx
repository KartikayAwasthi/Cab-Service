import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { InlineCTA } from "@/components/sections/InlineCTA";
import { VEHICLE_CATEGORIES, VEHICLES } from "@/data/vehicles";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Our Fleet — Sedans, MPVs, Innova & Tempo Traveller",
  description:
    "Browse our taxi fleet in Rishikesh: Dzire, Amaze, Ertiga, Rumion, Innova Crysta and Tempo Traveller, with passenger and luggage capacity for each.",
  path: "/fleet",
});

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Fleet"
        title="A Vehicle for Every Uttarakhand Journey"
        description="From a couple's day trip to a full pilgrimage group, choose the vehicle that fits your travel plan."
        imageLabel="Row of well-maintained taxis parked before a journey"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Fleet", href: "/fleet" },
        ]}
      />

      <section className="bg-cream-100 py-16 sm:py-24">
        <Container className="flex flex-col gap-16">
          {VEHICLE_CATEGORIES.map((category) => {
            const vehicles = VEHICLES.filter((v) => v.category === category.id);
            if (vehicles.length === 0) return null;
            return (
              <div key={category.id}>
                <h2 className="font-display text-2xl font-semibold text-charcoal-900 sm:text-3xl">
                  {category.label}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {vehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                  ))}
                </div>
              </div>
            );
          })}
          <p className="text-center text-xs text-charcoal-700/60">
            Vehicle subject to availability. Images are representative — exact model/colour may
            vary.
          </p>
        </Container>
      </section>

      <InlineCTA />
    </>
  );
}
