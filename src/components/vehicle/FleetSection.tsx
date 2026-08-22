import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { VehicleCard } from "@/components/vehicle/VehicleCard";
import { VEHICLES } from "@/data/vehicles";

export function FleetSection() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Fleet"
            title="A Vehicle for Every Journey"
            description="From a couple's day trip to a full pilgrimage group — pick the vehicle that fits your travel plan."
          />
          <Button href="/fleet" variant="ghost" className="hidden sm:inline-flex">
            View Full Fleet
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map((vehicle, i) => (
            <Reveal key={vehicle.id} delay={Math.min(i * 0.06, 0.3)}>
              <VehicleCard vehicle={vehicle} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-charcoal-700/60">
          Vehicle subject to availability. Images are representative — exact model/colour may vary.
        </p>
      </Container>
    </section>
  );
}
